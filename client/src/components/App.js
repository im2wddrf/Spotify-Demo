import React, { Component } from 'react';
import Spotify from 'spotify-web-api-js';
import RenderHeader from './RenderHeader';
import RenderPlaylist from './RenderPlaylist';

// instantiate the class of spotify
const spotifyWebApi = new Spotify();

class App extends Component {

  constructor() {
    super();
    const params = this.getHashParams();
    this.state = {
      loggedIn: params.access_token ? true : false,
      access_token: params.access_token,
      playlist_data: []
    }

    if (params.access_token) {
      spotifyWebApi.setAccessToken(params.access_token)
    }

  }

  
  // this function is a promise
  componentDidMount() {
    spotifyWebApi.getUserPlaylists()
      .then((response) => {
        this.setState({ playlist_data: response.items});
      })
      .catch(() => {
        return null;
      });
  }

  
  

  getHashParams() {
    var hashParams = {};
    var e, r = /([^&;=]+)=?([^&;]*)/g,
        q = window.location.hash.substring(1);
    while ( e = r.exec(q)) {
       hashParams[e[1]] = decodeURIComponent(e[2]);
    }
    return hashParams;
  }

  

  render() {
    return (
      <div className="ui container">
        
        <RenderHeader loggedIn={this.state.loggedIn} playlist_data={this.state.playlist_data} />

        <RenderPlaylist loggedIn={this.state.loggedIn} playlist_data={this.state.playlist_data} />
        
      </div>
    )
  }
}

export default App;