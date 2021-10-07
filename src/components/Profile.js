import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { withAuth0 } from '@auth0/auth0-react';
import { Card } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import axios from 'axios';

class Profile extends Component {
  componentDidMount() {
    this.props.getAnimeRefresh();
  }
  handleSubmit = async (event)=>{
    event.preventDefault();
    const animeNotes = event.target.notes.value;
    const anime_id= this.props.anime.id

  }

  // onDelete =()=> this.props.handleDelete(this.props.anime)

  render() {
    console.log(this.props.favAnime);
    return (
      <>
        <h1> Hello {this.props.auth0.user.name}</h1>
        
        {/* {this.props.auth0.isAuthenticated && ( */}
        <>
          <Container >
            <Row xs={1} sm={1} md={2} lg={3}>
              {this.props.favAnime.map((anime, idx) => (
                <SingleFavAnime
                  handleDelete={this.props.handleDelete}
                  anime={anime}
                  key={idx}
                />
              ))}
            </Row>
          </Container>
        </>
        {/* )} */}
      </>
    );
  }
}
export default withAuth0(Profile);

class SingleFavAnime extends Component {
  onDelete = () => this.props.handleDelete(this.props.anime);

  render() {
    return (
      <>
        <Card>
          <Card.Body>
            <Card.Text as="h4">
              <p>{this.props.anime.title}</p>
            </Card.Text>
            <Card.Img variant="bottom" src={this.props.anime.image_url} />
            <Form onSubmit = {this.handleSubmit}>
            <Form.Group className="mb-3" controlId="notes">
          <Form.Label>Notes</Form.Label>
          <Form.Control type="title" placeholder="type in your notes"/>
        </Form.Group>
        <Button variant="primary" type ="submit"> Add notes</Button>
            </Form>
            <Button onClick={this.onDelete}>Delete</Button>
          </Card.Body>
        </Card>
      </>
    );
  }
}
