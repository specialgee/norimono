import React, { Component } from 'react';
import {Container, Row} from 'react-bootstrap'
import audioHead from '../assets/audio/body/頭.wav'
import audioNeck from '../assets/audio/body/首.wav'
import audioArm from '../assets/audio/body/腕.mp3'
import audioElbow from '../assets/audio/body/肘.mp3'
import audioWaist from '../assets/audio/body/腰.wav'
import audioHand from '../assets/audio/body/手.wav'
import audioKnee from '../assets/audio/body/膝.wav'
import audioLeg from '../assets/audio/body/足.wav'

class Body extends Component {
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
            <div className="body">
                <Container>
                    <Row>
                        <button className="body-head" onClick={this.onButtonClick}>
                            頭
                            <audio className="button-audio">
                                <source src={audioHead} type="audio/wav" />
                                Your browser does not support the audio element.
                            </audio>
                        </button>
                    </Row>
                    <Row>
                        <button className="body-neck" onClick={this.onButtonClick}>
                            首
                            <audio className="button-audio">
                                <source src={audioNeck} type="audio/wav" />
                                Your browser does not support the audio element.
                            </audio>
                        </button>
                    </Row>
                    <Row>
                        <button className="body-arm" onClick={this.onButtonClick}>
                            腕
                            <audio className="button-audio">
                                <source src={audioArm} type="audio/wav" />
                                Your browser does not support the audio element.
                            </audio>
                        </button>
                    </Row>
                    <Row>
                        <button className="body-elbow" onClick={this.onButtonClick}>
                            肘
                            <audio className="button-audio">
                                <source src={audioElbow} type="audio/wav" />
                                Your browser does not support the audio element.
                            </audio>
                        </button>
                    </Row>
                    <Row>
                        <button className="body-waist" onClick={this.onButtonClick}>
                            腰
                            <audio className="button-audio">
                                <source src={audioWaist} type="audio/wav" />
                                Your browser does not support the audio element.
                            </audio>
                        </button>
                    </Row>
                    <Row>
                        <button className="body-hand" onClick={this.onButtonClick}>
                            手
                            <audio className="button-audio">
                                <source src={audioHand} type="audio/wav" />
                                Your browser does not support the audio element.
                            </audio>
                        </button>
                    </Row>
                    <Row>
                        <button className="body-knee" onClick={this.onButtonClick}>
                            膝
                            <audio className="button-audio">
                                <source src={audioKnee} type="audio/wav" />
                                Your browser does not support the audio element.
                            </audio>
                        </button>
                    </Row>
                    <Row>
                        <button className="body-leg" onClick={this.onButtonClick}>
                            足
                            <audio className="button-audio">
                                <source src={audioLeg} type="audio/wav" />
                                Your browser does not support the audio element.
                            </audio>
                        </button>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Body;
