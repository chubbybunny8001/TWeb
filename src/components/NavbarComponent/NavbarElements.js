import styled from "styled-components";
import { NavLink as Link } from 'react-router-dom';



export const Navbar = styled.nav`
    background-color: #000000;
    overflow: hidden;
    display: flex;
    height: 5vh;
    width: 100%;
    align-items: center;
`;

export const NavLogo = styled.h1`
    margin: .25rem;
    margin-left: 1rem;
    padding: .15rem;
    color: #fdf8eb;
`;

export const NavbarNav = styled.ul`
    flex: 1;
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: space-evenly;

    @media screen and (max-width: 786px){
        display: none;
    }
`;

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 786px){
        margin: 0;
        padding: 0;
        display: block;
        position: absolute;
        top: -16.5px;
        right: -14px; 
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #fdf8eb;
    }
`;


export const NavItem = styled.li`
    text-decoration: none;
    padding: .5rem;
    display: flex;
    transition: all .4s;

    &:hover{
        transition: ease-in-out;
        font-size: 110%;
        text-decoration: underline;
    }

`;


export const NavLink = styled(Link)`
    height: 10rem;
`;


export const NavSvg = styled.svg`
    width: 2rem;
    height: 2rem;
    min-width: 2rem;
    color: #fdf8ec;
`;

export const NavText = styled.span`
    color: #fdf8ec;
    margin-left: 1rem;
    display: inline-block;
    text-decoration: none;
    
`;