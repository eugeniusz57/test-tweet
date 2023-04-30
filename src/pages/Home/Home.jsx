import { Navigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import { Section } from "../../components/Section/Section.styled";
import { InformationProject } from "./Home.styled";

const Home = () => {
  return (
    <Section>
      <InformationProject>
        This is a web application built with React, a popular JavaScript library
        for building user interfaces. The application uses Styled Components, a
        library for styling React components with CSS-in-JS syntax, to create a
        visually appealing and consistent UI. The application fetches data from
        a server using Axios, a popular library for making HTTP requests. The
        data is then displayed to the user in an interactive and responsive
        manner using React components. The project includes various features
        such as filtering and sorting data, dynamic routing. It is designed to
        be scalable and maintainable, with a modular architecture that promotes
        code reusability.
      </InformationProject>
    </Section>
  );
};

export default Home;
