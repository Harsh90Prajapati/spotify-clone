import React from 'react'
import styled from 'styled-components'

function SidebarOption({ title, Icon }) {
    return (
        <Containor>
          {Icon && <Icon className="Icon" />}
          {Icon ? <h4>{title}</h4> : <p>{title}</p>} 
        </Containor>
    )
}

export default SidebarOption

const Containor = styled.div`
    
    
    color: grey;
    cursor: pointer;
    transition: 200ms color ease-in;
    display: flex;
    padding: 20px 0 0 10px;

    &:hover{ 
        color: white;
    }
`
