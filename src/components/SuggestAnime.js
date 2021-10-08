import React from 'react';
import { Card } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import AnimeModal from './AnimeModal';
import './SuggestAnime.css';


export default class SuggestAnime extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedAnime: {},
      showModal: false,
    };
  }
  showModal = anime => {
    this.setState({ selectedAnime: anime });
    this.setState({ showModal: true });
  };

  hideModal = () => {
    this.setState({ showModal: false });
  };

  render() {
    return (
      <>
        <Container>
          <Row xs={1} sm={1} md={2} lg={3}>
            {this.props.xxx.map((anime, index) => (
              <SingleAnime
                anime={anime}
                key={index}
                handleClick={this.showModal}
              />
            ))}
          </Row>
        </Container>
        <AnimeModal
          handleAdd={this.props.handleAdd}
          show={this.state.showModal}
          hide={this.hideModal}
          anime={this.state.selectedAnime}
          showAlert={this.props.showAlert}
          hideAlert={this.props.hideAlert}
        />
      </>
    );
  }
}

class SingleAnime extends React.Component {
  onSelect = () => this.props.handleClick(this.props.anime);

  render() {
    return (
      <>
        {this.props.anime.rated === ('PG-13' || 'PG' || 'G') && (
          <>
            {' '}
            <Card className = "card">
              <Card.Body className="card-body">
                <Card.Title className="card-title"as="h4">
                  <p>{this.props.anime.title}</p>
                </Card.Title>
                <Card.Img
                  variant="bottom"
                  src={this.props.anime.image_url}
                  onClick={this.onSelect}
                />
              </Card.Body>
            </Card>
          </>
        )}
      </>
    );
  }
}
