import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
// import DraggableMenu from 'react-draggable-menu';
import { QRGenerator } from 'dynamic-qr-code-generator';

import RegionSelect from 'react-region-flag-select';
import ReactDynamicModal from 'react-draggable-resizable-modal';
import QrCode from './QrCode';
import NumberFinder from './NumberFinder';
import DraggableMenuDemo from './DraggableMenuDemo';
import FlagSelect from './FlagSelect';
import DraggableModal from './DraggableModal';


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
                    borderBottom: "2px solid #e64a19"
                },
                // borderBottom: "1px solid #2196f3"
            }
        },
        MuiFormLabel: {
            root: {
                // color: "blue",
                "&$focused": {
                    "&$focused": {
                        "color": "#e64a19"
                    }
                }
            },
        }
    }
});

class Demo extends Component {

    render() {
        return (
            <MuiThemeProvider theme={theme}>
                {this.props.type == 'qrCode' && <QrCode/>}
                {this.props.type == 'numberFinder' && <NumberFinder/>}
                {this.props.type == 'draggableMenu' && <DraggableMenuDemo/>}
                {this.props.type == 'resizableModal' && <DraggableModal/>}
                {this.props.type == 'flagSelect' && <FlagSelect/>}
            </MuiThemeProvider>
        )
    }
}

export default Demo;
