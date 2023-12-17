import styled from 'styled-components';

export const Container = styled.button`
  border-radius: 100vw;
  position: fixed;
  right: 40px;
  bottom: 40px;
  z-index: 9999999999999;
  background-color: ${({ theme }) => theme.color.highligth};
  color: ${({ theme }) => theme.color.text};
  font-size: 3.2em;
  box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px;

  padding: 14px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;


export const Dialog = styled.dialog`
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  min-width: 250px;
  max-width: 400px;
  width: 80%;
  
  min-height: 150px;
  border-radius: 12px;
  padding: 24px 18px;

  background-color: ${({ theme }) => theme.color.hoverBg};
  color: ${({ theme }) => theme.color.text};

  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 32px;
    height: 100%;
  }
  
  h3 {
    font-weight: 500;
    align-self: center;
    margin-bottom: 6px;
  }
  
  div {
    display: flex;
    justify-content: space-around;
    flex: 1;
    align-items: flex-end;
  }

  button {
    all: unset;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    padding: 0 15px;
    font-size: 15px;
    line-height: 1px;
    font-weight: bold;
    height: 35px;
    min-width: 60px;
    cursor: pointer;

    &[type="submit"] {
      background-color: ${({ theme }) => theme.color.highligth};
    }
    &[type="reset"] {
      background-color: ${({ theme }) => theme.color.container};
      border: 1.2px solid ${({ theme }) => theme.color.text2};
    }
  }

  input {
      all: unset;
      flex: 1;
      min-height: 46px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      border-radius: 4;
      padding: 0 10px;
      font-size: 15;
      line-height: 1;
      border-radius: 4px;

      color: ${({ theme }) => theme.color.text};
      box-shadow: 0 0 0 1px ${({ theme }) => theme.color.text};
      height: 35;

      &:focus { box-shadow: 0 0 0 2px ${({ theme }) => theme.color.text};  }
  }
`