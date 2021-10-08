import React from 'react'
import styled from 'styled-components'
import { useDataLayerValue } from './DataLayer';
import Header from './Header';
import PlayCircleFilledWhiteIcon from '@material-ui/icons/PlayCircleFilledWhite';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import SongRow from './SongRow';

function Body({spotify}) {
  const [{discover_Weekly}, dispatch] = useDataLayerValue();
    return (
        <Container>
            <Header spotify={spotify}/>
            <BodyInfo>
                <img src={discover_Weekly?.images[0].url}/>
                <InfoText>
                  <strong>PLAYLIST</strong>
                  <h2>Discover Weekly</h2>
                  <p>{discover_Weekly?.description}</p>
                </InfoText>
            </BodyInfo>
            <Song>
                <SongIcons>
                   <PlayCircleFilledWhiteIcon/>
                   <FavoriteIcon />
                   <MoreHorizIcon/>
                </SongIcons>

              {discover_Weekly?.tracks.items.map((item)=> (
                <SongRow track={item.track}/>
              ))}
            </Song>
        </Container>
    )
}

export default Body

const Container = styled.div`
  flex: 0.8;
  background: linear-gradient( rgb(91,87,115), rgba(0, 0, 0, 1));
  height: 100vh;
  color: white;
  padding: 30px;
  overflow-y: overlay;
  
  ::-webkit-scrollbar{
    display: none;
  }
`

const BodyInfo = styled.div`
  display:flex;
  align-items: flex-end;
  padding: 10px;
  img{
      height: 20vw;
      margin: 0 20px;
      box-shadow: 0 4px 60px rgba(0,0,0,0.5)
  }
`
const InfoText = styled.div`
  flex: 1;
  h2{
      font-size: 45px;
      margin-bottom: 10px;
  }
  p{
      font-size: 14px;
  }
`
const Song = styled.div`
  margin: 20px 10px
`
const SongIcons = styled.div`
  display:flex;
  align-items: center;

  
  svg{
    margin-right: 20px;
    color:  #1DB954;
    font-size: 80px ;

    &:hover{
      transition: 100ms transform ease-in;
      transform: scale(1.08);
      color:white;
    }
  }
`