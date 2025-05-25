import catalogoData from "../components/categoriesData/catalogoData";

import { useNavigate } from "react-router-dom";
import Header from "../components/header";

export const categories = catalogoData.map((item) => ({
  id: item.id,
  name: item.name,
  image: item.catalogoImage,
}));

const HomeCategories: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section
      id="categories"
      className="flex flex-col items-center py-10 overflow-hidden"
    >
      <Header />
      <div className="mt-20 2xl:mt-40">
        <h1 className="text-2xl 2xl:text-3xl font-semibold mb-6 text-center">Categorias</h1>
        <div className="w-screen flex flex-row gap-4 flex-wrap px-10 justify-center">
          {categories.map((category) => (
            <div
              onClick={() => {
                navigate(`/catalogo/${category.id}`);
              }}
              key={category.id}
              className="flex flex-col items-center select-none flex-shrink-0 w-62 2xl:min-w-80 scroll-snap-center bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer border-3 border-white hover:scale-105 hover:border-gold active:scale-105 active:border-gold transition-transform duration-300"
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-56 2xl:h-70 object-cover no-select"
                loading="lazy"
              />
              <h3 className="pt-3 pb-1 text-center text-base font-medium mb-2 2xl:text-2xl">
                {category.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeCategories;
