import styled from "styled-components";

export const FootContainer = styled.div`
    width: 100%;
    height: 5vh;
    background-color: #673000;
    display: flex;
    justify-content: space-between;
`;

export const FooterClickable = styled.a`
    margin: auto;
    color: #fdf8eb;
    @media (max-width: 786px){
        font-size: 80%;
    }
    @media (max-width: 480px){
        font-size: 55%;
    }
    @media (max-width: 350px){
        display: none;
    }
`;

export const WebsiteRights = styled.small`
    margin: auto;
    font-size: 105%;
    color: #fdf8eb;
    @media (max-width: 786px){
        font-size: 80%;
    }
    @media (max-width: 480px){
        font-size: 40%;
    }
    @media (max-width: 350px){
        font-size: 60%;
    }
`;