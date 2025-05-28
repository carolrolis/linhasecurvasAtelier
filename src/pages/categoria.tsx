import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/header";
import HomeCarousel from "../components/carousel";

interface CategoryData {
  id: string;
  name: string;
  images: string[];
}

export default function Category() {
  const [category, setCategory] = useState<CategoryData | null>(null);
  const params = useParams();

  useEffect(() => {
    if (params.categoryID) {
      import(`../components/categoriesData/${params.categoryID}Data.ts`).then(
        (module) => {
          setCategory(module.default);
        }
      );
    }
  }, [params.categoryID]);

  return (
    <section id="category" className="mt-30">
      <Header />
      {category && (
        <div className="w-8/10 m-auto">
          <h1 className="align-center font-baby font-bold text-4xl">{category.name}</h1>

            <HomeCarousel oneAtATime>
              {category.images.map((img) => (
                <div>
                  <img
                    src={img}
                    alt={`${category.name}`}
                    className="w-full h-80 object-cover no-select 2xl:h-80"
                    loading="lazy"
                  />
                </div>
              ))}
            </HomeCarousel>
        </div>
      )}
    </section>
  );
}
