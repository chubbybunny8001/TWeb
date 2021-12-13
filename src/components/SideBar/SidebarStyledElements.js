import styled, { keyframes } from "styled-components";
import { FaTimes } from "react-icons/fa";
import { NavLink as LinkS } from "react-router-dom";

export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 777;
  width: 100%;
  height: 100%;
  background: #0d0d0d;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`;

export const CloseIcon = styled(FaTimes)`
  color: #2f5c75;
  transition: 1s ease;
  &:hover {
    color: #70c2bf;
  }
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

export const SidebarWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  color: #2f5c75;
`;

export const SidebarMenu = styled.ul`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const bg_change = keyframes`
    0%,100% {
        background: linear-gradient(to right, rgba(112, 194, 191, 0.0), black)
    }
    50%{
        background-color: rgba(112, 194, 191, 0.8)
    }
`;

export const SidebarLink = styled(LinkS)`
  display: flex;
  align-items: center;
  height: 100%;
  padding-left: 10%;
  font-size: 10vmin;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  text-decoration: none;
  color: #2f5c75;
  cursor: pointer;

  &:hover {
    color: #fdf8eb;
    transition: 0.2s ease-in-out;
    animation: ${bg_change} 3s ease-in-out;
    animation-fill-mode: backwards;
    animation-iteration-count: infinite;
  }
`;
