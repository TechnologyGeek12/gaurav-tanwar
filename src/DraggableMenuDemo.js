import React, { Component } from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';
import DraggableMenu from 'react-draggable-menu';

class DraggableMenuDemo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checkboxStates: {
                isVerticalOpen: true,
                dragToRightOnly: false,
                dragToLeftOnly: false,
                dragToTopOnly: false,
                dragToBottomOnly: false,
                isDraggable: true,
                isMenuOpen: false,
                // initialPosition: {},
                closeOnEsc: true,
                closeOnClick: true,
                closeOnSelection: true,
                showMenuOpenForTime: 0,
                border: '1px solid #fff',
                // menuIcon: ["fas fa-bars", '#fff', "#2196f3",0,'Main Menu'],
                // menuList: [["fab fa-affiliatetheme", '#fff', "#FBBD3B", 2,'item 1'], ["fas fa-ad", '#fff', "#4185F4", 3,'item 2'], ["fas fa-adjust", '#fff', "#48A853", 4,'item 3'], ["fab fa-adn", '#fff', "#EA4335", 5,'item 4']]
            },
            changeData: '',
            openData: '',
            key:0
        }
    }

    updateStateData = (name) => {
        let checkboxStates = this.state.checkboxStates;
        checkboxStates[name] = !this.state.checkboxStates[name];
        this.setState({ checkboxStates: checkboxStates,key:this.state.key+1 });
    }
    handleChangeField = (e, name) => {
        let checkboxStates = this.state.checkboxStates;
        checkboxStates[name] = e.target.value;
        this.setState({ checkboxStates: checkboxStates,key:this.state.key+1 });
    }

    handleChange = (data) => {
        //do something here with data
        this.setState({ changeData: data });
    }
    isOpen = (value) => {
        //do something here with value
        this.setState({ openData: value });
    }


    render() {
        let keysData = Object.keys(this.state.checkboxStates);
        let that = this;
        return (
            <div style={{ width: '100%' }}>
                <div style={{ color: '#e64a19', textAlign: 'center', fontSize: 36 }}>
                    <b> React Draggable Menu</b>
                </div>
                <div>
                    <div style={{ width: '20%', float: 'left' }}>
                        {keysData.map(function (data, index) {
                            if (typeof that.state.checkboxStates[data] !== 'string' && typeof that.state.checkboxStates[data]!== "number") {
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
                    <div style={{ width: '25%', float: 'left' }}>
                        {keysData.map(function (data, index) {
                            if (typeof that.state.checkboxStates[data] === 'string' || Array.isArray(that.state.checkboxStates[data]) || typeof that.state.checkboxStates[data] === "number") {
                                if (data !== 'key') {
                                    return <div key={index}>
                                        <TextField
                                            id="standard-name"
                                            label={data}
                                            value={Array.isArray(that.state.checkboxStates[data]) ? ('[' + that.state.checkboxStates[data] + ']') : that.state.checkboxStates[data]}
                                            onChange={(e) => that.handleChangeField(e, data)}
                                            margin="normal"
                                        />
                                    </div>
                                }
                            }
                        })}
                    </div>
                    <div style={{ width: '10%', float: 'left' }}>
                        <DraggableMenu
                            handleChange={this.handleChange}
                            isOpen={this.isOpen}
                            isVerticalOpen={this.state.checkboxStates.isVerticalOpen}
                            dragToRightOnly={this.state.checkboxStates.dragToRightOnly}
                            dragToLeftOnly={this.state.checkboxStates.dragToLeftOnly}
                            dragToTopOnly={this.state.checkboxStates.dragToTopOnly}
                            dragToBottomOnly={this.state.checkboxStates.dragToBottomOnly}
                            isDraggable={this.state.checkboxStates.isDraggable}
                            isMenuOpen={this.state.checkboxStates.isMenuOpen}
                            closeOnEsc={this.state.checkboxStates.closeOnEsc}
                            closeOnClick={this.state.checkboxStates.closeOnClick}
                            closeOnSelection={this.state.checkboxStates.closeOnSelection}
                            showMenuOpenForTime={parseInt(this.state.checkboxStates.showMenuOpenForTime)}
                            border={this.state.checkboxStates.border}
                            key={this.state.key}
                        />
                    </div>

                    <div style={{ width: '55%', float: 'left', paddingTop: 20, color: '#e64a19' }}>
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







export default DraggableMenuDemo;
