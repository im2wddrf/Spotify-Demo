import React from 'react';

const RenderAlbums = (props) => {
    
    const renderHeader = () => {
        if (!props.loggedIn || props.artist_data.length === 0) {
          return (
            <div className="ui dividing block red header">
              <h1>Oops! You need to log in!</h1>
            </div>
          );
        } else {
          return (
            <div className="ui dividing block blue header">
              <h1>Here are my Artists!</h1>
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
                        props.artist_data.map(artists => {
                            return <div className="item" key={ artists.id }>
                            <img className="ui tiny image" src={artists.images[0].url} alt={ artists.name }></img>
                            <div className="content">
                                <div className="header">
                                <a href={ artists.external_urls.spotify }>{artists.name}</a>
                                </div>
                                
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
