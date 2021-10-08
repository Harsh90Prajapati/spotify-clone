import React from 'react'
import styled from 'styled-components'

function SongRow({track}) {
    return (
        <Container>
            <img src={track.album.images[0].url}/>
            <SongInfo>
                <h1>{track.name}</h1>
                <p>{track.artists.map((artist) => artist.name).join(", ")} -{" "}{track.album.name}</p>
            </SongInfo>
        </Container>
    )
}

export default SongRow

const Container = styled.div`
  margin: 20px;
  padding: 20px;
  display: flex;
  align-items: center;
  color: white;

  img{
      height: 40px;
      width: 40px;
  }

  &:hover{
      cursor: pointer;
      background-color: black;
      opacity: 0.8;
  }
`
const SongInfo = styled.div`
  margin-left: 20px;
  
  h1{
      font-size: 16px;
  }
  p{
      font-size: 15px;
      margin-top: 3px;
      color: gray;
  }
`
