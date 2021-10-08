import React from 'react';
import styled from "styled-components";
import { loginUrl } from './Spotify';
const Login = (props) => {
  return (
    <Container>
       <img 
         src="https://upload.wikimedia.org/wikipedia/commons/5/56/Spotify_logo_horizontal_black.jpg"
         alt="" 
       />
       <Button href={loginUrl}>Login With Spotify Account</Button>
    </Container>
  );
};

const Container = styled.section`
     display: grid;
     place-items: center;
     height: 105vh;
     background-color: black;


  img{
    width: 100%;
  } 
`
const Button = styled.a`
 border-radius: 100px;
 padding: 20px;
 background-color: #32a852;
 font-weight: bold;
 color: white;
 text-decoration: none;
 cursor: pointer;
`

export default Login;
