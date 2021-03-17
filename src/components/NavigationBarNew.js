import React from 'react'
import {
    BrowserRouter as Router

} from "react-router-dom";
import { Navbar, Nav, Container, Row, Col } from 'react-bootstrap'
import styled from 'styled-components'

class NavigationBarNew extends React.Component{

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
                            <Col md={12}>
                            <Router>
                                    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
                                        <Navbar.Brand href="/">React Test</Navbar.Brand>
                                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                        <Navbar.Collapse id="basic-navbar-nav">
                                            <Nav className="mr-auto">
                                                <Nav.Link href="/">Home</Nav.Link>
                                                <Nav.Link href="/datagrid">Data Grid</Nav.Link>

                                                {/* <Nav.Item><NavLink exact activeClassName="active" to="/">Home</NavLink></Nav.Item>
                                                <Nav.Item><NavLink activeClassName="active" to="/datagrid">Data Grid</NavLink></Nav.Item> */}
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

export default NavigationBarNew;

const Styles = styled.div`
  .padded-div{
        padding-top: 5px;
    }
  .centered-text {
    textAlign: "center";
  }
`
