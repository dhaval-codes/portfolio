import styled from "styled-components";

export const ServiceCardWrpr = styled.div`
  height: 18rem;
  width: 18rem;
  border-radius: 1rem;
  border: 1px solid ${({ theme }) => theme.accent};
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  cursor: pointer;
  transition: all 0.3s;

  @media (min-width: 1440px) and (max-width: 2560px) {
    width: 16rem;
  }
  @media (min-width: 1024px) and (max-width: 1440px) {
    width: 13rem;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    width: 15rem;
  }

  &:hover {
    background-color: ${({ theme }) => theme.accent};

    p,
    span {
      color: ${({ theme }) => theme.backgroundPrimary};
    }
  }
`;

export const ServiceHeading = styled.span`
  font-size: 1.25rem;
  font-weight: 600;
  color: ${({ theme }) => theme.textPrimary};
  @media (min-width: 1440px) and (max-width: 2560px) {
    font-size: 1rem;
  }
  @media (min-width: 1024px) and (max-width: 1440px) {
    font-size: 0.8125rem;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 1rem;
  }
`;

export const ServiceDescription = styled.p`
  font-size: 0.75rem;
  font-weight: 300;
  color: ${({ theme }) => theme.textPrimary};
  @media (min-width: 1440px) and (max-width: 2560px) {
    font-size: 0.7rem;
  }
  @media (min-width: 1024px) and (max-width: 1440px) {
    font-size: 0.7rem;
  }
`;
