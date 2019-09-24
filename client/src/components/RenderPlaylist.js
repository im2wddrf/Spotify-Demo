import React from 'react';
import static_image from './jangofett.jpg';     // this image will be a place holder for playlists that have no image returned 

const RenderPlaylist = (props) => {
    
    const renderHeader = () => {
        if (!props.loggedIn || props.playlist_data.length === 0) {
          return (
            <div className="ui dividing block red header">
              <h1>Oops! You need to log in!</h1>
            </div>
          );
        } else {
          return (
            <div className="ui dividing block blue header">
              <h1>Here are my Playlists!</h1>
            </div>
          );
        }
      }
    
    return (
        <div>
            
            <div className="ui container raised segment">  
                {renderHeader()}
                <div className="ui relaxed divided items">
                    {
                        props.playlist_data.map(playlist => {
                            return <div className="item" key={ playlist.id }>
                            <img className="ui tiny image" src={playlist.images.length === 0 ? static_image : playlist.images[0].url} alt={ playlist.name }></img>
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

export default RenderPlaylist
