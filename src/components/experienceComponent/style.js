import styled from "styled-components";

export const ExperienceComponentWrpr = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.accent};
  width: 100%;
  height: 30rem;
  padding: 0rem 10rem;
  gap: 2rem;
  @media (min-width: 1024px) and (max-width: 1440px) {
    padding: 0rem 5rem;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    padding: 2rem 2rem;
    height: fit-content;
  }
  @media (min-width: 300px) and (max-width: 768px) {
    padding: 2rem 2rem;
    height: fit-content;
  }
`;

export const SubHeading = styled.p`
  font-size: 1rem;
  font-weight: 600;
  color: ${({ theme }) => theme.backgroundPrimary};
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
  color: ${({ theme }) => theme.backgroundPrimary};
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
    font-size: 1rem;
  }
`;

export const ExperienceCardWrpr = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  @media (min-width: 768px) and (max-width: 1024px) {
    gap: 0.5rem;
    flex-wrap: wrap;
  }
  @media (min-width: 300px) and (max-width: 768px) {
    gap: 0.5rem;
    flex-wrap: wrap;
  }
`;

export const ExprienceCard = styled.div`
  height: 13rem;
  width: 17rem;
  background-color: ${({ theme }) => theme.backgroundPrimary};
  border-radius: 1rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  @media (min-width: 1024px) and (max-width: 1440px) {
    padding: 0.5rem;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    width: 15rem;
  }
  @media (min-width: 300px) and (max-width: 768px) {
    height: 11rem;
    width: 17rem;
    padding: 0.75rem;
  }
`;

export const CardHeading = styled.span`
  font-size: 1.25rem;
  font-weight: 600;
  color: ${({ theme }) => theme.textPrimary};
  @media (min-width: 1440px) and (max-width: 2560px) {
    font-size: 1rem;
  }
  @media (min-width: 1024px) and (max-width: 1440px) {
    font-size: 0.8125rem;
  }
  @media (min-width: 300px) and (max-width: 768px) {
    font-size: 0.8125rem;
  }
`;

export const CardDescription = styled.p`
  font-size: 0.75rem;
  font-weight: 300;
  color: ${({ theme }) => theme.textPrimary};
  @media (min-width: 1440px) and (max-width: 2560px) {
    font-size: 0.7rem;
  }
  @media (min-width: 1024px) and (max-width: 1440px) {
    font-size: 0.7rem;
  }
  @media (min-width: 300px) and (max-width: 768px) {
    font-size: 0.7rem;
  }
`;

export const Description = styled.p`
  font-size: 0.75rem;
  font-weight: 600;
  color: ${({ theme }) => theme.backgroundPrimary};
`;
