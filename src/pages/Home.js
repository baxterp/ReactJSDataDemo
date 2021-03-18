import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import image from '../assets/reactjs.jpg';

import styled from 'styled-components'

export const Home = () => (
    <React.Fragment>
    <Styles>
        <Container className="page-container">
        <Row>
            <Col md={10}>
                <br />
                <h5>
                    This site is designed to show my proficiency in React JS, with all components and pages being created from scratch after researching the subject using online resources available freely to all.
                </h5>
                <br />
            </Col>
            </Row>
            <Row>
                <Col md={10}>
                    <img src={image} alt='where is it ??' height='120%' width='120%' />
                </Col>
            </Row>
        </Container>
    </Styles>
</React.Fragment>)

const Styles = styled.div`
.page-container{
    padding-top:5px;
    padding-left:35px;
}

`
