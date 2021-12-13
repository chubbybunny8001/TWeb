import React from "react";
import { FaBars } from "react-icons/fa";
// import { SocialIcon } from 'react-social-icons';
import { MobileIcon, Navbar, NavLogo, NavLogo1 } from "./NavbarElements";

export default function Navigation({ toggle }) {
  return (
    <Navbar>
      <NavLogo1>Taylor Larson Artwork</NavLogo1>
      <NavLogo>TL Art</NavLogo>
      <MobileIcon onClick={toggle}>
        <FaBars></FaBars>
      </MobileIcon>
    </Navbar>
  );
}

/*              <div>
                    <SocialIcon url='' 
                    target='_blank' fgColor='black' style={{height: 35, width: 35}} />
                    <SocialIcon url='' 
                    target='_blank' fgColor='black' style={{height: 35, width: 35}} />
                </div>*/
