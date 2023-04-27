import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
  padding: 12px;
  display: flex;
  height: 100px;
  align-items: center;
  justify-content: start;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  color: white;
`;

export const NavLinkHeder = styled(NavLink)`
  display: block;
  padding: 4px;
  margin-left: 20px;
  color: #5cd3a8;
  transition: all 0.25s linear;
  &:hover,
  &.active,
  &:focus {
    color: #ebd8ff;
  }
`;

export const Span = styled.span`
  font-weight: bold;
  font-size: 36px;
`;

export const Menu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 50px;
  font-size: 28px;
`;
