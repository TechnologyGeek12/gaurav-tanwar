import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import numberfinder from 'number-finder';

class QrCode extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checkboxStates: {
                value: ''
            },
        }
    }

    handleChange = (e, name) => {
        let checkboxStates = this.state.checkboxStates;
        checkboxStates[name] = e.target.value;
        this.setState({ checkboxStates: checkboxStates });
    }


    render() {
        let keysData = Object.keys(this.state.checkboxStates);
        let that = this;
        let numberData = numberfinder(this.state.checkboxStates.value);
        return (
            <div style={{ width: '100%' }}>
                <div style={{ color: '#e64a19', textAlign: 'center', fontSize: 36 }}>
                    <b> Number Finder</b>
                </div>
                    <div>
                        <div style={{ width: '50%', float: 'left', marginRight: 50 }}>
                            {keysData.map(function (data, index) {
                                if (typeof that.state.checkboxStates[data] === 'string') {
                                    if (data !== 'key') {
                                        return <div key={index}>
                                            <TextField
                                                id="standard-name"
                                                label={data}
                                                fullWidth
                                                value={that.state.checkboxStates[data]}
                                                onChange={(e) => that.handleChange(e, data)}
                                                margin="normal"
                                            />
                                        </div>
                                    }
                                }
                            })}
                        </div>

                        <div style={{ width: '40%', float: 'left', paddingTop: 20, color: '#e64a19' }}>
                            Output(Values you get from method response:
                            <div style={{ paddingTop: 20 }}>
                                <pre>
                                    numberTypeArray: <span style={{ color: '#e64a19' }}>{numberData && '[' + numberData.numberTypeArray.toString() + ']'}</span>
                                    <br />
                                    numberTypeNumberArray: <span style={{ color: '#e64a19' }}>{numberData && '[' + numberData.numberTypeNumberArray.toString() + ']'}</span>
                                    <br />
                                    numberTypeNumberSet: <span style={{ color: '#e64a19' }}>{numberData && `"` + numberData.numberTypeNumberSet + `"`}</span>
                                    <br />
                                    stringTypeArray: <span style={{ color: '#e64a19' }}>{numberData && '[' + numberData.stringTypeArray.toString() + ']'}</span>
                                    <br />
                                    stringTypeNumberArray: <span style={{ color: '#e64a19' }}>{numberData && '[' + numberData.stringTypeNumberArray.toString() + ']'}</span>
                                    <br />
                                    stringTypeNumberSet: <span style={{ color: '#e64a19' }}>{numberData && `"` + numberData.stringTypeNumberSet + `"`}</span>
                                </pre>
                            </div>
                        </div>
                    </div>
            </div >
        )
    }
}







export default QrCode;
