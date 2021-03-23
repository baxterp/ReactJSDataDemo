import React from 'react'
import "react-datetime/css/react-datetime.css";
import Datetime from "react-datetime";
import { Container, Row, Col } from 'react-bootstrap'


class NasaImageAPIComp extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        error: null,
        isLoaded: false,
        image_data: [],
        display_date: ''
      };
    }
  
    componentDidMount() {
        this.setState({
            isLoaded: true
        })
    }

    handleInputChange = (date) => {
        this.setState({
            isLoaded: false,
        });
        
        var day = date.date();
        var month = date.month() + 1;
        var year = date.year();
        var queryDate = year + '-' + month + '-' + day;
        var displayDate = day + '-' + month + '-' + year;

        this.setState({
            display_date: displayDate
        });
    
        console.log('Date received from picker: ' + queryDate);

        fetch("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=" + queryDate + "&api_key=gdNk1u0FchNuvRoqkT0bG5NZxU66YwMvLGOFwr8z")
            .then(res => res.json())
            .then(
            (result) => {
                this.setState({
                    image_data: result.photos,
                    isLoaded: true,
                });
                console.log('Nasa API Data');
                console.log(result.photos);
            },
            (error) => {
                this.setState({
                isLoaded: true,
                error
                });
            })
      }

  
    render() {

    const { error, isLoaded, image_data, display_date } = this.state;

    let date_output;
    if(display_date !== '')
        date_output = <h3>Images for date : {display_date}</h3>;

    if (error) {
        return <div>Error: {error.message}</div>;
    } 
    else if (!isLoaded) {
        return <div>Loading...</div>;
    } 
    else 
    {
    return (

            <Container>
                <Row style={{paddingTop:10}}>
                    <Col md={4}>
                    </Col>
                    <Col md={4}>
                        <h2>Nasa image API demo</h2>
                    </Col>
                </Row>
                <Row>
                    <Col md={2}>
                    </Col>
                    <Col md={8}>
                        <p>The following page uses an API provided by Nasa to show the images for a selected date, taken from Nasa's Curiosity Rover. Not all dates have image data available.</p>
                    </Col>
                </Row>
                <Row style={{paddingTop:25}}>
                    <Col md={4} >
                    </Col>
                    <Col md={4}>
                        <h3>Select a date to view images</h3>
                    </Col>
                </Row>
                <Row>
                    <Col md={2}>
                    </Col>
                    <Col md={8}>
                        <Datetime dateFormat="YYYY-MM-DD" timeFormat={false} input={false} onChange={this.handleInputChange} />
                    </Col>
                </Row>
                <Row style={{paddingTop:40}}>
                    <Container>
                        <Row style={{paddingBottom:40}}>
                            <Col md={4}>
                            </Col>
                            <Col md={4}>
                                {date_output}
                            </Col>
                        </Row>
                    </Container>
            {image_data.map(item => (
                    <Container>
                        <Row key={item.id}>
                            <Col md={2}>
                            </Col>
                            <Col md={8}>
                                <h4>{item.camera.full_name}</h4>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={2}>
                            </Col>
                            <Col md={8}>
                                <img src={item.img_src} height='700px' width='700px' alt = '' style={{ paddingBottom: 10, paddingTop: 5 }} />
                            </Col>
                        </Row>
                    </Container>
            ))}
                </Row>      
            </Container>

        )
      }
    }
  }

  export default NasaImageAPIComp;
