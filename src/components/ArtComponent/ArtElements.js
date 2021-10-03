import styled from "styled-components";
import BlockContent from '@sanity/block-content-to-react';

export const ArtworkContainer = styled.main`
    height: 100vh;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    grid-template-areas: 
        "heading"
        "body"
        ;
`;

export const ArtworkPageHeading = styled.section`
    grid-area: heading;
    text-align: center;
    border-radius: 20px;
    background-color: #000000;
    margin: .5rem;
`;

export const ArtworkPageHead = styled.h1`
padding: 1rem;
    font-weight: bolder;
    font-size: 3em;
    color: #fdf8ec;
`;

export const ArtworkPageSubHead = styled.h2`
    color: #fdf8ec;
    padding-bottom: 1rem;
`;

export const ArtworksContainer = styled.div`
    grid-area: body;

    overflow: scroll;
`;

export const Artworks = styled.article`
    padding: .5rem;
    display: grid;
    grid-gap: 0.5rem;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-template-areas: 
    "images body"
    "images body"
    "images body"
    ;

    @media screen and (max-width: 786px){
        grid-template-rows: 1fr 1fr;
        grid-template-areas: 
        "images images"
        "body body"
        ;
    }
`;
export const ArtworkImg = styled.img`
    grid-area: images;
    max-width: 100%;
    max-height: 100%;
    border-radius: 20px;
    margin: auto;
`;

export const ArtworkBodyCont = styled.span`
    margin: auto;
    width: 100%;
    height: 100%;
    grid-area: body;
    background-color: #c38e7a;
    border-radius: 20px;
    display: grid;
    grid-gap: 0.5rem;
    grid-template-columns: 1fr;
    grid-template-rows: .3fr 1fr;
    grid-template-areas: 
    "title"
    "descr"
    ;
`;

export const ArtworkHead = styled.h3`
    grid-area: title;
    font-size: 2em;
    text-decoration: overline;
    margin: auto;

`;

export const ArtworkBlockCont = styled.div`
    grid-area: descr;
    text-align: center;
    font-size: 1.4em;
    height: 100%;
    margin: .5rem;
`;

export const ArtworkBlock = styled(BlockContent)`

`;