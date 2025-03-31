import HomeCarousel from "../components/homeCarousel";

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
    image: "src/images/berco/berco1.png",
  },
  {
    id: 2,
    name: "Porta-Documentos",
    image: "src/images/portadocumentos/porta3.png",
  },
  {
    id: 3,
    name: "Bonecas",
    image: "src/images/bonecas/boneca1.png",
  },
  {
    id: 4,
    name: "Kits Maternidade",
    image: "src/images/kitmaternidade/kitmaternidade1.png",
  },
  {
    id: 5,
    name: "Bolsas",
    image: "src/images/bolsas/bolsa1.png",
  },
  {
    id: 6,
    name: "Kits Batismo",
    image: "src/images/kitbatismo/kitbatismo3.png",
  },
  {
    id: 7,
    name: "Toalhas",
    image: "src/images/toalhas/toalha8.png",
  },
  {
    id: 8,
    name: "Fraldas",
    image: "src/images/fraldas/fralda1.png",
  },
  {
    id: 9,
    name: "Almofadas",
    image: "src/images/almofadas/almofada1.png",
  },
  {
    id: 10,
    name: "Trocadores",
    image: "src/images/trocadores/trocador2.png",
  },
  {
    id: 11,
    name: "Ninhos",
    image: "src/images/ninho/ninho1.png",
  },
  {
    id: 12,
    name: "Lembrancinhas",
    image: "src/images/lembrancinhas/lembrancinha4.png",
  },
  {
    id: 13,
    name: "Organizadores",
    image: "src/images/organizadores/organizador3.png",
  },
  {
    id: 14,
    name: "Calcinhas",
    image: "src/images/calcinhas/calcinha5.png",
  },
  {
    id: 15,
    name: "Bastidores",
    image: "src/images/bastidores/bastidor1.png",
  },
  {
    id: 16,
    name: "Capas para Máquinas",
    image: "src/images/capamaquina/capamaquina1.png",
  },
  {
    id: 17,
    name: "Para o Lar",
    image: "src/images/lar/cozinha1.png",
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
