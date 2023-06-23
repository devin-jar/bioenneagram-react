import {
  iconGroup,
  iconLearn,
  iconTherapy,
  iconWorkshop,
} from "../assets/icons";
import {
  imgCoursesThumbnail,
  imgPortatil,
  imgService01,
  imgService01Desk,
  imgService02,
  imgService03,
  imgService03Desk,
  imgService04,
  imgService04Desk,
  imgTherapyInvidual,
  imgWorkshop,
} from "../assets/images";

export const services = [
  {
    imgDesk: imgTherapyInvidual,
    img: imgTherapyInvidual,
    imgDescription: "terapias",
    logo: iconTherapy,
    logoDescription: "icon two persons talking",
    title: "Terapias",
    detail:
      "Descubre las razones por las cuales estás viviendo lo que estás viviendo",
  },
  {
    imgDesk: imgCoursesThumbnail,
    img: imgCoursesThumbnail,
    imgDescription: "cursos online",
    logo: iconLearn,
    logoDescription: "icon group",
    title: "Cursos online",
    detail: "Aprende sobre el funcionamiento de tu cerebro",
  },
  {
    imgDesk: imgWorkshop,
    img: imgWorkshop,
    imgDescription: "talleres",
    logo: iconWorkshop,
    logoDescription: "icon group",
    title: "Talleres",
    detail: "Explora el poder de tu mente",
  },
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
];
