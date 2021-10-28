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
    display: none;
    text-align: center;
    width: 30%;
    margin: auto;
    margin-left: 1rem;
    padding: .15rem;
    color: #fdf8eb;
    @media (max-width: 480px){
        display: initial;
        width: fit-content;
    }
`;
export const NavLogo1 = styled.h1`
    text-align: center;
    width: fit-content;
    margin: auto;
    margin-left: 4%;
    margin-right: 15%;
    padding: .15rem;
    color: #fdf8eb;
    @media (max-width: 480px){
        display: none;
    }
`;

export const NavbarNav = styled.ul`
    flex: 1;
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: space-evenly;
    text-align: end;
`;

export const MobileIcon = styled.div`
    @media screen and (max-width: 786px){
        margin: auto;
        text-align: end;
        font-size: 1.8rem;
        margin-right: 3%;
        cursor: pointer;
        color: #fdf8eb;
    }
`;


export const NavItem = styled.li`
    text-decoration: none;
    display: flex;
    margin: auto;
    @media screen and (max-width: 786px){
        display: none;
    }
`;

export const NavItem1 = styled.li`
    display: none;
    @media (max-width: 786px){
        text-decoration: none;
        display: flex;
        margin-left: 70%;
        margin-top: 2%;
        display: initial;
    }
`;

export const NavLink = styled(Link)`
    height: 10rem;
`;

export const NavText = styled.span`
    color: #fdf8ec;
    margin: auto;
    display: inline-block;
    text-decoration: none;
    transition: all .4s;

    &:hover{
        font-size: 110%;
        text-decoration: underline;
    }
`;