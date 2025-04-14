import Bolsas1 from "../../assets/images/bolsas/bolsa1.png";
import Bolsas2 from "../../assets/images/bolsas/bolsa2.png";
import Bolsas3 from "../../assets/images/bolsas/bolsa3.png";
import Bolsas4 from "../../assets/images/bolsas/bolsa4.png";
import Bolsas5 from "../../assets/images/bolsas/bolsa5.png";
import Bolsas6 from "../../assets/images/bolsas/bolsa6.png";
import Bolsas7 from "../../assets/images/bolsas/farmacinha1.png";
import Bolsas8 from "../../assets/images/bolsas/farmacinha2.png";
import Bolsas9 from "../../assets/images/bolsas/farmacinha3.png";
import Bolsas10 from "../../assets/images/bolsas/farmacinha4.png";
import Bolsas11 from "../../assets/images/bolsas/farmacinha5.png";
import Bolsas12 from "../../assets/images/bolsas/farmacinha6.png";
import Bolsas13 from "../../assets/images/bolsas/farmacinha7.png";
import Bolsas14 from "../../assets/images/bolsas/farmacinha8.png";
import Bolsas15 from "../../assets/images/bolsas/farmacinha9.png";
import Bolsas16 from "../../assets/images/bolsas/necessaire1.png";
import Bolsas17 from "../../assets/images/bolsas/necessaire2.png";
import Bolsas18 from "../../assets/images/bolsas/necessaire3.png";
import Bolsas19 from "../../assets/images/bolsas/necessaire4.png";
import Bolsas20 from "../../assets/images/bolsas/necessaire5.png";
import Bolsas21 from "../../assets/images/bolsas/necessaire6.png";
import Bolsas22 from "../../assets/images/bolsas/necessaire7.png";
import Bolsas23 from "../../assets/images/bolsas/necessaire8.png";
import Bolsas24 from "../../assets/images/bolsas/necessaire9.png";
import Bolsas25 from "../../assets/images/bolsas/necessaire10.png";

interface BolsasProps {
  id: string;
  name: string;
  description?: string;
  carouselImage: string;
  images: string[];
}

const BolsasData: BolsasProps = {
  id: "bolsas",
  name: "Bolsas",
  carouselImage: Bolsas1,
  images: [
    Bolsas1,
    Bolsas2,
    Bolsas3,
    Bolsas4,
    Bolsas5,
    Bolsas6,
    Bolsas7,
    Bolsas8,
    Bolsas9,
    Bolsas10,
    Bolsas11,
    Bolsas12,
    Bolsas13,
    Bolsas14,
    Bolsas15,
    Bolsas16,
    Bolsas17,
    Bolsas18,
    Bolsas19,
    Bolsas20,
    Bolsas21,
    Bolsas22,
    Bolsas23,
    Bolsas24,
    Bolsas25,
  ],
};

export default BolsasData;