import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import $ from 'jquery'

class FlickrAPIComp extends React.Component {


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

        var photoQueryURL = '/flickrapi?' + $.param({
            'method': 'flickr.photos.search',
            'api_key': '17c2d82e29e9e9ab2858f1b7bfadb446',
            'text': searchTerm,
            'format': 'json',
            'page': 1,
            'per_page':200
        }) + '&nojsoncallback=true';

        console.log(photoQueryURL);

        fetch(photoQueryURL)
            .then(res => res.json())
            .then(
                (result) => {
                    console.log('image data 1');
                    console.log(result);

                    this.setState({
                        isLoaded: true,
                        image_data: result
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
        const { error, isLoaded, image_data } = this.state;

        window.$image_data = image_data;

        if (error) {
          return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
          return <div>Loading...</div>;
         } 
        else if (image_data.photos){
            return (
                <Container>
                    <Row>
                        <Container>
                            <Row>
                                <Col xl={8} style={{padding:20}}>
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
                                <Col xl={12} style={{paddingLeft:50,paddingTop: 10,paddingBottom: 50}}>
                                    <span>
                                    {image_data.photos.photo.map(function(image) {

                                        var imageURL = "https://farm" + image.farm + ".staticflickr.com/" + image.server + "/" + image.id + "_" + image.secret + ".jpg";
                                        console.log(imageURL);

                                        return(
                                             <a href={imageURL} className="image-link" rel="noreferrer" target="_blank" >
                                                <img src={imageURL} 
                                                    alt="missing" imageonload
                                                    className="flickr-img" />
                                             </a>
                                            )
                                        })
                                    }      
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
                        <Col xl={8} style={{padding:20}}>
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


export default FlickrAPIComp;