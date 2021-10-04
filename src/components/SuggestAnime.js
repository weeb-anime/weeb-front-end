import React from 'react';
import { Card } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';

export default class SuggestAnime extends React.Component{
  
  render(
  ){
    console.log(this.props.xxx)
    return(
      <>
      <Container>
        <Card>
          <Card.Header>Anime List</Card.Header>
          <Row xs={1} sm ={1} md={2} lg={3}>
          {this.props.xxx.map((anime, index)=>(
            <SingleAnime anime={anime} key={index}/>
          ))}
          </Row>
        </Card>
      </Container>
      </>
    )
  }
}

class SingleAnime extends React.Component{
render(){
  return(
    <>
    <Card.Body>
      <Card.Text as ='h4'>
        <p>{this.props.anime.title}</p>
      </Card.Text>
      <Card.Img variant = 'bottom' src ={this.props.anime.image_url}/>
    </Card.Body>
    </>
  )
}
}