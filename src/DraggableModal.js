import React, { Component } from 'react';
import { QRGenerator } from 'dynamic-qr-code-generator';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';
// import ReactDynamicModal from 'react-draggable-resizable-modal';
import RegionSelect from 'react-region-flag-select';
import ReactDynamicModal from "./draggableModal/lib/index";

class DraggableModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checkboxStates: {
                minHeight: 100,
                top: 1010,
                initWidth: 500,
                initHeight: 400,
                isCloseButton: true,
                isOpen: true,
                data: 'What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                // actions: '',
                footerText: 'You can add some notes here',
                headerValue: 'Modal Header',
            },
            changeData: '',
            openData: '',
            data: '',
            isOpen: true,
            key: 0
        }
    }

    updateStateData = (name) => {
        name === 'isOpen' && (!this.state.checkboxStates[name] ? this.setState({ isOpen: true }) : this.setState({ isOpen: false }));
        let checkboxStates = this.state.checkboxStates;
        checkboxStates[name] = !this.state.checkboxStates[name];
        this.setState({ checkboxStates: checkboxStates });
    }
    handleChange = (e, name) => {
        let checkboxStates = this.state.checkboxStates;
        checkboxStates[name] = isNaN(e.target.value) ? e.target.value : (e.target.value !== '' ? parseInt(e.target.value) : '');
        this.setState({ checkboxStates: checkboxStates, key: this.state.key + 1 });
    }

    openModal = () => {
        this.setState({ isOpen: true });
    }
    closeModal = () => {
        this.setState({ isOpen: false });
        let checkboxStates = this.state.checkboxStates;
        checkboxStates.isOpen = false;
        this.setState({ checkboxStates: checkboxStates });
    }


    render() {
        let keysData = Object.keys(this.state.checkboxStates);
        let that = this;
        return (
            <div style={{ width: '100%' }}>
                <div style={{ color: '#e64a19', textAlign: 'center', fontSize: 36 }}>
                    <b> React Draggable Resizable Modal</b>
                </div>
                <div>
                    <div style={{ float: 'left' }}>
                        <ReactDynamicModal initWidth={500} initHeight={400} onRequestClose={this.closeModal} isOpen={this.state.isOpen}

                            minHeight={that.state.checkboxStates.minHeight}
                            top={that.state.checkboxStates.top}
                            initWidth={that.state.checkboxStates.initWidth}
                            initHeight={that.state.checkboxStates.initHeight}
                            isCloseButton={that.state.checkboxStates.isCloseButton}
                            isOpen={that.state.isOpen}
                            data={that.state.checkboxStates.data}
                            actions={<div><button onClick={this.closeModal}>Close</button></div>}
                            footerText={that.state.checkboxStates.footerText}
                            headerValue={that.state.checkboxStates.headerValue}
                            key={this.state.key}
                        />
                    </div>
                    <div style={{ width: '50%', float: 'left' }}>
                        {keysData.map(function (data, index) {
                            if (typeof that.state.checkboxStates[data] !== 'string' && typeof that.state.checkboxStates[data] !== "number") {
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

                    </div>
                    <div style={{ width: '50%', float: 'left' }}>
                        {keysData.map(function (data, index) {
                            if (typeof that.state.checkboxStates[data] === 'string' || Array.isArray(that.state.checkboxStates[data]) || typeof that.state.checkboxStates[data] === "number") {
                                if (data !== 'key') {
                                    return <div key={index}>
                                        <TextField
                                            id="standard-name"
                                            label={data}
                                            value={that.state.checkboxStates[data]}
                                            onChange={(e) => that.handleChange(e, data)}
                                            // onBlur={(e) => that.SetField(e, data)}
                                            margin="normal"
                                        />
                                    </div>
                                }
                            }
                        })}
                    </div>
                </div>
            </div >
        )
    }
}







export default DraggableModal;
