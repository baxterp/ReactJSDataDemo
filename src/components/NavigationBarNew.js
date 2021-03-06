import React from 'react'
import {
    BrowserRouter as Router

} from "react-router-dom";
import { Navbar, Nav, Container, Row, Col, NavDropdown } from 'react-bootstrap'
import styled from 'styled-components'

import icon from '../assets/logo512.png';

class NavigationBarNew extends React.Component{

    render(){
        return(
            <Styles>
                <div className='padded-div'>
                    <Container>
                        <Row>
                            <Col style={{textAlign: "center"}}>
                                <h1>React JS Demo Site</h1>
                                <br />
                            </Col>
                        </Row>
                        <Row>
                            <Col md={12}>
                                <Router>
                                    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
                                        <Navbar.Brand href="/">
                                            <img src={icon} height="35px" alt='where is it ??' />
                                        </Navbar.Brand>
                                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                        <Navbar.Collapse id="basic-navbar-nav">
                                            <Nav className="mr-auto">
                                                <NavDropdown title="Consuming APIs" style={{fontSize:"14pt"}}>
                                                    <NavDropdown.Item href="/nasaimages">Nasa Image API</NavDropdown.Item>
                                                    <NavDropdown.Item href="/flickr">Flickr Search API</NavDropdown.Item>
                                                    <NavDropdown.Item href="/qrcode">QR Code Generator</NavDropdown.Item>
                                                    <NavDropdown.Divider />
                                                    <NavDropdown.Item href="/weathermap">Weather Map API</NavDropdown.Item>
                                                </NavDropdown>                                                
                                                <Nav.Link href="/datagrid" style={{fontSize:"14pt"}}>Data Grid</Nav.Link>
                                            </Nav>
                                        </Navbar.Collapse>
                                    </Navbar>
                                </Router>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </Styles>
        )  
    }
}

//

export default NavigationBarNew;

const Styles = styled.div`
  .padded-div{
        padding-top: 5px;
    }
  .centered-text {
    textAlign: "center";
  }

  .nav-text {
      font-size: 14pt:
  }
`
