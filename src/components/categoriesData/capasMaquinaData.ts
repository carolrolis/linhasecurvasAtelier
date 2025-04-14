import CapasMaquina1 from "../../assets/images/capasmaquina/capamaquina1.png";
import CapasMaquina2 from "../../assets/images/capasmaquina/capamaquina2.png";
import CapasMaquina3 from "../../assets/images/capasmaquina/capamaquina3.png";
import CapasMaquina4 from "../../assets/images/capasmaquina/capamaquina4.png";
import CapasMaquina5 from "../../assets/images/capasmaquina/capamaquina5.png";
import CapasMaquina6 from "../../assets/images/capasmaquina/capamaquina6.png";
import CapasMaquina7 from "../../assets/images/capasmaquina/capamaquina7.png";
import CapasMaquina8 from "../../assets/images/capasmaquina/capamaquina8.png";
import CapasMaquina9 from "../../assets/images/capasmaquina/capamaquina9.png";

interface CapasMaquinaProps {
  id: string;
  name: string;
  description?: string;
  carouselImage: string;
  images: string[];
}

const CapasMaquinaData: CapasMaquinaProps = {
  id: "capasmaquina",
  name: "Capas para Máquina",
  carouselImage: CapasMaquina1,
  images: [
    CapasMaquina1,
    CapasMaquina2,
    CapasMaquina3,
    CapasMaquina4,
    CapasMaquina5,
    CapasMaquina6,
    CapasMaquina7,
    CapasMaquina8,
    CapasMaquina9
  ],
};

export default CapasMaquinaData;
