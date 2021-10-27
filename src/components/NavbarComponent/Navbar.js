import React from 'react';
import { NavLink } from 'react-router-dom';
import {FaBars} from "react-icons/fa"
// import { SocialIcon } from 'react-social-icons';
import {
    MobileIcon,
    Navbar, 
    NavbarNav, 
    NavItem, 
    NavLogo, 
    NavSvg, 
    NavText,
} from './NavbarElements';

export default function Navigation({toggle}){
    return (
                <Navbar>
                    <NavLogo>Taylor Larson Wood Repair</NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars></FaBars>
                    </MobileIcon>
                    <NavbarNav>
                        {/* Navbar Home */}
                        <NavItem>
                            <NavLink to=''>
                                <NavText>Home</NavText>
                            </NavLink>
                        </NavItem>
                        {/* Navbar Art */}
                        <NavItem>
                            <NavLink to='/art'>
                                <NavText>Art</NavText>
                            </NavLink>
                        </NavItem>
                        {/* Navbar About */}
                        <NavItem>
                            <NavLink to='/aboutMe'>
                                <NavText>About Me</NavText>
                            </NavLink>
                        </NavItem>
                        {/* Navbar Project */}
                        <NavItem>
                            {/* <NavLink to='/project'>
                                <NavSvg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" data-prefix="fas" 
                                    data-icon="brush" class="svg-inline--fa fa-brush fa-w-12" role="img" viewBox="0 0 384 512">
                                        <path fill="currentColor" d="M352 0H32C14.33 0 0 14.33 0 32v224h384V32c0-17.67-14.33-32-32-32zM0 320c0 35.35 28.66 64 64 64h64v64c0 35.35 28.66 64 64 64s64-28.65 64-64v-64h64c35.34 0 64-28.65 64-64v-32H0v32zm192 104c13.25 0 24 10.74 24 24 0 13.25-10.75 24-24 24s-24-10.75-24-24c0-13.26 10.75-24 24-24z"/>
                                </NavSvg>
                                <NavText>Projects</NavText>
                            </NavLink> */}
                        </NavItem>
                    </NavbarNav>
                </Navbar>
)}

/*              <div>
                    <SocialIcon url='' 
                    target='_blank' fgColor='black' style={{height: 35, width: 35}} />
                    <SocialIcon url='' 
                    target='_blank' fgColor='black' style={{height: 35, width: 35}} />
                </div>*/