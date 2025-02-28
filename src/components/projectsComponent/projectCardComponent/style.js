import styled from "styled-components";

export const ProjectCardWrpr = styled.div`
  width: 18rem;
  height: 19rem;
  border-radius: 1rem;
  padding: 1rem;
  background-image: url(${(props) => props.backgroundImage});
  border: 1px solid ${({ theme }) => theme.accent};
  background-size: 200%;
  background-position: center;
  cursor: pointer;
  transition: background-size 0.3s ease;
  overflow: hidden;
  position: relative; /* 🔥 This is the missing piece */

  &:hover {
    background-size: 190%;
  }
`;

export const ProjectTextWrpr = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  position: absolute;
  bottom: 0;
  border-radius: 1rem;
  left: 0;
  right: 0;
  padding: 1rem;
  background: ${({ theme }) =>
    `${theme.backgroundPrimary}70`}; /* Added transparency for better visibility */
  backdrop-filter: blur(10px);
  transform: translateY(100%);
  transition: transform 0.3s ease;

  ${ProjectCardWrpr}:hover & {
    transform: translateY(0);
  }
`;

export const Heading = styled.span`
  font-size: 1.5rem;
  font-weight: 600;
  color: ${({ theme }) => theme.textPrimary};
`;

export const Description = styled.p`
  font-size: 1rem;
  font-weight: 400;
  color: ${({ theme }) => theme.textPrimary};
`;
