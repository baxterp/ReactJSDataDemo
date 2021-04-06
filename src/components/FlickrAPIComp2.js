import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import axios from 'axios';

class FlickrAPIComp2 extends React.Component {


    constructor(props) {
      super(props);

      this.state = {
        error: null,
        isLoaded: false,
        image_data: [],
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

        // this.setState({
        //     isLoaded: false,
        // });

        var searchTerm = event.target.value;
        console.log(searchTerm);

        var photoQueryURL = "/flickrapi2?tags=" + searchTerm + "&format=json&nojsoncallback=true";

        console.log(photoQueryURL);

        axios.get(photoQueryURL)
            .then((response) => {
                console.log('response.data.items');
                console.log(response.data.items);

                this.setState({
                    image_data: response.data.items
                })
            })
            .catch((err) => {
                console.log(err);
            })


    }

    render() {
        const { error, isLoaded, image_data } = this.state;

        console.log('image_data');
        console.log(image_data);

        window.$image_data = image_data;

        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
         } 
        else if (image_data.length > 1){
            return (
                <Container>
                    <Row>
                        <Container>
                            <Row>
                                <Col>
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
                                <Col md={12}>
                                    <span>
                                    {image_data.map(imageURL => (
                                        <a href={imageURL.media.m} className="image-link">
                                            <img src={imageURL.media.m} 
                                                alt="missing" imageonload
                                                className="flickr-img" />
                                        </a>
                                    ))}
                                    </span>
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
                        <Col>
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


export default FlickrAPIComp2;