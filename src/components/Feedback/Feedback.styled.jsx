import styled from 'styled-components';

export const ButtonsWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

export const Button = styled.button`
  width: 100px;
  text-transform: capitalize;
  font-size: 1rem;
  padding: 5px;
  border-radius: 5px;
  border: none;
  box-shadow: 0 1px 7px rgba(255, 255, 255, 0.3);

  &:hover,
  &:focus {
    color: white;
    background-color: black;
    cursor: pointer;
  }
`;