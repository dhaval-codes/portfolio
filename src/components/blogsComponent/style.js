import styled from "styled-components";

export const BlogsComponentWrpr = styled.div`
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
  text-align: center;
`;
