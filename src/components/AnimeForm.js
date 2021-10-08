import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Col,Row} from 'react-bootstrap';
export default class AnimeForm extends React.Component {
  handleSubmit = event => {
    event.preventDefault();
    const animeInfo = event.target.anime.value;
    console.log(animeInfo);
    this.props.getAnimeList(animeInfo);
  };

  render() {
    return (
      <>
        <Form onSubmit={this.handleSubmit} >
          <Row className="align-items-center" style={{display:'flex',justifyContent:'center'}}>
            <Col xs="auto">
              <Form.Group controlId="anime">
                <Form.Control className="mb-2"
                  type="text"
                  placeholder="Enter anime title"
                /> 
              </Form.Group>
                </Col>
                 <Col xs="auto">
                <Button className="mb-2" variant="warning" type="submit">
                  Search
                </Button>
            </Col>
          </Row>
        </Form>

      </>
    );
  }
}
