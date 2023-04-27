import { Menu, Nav, NavLinkHeder, Span } from "./NavBar.styled";

export const NavBar = () => {
  return (
    <Nav>
      <Span> Test Tweets</Span>
      <Menu>
        <NavLinkHeder to="/">Home</NavLinkHeder>
        <NavLinkHeder to="/tweets">Tweets</NavLinkHeder>
      </Menu>
    </Nav>
  );
};
