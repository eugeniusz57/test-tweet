import { Link } from "react-router-dom";
import styled from "styled-components";

export const GoHome = styled(Link)`
  display: block;
  padding: 4px;
  margin-left: 20px;
  color: #5cd3a8;
  transition: all 0.25s linear;
  font-weight: bold;
  font-size: 36px;
  &:hover,
  &.active,
  &:focus {
    color: #ebd8ff;
  }
`;
