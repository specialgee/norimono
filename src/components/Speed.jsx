import React, { Component } from 'react';
import {Container, Row} from 'react-bootstrap'
import speedArrow from '../assets/img/speed/speed-arrow.png'
import audioSlow from '../assets/audio/speed/ゆっくり.wav'
import audioFast from '../assets/audio/speed/早く.wav'

class Speed extends Component {
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
            <div className="speed">
                <Container>
                    <Row>
                        <button className="speed-slow" onClick={this.onButtonClick}>
                            ゆっくり
                            <audio className="button-audio">
                                <source src={audioSlow} type="audio/wav" />
                                Your browser does not support the audio element.
                            </audio>
                        </button>
                        <img className="speed-arrow" src={speedArrow} alt="speed arrow" />
                        <button className="speed-fast" onClick={this.onButtonClick}>
                            はやく
                            <audio className="button-audio">
                                <source src={audioFast} type="audio/wav" />
                                Your browser does not support the audio element.
                            </audio>
                        </button>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Speed;
