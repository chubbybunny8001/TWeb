import styled from "styled-components";

export const AboutContentContainer = styled.div`
  background-color: #acc8e5;
  height: 85vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media screen and (max-width: 786px) {
    flex-direction: column;
  }
  @media screen and (max-width: 480px) {
  }
`;

export const AboutImageContiner = styled.div`
  text-align: center;
  width: 35%;
  @media screen and (max-width: 786px) {
    width: 60%;
  }
  @media screen and (max-width: 480px) {
    width: 70%;
  }
`;

export const AboutImage = styled.img`
  max-width: 90%;
  border-radius: 10px;
`;

export const AboutCountainer = styled.div`
  width: 50%;
  border: double;
  border-radius: 15px;
  border-width: 10px;
  @media screen and (max-width: 786px) {
    width: 90%;
  }
  @media screen and (max-width: 480px) {
  }
`;

export const AboutHeader = styled.h2`
  font-size: 5vmin;
  text-decoration: underline;
`;

export const AboutSubHead = styled.h3`
  font-size: 4vmin;
  margin-left: 2%;
`;

export const BodyContainer = styled.div`
  width: 100%;
  margin: 2%;
  @media screen and (max-width: 786px) {
  }
  @media screen and (max-width: 480px) {
  }
`;

export const AboutBody = styled.p`
  font-size: 3vmin;
  margin: 0 3.5% 0 0;
`;
