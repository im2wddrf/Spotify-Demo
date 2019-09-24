import React from 'react';

const RenderAlbums = (props) => {
    
    const renderHeader = () => {
        if (!props.loggedIn || props.album_data.length === 0) {
          return (
            <div className="ui dividing block red header">
              <h1>Oops! You need to log in!</h1>
            </div>
          );
        } else {
          return (
            <div className="ui dividing block blue header">
              <h1>Here are my Albums!</h1>
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
                        props.album_data.map(albums => {
                            return <div className="item" key={ albums.album.id }>
                            <img className="ui tiny image" src={albums.album.images[0].url} alt={ albums.album.name }></img>
                            <div className="content">
                                <div className="header">
                                <a href={ albums.album.external_urls.spotify }>{albums.album.name}</a>
                                </div>
                                <div className="description">Number of tracks: {albums.album.tracks.total}</div>
                            </div>
                            </div>;
                        })
                    }
                </div>
            </div>

        </div>
    )
}

export default RenderAlbums;
