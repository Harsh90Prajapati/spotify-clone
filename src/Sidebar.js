import React from 'react'
import styled from 'styled-components'
import SidebarOption from './SidebarOption'
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import {useDataLayerValue} from "./DataLayer";

function Sidebar() {
  const [{ playlists } ,  dispatch] = useDataLayerValue();

    return (
        <Container>
           <img src="https://www.pngkey.com/png/full/190-1907978_spotify-logo-png-white-spotify-logo-white-transparent.png" />
           <SidebarOption Icon={HomeIcon} title="Home"/>
           <SidebarOption Icon={SearchIcon} title="Search"/>
           <SidebarOption Icon={LibraryMusicIcon} title="Your Library"/>

           <br/>
           <Strong>PLAYLIST</Strong>
           <hr/>
           {playlists?.items?.map(playlist =>(
               <SidebarOption Icon={LibraryMusicIcon} title={playlist.name}/>
             ))
            }
        </Container>
    )
}

export default Sidebar

const Container = styled.div`
  height: auto;
  flex:0.2;
  background-color: #040404;
  color: white;
  min-width: 230px;
  padding:0 10px 0 10px;
  img{
      object-fit: contain;
      padding-top: 20px;
      width: 100%;
      opacity: 0.7 ;
      cursor: pointer;
    }
  hr{
      border: 1px solid #282828;
      width: 90%;
      margin: 10px auto;
  }
`
const Strong = styled.a`
  margin-left: 10px;
  padding: 5px;
  font-size: 12px;
`
