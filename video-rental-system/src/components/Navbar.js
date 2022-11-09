import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';
import logo from '../img/logo.svg'
import {
     Nav,
     NavLink, 
     Bars,
     NavBtn, 
     NavMenu, 
     NavBtnlink
    } from './NavbarElement';



const Navbar = () => {
  return (
    <>

      <Nav> 

        <NavLink to="/"> 

        <img src={logo}  />

        </NavLink>

        <Bars />

        <NavMenu> 

                <NavLink to="/about" > 

                   About

                </NavLink> 

                <NavLink to="/services" > 

                    Services

                </NavLink> 

                <NavLink to="/contact-us" > 

                   Contact us

                </NavLink> 

                <NavLink to="/Sign-up" > 

                   Sign Up

                </NavLink> 

               
        </NavMenu>

        <NavBtn>

            <NavBtnlink to="signin"> Sign In </NavBtnlink>
            
        </NavBtn>

      </Nav>
      

    </>
  )
}

export default Navbar