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
`;
