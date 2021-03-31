import React from "react";
import { Container, Col, Row, Spinner, Alert, Card } from "react-bootstrap";
import { Link, withRouter } from 'react-router-dom'

class Home extends React.Component {
  state = {
    isLoading: true,
    isError: false,
    movies: [],
  };

  constructor(props) {
    super(props);
    this.state = {
      movies: [],
    };
    // this is really the first method invoked upon component construction
    //console.log("THIS IS THE CONSTRUCTOR");
    // the constructor is useless for 90% of the time
  }

  componentDidMount = async () => {
    // this will just happen once!!
   // console.log("THIS IS COMPONENTDIDMOUNT");
    // componentDidMount is the PERFECT PLACE for fetching outside data and update our state
    // fetch
    try {
      let response = await fetch(
        "http://www.omdbapi.com/?apikey=e8bb1a3d&s=harry%20potter"
      );
      //console.log(response);
      if (response.ok) {
        let data = await response.json();
        let movies = data.Search;
        console.log(movies);
        this.setState({
          movies,
          isLoading: false,
        });
        //console.log("new state,", movies);
      } else {
        this.setState({
          isLoading: false,
          isError: true,
        });
      }
    } catch (error) {
      this.setState({
        isLoading: false,
        isError: true,
      });
      console.log(error);
    }
  };

  render() {
    //console.log("THIS IS THE RENDER", this.state);

    return (
      <>
        {}
        <Container className="container-fluid mt-5">
          <h5 className="mb-2" style={{color : 'white'}}>Trending Now</h5>
          {this.state.isLoading && (
            <Spinner animation="border" variant="success" />
          )}

          {!this.state.isLoading &&
            this.state.movies.length === 0 &&
            !this.state.isError && <p>No movies yet!</p>}

          {this.state.isError && (
            <Alert variant="danger">
              <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
              <p>
                Change this and that and try again. Duis mollis, est non commodo
                luctus, nisi erat porttitor ligula, eget lacinia odio sem nec
                elit. Cras mattis consectetur purus sit amet fermentum.
              </p>
            </Alert>
          )}
          <Row
            style={{ padding: "0 15px" }}
            className="row row-cols-sm-2 row-cols-md-4 row-cols-lg-6 mb-5"
          >
            {this.state.movies.map((movie) => (
              <Col  key={movie.imdbID} className="my-2">
                <Link to={'/showdetail/'}><Card style={{border : 'none'}}>
                  <Card.Img
                  style={{width : '100'}}
                    variant="top"
                    src={movie.Poster}
                    alt={movie.Type}
                  />
                </Card></Link>
              </Col>
            ))}
          </Row>
        </Container>
      </>
    );
  }
}

export default withRouter(Home);
