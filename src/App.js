import React from 'react'
import styled from 'styled-components'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import NavigationBar from './components/NavigationBar'
import { Container, Row, Col } from 'react-bootstrap'
import { Home } from './pages/Home.js'
import './App.css';

function App() {
  return (
        <React.Fragment>
            <Container>
                <Router>
                    <NavigationBar />
                    <Switch>
                        <Route exact path="/" component={Home} />
                    </Switch>
                </Router>
            </Container>
        </React.Fragment>
  );
}

// const Styles = styled.div`
//   .page-container{
//       position: relative;
//       min-height: 100vh;
//   }
//   footer{
//       position: absolute;
//       bottom: 0;
//       width: 100%;
//       text-align: right;
//       padding: 15px;
//       font-size: 13px;
//   }   

// `


export default App;