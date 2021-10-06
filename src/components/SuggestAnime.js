import React from 'react';
import { Card } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Row } from 'react-bootstrap';

export default class SuggestAnime extends React.Component {

  render(
  ) {
    return (
      <>
        <Container>
          <Row xs={1} sm={1} md={2} lg={3}>
            {this.props.xxx.map((anime, index) => (
              <SingleAnime handleAdd ={this.props.handleAdd}anime={anime} key={index} />
            ))}
          </Row>
        </Container>
      </>
    )
  }
}

class SingleAnime extends React.Component {
  onAdd =()=> this.props.handleAdd(this.props.anime);
  
  render() {

    return (
      <>
        {this.props.anime.rated === ("PG-13" || "PG" || "G") && <>  <Card>
          <Card.Body><Card.Text as='h4'>
            <p>{this.props.anime.title}</p>
          </Card.Text>
            <Card.Img variant='bottom' src={this.props.anime.image_url} onClick={this.onAdd}/>
            <Button onClick={this.onAdd}>Add</Button>
          </Card.Body>
        </Card>
        </>}
      </>
    )
  }
}
// import { Component } from 'react';
// import Modal from 'react-bootstrap/Modal';
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card'

// class SelectedBeast extends Component {

//   render (){
// console.log(this.props)
//   return (
//     <>
//   <Modal  show={this.props.showModal} onHide={this.props.hideModal}>
// <Modal.Header closeButton/>
// <Modal.Body >
// <Card >
//   <Card.Img src ={this.props.selectedBeast.image_url}/>
//   <Card.Body>
//       <Card.Title>{this.props.selectedBeast.title}</Card.Title>
//       <Card.Text>{this.props.selectedBeast.description}</Card.Text>
//       <Card.Text>{this.props.selectedBeast.keyword}</Card.Text>
//     </Card.Body>
// </Card>
// </Modal.Body>
// </Modal> 

//     </>
//   );
// }
// }




// export default SelectedBeast;