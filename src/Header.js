import React from 'react'
import styled from 'styled-components';
import SearchIcon from '@material-ui/icons/Search';
import { Avatar } from '@material-ui/core';
import { useDataLayerValue } from './DataLayer';

function Header() {
    const[ { user }, dispatch ] = useDataLayerValue();
    return (
        <Container>
           <Left>
             <SearchIcon/>
              <input
                  placeholder="Search for Artists and Songs"
                  type="text"
               />
           </Left>
           <Right>
               <Avatar src={user?.images[0]?.url} /> 
               <h4>{user?.display_name}</h4>   
           </Right> 
        </Container>
    )
}

export default Header

const Container = styled.div`
   display: flex;
   justify-content: space-between;
   margin-bottom: 30px; 
 
`
const Left = styled.div`
 flex: 0.5;
 min-width: 110px;
 background-color: white;
 color: gray;
 padding: 10px;
 border-radius: 30px;
 display: flex;
 align-items: center;

 input{
     border: none;
     width: 100%;
 }
`
const Right = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
 

  h4{
      margin-left: 5px;
  }
`