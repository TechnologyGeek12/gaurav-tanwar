import React, { Component } from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';
import RegionSelect from './reactFlag/lib/index';

class FlagSelect extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checkboxStates: {
                isFlag: true,
                isPhoneCode: true,
                customCountryCode: [],
                // countryCode: '',
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
            data: '',
            key: 0
        }
    }

    updateStateData = (name) => {
        let checkboxStates = this.state.checkboxStates;
        checkboxStates[name] = !this.state.checkboxStates[name];
        this.setState({ checkboxStates: checkboxStates });
    }
    handleChangeField = (e, name) => {
        let checkboxStates = this.state.checkboxStates;
        let test = e.target.value.replace(/["']/g, "");
        if (name === 'customCountryCode') {
            test = e.target.value.replace(/["']/g, "");
            test = test.replace(/[\[\]']+/g, '');
            test = test.split(',');
        }
        checkboxStates[name] = test;
        this.setState({ checkboxStates: checkboxStates, key: this.state.key + 1 });
    }

    SetField = () => {
        if (this.state.checkboxStates.selectedCountryCode) {
            let checkboxStates = this.state.checkboxStates;
            checkboxStates['customCountryOnly'] = true;
            this.setState({ checkboxStates: checkboxStates });
        }
        else {
            let checkboxStates = this.state.checkboxStates;
            checkboxStates['customCountryOnly'] = false;
            this.setState({ checkboxStates: checkboxStates });
        }
    }

    handleChangeMethod = (data) => {
        this.setState({ data: data });
    }


    render() {
        let keysData = Object.keys(this.state.checkboxStates);
        let that = this;
        return (
            <div style={{ width: '100%' }}>
                <div style={{ color: '#e64a19', textAlign: 'center', fontSize: 36 }}>
                    <b> React Region Flag Select</b>
                </div>
                <div>
                    <div style={{ width: '40%', float: 'left' }}>
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
                            isSearch={that.state.checkboxStates.isSearch}
                            handleChange={this.handleChangeMethod}
                            key={this.state.key}
                        />
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
                    <div style={{ width: '15%', float: 'left' }}>
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
                        Output(Values you get from method response:
                            <div style={{ paddingTop: 20 }}>
                            <pre>
                                handleChange Method data:-
                                    <br />
                                Result:<br />
                                <span style={{ color: '#e64a19' }}>
                                    &#123;<br />
                                    countryData: <span style={{ color: '#e64a19' }}>
                                        data: &#123;<br />
                                        {this.state.data && this.state.data.countryData && `id: ${this.state.data.countryData.data.id},sortname:${this.state.data.countryData.data.sortname},name:${this.state.data.countryData.data.name},phoneCode:${this.state.data.countryData.data.phoneCode}`}
                                        <br />
                                        &#125;
                                </span>
                                    <br />
                                    stateData: <span style={{ color: '#e64a19' }}>
                                        data: &#123;<br />
                                        {this.state.data && this.state.data.stateData && this.state.data.stateData.data && this.state.data.stateData.data.id && `id: ${this.state.data.stateData.data.id},name:${this.state.data.stateData.data.name},country_id:${this.state.data.stateData.data.country_id}`}
                                        <br />
                                        &#125;
                                </span>
                                    <br />
                                    cityData: <span style={{ color: '#e64a19' }}>
                                        data: &#123;<br />
                                        {this.state.data && this.state.data.cityData && this.state.data.cityData.data && this.state.data.cityData.data.id && `id: ${this.state.data.cityData.data.id},name:${this.state.data.cityData.data.name},state_id:${this.state.data.cityData.data.state_id}`}
                                        <br />
                                        &#125;
                                </span>
                                    <br />
                                    &#125;
                                </span>
                            </pre>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}







export default FlagSelect;
