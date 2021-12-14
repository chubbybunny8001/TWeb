import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";

export const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  background: linear-gradient(rgba(112, 194, 191, 0), #acc8e5);
  overflow: hidden;
  display: flex;
  height: 10vh;
  width: 100%;
  align-items: center;
`;

export const NavLogo = styled.h1`
  display: none;
  text-align: center;
  margin-left: 10vw;
  font-size: 10vmin;
  color: black;
  @media (max-width: 480px) {
    display: initial;
    width: fit-content;
  }
`;
export const NavLogo1 = styled.h1`
  text-align: center;
  margin-left: 2.5vw;
  font-size: 5vmin;
  color: black;
  @media (max-width: 480px) {
    display: none;
  }
`;

export const MobileIcon = styled.div`
  font-size: 1.8rem;
  margin-right: 1.5vw;
  cursor: pointer;
  color: black;
  transition: 1s ease;
  &:hover {
    color: #407fa0;
  }
  @media (max-width: 786px) {
    margin-right: 5vw;
  }
`;

export const NavLink = styled(Link)`
  height: 10rem;
`;

export const NavText = styled.span`
  color: #2f5c75;
  margin: auto;
  display: inline-block;
  text-decoration: none;
  transition: all 0.4s;

  &:hover {
    font-size: 110%;
    text-decoration: underline;
  }
`;
