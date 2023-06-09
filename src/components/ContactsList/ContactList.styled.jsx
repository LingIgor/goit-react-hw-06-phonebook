import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 20px;
  margin-bottom: 20px;
`;

export const List = styled.ul`
  width: 400px;
`;

export const Button = styled.button`
  padding: 4px;
  border: 2px solid rgb(8, 41, 17);
  border-radius: 4px;
  cursor: pointer;
  color: rgb(222, 206, 169);
  background-color: #252124;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
  &:hover {
    transform: scale(1.05);
    background: rgb(104 91 101);
    box-shadow: 5px 3px 10px 1px;
  }
`;
