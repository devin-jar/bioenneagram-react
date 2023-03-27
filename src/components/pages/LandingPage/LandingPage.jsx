import {
  AboutMeSection,
  BenefictsSection,
  FooterSection,
  HeaderSection,
  MainSection,
  ServicesSection,
  RecordsSection,
  TestimonialsSection,
} from "../../organisms";
import { sections } from "../../../data";

export const LandingPage = () => {
  return (
    <>
      <header className="sticky-top">
        <HeaderSection sections={sections} />
      </header>
      <main>
        <MainSection />
        <ServicesSection />
        <BenefictsSection />
        <AboutMeSection />
        <RecordsSection />
        <TestimonialsSection />
      </main>
      <footer>
        <FooterSection />
      </footer>
    </>
  );
};
