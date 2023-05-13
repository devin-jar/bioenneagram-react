import {
  AboutMeSection,
  BenefictsSection,
  FooterSection,
  HeaderSection,
  MainSection,
  ServicesSection,
  RecordsSection,
  TestimonialsSection,
  ContactSection,
} from "../../organisms";
import { sections } from "../../../data";

export const LandingPage = () => {
  return (
    <>
      <header>
        <HeaderSection sections={sections} />
      </header>
      <main>
        <MainSection />
        <ServicesSection />
        <BenefictsSection />
        <AboutMeSection />
        <RecordsSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <footer>
        <FooterSection />
      </footer>
    </>
  );
};
