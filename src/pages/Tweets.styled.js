import { Link } from "react-router-dom";
import styled from "styled-components";
import { AiOutlineArrowLeft } from "react-icons/ai";

export const GoHome = styled(Link)`
  display: inline-block;
  padding: 4px;
  margin-left: 20px;
  color: #5cd3a8;
  transition: all 0.25s linear;
  font-weight: bold;
  font-size: 36px;
  margin-bottom: 20px;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &.active,
  &:focus {
    color: #ebd8ff;
    transform: translateX(-10px);
    scale: 1.03;
  }
`;

export const SpanGoHome = styled.span`
  margin-left: 10px;
`;

export const ArrowGoHome = styled(AiOutlineArrowLeft)`
  font-size: 36px;
`;

export const ContainerLoadMore = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
