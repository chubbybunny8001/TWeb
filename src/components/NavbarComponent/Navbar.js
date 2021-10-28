import React from 'react';
import { NavLink } from 'react-router-dom';
import {FaBars} from "react-icons/fa"
// import { SocialIcon } from 'react-social-icons';
import {
    MobileIcon,
    Navbar, 
    NavbarNav, 
    NavItem, 
    NavItem1, 
    NavLogo, 
    NavLogo1,
    NavText,
} from './NavbarElements';

export default function Navigation({toggle}){
    return (
                <Navbar>
                    <NavLogo1>Taylor Larson Wood Repair</NavLogo1>
                    <NavLogo>TL Wood</NavLogo>
                    <NavbarNav>
                        {/* Navbar Home */}
                        <NavItem>
                            <NavLink to=''>
                                <NavText>Home</NavText>
                            </NavLink>
                        </NavItem>
                        {/* Navbar Projects */}
                        <NavItem>
                            <NavLink to='/art'>
                                <NavText>Projects</NavText>
                            </NavLink>
                        </NavItem>
                        {/* Navbar About */}
                        <NavItem>
                            <NavLink to='/aboutMe'>
                                <NavText>About Me</NavText>
                            </NavLink>
                        </NavItem>
                        <NavItem1>
                            <MobileIcon onClick={toggle}>
                                <FaBars></FaBars>
                            </MobileIcon>
                        </NavItem1>
                    </NavbarNav>
                </Navbar>
)}

/*              <div>
                    <SocialIcon url='' 
                    target='_blank' fgColor='black' style={{height: 35, width: 35}} />
                    <SocialIcon url='' 
                    target='_blank' fgColor='black' style={{height: 35, width: 35}} />
                </div>*/