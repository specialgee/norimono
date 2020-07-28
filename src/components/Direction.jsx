import React, { Component } from 'react';
import {Container, Row, Col} from 'react-bootstrap'
import headImage from '../assets/img/head.png'

class Direction extends Component {
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
            <div className="direction">
                <Container >
                    <Row>
                        <button className="direction-top">前</button>
                    </Row>
                    <Row>
                        <button className="direction-left">左</button>
                        <img src={headImage} className="direction-head" alt="head" />
                        <button className="direction-right">右</button>
                    </Row>
                    <Row>
                        <button className="direction-bottom">後</button>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Direction;
