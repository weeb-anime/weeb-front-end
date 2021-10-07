import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Alert } from 'react-bootstrap';
export default class AnimeModal extends Component {

  onAdd = () => this.props.handleAdd(this.props.anime);
  

  render() {
    return (
      <Modal show={this.props.show} onHide={()=>{this.props.hide(); this.props.hideAlert()}}>
        <Modal.Header closeButton>
          <Modal.Title>{this.props.anime.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Card>
            <Card.Body>
              <Card.Img
                variant="top"
                src={this.props.anime.image_url}
                alt={this.props.anime.description}
              />
              {/* <Card.Text> */}
              <ul>
                <li>Synopsis: {this.props.anime.synopsis}</li>
                <li>Rated: {this.props.anime.rated}</li>
                <li>Score: {this.props.anime.score}/10</li>
                <li>Episodes: {this.props.anime.episodes}</li>
              </ul>
              {/* </Card.Text> */}
            </Card.Body>
          </Card>
        </Modal.Body>{' '}
        <Modal.Footer>
        <Button onClick={this.onAdd} >Add</Button>
        {this.props.showAlert && (
          <Alert variant="success">
          <Alert.Heading>Added to your watchlist</Alert.Heading>
          <p>
           To check your watchlist. Please go to    <Alert.Link href="/profile" >profile</Alert.Link> page
          </p>
        </Alert>
        )}
          <Button variant="primary" onClick={()=>{this.props.hide(); this.props.hideAlert()}}>
            Close
          </Button>
   
        </Modal.Footer>
      </Modal>
    );
  }
}
