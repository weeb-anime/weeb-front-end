import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { withAuth0 } from '@auth0/auth0-react';
import { Card } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Row } from 'react-bootstrap';

class Profile extends Component {
  render() {
    return (
      <>
        {this.props.auth0.isAuthenticated && (
          <>
            <h1> Hi from the other side</h1>
            <p>Username: {this.props.auth0.user.name}</p>
            <Card>
          <Card.Body><Card.Text as='h4'>
            <p>{this.props.favAnime.title}</p>
          </Card.Text>
            <Card.Img variant='bottom' src={this.props.favAnime.image_url}/>
            <Button onClick ={this.props.handleDelete}>Delete</Button>
          </Card.Body>
        </Card>
          </>
        )}
      </>
    );
  }
}
export default withAuth0(Profile);
