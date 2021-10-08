import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { withAuth0 } from '@auth0/auth0-react';
import { Card } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import axios from 'axios';
import './SuggestAnime.css'

class Profile extends Component {
  componentDidMount() {
    this.props.getAnimeRefresh();
  }


  render() {
    console.log(this.props.favAnime);
    return (
      <Container >
        <Row xs={1} sm={1} md={2} lg={3}>
          {this.props.favAnime.map((anime, idx) => (
            <SingleFavAnime
              handleDelete={this.props.handleDelete}
              anime={anime}
              key={idx}
              getAnimeRefresh={this.props.getAnimeRefresh}
            />
          ))}
        </Row>
      </Container>
    );
  }
}
export default withAuth0(Profile);

class SingleFavAnime extends Component {
  onDelete = () => this.props.handleDelete(this.props.anime);

  handleSubmit = async (event) => {
    event.preventDefault();
    const animeNotes = {
      user_comment: event.target.notes.value
    };
    const animeId = this.props.anime._id;
    console.log(animeId);
    const editURL = `${process.env.REACT_APP_API_URL}/anime/${animeId}`
    await axios.put(editURL, animeNotes)
    this.props.getAnimeRefresh();

  }


  render() {
    return (
      <>
        <Card>
          <Card.Body>
            <Card.Text as="h4">
              <p>{this.props.anime.title}</p>

            </Card.Text>
            <Card.Img variant="bottom" src={this.props.anime.image_url} />
            {this.props.anime.user_comment && (
              <Card.Text >{this.props.anime.user_comment}</Card.Text>
            )}
            <Form onSubmit={this.handleSubmit}>
              <Form.Group className="mb-3" controlId="notes">
                <Form.Label>Notes</Form.Label>
                <Form.Control type="title" placeholder="type in your notes" />
              </Form.Group>
              <Button variant="warning" type="submit"> Add notes</Button>
            </Form>
            <Button variant="warning" onClick={this.onDelete}>Delete</Button>
          </Card.Body>
        </Card>
      </>
    );
  }
}
