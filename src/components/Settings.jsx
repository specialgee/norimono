import React, { Component } from 'react';
import {Container, Row} from 'react-bootstrap'
import audioCancel from '../assets/audio/settings/キャンセル.wav'
import audioRepeat from '../assets/audio/settings/リピート.wav'

class Settings extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }

        this.onButtonClick = this.onButtonClick.bind(this);
    }

    componentDidMount() {

    }

    componentWillUnmount() {

    }

    onButtonClick(e) {
        e.target.children[0].play();
    }

    render() {
        return (
            <div className="settings">
                <Container>
                    <Row>
                        <button className="settings-cancel" onClick={this.onButtonClick}>
                            キャンセル
                            <audio className="button-audio">
                                <source src={audioCancel} type="audio/wav" />
                                Your browser does not support the audio element.
                            </audio>
                        </button>
                        <button className="settings-repeat" onClick={this.onButtonClick}>
                            リピート
                            <audio className="button-audio">
                                <source src={audioRepeat} type="audio/wav" />
                                Your browser does not support the audio element.
                            </audio>
                        </button>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Settings;
