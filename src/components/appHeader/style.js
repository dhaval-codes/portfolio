import styled from "styled-components";

export const AppHeaderWrpr = styled.div`
  width: 100%;
  height: 4rem;
  padding: 0rem 10rem;
  position: fixed;
  z-index: 10000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.backgroundPrimary};
  @media (min-width: 1024px) and (max-width: 1440px) {
    padding: 0rem 5rem;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    padding: 0rem 2rem;
  }
  @media (min-width: 300px) and (max-width: 768px) {
    padding: 0rem 2rem;
  }
`;

export const HeaderLogoWrpr = styled.div`
  height: 2rem;
  width: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (min-width: 1024px) and (max-width: 1440px) {
    height: 1.5rem;
  }
`;

export const HeaderNavWrpr = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  @media (min-width: 768px) and (max-width: 1024px) {
    display: none;
  }
  @media (min-width: 300px) and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.span`
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
  color: ${({ theme, selected }) =>
    selected ? theme.accent : theme.textPrimary};
  text-decoration: ${({ selected }) => (selected ? "underline" : "none")};
  text-decoration-color: ${({ theme }) => theme.accent};
  @media (min-width: 1024px) and (max-width: 1440px) {
    font-size: 0.8125rem;
  }
`;
