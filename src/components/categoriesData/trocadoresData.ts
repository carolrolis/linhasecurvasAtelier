import Trocadores1 from "../../assets/images/trocadores/trocador1.png";
import Trocadores2 from "../../assets/images/trocadores/trocador2.png";
import Trocadores3 from "../../assets/images/trocadores/trocador3.png";
import Trocadores4 from "../../assets/images/trocadores/trocador4.png";
import Trocadores5 from "../../assets/images/trocadores/trocador5.png";
import Trocadores6 from "../../assets/images/trocadores/trocador6.png";
import Trocadores7 from "../../assets/images/trocadores/trocadorportatil1.png";
import Trocadores8 from "../../assets/images/trocadores/trocadorportatil2.png";
import Trocadores9 from "../../assets/images/trocadores/trocadorportatil3.png";
import Trocadores10 from "../../assets/images/trocadores/trocadorportatil4.png";
import Trocadores11 from "../../assets/images/trocadores/trocadorportatil5.png";
import Trocadores12 from "../../assets/images/trocadores/trocadorportatil6.png";
import Trocadores13 from "../../assets/images/trocadores/trocadorportatil7.png";
import Trocadores14 from "../../assets/images/trocadores/trocadorportatil8.png";
import Trocadores15 from "../../assets/images/trocadores/trocadorportatil9.png";
import Trocadores16 from "../../assets/images/trocadores/trocadorportatil10.png";

interface TrocadoresProps {
  id: string;
  name: string;
  description?: string;
  carouselImage: string;
  images: string[];
}

const TrocadoresData: TrocadoresProps = {
  id: "trocadores",
  name: "Trocadores",
  carouselImage: Trocadores2,
  images: [
    Trocadores1,
    Trocadores2,
    Trocadores3,
    Trocadores4,
    Trocadores5,
    Trocadores6,
    Trocadores7,
    Trocadores8,
    Trocadores9,
    Trocadores10,
    Trocadores11,
    Trocadores12,
    Trocadores13,
    Trocadores14,
    Trocadores15,
    Trocadores16,
  ],
};

export default TrocadoresData;
