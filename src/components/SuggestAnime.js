import React from 'react';
import { Card } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import AnimeModal from './AnimeModal';

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
                handleAdd={this.props.handleAdd}
                anime={anime}
                key={index}
                handleClick={this.showModal}
              />
            ))}
          </Row>
        </Container>
        <AnimeModal
          show={this.state.showModal}
          hide={this.hideModal}
          anime={this.state.selectedAnime}
        />
      </>
    );
  }
}

class SingleAnime extends React.Component {
  onAdd = () => this.props.handleAdd(this.props.anime);
  onSelect = () => this.props.handleClick(this.props.anime);

  render() {
    return (
      <>
        {this.props.anime.rated === ('PG-13' || 'PG' || 'G') && (
          <>
            {' '}
            <Card>
              <Card.Body>
                <Card.Text as="h4">
                  <p>{this.props.anime.title}</p>
                </Card.Text>
                <Card.Img
                  variant="bottom"
                  src={this.props.anime.image_url}
                  onClick={this.onSelect}
                />
                <Button onClick={this.onAdd}>Add</Button>
              </Card.Body>
            </Card>
          </>
        )}
      </>
    );
  }
}
