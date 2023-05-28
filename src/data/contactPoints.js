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
    description: "Llámame",
    cta: "+57 300 448 1819",
    href: "tel:+573004481819",
    icon: iconSmartPhone,
    iconDescription: "",
    content: [],
    className: "call",
  },
  {
    description: "Chatea conmigo",
    cta: "Escríbeme",
    href: "https://api.whatsapp.com/send/?phone=573004481819&text=Hola%2C+me+gustar%C3%ADa+agendar+un+espacio+contigo&type=phone_number&app_absent=0",
    icon: iconMessage,
    iconDescription: "",
    content: [],
    className: "type",
  },
  {
    description: "Consultorio",
    cta: "Ubícame",
    href: "https://goo.gl/maps/Zw139zUs4rSwnGUQ7",
    icon: iconMap,
    iconDescription: "",
    content: [],
    className: "location",
  },
  {
    description: "Contactame por redes sociales",
    cta: "Redes Sociales",
    href: "https://www.instagram.com/bioenneagramcoach/",
    icon: iconVolume,
    iconDescription: "",
    content: socialNetworks,
    className: "social-network",
  },
  {
    description: "Dejame saber tus comentarios",
    cta: "Coméntame",
    href: "https://forms.gle/H1dRuGBHvAGP9hy3A",
    icon: iconForm,
    iconDescription: "",
    content: [],
    className: "comment",
  },
];
