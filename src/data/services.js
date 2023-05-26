import {
  iconGroup,
  iconLearn,
  iconTherapy,
  iconWorkshop,
} from "../assets/icons";
import {
  imgService01,
  imgService01Desk,
  imgService02,
  imgService03,
  imgService03Desk,
  imgService04,
  imgService04Desk,
} from "../assets/images";

export const services = [
  {
    imgDesk: imgService01Desk,
    img: imgService01,
    imgDescription: "conferencias",
    logo: iconGroup,
    logoDescription: "icon group",
    title: "Conferencias",
    detail:
      "Basadas en la teoria de los 3 cerebros y adaptadas a tus necesidades",
  },
  {
    imgDesk: imgService02,
    img: imgService02,
    imgDescription: "terapias",
    logo: iconTherapy,
    logoDescription: "icon two persons talking",
    title: "Terapias",
    detail:
      "Descubre las razones detrás de tu realidad actual y las posibilidades para transformarla",
  },
  {
    imgDesk: imgService03Desk,
    img: imgService03,
    imgDescription: "cursos online",
    logo: iconLearn,
    logoDescription: "icon group",
    title: "Cursos online",
    detail: "Aprende sobre el funcionamiento de tu cerebro",
  },
  {
    imgDesk: imgService04Desk,
    img: imgService04,
    imgDescription: "talleres",
    logo: iconWorkshop,
    logoDescription: "icon group",
    title: "Talleres",
    detail: "Explora el poder de tu mente",
  },
];
