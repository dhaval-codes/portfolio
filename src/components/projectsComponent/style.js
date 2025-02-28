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
`;

export const SubHeading = styled.p`
  font-size: 1rem;
  font-weight: 600;
  color: ${({ theme }) => theme.accent};
`;

export const Heading = styled.h1`
  margin: 0rem;
  font-size: 2.25rem;
  color: ${({ theme }) => theme.textPrimary};
  text-align: center;

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
`;
