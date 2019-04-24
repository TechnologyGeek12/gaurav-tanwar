import GeoLocation from 'react-geolocation-autosuggest'
import React, { Component } from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
    typography: {
        useNextVariants: true,
    },
    overrides: {
        MuiInput: {
            underline: {
                "&&&&:hover:before": {
                    borderBottom: "1px solid rgba(0, 0, 0, 0.42)"
                },
                "&&&&:after": {
                    borderBottom: "2px solid #2196f3"
                },
                // borderBottom: "1px solid #2196f3"
            }
        },
        MuiFormLabel: {
            root: {
                // color: "blue",
                "&$focused": {
                    "&$focused": {
                        "color": "#2196f3"
                    }
                }
            },
        }
    }
});

class QrCodeDemo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checkboxStates: {
                showAllFields: true,
                isAllDisabled: false,
                isCountryVisible: false,
                isStateVisible: false,
                isCityVisible: false,
                isPinCodeVisible: false,
                isCountryDisabled: false,
                isStateDisabled: false,
                isCityDisabled: false,
                isPinCodeDisabled: false,
                displayInline: true,
                addressLabelText: 'Search Address...',
                errorText: '',
                countryLabelText: 'Country',
                stateLabelText: 'State',
                cityLabelText: 'City',
                pincodeLabelText: 'Pin code',
                key: 'autosuggestAddressSearch',
                preSelectedValue: ''
            },
            data: ''
        }
    }

    updateStateData = (name) => {
        let checkboxStates = this.state.checkboxStates;
        checkboxStates[name] = !this.state.checkboxStates[name];
        this.setState({ checkboxStates: checkboxStates });
    }
    handleChange = (e, name) => {
        let checkboxStates = this.state.checkboxStates;
        checkboxStates[name] = e.target.value;
        this.setState({ checkboxStates: checkboxStates });
    }

    onSelect = (data) => {
        this.setState({ data: data });
    }


    render() {
        let keysData = Object.keys(this.state.checkboxStates);
        let that = this;
        return (
            <div>
                <div style={{ color: '#7B334F', textAlign: 'center', fontSize: 36 }}>
                    <b> DEMO</b>
                </div>
                <MuiThemeProvider theme={theme}>
                    <GeoLocation
                        showAllFields={this.state.checkboxStates.showAllFields}
                        isAllDisabled={this.state.checkboxStates.isAllDisabled}
                        isCountryVisible={this.state.checkboxStates.isCountryVisible}
                        isStateVisible={this.state.checkboxStates.isStateVisible}
                        isCityVisible={this.state.checkboxStates.isCityVisible}
                        isPinCodeVisible={this.state.checkboxStates.isPinCodeVisible}
                        isCountryDisabled={this.state.checkboxStates.isCountryDisabled}
                        isStateDisabled={this.state.checkboxStates.isStateDisabled}
                        isCityDisabled={this.state.checkboxStates.isCityDisabled}
                        isPinCodeDisabled={this.state.checkboxStates.isPinCodeDisabled}
                        displayInline={this.state.checkboxStates.displayInline}
                        addressLabelText={this.state.checkboxStates.addressLabelText}
                        errorText={this.state.checkboxStates.errorText}
                        countryLabelText={this.state.checkboxStates.countryLabelText}
                        stateLabelText={this.state.checkboxStates.stateLabelText}
                        cityLabelText={this.state.checkboxStates.cityLabelText}
                        pincodeLabelText={this.state.checkboxStates.pincodeLabelText}
                        preSelectedValue={this.state.checkboxStates.preSelectedValue}
                        onSelect={this.onSelect}

                    />
                    <div>
                        <div style={{ width: '35%', float: 'left' }}>
                            {keysData.map(function (data, index) {
                                if (typeof that.state.checkboxStates[data] !== 'string') {
                                    return <div key={index}>
                                        <FormControlLabel
                                            control={
                                                <Checkbox style={{ color: '#2196f3' }} checked={that.state.checkboxStates[data]} onChange={() => that.updateStateData(data)} value={data} />
                                            }
                                            label={data}
                                        />

                                    </div>
                                }
                            })}
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
                                                margin="normal"
                                            />
                                        </div>
                                    }
                                }
                            })}
                        </div>
                        <div style={{ width: '30%', float: 'left', paddingTop: 20, color: '#2196f3' }}>
                            Output(data you get from onSelect method):
                            <pre>
                                street_number: {this.state.data ? this.state.data.street_number : ''}
                                <br />
                                route: {this.state.data ? this.state.data.route : ''}
                                <br />
                                locality: {this.state.data ? this.state.data.locality : ''}
                                <br />
                                administrative_area_level_1: {this.state.data ? this.state.data.administrative_area_level_1 : ''}
                                <br />
                                country: {this.state.data ? this.state.data.country : ''}
                                <br />
                                postal_code: {this.state.data ? this.state.data.postal_code : ''}
                                <br />
                                lat: {this.state.data ? this.state.data.lat : ''}
                                <br />
                                lng: {this.state.data ? this.state.data.lng : ''}
                                <br />
                                description: {this.state.data ? this.state.data.description : ''}
                                <br />
                                countryFullDetail:
                            <br />
                                &#123;
                                <br />
                                long_name: {this.state.data && this.state.data.countryFullDetail ? this.state.data.countryFullDetail.long_name : ''}
                                <br />
                                short_name: {this.state.data && this.state.data.countryFullDetail ? this.state.data.countryFullDetail.short_name : ''}
                                <br />
                                &#125;
                                <br />
                                stateFullDetail:
                            <br />
                                &#123;
                                <br />
                                long_name: {this.state.data && this.state.data.stateFullDetail ? this.state.data.stateFullDetail.long_name : ''}
                                <br />
                                short_name: {this.state.data && this.state.data.stateFullDetail ? this.state.data.stateFullDetail.short_name : ''}
                                <br />
                                &#125;
                                <br />
                                cityFullDetail:
                            <br />
                                &#123;
                                <br />
                                long_name: {this.state.data && this.state.data.cityFullDetail ? this.state.data.cityFullDetail.long_name : ''}
                                <br />
                                short_name: {this.state.data && this.state.data.cityFullDetail ? this.state.data.cityFullDetail.short_name : ''}
                                <br />
                                &#125;
                            </pre>

                        </div>
                    </div>
                </MuiThemeProvider>
            </div>
        )
    }
}







export default QrCodeDemo;
