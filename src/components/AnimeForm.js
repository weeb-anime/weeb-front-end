import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
export default class AnimeForm extends React.Component {
  handleSubmit = event => {
    event.preventDefault();
    const animeInfo = event.target.anime.value;
    console.log(animeInfo);
    this.props.getAnimeList(animeInfo);
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group controlId="anime">
          <Form.Control
            type="text"
            placeholder="Enter anime title"
          ></Form.Control>
        </Form.Group>
        <Button variant="primary" type="submit">
          Search
        </Button>
      </Form>
    );
  }
}
