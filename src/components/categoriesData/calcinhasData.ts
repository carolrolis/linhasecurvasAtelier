import Calcinhas1 from "../../assets/images/calcinhas/calcinha1.png";
import Calcinhas2 from "../../assets/images/calcinhas/calcinha2.png";
import Calcinhas3 from "../../assets/images/calcinhas/calcinha3.png";
import Calcinhas4 from "../../assets/images/calcinhas/calcinha4.png";
import Calcinhas5 from "../../assets/images/calcinhas/calcinha5.png";
import Calcinhas6 from "../../assets/images/calcinhas/calcinha6.png";
import Calcinhas7 from "../../assets/images/calcinhas/calcinha7.png";

interface CalcinhasProps {
  id: string;
  name: string;
  description?: string;
  carouselImage: string;
  images: string[];
}

const CalcinhasData: CalcinhasProps = {
  id: "calcinhas",
  name: "Calcinhas",
  carouselImage: Calcinhas3,
  images: [
    Calcinhas1,
    Calcinhas2,
    Calcinhas3,
    Calcinhas4,
    Calcinhas5,
    Calcinhas6,
    Calcinhas7,
  ],
};

export default CalcinhasData;
