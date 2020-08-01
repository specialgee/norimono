import React, { Component } from 'react';
import Body from './Body'
import Direction from './Direction';
import Rotation from './Rotation';
import Speed from './Speed';
import Settings from './Settings'

class ControlPanel extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    componentDidMount() {

    }

    componentWillUnmount() {

    }

    render() {
        return (
            <div className="control-panel">
                <div className="panel-column panel-parameters">
                    <Direction />
                    <Rotation />
                    <Speed />
                    <Settings />
                </div>
                <div className="panel-column panel-body">
                    <Body />
                </div>
            </div>
        )
    }
}

export default ControlPanel;
