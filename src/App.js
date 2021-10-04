
import './App.css';
import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import AnimeForm from './components/AnimeForm';
import axios from "axios";
import SuggestAnime from './components/SuggestAnime';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      anime: []
    }
  }
  getAnimeList = async (animeInfo) => {
    const animeURL = `https://api.jikan.moe/v3/search/anime?q=${animeInfo}`

    let animeResponse = await axios.get(animeURL)
    let animeData = animeResponse.data
    console.log(animeData.results)
    this.setState({
      anime: animeData.results
    })
  }
  render(){
    return(
      <>
      <h1>hell yeah baby</h1>
      <AnimeForm getAnimeList={this.getAnimeList}/>
      <SuggestAnime xxx={this.state.anime}/>
      </>
    )
  }
}

export default App;
