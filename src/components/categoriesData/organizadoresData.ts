import Organizadores1 from "../../assets/images/organizadores/organizador1.png";
import Organizadores2 from "../../assets/images/organizadores/organizador2.png";
import Organizadores3 from "../../assets/images/organizadores/organizador3.png";
import Organizadores4 from "../../assets/images/organizadores/organizador4.png";

interface OrganizadoresProps {
  id: string;
  name: string;
  description?: string;
  carouselImage: string;
  images: string[];
}

const OrganizadoresData: OrganizadoresProps = {
  id: "organizadores",
  name: "Organizadores",
  carouselImage: Organizadores3,
  images: [
    Organizadores1,
    Organizadores2,
    Organizadores3,
    Organizadores4,
  ],
};

export default OrganizadoresData;
