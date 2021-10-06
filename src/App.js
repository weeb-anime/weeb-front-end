import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AnimeForm from './components/AnimeForm';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SuggestAnime from './components/SuggestAnime';
import Profile from './components/Profile';
import LoginButton from './components/LoginButton';
import { withAuth0 } from '@auth0/auth0-react';
import Header from './components/Header';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      anime: [],
      user: null,
    };
  }

  async componentDidMount() {
    console.log(
      'ComponentDidMount isAuthenticated:',
      this.props.auth0.isAuthenticated
    );
    if (this.props.auth0.isAuthenticated) {
      const res = await this.props.auth0.getIdTokenClaims();

      const jwt = res.__raw;

      const config = {
        headers: { Authorization: `Bearer ${jwt}` },
        method: 'get',
        baseURL: process.env.REACT_APP_API_URL,
        URL: '/anime',
      };
      const animeResponse = await axios(config);
      this.setState({ anime: animeResponse.data });
      this.setState({ user: this.props.auth0.user });
    }
  }

  getAnimeList = async animeInfo => {
    const animeURL = `${process.env.REACT_APP_API_URL}/anime?q=${animeInfo}`;
    console.log(animeURL)
    let animeResponse = await axios.get(animeURL);
    let animeData = animeResponse.data;
    console.log(animeData.results);
    this.setState({
      anime: animeData,
    });
  };
  render() {
    console.log('RENDER isAuthenticated:', this.props.auth0.isAuthenticated);
    // console.log('USER:', this.props.auth0.user);
    return (
      <>
        <Router>
          <Switch>
            <Route exact path="/">
              {this.props.auth0.isAuthenticated ? (
                <>
                  <Header />
                  <AnimeForm getAnimeList={this.getAnimeList} />
                  <SuggestAnime xxx={this.state.anime} />
                </>
              ) : (
                <>
                  <LoginButton />
                </>
              )}
            </Route>
            <Route path="/Profile">
              <Profile user={this.state.user} />
            </Route>
          </Switch>
        </Router>
      </>
    );
  }
}

export default withAuth0(App);
