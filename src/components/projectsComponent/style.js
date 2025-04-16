import styled from "styled-components";

export const ProjectComponentWrpr = styled.div`
  width: 100%;
  min-height: calc(100% - 4rem);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0rem 10rem;
  background-color: ${({ theme }) => theme.backgroundPrimary};
  gap: 2rem;
  flex-wrap: wrap;

  @media (min-width: 1440px) and (max-width: 2560px) {
    padding: 5rem 10rem;
  }
  @media (min-width: 1024px) and (max-width: 1440px) {
    padding: 5rem 5rem;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    padding: 2rem 2rem;
  }
  @media (min-width: 300px) and (max-width: 768px) {
    padding: 2rem 2rem;
  }
`;

export const SubHeading = styled.p`
  font-size: 1rem;
  font-weight: 600;
  color: ${({ theme }) => theme.accent};
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
  text-align: center;

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

export const ProjectsCont = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;
  @media (min-width: 1024px) and (max-width: 1440px) {
    gap: 1rem;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    gap: 0.5rem;
  }
  @media (min-width: 300px) and (max-width: 768px) {
    gap: 0.5rem;
  }
`;
