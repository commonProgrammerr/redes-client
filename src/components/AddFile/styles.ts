import styled from 'styled-components';

export const Container = styled.button`
  border-radius: 100vw;
  position: absolute;
  right: 40px;
  bottom: 40px;
  z-index: 9999999999999;
  background-color: ${({ theme }) => theme.color.highligth};
  color: ${({ theme }) => theme.color.text};
  font-size: 4rem;

  padding: 16px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;
