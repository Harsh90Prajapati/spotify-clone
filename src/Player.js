import React from 'react';
import styled from 'styled-components';
import Sidebar from './Sidebar';
import Body from './Body';
import Footer from './Footer';

function Player({spotify}) {
    return (
        <Container>
           <Player_body>
             <Sidebar/>
             <Body spotify={spotify}/>
           </Player_body>

           
           <Footer/>
        </Container>
    )
}

export default Player

const Container = styled.div`
 
`
const Player_body = styled.div`
   display: flex;

`