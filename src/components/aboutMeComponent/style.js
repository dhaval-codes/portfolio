import styled from "styled-components";

export const AboutMeWrpr = styled.div`
  width: 100%;
  height: calc(100% - 4rem);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  padding: 0rem 10rem;
  background-color: ${({ theme }) => theme.backgroundPrimary};
`;

export const ImageComponentWrpr = styled.div`
  height: 100%;
  width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TextComponentWrpr = styled.div`
  height: 100%;
  width: 60%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
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

  span {
    color: ${({ theme }) => theme.accent};
  }
`;

export const Description = styled.p`
  font-size: 0.8125rem;
  color: ${({ theme }) => theme.textPrimary};
  font-weight: 300;

  span {
    font-weight: 600;
  }
`;

export const CarrouselWrpr = styled.div`
  height: 15rem;
  width: 100%;
`;
