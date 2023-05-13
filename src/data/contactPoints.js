import {
  iconForm,
  iconMap,
  iconMessage,
  iconSmartPhone,
  iconVolume,
} from "../assets/icons";

export const contactPoints = [
  {
    description: "Llamame",
    cta: "+57",
    href: "+57",
    icon: iconSmartPhone,
    iconDescription: "",
  },
  {
    description: "Chatea conmigo",
    cta: "Escribeme",
    href: "https://api.whatsapp.com/send/?phone=573004481819&text=Hola%2C+me+gustar%C3%ADa+agendar+un+espacio+contigo&type=phone_number&app_absent=0",
    icon: iconMessage,
    iconDescription: "",
  },
  {
    description: "Consultorio",
    cta: "Ubicame",
    href: "https://goo.gl/maps/Zw139zUs4rSwnGUQ7",
    icon: iconMap,
    iconDescription: "",
  },
  {
    description: "Contactame por redes sociales",
    cta: "Redes sociales",
    href: "",
    icon: iconVolume,
    iconDescription: "",
  },
  {
    description: "Dejame saber tus comentarios",
    cta: "Comentame",
    href: "https://forms.gle/H1dRuGBHvAGP9hy3A",
    icon: iconForm,
    iconDescription: "",
  },
];
