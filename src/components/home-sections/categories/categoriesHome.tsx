import carouselData from "../../categoriesData/carouselData";
import VerMaisIcon from "../../svgs/verMais";
import HomeCarousel from "./carouselHome";
import { Link, useNavigate } from "react-router-dom";

export const categories = carouselData.map((item) => ({
  id: item.id,
  name: item.name,
  image: item.carouselImage,
}));

const HomeCategories: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div
      id="categories"
      className="flex flex-col items-center py-10 overflow-hidden"
    >
      <h1 className="text-2xl font-semibold mb-6 text-center">Categorias</h1>
      <div className="w-9/10 blur-carousel">
        <HomeCarousel>
          {categories.map((category) => (
            <div
              onClick={() => {
                navigate(`/catalogo/${category.id}`);
              }}
              key={category.id}
              className="flex flex-col items-center select-none"
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-56 object-cover no-select 2xl:h-80"
                loading="lazy"
              />
              <h3 className="pt-3 pb-1 text-center text-base 2xl:text-2xl font-medium mb-2">
                {category.name}
              </h3>
            </div>
          ))}
          <Link
            to="/catalogo"
            title="Ver mais"
            className="group max-w-fit max-h-fit self-center pr-18 cursor-pointer hover:scale-105 transition-transform duration-300"
          >
            <VerMaisIcon/>
          </Link>
        </HomeCarousel>
      </div>
    </div>
  );
};

export default HomeCategories;
