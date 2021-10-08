import React from 'react'
import styled from 'styled-components'
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import RepeatIcon from '@material-ui/icons/Repeat';
import VolumeDownIcon from '@material-ui/icons/VolumeDown';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import { Grid,Slider } from '@material-ui/core';


function Footer({track}) {
    return (
        <Container>
            <Left>
               <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Circle-icons-music.svg/1200px-Circle-icons-music.svg.png" alt="" />
               <SongInfo>
                   <h4>Playlist</h4>
                   <p>user</p>
               </SongInfo>
            </Left>
            <Center>
               <ShuffleIcon ClassName="shuff"/>
               <SkipPreviousIcon ClassName="skip_prev" cursor="pointer"/>
               <PlayCircleOutlineIcon
               fontSize="large" ClassName="play_circle" cursor="pointer" />
               <SkipNextIcon ClassName="skip_next" cursor="pointer"/>
               <RepeatIcon ClassName="repeat"/> 
            </Center>
            <Right>
                <Grid container spacing={2}>
                    <Grid item>
                        <PlaylistPlayIcon/>
                    </Grid>
                    <Grid item>
                        <VolumeDownIcon/>
                    </Grid>
                    <Grid item xs>
                        <Slider/>
                    </Grid>
                </Grid>
            </Right>
        </Container>
    )
}

export default Footer;

const Container = styled.div`
  position : fixed;
  display: flex;
  justify-content : space-between;
  bottom: 0;
  height: 65px;
  width: 100%;
  background-color: #282828;
  padding: 20px;
  color: white;
  
`
const Left = styled.div`
 flex: 0.3;
 display: flex;
 align-items : center;
 width: 300px;
  img{
      height: 60px;
      width: 60px;
      margin-right: 20px;
      object-fit: contain; 
  }
`
const Center = styled.div`
  flex: 0.4;
  padding: 0 100px;
  display: flex;
  justify-content : space-between;
  align-items : center;
  max-width: 300px;
  svg{

    &:hover{
        transition: 100ms transform ease-in;
        transform: scale(1.08);
        color: #1DB954;          
    }
  }
`
const Right = styled.div`
  flex: 0.3;
  display: flex;
  justify-content : space-between;
  align-items : center;
  span{
      color: #1DB954; 
     
      MuiSlider-root{
        width: 100px;
    }
  }
`
const SongInfo = styled.div`
`
