import React , {useEffect, useState} from 'react';
import './App.css';
import Login from './Login';
import { getTokenfromUrl } from './Spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './Player';
import { useDataLayerValue } from './DataLayer';
 const spotify = new SpotifyWebApi();

function App() {
  const[ { user , token }, dispatch ] = useDataLayerValue();

  useEffect(() => {
    const hash = getTokenfromUrl();
    window.location.hash ="";
    const _token = hash.access_token;
    
    if (_token) {
      
      dispatch({
        type: 'SET_TOKEN',
        token: _token,
      }) 

      spotify.setAccessToken(_token);

      spotify
      .getMe()
      .then(user => {
        dispatch({
          type: 'SET_USER',
          user:user,
        }) 
      })

      spotify.getUserPlaylists().then((playlists) =>{
        dispatch({
          type: 'SET_PLAYLIST',
          playlists:playlists
        })
      })
      
      spotify.getPlaylist('2Xrh7W4812KTMDGnWttIsc').then(response =>
        dispatch({
          type:"SET_DISCOVER_WEEKLY",
          discover_Weekly:response,
        })
        )
    }

  }, []);
  return (
    <div className="App">
      {
        token ?(
          <Player spotify={spotify}/>
        ) : (
          <Login/>
        )
      }
    </div>
  );
}

export default App;
