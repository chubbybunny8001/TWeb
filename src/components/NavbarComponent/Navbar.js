import React from 'react';
import { NavLink } from 'react-router-dom';
// import { SocialIcon } from 'react-social-icons';
import {
    Navbar, 
    NavbarNav, 
    NavItem, 
    NavSvg, 
    NavText,
} from './NavbarElements';

export default function Navigation(){
    return (
                <Navbar>
                    <NavbarNav>
                        {/* Navbar Home */}
                        <NavItem>
                            <NavLink to=''>
                                <NavSvg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" 
                                    data-prefix="fas" data-icon="home" class="svg-inline--fa fa-home fa-w-18" role="img" 
                                    viewBox="0 0 576 512">
                                        <path fill="currentColor" d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"/>
                                </NavSvg>
                                <NavText>Home</NavText>
                            </NavLink>
                        </NavItem>
                        {/* Navbar Art */}
                        <NavItem>
                            <NavLink to='/art'>
                                <NavSvg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" 
                                    data-prefix="fas" data-icon="palette" class="svg-inline--fa fa-palette fa-w-16" role="img" 
                                    viewBox="0 0 512 512">
                                        <path fill="currentColor" d="M204.3 5C104.9 24.4 24.8 104.3 5.2 203.4c-37 187 131.7 326.4 258.8 306.7 41.2-6.4 61.4-54.6 42.5-91.7-23.1-45.4 9.9-98.4 60.9-98.4h79.7c35.8 0 64.8-29.6 64.9-65.3C511.5 97.1 368.1-26.9 204.3 5zM96 320c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm32-128c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128-64c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128 64c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z"/>
                                </NavSvg>
                                <NavText>Art</NavText>
                            </NavLink>
                        </NavItem>
                        {/* Navbar About */}
                        <NavItem>
                            <NavLink to='/aboutMe'>
                                <NavSvg xmlns="http://www.w3.org/2000/svg" 
                                    aria-hidden="true" focusable="false" data-prefix="far" data-icon="address-card" 
                                    class="svg-inline--fa fa-address-card fa-w-18" role="img" viewBox="0 0 576 512">
                                        <path fill="currentColor" d="M528 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h480c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm0 400H48V80h480v352zM208 256c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm-89.6 128h179.2c12.4 0 22.4-8.6 22.4-19.2v-19.2c0-31.8-30.1-57.6-67.2-57.6-10.8 0-18.7 8-44.8 8-26.9 0-33.4-8-44.8-8-37.1 0-67.2 25.8-67.2 57.6v19.2c0 10.6 10 19.2 22.4 19.2zM360 320h112c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8H360c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8zm0-64h112c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8H360c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8zm0-64h112c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8H360c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8z"/>
                                </NavSvg>
                                <NavText>About Me</NavText>
                            </NavLink>
                        </NavItem>
                        {/* Navbar Project */}
                        <NavItem>
                            <NavLink to='/project'>
                                <NavSvg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" data-prefix="fas" 
                                    data-icon="brush" class="svg-inline--fa fa-brush fa-w-12" role="img" viewBox="0 0 384 512">
                                        <path fill="currentColor" d="M352 0H32C14.33 0 0 14.33 0 32v224h384V32c0-17.67-14.33-32-32-32zM0 320c0 35.35 28.66 64 64 64h64v64c0 35.35 28.66 64 64 64s64-28.65 64-64v-64h64c35.34 0 64-28.65 64-64v-32H0v32zm192 104c13.25 0 24 10.74 24 24 0 13.25-10.75 24-24 24s-24-10.75-24-24c0-13.26 10.75-24 24-24z"/>
                                </NavSvg>
                                <NavText>Current Project</NavText>
                            </NavLink>
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