import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';

export default class AnimeModal extends Component {
  render() {
  return(
    <Modal show={this.props.showModal} onHide={this.props.hideModal}>
      <Modal.Header closeButton>
        <Modal.Title>{this.props.anime.title}</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Card>
          <Card.Body>
            <Card.Img variant="top" src={this.props.anime.image_url} alt={this.props.anime.description} />
            <Card.Text>
              <ul>
                <li>{this.props.anime.description}</li>
                <li>{this.props.anime.rating}</li>
                <li>{this.props.anime.score}</li>
                <li>{this.props.anime.episodes}</li>
              </ul>
            </Card.Text>
          </Card.Body>
        </Card>
      </Modal.Body>
    </Modal>
    )
}
}