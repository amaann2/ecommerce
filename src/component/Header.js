import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'
import Nav from './Nav'

const Header = () => {
  return (
    <MainHeader>
        <NavLink to="/">
            <img src="./images/logoo.png" alt="logo" className='logo'/>
            
        </NavLink>
        <Nav/>
    </MainHeader>
  )
}
const MainHeader = styled.header`

     display:flex;
     align-items:center;
     justify-content:space-between;
     padding:23px;
     height:7.5rem;
     position:relative;
     background-color:${({ theme })=> theme.colors.bg};
    
    .logo{
        height: 15rem;
        width:20rem;
    }
`;

export default Header