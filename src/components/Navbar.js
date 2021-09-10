import React from 'react';
import { NavLink } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';

export default function About(){
    return (

        <header style={{marginTop: '15px'}}>
            <div style={{display: 'flex', justifyContent:'center'}}>
                <nav style={{width: '100%', display: 'flex', justifyContent: 'space-around', fontWeight: "bold"}}>
                    {
                    //Website Navigation...
                    }
                    <NavLink to='/'>
                        Home
                    </NavLink>
                    <NavLink to='/art'>
                        Art
                    </NavLink>
                    <NavLink to='/project'>
                        Current Project
                    </NavLink>
                    <NavLink to='aboutMe'>
                        About Me
                    </NavLink>

                    {
                    //Socials Navigation...
                    }

                    <SocialIcon url='https://www.instagram.com/tastla1/' 
                    target='_blank' fgColor='black' style={{height: 35, width: 35}} />
                </nav>
            </div>
        </header>

    
)}

/*              <div>
                    <SocialIcon url='' 
                    target='_blank' fgColor='black' style={{height: 35, width: 35}} />
                    <SocialIcon url='' 
                    target='_blank' fgColor='black' style={{height: 35, width: 35}} />
                </div>*/