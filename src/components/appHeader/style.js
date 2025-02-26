import styled from "styled-components";

export const AppHeaderWrpr = styled.div`
  width: 100%;
  height: 4rem;
  padding: 0rem 10rem;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.backgroundPrimary};
`;

export const HeaderLogoWrpr = styled.div`
  height: 2rem;
  width: 2rem;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.accent};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HeaderNavWrpr = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
`;

export const NavItem = styled.span`
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
  color: ${({ theme, selected }) =>
    selected ? theme.accent : theme.textPrimary};
  text-decoration: ${({ selected }) => (selected ? "underline" : "none")};
  text-decoration-color: ${({ theme }) => theme.accent};
`;
