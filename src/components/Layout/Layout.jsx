import { Suspense } from "react";
import { Menu, Nav, NavLinkHeder, Span } from "./Layout";
import { Outlet } from "react-router-dom";
import { Container } from "../Container/Container";

const Layout = () => {
  return (
    <>
      <header>
        <Nav>
          <Span> Test Tweets</Span>
          <Menu>
            <NavLinkHeder to="/">Home</NavLinkHeder>
            <NavLinkHeder to="/tweets">Tweets</NavLinkHeder>
          </Menu>
        </Nav>
      </header>
      <main>
        <Container>
          <Suspense fallback={null}>
            <Outlet />
          </Suspense>
        </Container>
      </main>
    </>
  );
};

export default Layout;
