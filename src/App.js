
import './App.css';
import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import AnimeForm from './components/AnimeForm';
import axios from "axios";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import SuggestAnime from './components/SuggestAnime';
import Profile from './components/Profile'

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      anime: [],
      user: null
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
      <Router>
        <Switch>
          <Route path='/profile'>
            <Profile/>
          </Route>
          <Route>
      <h1>hell yeah baby</h1>
      <AnimeForm getAnimeList={this.getAnimeList}/>
      <SuggestAnime xxx={this.state.anime}/>
      </Route>
      </Switch>
      </Router>
      </>
    )
  }
}

export default App;
