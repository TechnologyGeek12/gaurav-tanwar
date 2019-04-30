import React, { Component } from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';
import { QRGenerator } from 'dynamic-qr-code-generator';
import home from './home.png'

class QrCode extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checkboxStates: {
                backgroundColor: '#fff',
                foregroundColor: '#000',
                width: '100',
                height: '100',
                isLogo: false,
                logoSize: '30',
                customLogoDesign: false,
                value: 'https://github.com/TechnologyGeek12/qr-code-generator'
            },
        }
    }

    componentDidMount() {
        this.generateQr();
    }

    updateStateData = (name) => {
        let checkboxStates = this.state.checkboxStates;
        checkboxStates[name] = !this.state.checkboxStates[name];
        this.setState({ checkboxStates: checkboxStates }, () => this.generateQr());
    }
    handleChange = (e, name) => {
        let checkboxStates = this.state.checkboxStates;
        checkboxStates[name] = e.target.value;
        this.setState({ checkboxStates: checkboxStates });
    }

    generateQr = () => {
        return QRGenerator(this.state.checkboxStates);
    }


    render() {
        // var props = { backgroundColor: '#fff', foregroundColor: '#000', width: 256, height: 256, isLogo: true, logoSize: 80, customLogoDesign: false, value: 'Your text or URL here' }
        let keysData = Object.keys(this.state.checkboxStates);
        let that = this;
        return (
            <div style={{ width: '100%' }}>
                <div style={{ color: '#e64a19', textAlign: 'center', fontSize: 36 }}>
                    <b> Dynamic QR-code Generator</b>
                </div>
                Click <a href='https://www.npmjs.com/package/dynamic-qr-code-generator'> here </a> for NPM
                    <div>
                        <div style={{ width: '35%', float: 'left' }}>
                            {keysData.map(function (data, index) {
                                if (typeof that.state.checkboxStates[data] !== 'string') {
                                    return <div key={index}>
                                        <FormControlLabel
                                            control={
                                                <Checkbox style={{ color: '#e64a19' }} checked={that.state.checkboxStates[data]} onChange={() => that.updateStateData(data)} value={data} />
                                            }
                                            label={data}
                                        />

                                    </div>
                                }
                            })}
                            {/* <button onClick={() => this.generateQr()}>generate</button> */}
                            {this.state.checkboxStates.isLogo && <img id='qr-logo-image' src={home} style={{ display: 'none' }} />}

                        </div>
                        <div style={{ width: '35%', float: 'left' }}>
                            {keysData.map(function (data, index) {
                                if (typeof that.state.checkboxStates[data] === 'string') {
                                    if (data !== 'key') {
                                        return <div key={index}>
                                            <TextField
                                                id="standard-name"
                                                label={data}
                                                value={that.state.checkboxStates[data]}
                                                onChange={(e) => that.handleChange(e, data)}
                                                onBlur={() => that.generateQr()}
                                                margin="normal"
                                            />
                                        </div>
                                    }
                                }
                            })}
                        </div>

                        <div style={{ width: '30%', float: 'left', paddingTop: 20, color: '#e64a19' }}>
                            Output(QR-code you get from button onClick method in {`<div id="qr-container"></div>`}:
                            <div style={{ paddingTop: 20 }}>
                                <div id="qr-container"></div>
                            </div>
                        </div>
                    </div>
            </div >
        )
    }
}







export default QrCode;
