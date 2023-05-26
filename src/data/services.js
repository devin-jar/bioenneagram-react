import {
  iconGroup,
  iconLearn,
  iconTherapy,
  iconWorkshop,
} from "../assets/icons";
import {
  imgService01,
  imgService02,
  imgService03,
  imgService04,
} from "../assets/images";

export const services = [
  {
    imgSource: imgService01,
    img: imgService01,
    imgDescription: "conferencias",
    logo: iconGroup,
    logoDescription: "icon group",
    title: "Conferencias",
    detail: "texto",
  },
  {
    imgSource: imgService02,
    img: imgService02,
    imgDescription: "terapias",
    logo: iconTherapy,
    logoDescription: "icon two persons talking",
    title: "Terapias",
    detail: "texto",
  },
  {
    imgSource: imgService03,
    img: imgService03,
    imgDescription: "cursos online",
    logo: iconLearn,
    logoDescription: "icon group",
    title: "Cursos online",
    detail: "texto",
  },
  {
    imgSource: imgService04,
    img: imgService04,
    imgDescription: "talleres",
    logo: iconWorkshop,
    logoDescription: "icon group",
    title: "Talleres",
    detail: "texto",
  },
];
