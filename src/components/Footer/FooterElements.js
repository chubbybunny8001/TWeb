import styled from "styled-components";

export const FootContainer = styled.div`
  width: 100%;
  height: 5vh;
  background: linear-gradient(to top, rgba(112, 194, 191, 0), #acc8e5);
  display: flex;
  justify-content: space-between;
`;

export const FooterClickable = styled.a`
  color: black;
  margin: auto;
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
  color: black;
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
