import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useParams,
  } from "react-router-dom";
import { Navbar,Nav,NavDropdown,Form,FormControl,Button, Container, Row, Col } from 'react-bootstrap'
import styled from 'styled-components'

class NavigationBar extends React.Component{

    render(){
        return(
            <Styles>
                <div className='padded-div'>
                    <Container>
                        <Row>
                            <Col style={{textAlign: "center"}}>
                                <h1>React JS Demo Site</h1>
                                <h4>This is blah blah</h4>
                            </Col>
                        </Row>
                        <Row>
                            <Col md="12">
                            <Router>
                                    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
                                        <Navbar.Brand href="#home">React Bootstrap Navbar</Navbar.Brand>
                                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                        <Navbar.Collapse id="basic-navbar-nav">
                                            <Nav className="mr-auto">
                                            <Nav.Link href="/">Home</Nav.Link>
                                            <Nav.Link href="/about-us">Contact Us</Nav.Link>
                                            <Nav.Link href="/contact-us">About Us</Nav.Link>
                                            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                                <NavDropdown.Divider />
                                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                            </NavDropdown>
                                            </Nav>
                                            <Form inline>
                                            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                                            <Button variant="outline-success">Search</Button>
                                            </Form>
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

export default NavigationBar;

const Styles = styled.div`
  .padded-div{
        padding-top: 5px;
    }
  .centered-text {
    textAlign: "center";
  }
`
