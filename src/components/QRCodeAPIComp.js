import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
//import $ from 'jquery'

class QRCodeAPIComp extends React.Component {

    constructor(props) {
      super(props);

      this.state = {
        error: null,
        isLoaded: false,
        qrcode_data: '',
        searchTerm: ''
      };
    }

    componentDidMount() {
        this.setState({
            isLoaded: true
        })
    }

    handleInputChange = (event) => {
        if(event.key !== 'Enter')
            return;

        this.setState({
            isLoaded: false,
        });

        var searchTerm = event.target.value;
        console.log(searchTerm);

        this.setState({
            searchTerm: searchTerm
        });

        var QRCodeURL = '/qrcodeapi?size=600x600&data=' + searchTerm;

        console.log(QRCodeURL);

        fetch(QRCodeURL)
            .then(res => res)
            .then(
                (result) => {
                    console.log('QR code data 1');
                    console.log(result.url);

                    this.setState({
                        isLoaded: true,
                        qrcode_data: result.url
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                })

    }

    render() {
        const { error, isLoaded, qrcode_data, searchTerm } = this.state;

        window.$qrcode_data = qrcode_data;

        if (error) {
          return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return (                        
                  <Container>
                      <Row>
                          <Col xl={12} style={{paddingLeft:20,paddingTop:10}}>
                              <h1 className='h1'>Loading..</h1>
                          </Col>
                      </Row>
                  </Container>
                  );
        } 
        else if (qrcode_data.length > 0){
            return (
                <Container>
                    <Row>
                        <Container>
                            <Row>
                                <Col xl={12} style={{paddingTop:10}} className='text-center' >
                                    <h1>QR Code Generator</h1>
                                </Col>
                            </Row>
                            <Row>
                                <Col xl={12} style={{paddingTop:10}} className='text-center' >
                                    <h3>Type in text to create a QR code from below</h3>
                                </Col>
                            </Row>
                            <Row>
                                <Col xl={12} style={{padding:20}} className='text-center' >
                                    <div className="input-group input-group-lg">
                                        <input  
                                                onKeyDown={this.handleInputChange.bind(this)}
                                                type="text" 
                                                className="form-control" 
                                                aria-label="Large" 
                                                aria-describedby="inputGroup-sizing-sm" />
                                    </div>                                
                                </Col>
                            </Row>
                        </Container>
                    </Row>
                    <Row>
                        <Container>
                            <Row>
                                <Col xl={12} style={{paddingLeft:50}} >
                                    <h1>QR code generated for search term : {searchTerm}</h1>
                                </Col>
                            </Row>
                            <Row>
                                <Col xl={12} style={{padding:50}} className='text-center' >
                                    <img src={qrcode_data} alt='missing' class="resizeable-img" />
                                </Col>
                            </Row>
                        </Container>
                    </Row>
                </Container>

            )}
            else 
                return (
                <Container>
                    <Row>
                        <Col xl={12} style={{paddingTop:10}} className='text-center' >
                            <h1>QR Code Generator</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col xl={12} style={{paddingTop:10}} className='text-center' >
                            <h3>Type in text to create a QR code from below</h3>
                        </Col>
                    </Row>
                    <Row>
                        <Col xl={12} style={{padding:20}} className='text-center' >
                            <div className="input-group input-group-lg">
                                <input  
                                        onKeyDown={this.handleInputChange.bind(this)}
                                        type="text" 
                                        className="form-control" 
                                        aria-label="Large" 
                                        aria-describedby="inputGroup-sizing-sm" />
                            </div>                                
                        </Col>
                    </Row>
                </Container>
            )
        }
    }


export default QRCodeAPIComp;