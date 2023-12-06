import styled from 'styled-components';

export const Container = styled.div`
  text-decoration: none;
  color: ${({ theme }) => theme.color.text};
  display: flex;
  padding: 5px;

  flex-direction: column;
  padding: 3px 6px;
  background-color: ${({ theme }) => theme.color.card};
  border-radius: 12px;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.color.upper};

  }

  span {
    font-weight: 500;
    padding: 3px 8px;
  }
`;
