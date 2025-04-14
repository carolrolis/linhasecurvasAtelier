import Bastidores1 from "../../assets/images/bastidores/bastidor1.png";
import Bastidores2 from "../../assets/images/bastidores/bastidor2.png";
import Bastidores3 from "../../assets/images/bastidores/bastidor3.png";
import Bastidores4 from "../../assets/images/bastidores/bastidor4.png";
import Bastidores5 from "../../assets/images/bastidores/bastidor5.png";
import Bastidores6 from "../../assets/images/bastidores/bastidor6.png";

interface BastidoresProps {
  id: string;
  name: string;
  description?: string;
  carouselImage: string;
  images: string[];
}

const BastidoresData: BastidoresProps = {
  id: "bastidores",
  name: "Bastidores",
  carouselImage: Bastidores1,
  images: [
    Bastidores1,
    Bastidores2,
    Bastidores3,
    Bastidores4,
    Bastidores5,
    Bastidores6,
  ],
};

export default BastidoresData;
