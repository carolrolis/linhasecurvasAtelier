import KitsMaternidade1 from "../../assets/images/kitsmaternidade/kitmaternidade1.png";
import KitsMaternidade2 from "../../assets/images/kitsmaternidade/kitmaternidade2.png";
import KitsMaternidade3 from "../../assets/images/kitsmaternidade/kitmaternidade3.png";
import KitsMaternidade4 from "../../assets/images/kitsmaternidade/kitmaternidade4.png";
import KitsMaternidade5 from "../../assets/images/kitsmaternidade/kitmaternidade5.png";
import KitsMaternidade6 from "../../assets/images/kitsmaternidade/kitmaternidade6.png";
import KitsMaternidade7 from "../../assets/images/kitsmaternidade/kitmaternidade7.png";

interface KitsMaternidadeProps {
  id: string;
  name: string;
  description?: string;
  carouselImage: string;
  images: string[];
}

const KitsMaternidadeData: KitsMaternidadeProps = {
  id: "kitsmaternidade",
  name: "Kits Maternidade",
  carouselImage: KitsMaternidade1,
  images: [
    KitsMaternidade1,
    KitsMaternidade2,
    KitsMaternidade3,
    KitsMaternidade4,
    KitsMaternidade5,
    KitsMaternidade6,
    KitsMaternidade7,
  ],
};

export default KitsMaternidadeData;
