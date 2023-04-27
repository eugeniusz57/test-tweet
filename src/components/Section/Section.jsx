import { Section, SectionTitle } from "./Sections.styled";

// eslint-disable-next-line react/prop-types
export const Sections = ({ title, children }) => {
  return (
    <Section>
      {title && <SectionTitle>{title}</SectionTitle>}
      {children}
    </Section>
  );
};
