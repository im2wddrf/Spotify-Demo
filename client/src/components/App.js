import React, { Component } from 'react';
import Spotify from 'spotify-web-api-js';
import MenuBar from './MenuBar';
import RenderPlaylist from './RenderPlaylist';
import RenderArtists from './RenderArtists';
import RenderAlbums from './RenderAlbums';

// instantiate the class of spotify
const spotifyWebApi = new Spotify();

class App extends Component {

  constructor() {
    super();
    const params = this.getHashParams();
    this.state = {
      loggedIn: params.access_token ? true : false,
      access_token: params.access_token,
      playlist_data: [],
      album_data: [],
      artist_data: [],
      selection : ''
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

      spotifyWebApi.getMySavedAlbums()
      .then((response) => {
        this.setState({ album_data: response.items});
      })
      .catch(() => {
        return null;
      });

      spotifyWebApi.getMyTopArtists()
      .then((response) => {
        this.setState({ artist_data: response.items});
      })
      .catch((err) => {
        return err;
      });
  }

  changeSelection = (event) => {
    this.setState({ selection: event.currentTarget.value });
    console.log(event.currentTarget.value);
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
    switch (this.state.selection) {
      case 'playlists':
        return (
          <div className="ui container">
            <MenuBar loggedIn={this.state.loggedIn} playlist_data={this.state.playlist_data} changeSelection={this.changeSelection} />
            <RenderPlaylist loggedIn={this.state.loggedIn} playlist_data={this.state.playlist_data} />
          </div>
        )
      case 'artists':
        return (
          <div className="ui container">
            <MenuBar loggedIn={this.state.loggedIn} playlist_data={this.state.playlist_data} changeSelection={this.changeSelection} />
            <RenderArtists loggedIn={this.state.loggedIn} artist_data={this.state.artist_data} />
          </div>
        )
      case 'albums':
        return (
          <div className="ui container">
            <MenuBar loggedIn={this.state.loggedIn} playlist_data={this.state.playlist_data} changeSelection={this.changeSelection}/>
            <RenderAlbums loggedIn={this.state.loggedIn} album_data={this.state.album_data} />
          </div>
        )
      default:
        return (
          <div className="ui container">
            <MenuBar loggedIn={this.state.loggedIn} playlist_data={this.state.playlist_data} changeSelection={this.changeSelection} />
            <RenderPlaylist loggedIn={this.state.loggedIn} playlist_data={this.state.playlist_data} />
          </div>
        );
    }
  }
}

export default App;