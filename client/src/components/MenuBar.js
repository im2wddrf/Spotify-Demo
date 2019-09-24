import React from 'react'



const MenuBar = (props) => {
    
  // ima use the playlist array as a proxy for whether data was fetched generally
  const renderLogIn = () => {
      if (!props.loggedIn || props.playlist_data.length === 0) {
        return (
          <button className="ui positive button">
            <i className="sign in alternate icon"></i>
            Log in to spotify
          </button>
        );
      } else {
        return (
          <div className="ui gray button">You are logged in!</div>
        );
      }
    }


  

  return (
      <div className="ui inverted segment">
          <div className="ui inverted secondary pointing menu">
            
            
            <button className="ui inverted blue button" value="playlists" onClick={ props.changeSelection } style={{cursor: 'pointer'}}>My Playlists</button>
            <button className="ui inverted violet button" value="artists" onClick={ props.changeSelection } style={{cursor: 'pointer'}}>My Artists</button>
            <button className="ui inverted purple button" value="albums" onClick={ props.changeSelection } style={{cursor: 'pointer'}}>My Albums</button>

            <div className="right menu">
              {/* this will be the login button */}
              <a href="http://localhost:8888">
                { renderLogIn() }
              </a>
            </div>
            
          </div>
      </div>
  );
}

export default MenuBar;
