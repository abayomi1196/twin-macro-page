import torontoImg from "../img/toronto.jpg";
import malibuImg from "../img/malibu.jpg";
import chicagoImg from "../img/chicago.jpg";
import seattleImg from "../img/seattle.jpg";
import coloradoImg from "../img/colorado.jpg";
import miamiImg from "../img/miami.jpg";

const destinations = [
  {
    city: "Toronto",
    averagePrice: 120,
    propertyCount: 76,
    imageUrl: torontoImg,
    imageAlt: "Toronto skyline",
  },
  {
    city: "Malibu",
    averagePrice: 215,
    propertyCount: 43,
    imageUrl: malibuImg,
    imageAlt: "Cliff in Malibu",
  },
  {
    city: "Chicago",
    averagePrice: 130,
    propertyCount: 115,
    imageUrl: chicagoImg,
    imageAlt: "Chicago skyline",
  },
  {
    city: "Seattle",
    averagePrice: 135,
    propertyCount: 63,
    imageUrl: seattleImg,
    imageAlt: "Seattle skyline",
  },
  {
    city: "Colorado",
    averagePrice: 85,
    propertyCount: 47,
    imageUrl: coloradoImg,
    imageAlt: "Lake in Colorado",
  },
  {
    city: "Miami",
    averagePrice: 115,
    propertyCount: 86,
    imageUrl: miamiImg,
    imageAlt: "Beach in Miami",
  },
];

export default destinations;
