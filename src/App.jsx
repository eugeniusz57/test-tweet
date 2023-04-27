import { Route, Routes } from "react-router-dom";
import { NavBar } from "./components/NavBar/NavBar";
import Home from "./pages/Home";
import Tweets from "./pages/Tweets";
import { Container } from "./components/Container/Container";

function App() {
  return (
    <>
      <NavBar />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tweets" element={<Tweets />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
