import KitsBatismo1 from "../../assets/images/kitsbatismo/kitbatismo1.png";
import KitsBatismo2 from "../../assets/images/kitsbatismo/kitbatismo2.png";
import KitsBatismo3 from "../../assets/images/kitsbatismo/kitbatismo3.png";
import KitsBatismo4 from "../../assets/images/kitsbatismo/kitbatismo4.png";
import KitsBatismo5 from "../../assets/images/kitsbatismo/kitbatismo5.png";
import KitsBatismo6 from "../../assets/images/kitsbatismo/kitbatismo6.png";
import KitsBatismo7 from "../../assets/images/kitsbatismo/kitbatismo7.png";
import KitsBatismo8 from "../../assets/images/kitsbatismo/kitbatismo8.png";
import KitsBatismo9 from "../../assets/images/kitsbatismo/kitbatismo9.png";
import KitsBatismo10 from "../../assets/images/kitsbatismo/kitbatismo10.png";
import KitsBatismo11 from "../../assets/images/kitsbatismo/kitbatismo11.png";

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