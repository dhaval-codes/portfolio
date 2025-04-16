import styled from "styled-components";

export const HomeComponentWrpr = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  padding: 0rem 10rem;
  background-color: ${({ theme }) => theme.backgroundPrimary};
  @media (min-width: 1024px) and (max-width: 1440px) {
    padding: 0rem 5rem;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    padding: 0rem 2rem;
    flex-direction: column-reverse;
  }
  @media (min-width: 300px) and (max-width: 768px) {
    padding: 0rem 2rem;
    flex-direction: column-reverse;
  }
`;

export const TextComponentWrpr = styled.div`
  height: 100%;
  width: 60%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
  @media (min-width: 768px) and (max-width: 1024px) {
    height: fit-content;
    width: 100%;
    margin-top: 2rem;
  }
  @media (min-width: 300px) and (max-width: 768px) {
    height: fit-content;
    width: 100%;
    margin-top: 2rem;
  }
`;

export const ImageComponentWrpr = styled.div`
  height: 100%;
  width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (min-width: 768px) and (max-width: 1024px) {
    height: 40%;
    width: 100%;
  }
  @media (min-width: 300px) and (max-width: 768px) {
    height: 40%;
    width: 100%;
  }
`;

export const SubHeading = styled.p`
  font-size: 1rem;
  font-weight: 600;
  color: ${({ theme }) => theme.textPrimary};
  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 0.8125rem;
  }
  @media (min-width: 300px) and (max-width: 768px) {
    font-size: 0.8125rem;
  }
`;

export const Heading = styled.h1`
  margin: 0rem;
  font-size: 2.25rem;
  color: ${({ theme }) => theme.textPrimary};
  @media (min-width: 1440px) and (max-width: 2560px) {
    font-size: 2rem;
  }
  @media (min-width: 1024px) and (max-width: 1440px) {
    font-size: 1.5rem;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 1.25rem;
  }
  @media (min-width: 300px) and (max-width: 768px) {
    font-size: 1.25rem;
  }

  span {
    color: ${({ theme }) => theme.accent};
  }
`;

export const Description = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.textPrimary};
  font-weight: 300;
  @media (min-width: 1024px) and (max-width: 1440px) {
    font-size: 0.8125rem;
    padding-right: 2rem;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 0.75rem;
  }
  @media (min-width: 300px) and (max-width: 768px) {
    font-size: 0.75rem;
  }
`;

export const ButtonsContainer = styled.div`
  height: auto;
  width: auto;
  display: flex;
  gap: 1rem;
`;
