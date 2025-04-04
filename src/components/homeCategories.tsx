import HomeCarousel from "../components/homeCarousel";
import BercoCarouselImg from "../assets/images/berco/berco1.png";
import PortadocumentosCarouselImg from "../assets/images/portadocumentos/porta3.png";
import BonecasCarouselImg from "../assets/images/bonecas/boneca1.png";
import KitsmaternidadeCarouselImg from "../assets/images/kitsmaternidade/kitmaternidade1.png";
import BolsasCarouselImg from "../assets/images/bolsas/bolsa1.png";
import KitsbatismoCarouselImg from "../assets/images/kitsbatismo/kitbatismo3.png";
import ToalhasCarouselImg from "../assets/images/toalhas/toalha8.png";
import FraldasCarouselImg from "../assets/images/fraldas/fralda1.png";
import AlmofadasCarouselImg from "../assets/images/almofadas/almofada1.png";
import TrocadoresCarouselImg from "../assets/images/trocadores/trocador2.png";
import NinhosCarouselImg from "../assets/images/ninhos/ninho5.png";
import LembrancinhasCarouselImg from "../assets/images/lembrancinhas/lembrancinha1.png";
import OrganizadoresCarouselImg from "../assets/images/organizadores/organizador3.png";
import CalcinhasCarouselImg from "../assets/images/calcinhas/calcinha4.png";
import BastidoresCarouselImg from "../assets/images/bastidores/bastidor1.png";
import CapasmaquinaCarouselImg from "../assets/images/capasmaquina/capamaquina1.png";
import LarCarouselImg from "../assets/images/lar/cozinha1.png";


interface Category {
  id: number;
  name: string;
  description?: string;
  image: string;
}

const categories: Category[] = [
  {
    id: 1,
    name: "Berços",
    image: BercoCarouselImg,
  },
  {
    id: 2,
    name: "Porta-Documentos",
    image: PortadocumentosCarouselImg,
  },
  {
    id: 3,
    name: "Bonecas",
    image: BonecasCarouselImg,
  },
  {
    id: 4,
    name: "Kits Maternidade",
    image: KitsmaternidadeCarouselImg,
  },
  {
    id: 5,
    name: "Bolsas",
    image: BolsasCarouselImg,
  },
  {
    id: 6,
    name: "Kits Batismo",
    image: KitsbatismoCarouselImg,
  },
  {
    id: 7,
    name: "Toalhas",
    image: ToalhasCarouselImg,
  },
  {
    id: 8,
    name: "Fraldas",
    image: FraldasCarouselImg,
  },
  {
    id: 9,
    name: "Almofadas",
    image: AlmofadasCarouselImg,
  },
  {
    id: 10,
    name: "Trocadores",
    image: TrocadoresCarouselImg,
  },
  {
    id: 11,
    name: "Ninhos",
    image: NinhosCarouselImg,
  },
  {
    id: 12,
    name: "Lembrancinhas",
    image: LembrancinhasCarouselImg,
  },
  {
    id: 13,
    name: "Organizadores",
    image: OrganizadoresCarouselImg,
  },
  {
    id: 14,
    name: "Calcinhas",
    image: CalcinhasCarouselImg,
  },
  {
    id: 15,
    name: "Bastidores",
    image: BastidoresCarouselImg,
  },
  {
    id: 16,
    name: "Capas para Máquina",
    image: CapasmaquinaCarouselImg,
  },
  {
    id: 17,
    name: "Para o Lar",
    image: LarCarouselImg,
  },
];

const HomeCategories: React.FC = () => {
  return (
    <div
      id="categories"
      className="flex flex-col items-center py-10 overflow-hidden"
    >
      <h1 className="text-2xl font-bold mb-6 text-center">Categorias</h1>

      <div className="w-9/10 blur-carousel">
        <HomeCarousel>
          {categories.map(
            (
              category // Map 'categories' array, creates an cell for each and stores it in HomeCarousel
            ) => (
              <div
                key={category.id}
                className="flex flex-col items-center select-none"
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-56 object-cover no-select"
                  loading="lazy"
                />
                <h3 className="pt-3 pb-1 text-center text-base font-medium mb-2">
                  {category.name}
                </h3>
              </div>
            )
          )}
        </HomeCarousel>
      </div>
    </div>
  );
};

export default HomeCategories;
