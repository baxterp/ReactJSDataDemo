import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
//import $ from 'jquery'

class WeatherMapAPIComp extends React.Component {

    constructor(props) {
      super(props);

      this.state = {
        error: null,
        isLoaded: false,
        searchTerm: '',
        longitude: 0,
        latitude: 0,
        weatherdata: []
      };
    }

    componentDidMount() {
        this.setState({
            isLoaded: true
        })
    }

    tempToDegrees(tempInKelvin) {
        return tempInKelvin - 273.15;
    }

    handleInputChange = (event) => {
        if(event.key !== 'Enter')
            return;

        this.setState({
            isLoaded: false,
        });

        var searchTerm = event.target.value;
        console.log('Search term');
        console.log(searchTerm);

        this.setState({
            searchTerm: searchTerm
        });

        var postionApiURL = '/postionapi?access_key=98db2f4509e757fd27dc9e44a1ba9162&query=' + searchTerm;

        console.log(postionApiURL);

        fetch(postionApiURL)
            .then(res => res.json())
            .then((result) => {

                    if(!result.data)
                        return;

                    console.log('Geo positon data');
                    console.log(result.data[0].latitude);
                    console.log(result.data[0].longitude);

                    var longitude = result.data[0].longitude;
                    var latitude = result.data[0].latitude;

                    var reducedSearchTerm = searchTerm.replace(' uk', '').replace(' UK', '');

                    var weatherApiURL = '/weatherapi?q=' + reducedSearchTerm + '&appid=a4c4828132cc7eb3c0e809f91d915282';
                    console.log(weatherApiURL);

                    fetch(weatherApiURL)
                        .then(res => res.json())
                        .then((result) => {
                            console.log('Weather data');
                            console.log(result);

                            this.setState({
                                isLoaded: true,
                                weatherdata: result,
                                latitude: latitude,
                                longitude: longitude
                            });

                            //fetch
                            //https://openweathermap.org/weathermap?basemap=map&cities=false&layer=temperature&lat=52.412945&lon=-1.508416&zoom=10
        
                        },
                        (error) => {
                            this.setState({
                                isLoaded: true,
                                error
                            });
                        })



                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                })

    }

    render() {
        const { error, isLoaded, longitude, latitude, searchTerm, weatherdata } = this.state;

        window.$longdidtude = longitude;
        window.$latitude = latitude;
        window.$weatherdata = weatherdata;

        var weatherDescription = weatherdata.weather ? weatherdata.weather[0] : null;

        var degreesChars = String.fromCharCode(176) + 'C';
        
        var temp = weatherdata.main ? this.tempToDegrees(weatherdata.main.temp).toFixed(0) : 0;
        var tempFeelsLike = weatherdata.main ? this.tempToDegrees(weatherdata.main.feels_like).toFixed(0) : 0;
        var maxTemp = weatherdata.main ? this.tempToDegrees(weatherdata.main.temp_max).toFixed(0) : 0;
        var minTemp = weatherdata.main ? this.tempToDegrees(weatherdata.main.temp_min).toFixed(0) : 0;
        var barometricPressure = weatherdata.main ? weatherdata.main.pressure : 0;
        var humidity = weatherdata.main ? weatherdata.main.humidity : 0;

        var windSpeed = weatherdata.wind ? weatherdata.wind.speed : 0;

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
        else if (longitude !== 0 && latitude !== 0 && weatherDescription){
            return (
                <Container>
                    <Row>
                        <Container>
                            <Row>
                                <Col xl={12} style={{paddingTop:10}} className='text-center' >
                                    <h1>Weather Data and Map</h1>
                                </Col>
                            </Row>
                            <Row>
                                <Col xl={12} style={{paddingTop:10}} className='text-center' >
                                    <h3>Type in location for weather search</h3>
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
                                    <h2>Geo Data for location: {searchTerm}</h2>
                                </Col>
                            </Row>
                            <Row>
                                <Col xl={6} style={{paddingLeft:50,paddingTop:10}} className='text-center' >
                                    <h4>Longitude : {longitude}</h4>
                                </Col>
                                <Col xl={6} style={{paddingLeft:50,paddingTop:10}} className='text-center' >
                                    <h4>Latitude : {latitude}</h4>
                                </Col>
                            </Row>
                            <Row>
                                <Col xl={12} style={{paddingLeft:50,paddingTop:50}}>
                                    <h2>Weather</h2>
                                </Col>
                            </Row>
                            <Row>
                                <Col xl={12} style={{paddingLeft:80}}>
                                    <h4>Weather description: {weatherDescription.main}, {weatherDescription.description}</h4>
                                </Col>
                            </Row>
                            <Row>
                                <Col xl={12} style={{paddingLeft:80}}>
                                    <h4>Temperature: {temp}{degreesChars}, Feels like: {tempFeelsLike}{degreesChars}, Max Temp: {maxTemp}{degreesChars}, Min Temp: {minTemp}{degreesChars}</h4>
                                </Col>
                            </Row>
                            <Row>
                                <Col xl={12} style={{paddingLeft:80}}>
                                    <h4>Pressure: {barometricPressure} mBar</h4>
                                </Col>
                            </Row>
                            <Row>
                                <Col xl={12} style={{paddingLeft:80}}>
                                    <h4>Humidity: {humidity}</h4>
                                </Col>
                            </Row>
                            <Row>
                                <Col xl={12} style={{paddingLeft:80}}>
                                    <h4>Wind speed: {windSpeed} mph</h4>
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
                                <h1>Weather Data and Map</h1>
                            </Col>
                        </Row>
                        <Row>
                            <Col xl={12} style={{paddingTop:10}} className='text-center' >
                                <h3>Type in location for weather search</h3>
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


export default WeatherMapAPIComp;