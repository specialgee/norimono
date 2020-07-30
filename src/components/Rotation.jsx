import React, { Component } from 'react';
import {Container, Row} from 'react-bootstrap'
import rotate30 from '../assets/audio/rotation/30°.wav'
import rotate45 from '../assets/audio/rotation/45°.wav'
  
class Rotation extends Component {
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
            <div className="rotation">
                <Container>
                    <Row>
                        <button className="rotation-30" onClick={this.onButtonClick}>
                            30°
                            <audio className="button-audio">
                                <source src={rotate30} type="audio/wav" />
                                Your browser does not support the audio element.
                            </audio>
                        </button>
                        <button className="rotation-45" onClick={this.onButtonClick}>
                            45°
                            <audio className="button-audio">
                                <source src={rotate45} type="audio/wav" />
                                Your browser does not support the audio element.
                            </audio>
                        </button>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Rotation;
