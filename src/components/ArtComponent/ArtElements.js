import styled from "styled-components";
import BlockContent from "@sanity/block-content-to-react";

export const ProjectsContentContainer = styled.div`
  width: 100%;
  height: 85vh;
  overflow: scroll;
  overflow-x: hidden;
  background-color: #acc8e5;

  &::-webkit-scrollbar {
    width: 5px;
    border: 1px solid grey;
  }
  &::-webkit-slider-thumb {
    -webkit-appearancen: none;
    width: 5px;
    height: 5px;
    background-color: grey;
  }
`;

export const ProjectsHeadingContainer = styled.section`
  text-align: center;
  align-items: center;
`;

export const ProjectsHeading = styled.h1`
  height: 5vh;
  font-size: 8vmin;
  margin-bottom: 5vh;
`;

export const SlideShow = styled.div`
  width: 100%;
  height: 100%;
`;

export const SlideShowSlider = styled.div``;

export const Slide = styled.div`
  width: 100vw;
  height: 85vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 40px;
  @media (max-width: 786px) {
    flex-direction: column;
  }
`;

export const Spacer = styled.div`
  width: 100%;
  margin-top: 5vh;
`;

export const SlideImgCont = styled.div`
  display: flex;
  width: 50%;
  @media (max-width: 786px) {
    width: 100%;
  }
`;

export const ImgCont = styled.div`
  width: 80%;
  margin: auto;
  @media (max-width: 786px) {
    width: 55%;
  }
`;

export const SlideImg = styled.img`
  width: 100%;
  border: solid;
  border-width: 5px;
  border-radius: 15px;
`;

export const SlideBodyCont = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 786px) {
    width: 100%;
  }
`;

export const BodyCont = styled.div`
  width: 80%;
  border: double;
  border-width: 15px;
  border-radius: 15px;
  text-align: center;
`;

export const SlideBody = styled(BlockContent)`
  font-size: 6vmin;
`;

export const SlideTitle = styled.h2`
  font-size: 8vmin;
  margin: 2%;
  text-decoration: underline;
`;

export const NoProjectsCont = styled.div`
  height: 90vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #acc8e5;
`;

export const NoProjectsText = styled.h2`
  font-size: 10vmin;
  margin: auto;
  text-align: center;
`;
