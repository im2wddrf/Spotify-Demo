import React, { Component } from 'react';
import Spotify from 'spotify-web-api-js';
// import RenderAlbums from './RenderAlbums';

// instantiate the class of spotify
const spotifyWebApi = new Spotify();

class App extends Component {

  constructor() {
    super();
    const params = this.getHashParams();
    this.state = {
      loggedIn: params.access_token ? true : false,
      access_token: params.access_token,
      nowPlaying: {
        name: 'Not Checked',
        image: ''
      },
      playlist_data: [],
      content: []
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

  renderLogIn() {
    if (!this.state.loggedIn) {
      return (
        <button className="ui positive button">
          <i className="sign in alternate icon"></i>
          Log in to spotify
        </button>
      );
    } else {
      return (
        <div>You are logged in!</div>
      );
    }
  }

  renderHeader() {
    if (!this.state.loggedIn) {
      return (
        <div className="ui dividing block red header">
          <h1>Oops! You need to log in!</h1>
        </div>
      );
    } else {
      return (
        <div className="ui dividing block blue header">
          <h1>Here are my playlists!</h1>
        </div>
      );
    }
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
        <div className="ui container raised segment">
          <a href="http://localhost:8888">
              { this.renderLogIn() }
              
              { this.state.loggedIn }
          </a>
        </div>

        <div className="ui container raised segment">  
          {this.renderHeader()}
          <div className="ui relaxed divided items">
            {
              this.state.playlist_data.map(playlist => {
                return <div className="item" key={ playlist.id }>
                  <img className="ui tiny image" src={playlist.images[0].url} alt={ playlist.name }></img>
                  <div className="content">
                    <div className="header">
                      <a href={ playlist.external_urls.spotify }>{playlist.name}</a>
                    </div>
                    <div className="description">Number of tracks: {playlist.tracks.total}</div>
                  </div>
                </div>;
              })
            }
          </div>
        </div>
        

      </div>
    )
  }
}

export default App;