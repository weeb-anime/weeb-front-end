import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AnimeForm from './components/AnimeForm';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SuggestAnime from './components/SuggestAnime';
import Profile from './components/Profile';
import About from './components/About';
import LoginButton from './components/LoginButton';
import { withAuth0 } from '@auth0/auth0-react';
import Header from './components/Header';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      anime: [],
      user: null,
      favAnime: [],
      showAlert: false,
    };
  }

 
  handleAdd = async anime => {
    let url = process.env.REACT_APP_API_URL;
    const animeFav = {
      title: anime.title,
      description: anime.synopsis,
      image_url: anime.image_url,
      episodes: anime.episodes,
      score: anime.score,
      rating: anime.rated,
      email: this.props.auth0.user.email,
    };
    await axios.post(url + '/anime', animeFav);
    this.setState({
      showAlert: true,
    });
    this.getAnimeRefresh();
  };

  handleDelete = async raw => {
    const id = raw._id;
    const deleteURL = process.env.REACT_APP_API_URL;
    await axios.delete(deleteURL + '/anime/' + id);
    this.getAnimeRefresh();
  };

  getAnimeList = async animeInfo => {
    const animeURL = `${process.env.REACT_APP_API_URL}/anime?q=${animeInfo}`;
    console.log(animeURL);
    let animeResponse = await axios.get(animeURL);
    let animeData = animeResponse.data;
    console.log(animeData.results);
    this.setState({
      anime: animeData,
    });
  };
  hideAlert = () => {
    this.setState({
      showAlert: false,
    });
  };

  getAnimeRefresh = async () => {
    let url = process.env.REACT_APP_API_URL;
    let email = this.props.auth0.user.email;
    const animeData = await axios.get(url + '/user/' + email);
    console.log(animeData);
    this.setState({
      favAnime: animeData.data,
    });
  };

  render() {
    return (
      <>
        <Router>
          <Switch>
            <Route exact path="/">
              {this.props.auth0.isAuthenticated ? (
                <>
                  <div className="searchpage">
                  <Header />
                  <h1 className="welcome">Welcome to Weeb, {this.props.auth0.user.name}</h1>
                  <AnimeForm getAnimeList={this.getAnimeList} />
                    <SuggestAnime
                      xxx={this.state.anime}
                      handleAdd={this.handleAdd}
                      showAlert={this.state.showAlert}
                      hideAlert={this.hideAlert}
                    />
                  </div>
                </>
              ) : (
                <div className="login">
                  <div className="loginbox">
                    <LoginButton />
                  </div>
                </div>
              )}
            </Route>
            <Route path="/Profile">
              <Header />
              <div className="profilepage">
                <Profile
                  user={this.state.user}
                  favAnime={this.state.favAnime}
                  getAnimeRefresh={this.getAnimeRefresh}
                  handleDelete={this.handleDelete}
                />
              </div>
            </Route>
            <Route path="/About">
              <Header />
              <About />
            </Route>
          </Switch>
        </Router>
      </>
    );
  }
}

export default withAuth0(App);
