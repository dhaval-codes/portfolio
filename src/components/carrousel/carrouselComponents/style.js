import styled from "styled-components";

export const CarrouselComponentWrpr = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

export const CarrouselText = styled.span`
  font-size: 1rem;
  font-weight: 600;
  color: ${({ theme }) => theme.textPrimary};
  padding: 0.25rem 0.5rem;
  @media (min-width: 1440px) and (max-width: 2560px) {
    font-size: 0.75rem;
  }
  @media (min-width: 1024px) and (max-width: 1440px) {
    font-size: 0.7rem;
    padding: 0.2rem 0.2rem;
  }
  @media (min-width: 300px) and (max-width: 768px) {
    font-size: 0.7rem;
    padding: 0.2rem 0.2rem;
  }
`;
