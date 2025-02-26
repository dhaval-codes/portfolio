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
`;
