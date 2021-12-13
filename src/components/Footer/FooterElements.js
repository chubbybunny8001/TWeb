import styled from "styled-components";

export const FootContainer = styled.div`
  width: 100%;
  height: 5vh;
  background-color: black;
  display: flex;
  justify-content: space-between;
`;

export const FooterClickable = styled.a`
  margin: auto;
  color: #2f5c75;
  @media (max-width: 786px) {
    font-size: 80%;
  }
  @media (max-width: 580px) {
    display: none;
  }
  @media (max-width: 350px) {
    display: none;
  }
`;

export const WebsiteRights = styled.small`
  margin: auto;
  font-size: 105%;
  color: #2f5c75;
  @media (max-width: 786px) {
    font-size: 80%;
  }
  @media (max-width: 580px) {
    font-size: 100%;
  }
  @media (max-width: 350px) {
    font-size: 70%;
  }
`;
