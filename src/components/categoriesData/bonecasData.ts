import Bonecas1 from "../../assets/images/bonecas/boneca1.png";
import Bonecas2 from "../../assets/images/bonecas/boneca2.png";
import Bonecas3 from "../../assets/images/bonecas/boneca3.png";
import Bonecas4 from "../../assets/images/bonecas/boneca4.png";
import Bonecas5 from "../../assets/images/bonecas/boneca5.png";
import Bonecas6 from "../../assets/images/bonecas/boneca6.png";
import Bonecas7 from "../../assets/images/bonecas/boneca7.png";
import Bonecas8 from "../../assets/images/bonecas/boneca8.png";
import Bonecas9 from "../../assets/images/bonecas/boneca9.png";
import Bonecas10 from "../../assets/images/bonecas/boneca10.png";
import Bonecas11 from "../../assets/images/bonecas/naninha1.png";
import Bonecas12 from "../../assets/images/bonecas/naninha2.png";
import Bonecas13 from "../../assets/images/bonecas/naninha3.png";
import Bonecas14 from "../../assets/images/bonecas/naninha4.png";

interface BonecasProps {
  id: string;
  name: string;
  description?: string;
  carouselImage: string;
  images: string[];
}

const BonecasData: BonecasProps = {
  id: "bonecas",
  name: "Bonecas",
  carouselImage: Bonecas1,
  images: [
    Bonecas1,
    Bonecas2,
    Bonecas3,
    Bonecas4,
    Bonecas5,
    Bonecas6,
    Bonecas7,
    Bonecas8,
    Bonecas9,
    Bonecas10,
    Bonecas11,
    Bonecas12,
    Bonecas13,
    Bonecas14,
  ],
};

export default BonecasData;
