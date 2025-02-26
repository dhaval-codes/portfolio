import styled from "styled-components";

export const CarrouselCont = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

export const CarrouselButtonWrpr = styled.div`
  height: 2rem;
  width: 100%;
  display: flex;
  gap: 1rem;
`;

export const CarrouselContentWrpr = styled.div`
  height: calc(100% - 3rem);
  width: 100%;
`;
