import React from 'react'
//import styled from 'styled-components'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import NavigationBarNew from './components/NavigationBarNew'
import { Container, 
 //   Row, 
//    Col 
} from 'react-bootstrap'

import { Home } from './pages/Home'
import { DataGrid } from './pages/DataGrid'
//import { NasaImages } from './pages/NasaImageAPI'
import NasaImageAPIComp from './components/NasaImageAPIComp'
import FlickrImageAPIComp from './components/FlickrAPIComp'

import './App.css';

function App() {
  return (
        <React.Fragment>
            <Container>
                <Router>
                    <NavigationBarNew />
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/datagrid" component={DataGrid} />
                        <Route exact path="/nasaimages" component={NasaImageAPIComp} />
                        <Route exact path="/flickr" component={FlickrImageAPIComp} />
                     </Switch>
                </Router>
            </Container>
        </React.Fragment>
  );
}

//


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