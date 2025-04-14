import Lembrancinhas1 from "../../assets/images/lembrancinhas/lembrancinha1.png";
import Lembrancinhas2 from "../../assets/images/lembrancinhas/lembrancinha2.png";
import Lembrancinhas3 from "../../assets/images/lembrancinhas/lembrancinha3.png";
import Lembrancinhas4 from "../../assets/images/lembrancinhas/lembrancinha4.png";
import Lembrancinhas5 from "../../assets/images/lembrancinhas/lembrancinha5.png";

interface LembrancinhasProps {
  id: string;
  name: string;
  description?: string;
  carouselImage: string;
  images: string[];
}

const LembrancinhasData: LembrancinhasProps = {
  id: "lembrancinhas",
  name: "Lembrancinhas",
  carouselImage: Lembrancinhas5,
  images: [
    Lembrancinhas1,
    Lembrancinhas2,
    Lembrancinhas3,
    Lembrancinhas4,
    Lembrancinhas5,
  ],
};

export default LembrancinhasData;
