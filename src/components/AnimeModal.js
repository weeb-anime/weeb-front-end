import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default class AnimeModal extends Component {
  render() {
    return (
      <Modal show={this.props.show} onHide={this.props.hide}>
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
          <Button variant="primary" onClick={this.props.hide}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}
