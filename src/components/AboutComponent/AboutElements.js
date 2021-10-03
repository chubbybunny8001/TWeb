import styled from "styled-components";

export const HomeContentContainer = styled.div`
    padding: 1rem;
    display: grid;
    height: 90vh;
    background-color: grey;

    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: .3fr .2fr 1.5fr;
    grid-template-areas: 
    "aboutImg aboutCont aboutCont"
    "aboutImg aboutCont aboutCont"
    "aboutImg aboutCont aboutCont"
    ;
    @media screen and (max-width: 786px){
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 1fr;
        grid-template-areas: 
            "aboutImg"
            "aboutCont"
        ;
    }
`;

export const AboutImage = styled.img`
grid-area: aboutImg;
max-height: 100%;
max-width: 100%;
border-radius: 20px;
margin: auto;
`;

export const AboutCountainer = styled.div`
    grid-area: aboutCont;
    background-color: #000000;
    align-items: center;
    border-radius: 20px;
    height: 100%;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    grid-template-areas:
    "aboutHead"
    "aboutSubHead"
    "aboutBody"
    "aboutBody"
    ;

    @media screen and(max-width: 786px){
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-template-rows: 1fr 1fr 1fr 1fr;
        grid-template-areas: 
        "aboutHead aboutHead aboutSubHead aboutSubHead"
        "aboutHead aboutHead aboutSubHead aboutSubHead"
        "aboutBody aboutBody aboutBody aboutBody"
        "aboutBody aboutBody aboutBody aboutBody"
        ;
    }

    overflow: scroll;
`;

export const AboutHeader = styled.h1`
    padding: .5rem;
    color: #fdf8ec;
    grid-area: aboutHead;
`;

export const AboutSubHead = styled.h3`
padding: 1rem;
color: #fdf8ec;
grid-area: aboutSubHead;
`;

export const AboutBody = styled.p`
padding: .5rem;
color: #fdf8ec;
grid-area: aboutBody;
height: 100%;
overflow: scroll;
`;