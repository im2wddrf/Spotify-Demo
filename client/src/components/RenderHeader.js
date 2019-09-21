import React from 'react'



const RenderHeader = (props) => {
    
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
            <div>You are logged in!</div>
          );
        }
      }


    

    return (
        <div>
            <div className="ui container raised segment">
                <a href="http://localhost:8888">
                    { renderLogIn() }
                </a>
            </div>
        </div>
    );
}

export default RenderHeader;
