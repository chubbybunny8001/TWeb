import styled from "styled-components";

export const ProjectsContentContainer = styled.div`
    width: 100%;
    height: 90vh;
    overflow: scroll;
    overflow-x: hidden;
    background-color: #fdf8eb;

    &::-webkit-scrollbar{
        width: 5px;
        border: 1px solid grey;
    }
    &::-webkit-slider-thumb{
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
    padding: 2%;
    margin: auto;
    font-size: 3rem;
`;

export const SlideShow = styled.div`
    margin: auto;
    width: 100%;
    height: 100%;
`;

export const SlideShowSlider = styled.div`
`;

export const Slide = styled.div`
    margin: 0px 0 30px 0;
    display: flex;
    border-radius: 40px;
    @media(max-width: 786px){
        flex-direction: column;
    }
`;

export const SlideImgCont = styled.div`
    display: flex;
    width: 50%;
    @media(max-width: 786px){
        width: 100%;
    }
`;

export const ImgCont = styled.div`
    width: 80%;
    margin: auto;
    @media(max-width: 786px){
        width: 50%;
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
    @media(max-width: 786px){
        width: 100%;
        height: 42%;
    }
`;

export const BodyCont = styled.div`
    margin: auto;
    width: 80%;
    border: double;
    border-width: 15px;
    border-radius: 15px;
    text-align: center;
    
`;

export const SlideBody = styled.p`
    font-size: 1.5rem;
`; 

export const SlideTitle = styled.h2`
    font-size: 3rem;
    margin: 2%;
    text-decoration: underline;
`;
