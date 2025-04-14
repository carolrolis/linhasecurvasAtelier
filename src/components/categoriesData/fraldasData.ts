import Fraldas1 from "../../assets/images/fraldas/fralda1.png";
import Fraldas2 from "../../assets/images/fraldas/fralda2.png";
import Fraldas3 from "../../assets/images/fraldas/fralda3.png";
import Fraldas4 from "../../assets/images/fraldas/fralda4.png";
import Fraldas5 from "../../assets/images/fraldas/fralda5.png";
import Fraldas6 from "../../assets/images/fraldas/fralda6.png";
import Fraldas7 from "../../assets/images/fraldas/fralda7.png";
import Fraldas8 from "../../assets/images/fraldas/fralda8.png";
import Fraldas9 from "../../assets/images/fraldas/fralda9.png";
import Fraldas10 from "../../assets/images/fraldas/fralda10.png";
import Fraldas11 from "../../assets/images/fraldas/fralda11.png";
import Fraldas12 from "../../assets/images/fraldas/fralda12.png";
import Fraldas13 from "../../assets/images/fraldas/fralda13.png";
import Fraldas14 from "../../assets/images/fraldas/fralda14.png";
import Fraldas15 from "../../assets/images/fraldas/fralda15.png";

interface FraldasProps {
  id: string;
  name: string;
  description?: string;
  carouselImage: string;
  images: string[];
}

const FraldasData: FraldasProps = {
  id: "fraldas",
  name: "Fraldas",
  carouselImage: Fraldas1,
  images: [
    Fraldas1,
    Fraldas2,
    Fraldas3,
    Fraldas4,
    Fraldas5,
    Fraldas6,
    Fraldas7,
    Fraldas8,
    Fraldas9,
    Fraldas10,
    Fraldas11,
    Fraldas12,
    Fraldas13,
    Fraldas14,
    Fraldas15,
  ],
};

export default FraldasData;
