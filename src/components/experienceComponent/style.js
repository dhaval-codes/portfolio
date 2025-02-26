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
`;

export const SubHeading = styled.p`
  font-size: 1rem;
  font-weight: 600;
  color: ${({ theme }) => theme.backgroundPrimary};
`;

export const Heading = styled.h1`
  margin: 0rem;
  font-size: 2.25rem;
  color: ${({ theme }) => theme.backgroundPrimary};
`;

export const ExperienceCardWrpr = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
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
`;

export const CardHeading = styled.span`
  font-size: 1.25rem;
  font-weight: 600;
  color: ${({ theme }) => theme.textPrimary};
`;

export const CardDescription = styled.p`
  font-size: 0.75rem;
  font-weight: 300;
  color: ${({ theme }) => theme.textPrimary};
`;

export const Description = styled.p`
  font-size: 0.75rem;
  font-weight: 600;
  color: ${({ theme }) => theme.backgroundPrimary};
`;
