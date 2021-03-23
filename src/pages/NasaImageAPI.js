import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import NasaAPIComp from '../components/NasaAPIComp'
//import DateTimePicker from '../components/DateTimePickerComp'

import "react-datetime/css/react-datetime.css";
import Datetime from "react-datetime";

import styled from 'styled-components'

var queryDate = '2016-6-3';

function handleDateChange(date) {
    var day = date.date();
    var month = date.month() + 1;
    var year = date.year();
    queryDate = year + '-' + month + '-' + day;

    console.log('Date received from picker: ' + queryDate);
}

export const NasaImages = () => (

        <React.Fragment>
            <Styles>
                <Container className="page-container">
                <Row>
                    <Col md={12}>
                        <br />
                        <h5>
                            Nasa Curiosity rover images taken on 6th March 2016
                        </h5>
                        <br />
                    </Col>
                    </Row>
                    <Row>
                    <Col md={12}>
                    <Datetime dateFormat="YYYY-MM-DD" timeFormat={false} input={false} onChange={handleDateChange} />;
                    </Col>
                    </Row>
                    <Row>
                        <Col md={12}>
                            <NasaAPIComp date={queryDate} />
                        </Col>
                    </Row>
                </Container>
            </Styles>
        </React.Fragment>
    )

    const Styles = styled.div`
    .page-container{
        padding-top:5px;
        padding-left:35px;
    }

`    