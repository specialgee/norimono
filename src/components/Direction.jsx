import React, { Component } from 'react';
import {Container, Row} from 'react-bootstrap'
import headImage from '../assets/img/head.png'
import audioFront from '../assets/audio/direction/前.wav'
import audioBack from '../assets/audio/direction/後.wav'
import audioLeft from '../assets/audio/direction/左.wav'
import audioRight from '../assets/audio/direction/右.wav'

class Direction extends Component {
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
            <div className="direction">
                <Container >
                    <Row>
                        <button className="direction-top" onClick={this.onButtonClick}>
                            前
                            <audio className="button-audio">
                                <source src={audioFront} type="audio/wav" />
                                Your browser does not support the audio element.
                            </audio>
                        </button>
                    </Row>
                    <Row>
                        <button className="direction-left" onClick={this.onButtonClick}>
                            左
                            <audio className="button-audio">
                                <source src={audioLeft} type="audio/wav" />
                                Your browser does not support the audio element.
                            </audio>
                        </button>
                        <img src={headImage} className="direction-head" alt="head" />
                        <button className="direction-right" onClick={this.onButtonClick}>
                            右
                            <audio className="button-audio">
                                <source src={audioRight} type="audio/wav" />
                                Your browser does not support the audio element.
                            </audio>
                        </button>
                    </Row>
                    <Row>
                        <button className="direction-bottom" onClick={this.onButtonClick}>
                            後
                            <audio className="button-audio">
                                <source src={audioBack} type="audio/wav" />
                                Your browser does not support the audio element.
                            </audio>
                        </button>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Direction;
