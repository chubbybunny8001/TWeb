import styled from "styled-components";

export const ContentContainer = styled.div`
    width: 100%;
    height: 90vh;
    background-color: #fdf8eb;
    display: flex;

    @media (max-width: 786px){
        flex-direction: column-reverse;
        justify-content: space-evenly;
    }
`;

export const TextContainer = styled.section`
    width: 35%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    @media (max-width: 786px){
        width: 100%;
        flex-direction: row;
        height: 35%;
    }
`;

export const TextBox1 = styled.article`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: double;
    margin: auto;
    border-radius: 20px;
    border-width: 10px;
    width:  fit-content;
    height: 35%;
    @media (max-width: 786px){
        height: 85%;
        width: fit-content;    
    }
    @media (max-width: 480px){
        display: none;
    }
`;

export const HeadingsContainer = styled.div`
    margin: auto;
    padding: 0 10px 0 10px;
`;

export const TextBoxH1 = styled.h2`
    font-size: 2.25rem;
    text-align: center;
    text-decoration: underline;
    @media (max-width: 786px){
        font-size: 2rem;
    }
`;

export const TextBoxH2 = styled.h2`
    font-size: 1.5rem;
    text-align: center;
    @media (max-width: 786px){
        font-size: 1.5rem;
    }
`;

export const TextBox2 = styled.article`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: double;
    margin: auto;
    border-radius: 20px;
    border-width: 10px;
    width: fit-content;
    height: 35%;
    @media (max-width: 786px){
        height: 85%;
        width: fit-content;    
    }
    @media (max-width: 480px){
        height: 95%;
        width: 85%;
    }
`;

export const HeadingsContainer2 = styled.div`
    margin: auto;
    padding: 0 10px 0 10px;
`;

export const TextBox2H2 = styled.h2`
    font-size: 1.75rem;
    padding-bottom: 5px;
    text-align: center;
    border-bottom: dotted;
    border-radius: 10px;
    @media (max-width: 786px){
    }
`;

export const TextBoxH3 = styled.h3`
    padding: 15px 0 5px 0;
    text-align: center;
    @media (max-width: 786px){
        margin: auto;
        padding: 0;
    }
`;

export const ContactClickable = styled.a`
    color: black;
    text-decoration-color: blue;
`;

export const ImageContainer = styled.div`
    width: 65%;
    display: flex;
    align-items: center;
    text-align: center;
    @media (max-width: 786px){
        width: 100%;
    }
`;

export const Image = styled.img`
    width: 90%;
    margin: auto;
    border-radius: 10px;
    @media (max-width: 786px){
        width: 72%;    
    }
    @media (max-width: 480px){
        width: 90%;
    }
`;