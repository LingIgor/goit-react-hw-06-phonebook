import styled from 'styled-components';

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`;

export const Form = styled.form`
  padding: 50px;
  display: flex;
  flex-direction: column;
  border: 1px solid black;
`;

export const Title = styled.h3`
  margin: 0;
  margin-bottom: 15px;
`;

export const Input = styled.input`
  width: 350px;
  height: 35px;
  border-radius: 10px;
`;

export const Add = styled.button`
  display: block;
  margin: 0px auto;
  padding: 8px;
  border: 2px solid rgb(8, 41, 17);
  border-radius: 4px;
  cursor: pointer;
  color: rgb(222, 206, 169);
  background-color: rgb(8, 41, 17);
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;

  &:hover {
    transform: scale(1.05);
    background: rgb(104 91 101);
    box-shadow: 5px 3px 10px 1px;
  }
`;
