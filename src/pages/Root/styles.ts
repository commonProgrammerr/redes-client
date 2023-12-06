import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  padding: 5%;
  align-items: flex-start;
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  align-items: flex-start;
  gap: 20px;
  
  flex: 1;
  border-radius: 20px;
  min-height: 60%;

  background-color: ${({ theme }) => theme.color.container};
  padding: 26px;
  padding: 1rem;
`
