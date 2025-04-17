import Berco1 from "../../assets/images/bercos/berco1.png";
import Berco2 from "../../assets/images/bercos/berco2.png";
import Berco3 from "../../assets/images/bercos/berco3.png";
import Berco4 from "../../assets/images/bercos/berco4.png";
import Berco5 from "../../assets/images/bercos/rolo1.png";
import Berco6 from "../../assets/images/bercos/rolo2.png";

interface BercosProps {
  id: string;
  name: string;
  description?: string;
  images: string[];
}

const BercosData: BercosProps = {
  id: "bercos",
  name: "Berços",
  images: [Berco1, Berco2, Berco3, Berco4, Berco5, Berco6],
}

export default BercosData;