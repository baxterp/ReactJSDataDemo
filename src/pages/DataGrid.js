import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import DataGridComp from '../components/DataGridComp.js'

import styled from 'styled-components'

export const DataGrid = () => (
        <React.Fragment>
            <Styles>
                <Container className="page-container">
                <Row>
                    <Col md={12}>
                        <br />
                        <h5>
                            This is an example using ReactJS Bootstrap Table, with data from a REST HTTP service returning database data.
                        </h5>
                        <br />
                    </Col>
                    </Row>
                    <Row>
                        <Col md={12}>
                            <DataGridComp />
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