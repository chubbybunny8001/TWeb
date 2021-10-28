import styled from "styled-components";

export const AboutContentContainer = styled.div`
    background-color: #fdf8eb;
    height: 90vh;
    display: flex;
    @media screen and (max-width: 786px){
        flex-direction: column;
    }
    @media screen and (max-width: 480px){
    }
`;

export const AboutImageContiner = styled.div`
    text-align: center;
    margin: auto;
    width: 35%;
    @media screen and (max-width: 786px){
        width: 60%;
    }
    @media screen and (max-width: 480px){
        width: 80%;
    }
`;

export const AboutImage = styled.img`
    width: 90%;
    border-radius: 10px;
`;

export const AboutCountainer = styled.div`
    margin: auto;
    width: 50%;
    border: double;
    border-radius: 15px;
    border-width: 10px;
    @media screen and (max-width: 786px){
        width: 90%;
    }
    @media screen and (max-width: 480px){
    }
`;

export const AboutHeader = styled.h1`
    font-size: 2.25rem;
    text-decoration: underline;
    @media screen and (max-width: 786px){
    }
    @media screen and (max-width: 480px){
    }
`;

export const AboutSubHead = styled.h3`
    font-size: 1.5rem;
    margin-left: 2%;
    @media screen and (max-width: 786px){
    }
    @media screen and (max-width: 480px){
    }
`;

export const BodyContainer = styled.div`
    width: 100%;
    margin: 2%;
    @media screen and (max-width: 786px){
    }
    @media screen and (max-width: 480px){
    }
`;

export const AboutBody = styled.p`
    font-size: 1.5rem;
    margin: 0 3.5% 0 0;
    @media screen and (max-width: 786px){
        font-size: 1.25rem;
    }
    @media screen and (max-width: 480px){
        font-size: 1rem;
    }
`;