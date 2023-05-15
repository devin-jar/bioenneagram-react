import {
  iconForm,
  iconMap,
  iconMessage,
  iconSmartPhone,
  iconVolume,
} from "../assets/icons";
import { socialNetworks } from "./socialNetworks";

export const contactPoints = [
  {
    description: "Llamame",
    cta: "+57 300 448 1819",
    href: "tel:+573004481819",
    icon: iconSmartPhone,
    iconDescription: "",
    content: [],
  },
  {
    description: "Chatea conmigo",
    cta: "Escribeme",
    href: "https://api.whatsapp.com/send/?phone=573004481819&text=Hola%2C+me+gustar%C3%ADa+agendar+un+espacio+contigo&type=phone_number&app_absent=0",
    icon: iconMessage,
    iconDescription: "",
    content: [],
  },
  {
    description: "Consultorio",
    cta: "Ubicame",
    href: "https://goo.gl/maps/Zw139zUs4rSwnGUQ7",
    icon: iconMap,
    iconDescription: "",
    content: [],
  },
  {
    description: "Contactame por redes sociales",
    cta: "Redes Sociales",
    href: "https://www.instagram.com/bioenneagramcoach/",
    icon: iconVolume,
    iconDescription: "",
    content: socialNetworks,
  },
  {
    description: "Dejame saber tus comentarios",
    cta: "Comentame",
    href: "https://forms.gle/H1dRuGBHvAGP9hy3A",
    icon: iconForm,
    iconDescription: "",
    content: [],
  },
];
