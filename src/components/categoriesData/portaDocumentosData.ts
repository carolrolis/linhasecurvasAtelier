import PortaDoc1 from "../../assets/images/portadocumentos/porta1.png";
import PortaDoc2 from "../../assets/images/portadocumentos/porta2.png";
import PortaDoc3 from "../../assets/images/portadocumentos/porta3.png";
import PortaDoc4 from "../../assets/images/portadocumentos/porta4.png";
import PortaDoc5 from "../../assets/images/portadocumentos/porta5.png";
import PortaDoc6 from "../../assets/images/portadocumentos/porta6.png";
import PortaDoc7 from "../../assets/images/portadocumentos/porta7.png";
import PortaDoc8 from "../../assets/images/portadocumentos/porta8.png";
import PortaDoc9 from "../../assets/images/portadocumentos/porta9.png";
import PortaDoc10 from "../../assets/images/portadocumentos/porta10.png";
import PortaDoc11 from "../../assets/images/portadocumentos/porta11.png";
import PortaDoc12 from "../../assets/images/portadocumentos/porta12.png";
import PortaDoc13 from "../../assets/images/portadocumentos/porta13.png";
import PortaDoc14 from "../../assets/images/portadocumentos/porta14.png";
import PortaDoc15 from "../../assets/images/portadocumentos/porta15.png";
import PortaDoc16 from "../../assets/images/portadocumentos/porta16.png";
import PortaDoc17 from "../../assets/images/portadocumentos/porta17.png";
import PortaDoc18 from "../../assets/images/portadocumentos/porta18.png";
import PortaDoc19 from "../../assets/images/portadocumentos/porta19.png";

interface PortaDocProps {
  id: string;
  name: string;
  description?: string;
  carouselImage: string;
  images: string[];
}

const PortaDocData: PortaDocProps = {
  id: "portadocumentos",
  name: "Porta-Documentos",
  carouselImage: PortaDoc7,
  images: [
    PortaDoc1,
    PortaDoc2,
    PortaDoc3,
    PortaDoc4,
    PortaDoc5,
    PortaDoc6,
    PortaDoc7,
    PortaDoc8,
    PortaDoc9,
    PortaDoc10,
    PortaDoc11,
    PortaDoc12,
    PortaDoc13,
    PortaDoc14,
    PortaDoc15,
    PortaDoc16,
    PortaDoc17,
    PortaDoc18,
    PortaDoc19,
  ],
};

export default PortaDocData;
