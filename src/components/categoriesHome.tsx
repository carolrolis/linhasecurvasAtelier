import carouselData from "./categoriesData/carouselData";

import HomeCarousel from "./carouselHome";
import { Link } from "react-router-dom";

export const categories = carouselData.map((item) => ({
  id: item.id,
  name: item.name,
  image: item.carouselImage,
}));

const HomeCategories: React.FC = () => {
  return (
    <div
      id="categories"
      className="flex flex-col items-center py-10 overflow-hidden"
    >
      <h1 className="text-2xl font-semibold mb-6 text-center">Categorias</h1>
      <div className="w-9/10 blur-carousel">
        <HomeCarousel>
          {categories.map((category) => (
            <Link to={`catalogo/${category.id}`}>
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
            </Link>
          ))}
          <Link
            to="/catalogo"
            title="Ver mais"
            className="group max-w-fit max-h-fit self-center pr-18 cursor-pointer hover:scale-105 transition-transform duration-300"
          >
            <svg
              width="64px"
              height="64px"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="bg-white rounded-full group-hover:bg-gray-200"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  fill="#2c3e50"
                  fill-rule="evenodd"
                  d="M10 3a7 7 0 100 14 7 7 0 000-14zm-9 7a9 9 0 1118 0 9 9 0 01-18 0zm14 .069a1 1 0 01-1 1h-2.931V14a1 1 0 11-2 0v-2.931H6a1 1 0 110-2h3.069V6a1 1 0 112 0v3.069H14a1 1 0 011 1z"
                ></path>{" "}
              </g>
            </svg>
          </Link>
        </HomeCarousel>
      </div>
    </div>
  );
};

export default HomeCategories;
