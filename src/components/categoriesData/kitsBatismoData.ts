import KitsBatismo1 from "../../assets/images/kitsBatismo/kitBatismo1.png";
import KitsBatismo2 from "../../assets/images/kitsBatismo/kitBatismo2.png";
import KitsBatismo3 from "../../assets/images/kitsBatismo/kitBatismo3.png";
import KitsBatismo4 from "../../assets/images/kitsBatismo/kitBatismo4.png";
import KitsBatismo5 from "../../assets/images/kitsBatismo/kitBatismo5.png";
import KitsBatismo6 from "../../assets/images/kitsBatismo/kitBatismo6.png";
import KitsBatismo7 from "../../assets/images/kitsBatismo/kitbatismo7.png";
import KitsBatismo8 from "../../assets/images/kitsBatismo/kitbatismo8.png";
import KitsBatismo9 from "../../assets/images/kitsBatismo/kitbatismo9.png";
import KitsBatismo10 from "../../assets/images/kitsBatismo/kitbatismo10.png";
import KitsBatismo11 from "../../assets/images/kitsBatismo/kitbatismo11.png";

interface KitsBatismoProps {
  id: string;
  name: string;
  description?: string;
  carouselImage: string;
  images: string[];
}

const KitsBatismoData: KitsBatismoProps = {
  id: "kitsbatismo",
  name: "Kits Batismo",
  carouselImage: KitsBatismo1,
  images: [
    KitsBatismo1,
    KitsBatismo2,
    KitsBatismo3,
    KitsBatismo4,
    KitsBatismo5,
    KitsBatismo6,
    KitsBatismo7,
    KitsBatismo8,
    KitsBatismo9,
    KitsBatismo10,
    KitsBatismo11,
  ],
};

export default KitsBatismoData;