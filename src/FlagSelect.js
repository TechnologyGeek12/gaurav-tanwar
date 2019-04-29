import React, { Component } from 'react';
import { QRGenerator } from 'dynamic-qr-code-generator';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';
import DraggableMenu from 'react-draggable-menu';
import RegionSelect from 'react-region-flag-select';

class FlagSelect extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checkboxStates: {
                isFlag: true,
                isPhoneCode: true,
                customCountryCode: [],
                countryCode: '',
                stateOnly: false,
                countryOnly: false,
                cityOnly: false,
                customCountryOnly: false,
                isCity: true,
                isState: true,
                isCountry: true,
                selectedCountryCode: '',
                isSearchCity: true,
                isSearchCountry: true,
                isSearchState: true,
                isSearch: true
            },
            changeData: '',
            openData: '',
        }
    }

    updateStateData = (name) => {
        let checkboxStates = this.state.checkboxStates;
        checkboxStates[name] = !this.state.checkboxStates[name];
        this.setState({ checkboxStates: checkboxStates });
    }
    handleChangeField = (e, name) => {
        let checkboxStates = this.state.checkboxStates;
        let test=e.target.value.replace(/["']/g, "");
        if(name==='customCountryCode')
        {
            test=e.target.value.replace(/["']/g, "");
            test=test.replace(/[\[\]']+/g,'');
            test=test.split(',');
        }
        checkboxStates[name] = test;
        this.setState({ checkboxStates: checkboxStates });
    }

    handleChange = (data) => {
        console.log('change data', data);
        //do something here with data
        this.setState({ changeData: data });
    }
    isOpen = (value) => {
        console.log('open data', value);
        //do something here with value
        this.setState({ openData: value });
    }

    SetField=()=>{
        let checkboxStates = this.state.checkboxStates;
        checkboxStates['customCountryOnly'] = true;
        this.setState({ checkboxStates: checkboxStates });
    }


    render() {
        let keysData = Object.keys(this.state.checkboxStates);
        let that = this;
        console.log('inside render', this.state.checkboxStates);
        return (
            <div style={{ width: '100%' }}>
                <div style={{ color: '#e64a19', textAlign: 'center', fontSize: 36 }}>
                    <b> React Region Flag Select</b>
                </div>
                <div>
                    <div style={{ width: '35%', float: 'left' }}>
                        <RegionSelect
                            isFlag={that.state.checkboxStates.isFlag}
                            isPhoneCode={that.state.checkboxStates.isPhoneCode}
                            customCountryCode={that.state.checkboxStates.customCountryCode}
                            countryCode={that.state.checkboxStates.countryCode}
                            stateOnly={that.state.checkboxStates.stateOnly}
                            countryOnly={that.state.checkboxStates.countryOnly}
                            cityOnly={that.state.checkboxStates.cityOnly}
                            customCountryOnly={that.state.checkboxStates.customCountryOnly}
                            isCity={that.state.checkboxStates.isCity}
                            isState={that.state.checkboxStates.isState}
                            isCountry={that.state.checkboxStates.isCountry}
                            selectedCountryCode={that.state.checkboxStates.selectedCountryCode}
                            isSearchCity={that.state.checkboxStates.isSearchCity}
                            isSearchCountry={that.state.checkboxStates.isSearchCountry}
                            isSearchState={that.state.checkboxStates.isSearchState}
                            isSearch={that.state.checkboxStates.isSearch} />
                    </div>
                    <div style={{ width: '15%', float: 'left' }}>
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
                    <div style={{ width: '20%', float: 'left' }}>
                        {keysData.map(function (data, index) {
                            if (typeof that.state.checkboxStates[data] === 'string' || Array.isArray(that.state.checkboxStates[data]) || typeof that.state.checkboxStates[data] === "number") {
                                if (data !== 'key') {
                                    return <div key={index}>
                                        <TextField
                                            id="standard-name"
                                            label={data}
                                            value={that.state.checkboxStates[data]}
                                            onChange={(e) => that.handleChangeField(e, data)}
                                            onBlur={(e) => that.SetField(e, data)}
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
                            <pre>
                                handleChange Method data:-
                                    <br />
                                id: <span style={{ color: '#e64a19' }}>{this.state.changeData && this.state.changeData.id}</span>
                                <br />
                                name: <span style={{ color: '#e64a19' }}>{this.state.changeData && this.state.changeData.name}</span>
                                <br />
                                isOpen Method data:-
                                <span style={{ color: '#e64a19' }}>{this.state.openData && this.state.openData}</span>
                                <br />
                            </pre>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}







export default FlagSelect;
