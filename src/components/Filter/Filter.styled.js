import styled from "styled-components";

export const Select = styled.select`
  appearance: none;
  background-color: #f5f5f5;
  color: #333;
  padding: 12px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 28px;
  margin-left: 50px;
  &:hover {
    background-color: #ddd;
  }

  &:focus,
  &:active {
    outline: none;
    box-shadow: none;
  }
`;
