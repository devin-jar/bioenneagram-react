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
import { NextLaunch } from "../../organisms/NextLaunch/NextLaunch";

export const ServicesPage = () => {
  return (
    <>
      <NextLaunch />
      <ContactSection />
      <FooterSection />
    </>
  );
};
