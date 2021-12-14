import styled, { keyframes } from "styled-components";

const bg_ripple = keyframes`
  0%{
    left: -40%;
  }
  50%{
    left: 60%;
  }
  100%{
    left: -40%%;
  }
`;

const bg_ripple2 = keyframes`
  0%{
    left: -20%;
  }
  50%{
    left: 80%;
  }
  100%{
    left: -20%%;
  }
`;

const text_fadeout = keyframes`
  0%{
    color:  black;
    z-index: 6;
  }
  100%{
    color: #acc8e5;
    z-index:1;
  }
`;

const text_fadeout2 = keyframes`
  0%{
    color:  black;
    z-index: 2;
  }
  100%{
    color: transparent;
    z-index:0;
  }
`;

const move_animation = keyframes`
  from{
    left: 0;
  }
  to{
    left: -100%;
    opacity: .0;
  }
`;

const move_to_top = keyframes`
  from{
    z-index: 0;
  }
  to{
    z-index: 10;
  }
`;

export const ContentContainer = styled.div`
  width: 100%;
  height: 85vh;
  background-color: #acc8e5;
  display: flex;
  overflow: hidden;
`;

export const HomePageContent = styled.div`
  width: 100%;
  height: 100%;
  background-color: red;
  animation: ${move_to_top} 1s linear 7s infinite normal forwards;
`;

export const HomeCoverAnimationBlock = styled.div`
  position: absolute;
  top: 0;
  left: -100%;
  display: flex;
  justify-content: center;
  align-items: center;
  &.needsAnimation {
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: #acc8e5;
    animation: ${move_animation} 1s ease-out 6s 1 normal forwards;
  }
`;

export const HomeCoverAnimationColumn = styled.div`
  position: absolute;
  z-index: 9;
  background-color: #2f5c75;
  top: 0;
  left: -40%;
  width: 40vw;
  height: 100vh;
  &.needsAnimation {
    animation: ${bg_ripple} 4s ease-in-out 1s;
  }
`;

export const HomeCoverAnimationColumn2 = styled.div`
  position: absolute;
  z-index: 999;
  background-color: #2f5c75;
  top: 0;
  left: -40%;
  width: 20vw;
  height: 100vh;
  &.needsAnimation {
    animation: ${bg_ripple2} 4s ease-in-out 1.5s;
  }
`;

export const HomeCoverAnimationHeader = styled.h2`
  font-size: 10vmin;
  z-index: 2;
  &.needsAnimation {
    animation: ${text_fadeout} 0.2s ease-out 2.2s;
    animation-fill-mode: both;
  }
`;

export const HomeCoverAnimationBlock2 = styled.div`
  position: absolute;
  top: 0;
  left: -100%;
  display: flex;
  justify-content: center;
  align-items: center;
  &.needsAnimation {
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: transparent;
    animation: ${move_animation} 1s ease-out 6s 1 normal forwards;
  }
`;

export const HomeCoverAnimationHeader2 = styled.h2`
  font-size: 8vmin;
  text-align: center;
  width: 60%;
  color: transparent;
  &.needsAnimation {
    animation: ${text_fadeout2} 0.4s ease-out 3.7s 1 reverse;
    animation-fill-mode: forwards;
    z-index: 2;
  }
`;
