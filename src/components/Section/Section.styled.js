import styled from "styled-components";

export const Section = styled.section`
  padding-top: 50px;
  padding-bottom: 100px;
  @media (min-width: 768px) {
    padding-top: 72px;
    padding-bottom: 200px;
  }
  @media (min-width: 1440px) {
    padding-top: 100px;
  }
`;

export const SectionTitle = styled.title`
  display: inline-block;
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  line-height: 28px;
  letter-spacing: -0.02em;
  font-feature-settings: "liga" off;
  margin-bottom: 50px;
  color: white;
  @media (min-width: 768px) {
    font-size: 32px;
    line-height: 32px;
  }
  @media (min-width: 1440px) {
    font-size: 22px;
    line-height: 44px;
    margin-bottom: 100px;
  }
`;
