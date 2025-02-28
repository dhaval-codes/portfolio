import styled from "styled-components";

export const ContactMeWrpr = styled.div`
  height: 100vh;
  width: 100%;
  background-color: ${({ theme }) => theme.backgroundPrimary};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 2rem;
`;

export const SubHeading = styled.span`
  font-size: 1rem;
  font-weight: 600;
  color: ${({ theme }) => theme.accent};
`;

export const Heading = styled.h1`
  margin: 0rem;
  font-size: 2.25rem;
  color: ${({ theme }) => theme.textPrimary};
  text-align: center;

  span {
    color: ${({ theme }) => theme.accent};
  }
`;

export const FormWrpr = styled.form`
  height: auto;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 0.5rem;
  padding: 0.5rem;
`;

export const InputCont = styled.input`
  height: 2.5rem;
  width: 20rem;
  background-color: ${({ theme }) => theme.backgroundPrimary};
  border-radius: 0.25rem;
  border: ${({ theme }) => `2px solid ${theme.accent}`};
  padding: 0rem 0.5rem;
`;

export const InputTextAre = styled.textarea`
  height: 2.5rem;
  width: 20rem;
  background-color: ${({ theme }) => theme.backgroundPrimary};
  border-radius: 0.25rem;
  border: ${({ theme }) => `2px solid ${theme.accent}`};
  padding: 0rem 0.5rem;
`;

export const InputTextArea = styled.textarea`
  height: 10rem;
  width: 20rem;
  background-color: ${({ theme }) => theme.backgroundPrimary};
  border-radius: 0.25rem;
  border: ${({ theme }) => `2px solid ${theme.accent}`};
  padding: 0.5rem 0.5rem;
  resize: none;
`;

export const SubmitBtn = styled.button`
  height: 2.5rem;
  width: 20rem;
  background-color: ${({ theme }) => theme.accent};
  color: ${({ theme }) => theme.backgroundPrimary};
  border: none;
  border-radius: 0.25rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
`;
