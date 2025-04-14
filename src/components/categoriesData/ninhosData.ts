import Ninhos1 from "../../assets/images/ninhos/ninho1.png";
import Ninhos2 from "../../assets/images/ninhos/ninho2.png";
import Ninhos3 from "../../assets/images/ninhos/ninho3.png";
import Ninhos4 from "../../assets/images/ninhos/ninho4.png";
import Ninhos5 from "../../assets/images/ninhos/ninho5.png";
import Ninhos6 from "../../assets/images/ninhos/ninho6.png";
import Ninhos7 from "../../assets/images/ninhos/ninho7.png";

interface NinhosProps {
  id: string;
  name: string;
  description?: string;
  carouselImage: string;
  images: string[];
}

const NinhosData: NinhosProps = {
  id: "ninhos",
  name: "Ninhos",
  carouselImage: Ninhos5,
  images: [
    Ninhos1,
    Ninhos2,
    Ninhos3,
    Ninhos4,
    Ninhos5,
    Ninhos6,
    Ninhos7,
  ],
};

export default NinhosData;
