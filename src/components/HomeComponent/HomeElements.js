import styled from "styled-components";

export const ContentContainer = styled.main`
    padding: 0.5rem;
    display: grid;
    height: 90vh;
    grid-template-columns: 1fr 1fr 1fr;

    grid-template-rows: 1fr 1fr .8fr;

    grid-template-areas: 
    "main main sidebar"
    "main main sidebar"
    "content1 content2 content3"
    ;

    grid-gap: .5rem;

    @media screen and (max-width: 786px){
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: 1fr 1fr 1fr .5fr .5fr;
        grid-template-areas: 
        "main main main"
        "main main main"
        "sidebar content2 content2"
        "sidebar content2 content2"
        "content3 content3 content3" 
        ;
    }
    @media screen and (max-width: 480px){
        grid-template-columns: 1fr;
        grid-template-rows: 3fr .2fr 1fr;
        grid-template-areas: 
        "main"
        "content3"
        "sidebar"
        ;
    }   
`;

export const LogoImage = styled.img`
    grid-area: main;
    max-width:100%;
    max-height:100%;
    border-radius: 20px;
    margin: auto;
`;

export const SidebarContent = styled.div`
    grid-area:sidebar;
    background-color: #000000;
    border-radius: 20px;
    
    @media screen and (max-width: 786px){
        background-color: #c38e7a;
    } 
    @media screen and (max-width: 480px){
        background-color: #000000;
        height: 50%;
    }
`;

export const SidebarContentContainer = styled.div`
    display: grid;
    height: 100%;
    width: 100%;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: .3fr .3fr 1fr 1fr 1fr;
    grid-template-areas:
    "heading heading"
    "subHeading subHeading"
    "sideBarBody sideBarBody"
    "sideBarBody sideBarBody"
    "sideBarBody sideBarBody"
    ;
    @media screen and (max-width: 480px){}
`;

export const SidebarHead = styled.h1`
    text-decoration: overline;
    color: #fdf8ec;
    margin: 1rem;

    grid-area: heading;

    @media screen and (max-width: 786px){
        color: #000000;
    } 
    @media screen and (max-width: 480px){
        color: #fdf8ec;
    }
`;

export const SidebarSubHead = styled.h2`
    color: #fdf8ec;
    margin: .5rem;
    grid-area: subHeading;

    @media screen and (max-width: 786px){
        color: #000000;
    } 
    @media screen and (max-width: 480px){
        color: #fdf8ec;
    }
`;

export const ContactSquare = styled.p`
    margin: .5rem;
    text-align: center;
    font-weight: 800;
    text-decoration: underline;
`;

export const SidebarBody = styled.h3`
    font-size: 1.5em;
    color: #fdf8ec;
    margin: .5rem;
    grid-area: sideBarBody;

    @media screen and (max-width: 786px){
        
        color: #000000;
    } 
    @media screen and (max-width: 480px){
        color: #fdf8ec;
        font-size: 1em;
    }
    height: 90%;
    overflow-x: hidden;
`;

export const ContentContainerImg1 = styled.img`
    grid-area:content1;
    max-width:100%;
    max-height: 100%;
    border-radius: 20px;
    margin: auto;
    overflow: hidden;

    &:hover{
        border-radius: 50%;
    }

    @media screen and (max-width: 786px){
        display: none;
    }
    @media screen and (max-width: 480px){
        display: none;
    }
`;

export const ContentContainerImg2 = styled.img`
    grid-area:content2;
    max-width:100%;
    max-height: 100%;
    border-radius: 20px;
    margin: auto;
    overflow: hidden;

    &:hover{
        border-radius: 50%;
    }

    @media screen and (max-width: 480px){
        display: none;
    }
`;

export const ContentContainer3 = styled.div`
    grid-area:content3;
    background-color: #c38e7a;
    border-radius: 20px;
`;

export const Content3 = styled.h2`
    margin: 1rem;
    text-align: center;
    font-size: 2em;
`;