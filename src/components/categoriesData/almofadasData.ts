import Almofadas1 from "../../assets/images/almofadas/almofada1.png";
import Almofadas2 from "../../assets/images/almofadas/almofada2.png";
import Almofadas3 from "../../assets/images/almofadas/almofada3.png";
import Almofadas4 from "../../assets/images/almofadas/almofada4.png";
import Almofadas5 from "../../assets/images/almofadas/almofada5.png";
import Almofadas6 from "../../assets/images/almofadas/almofada6.png";
import Almofadas7 from "../../assets/images/almofadas/almofada7.png";
import Almofadas8 from "../../assets/images/almofadas/almofadaamamenta1.png";
import Almofadas9 from "../../assets/images/almofadas/almofadaamamenta2.png";
import Almofadas10 from "../../assets/images/almofadas/almofadaamamenta3.png";
import Almofadas11 from "../../assets/images/almofadas/almofadaamamenta4.png";
import Almofadas12 from "../../assets/images/almofadas/almofadaamamenta5.png";

interface AlmofadasProps {
  id: string;
  name: string;
  description?: string;
  carouselImage: string;
  images: string[];
}

const AlmofadasData: AlmofadasProps = {
  id: "almofadas",
  name: "Almofadas",
  carouselImage: Almofadas1,
  images: [
    Almofadas1,
    Almofadas2,
    Almofadas3,
    Almofadas4,
    Almofadas5,
    Almofadas6,
    Almofadas7,
    Almofadas8,
    Almofadas9,
    Almofadas10,
    Almofadas11,
    Almofadas12,
  ],
};

export default AlmofadasData;