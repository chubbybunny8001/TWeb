import styled from "styled-components";
import { NavLink as Link } from 'react-router-dom';



export const Navbar = styled.nav`
    background-color: grey;
    transition: width 600ms ease;
    overflow: hidden;
`;

export const NavbarNav = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: space-around;
`;


export const NavItem = styled.li`
display: inline-block;
    padding: .5rem;
`;


export const NavLink = styled(Link)`
    color: blue;
    text-decoration: none;
    height: 10rem;
`;


export const NavSvg = styled.svg`
    width: 2rem;
    height: 2rem;
    min-width: 2rem;
`;

export const NavText = styled.span`
    padding-bottom: 1rem;
    margin-left: 1rem;
`;