import styled from "styled-components";

export const ButtonWrpr = styled.div`
  height: 2rem;
  width: auto;
  padding: 0rem 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 2rem;
  gap: 0.25rem;

  background-color: ${({ theme, type }) =>
    type === "secondary" ? theme.backgroundPrimary : theme.accent};

  border: ${({ theme, type }) =>
    type === "secondary" ? `2px solid ${theme.accent}` : "none"};
`;

export const ButtonText = styled.span`
  font-size: 1rem;
  font-weight: 600;
  color: ${({ theme, type }) =>
    type === "secondary" ? theme.accent : theme.backgroundPrimary};
  text-align: center;

  @media (min-width: 1440px) and (max-width: 2560px) {
    font-size: 0.75rem;
  }
  @media (min-width: 1024px) and (max-width: 1440px) {
    font-size: 0.7rem;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 0.8125rem;
  }
  @media (min-width: 300px) and (max-width: 768px) {
    font-size: 0.75rem;
  }
`;
