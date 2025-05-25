import { Link } from "react-router-dom";

export default function Welcome() {
  return (
    <div
      id="welcome"
      className="w-full max-h-fit 2xl:text-2xl bg-[url(./assets/images/homeBg2.png)]
      sm:bg-[url(./assets/images/homeBg2.png)] md:bg-[url(./assets/images/homeBg.png)]
      2xl:bg-bottom bg-right bg-no-repeat bg-cover"
    >
      <div className="pt-30 pb-10 pl-15 max-w-9/10 2xl:pt-50 2xl:pb-30">
        <h1 className="text-7xl 2xl:text-9xl font-baby">
          Sinta o amor
          <br />
          em cada
          <br />
          ponto
        </h1>
        <p className="mt-7 text-lightPink max-w-150">
          No Atelier Linhas & Curvas, onde cada criação é feita para celebrar os
          momentos únicos da vida, descubra o aconchego dos nossos enxovais,
          artigos de cozinha e demais peças por encomenda!
        </p>
        <Link to="/catalogo">
          <button
            className="font-medium cursor-pointer hover:scale-110 mt-7 py-3 px-4 text-xl
          border-2 rounded-4xl shadow-lg 2xl:text-2xl 2xl:mt-8 2xl:py-6 2xl:px-8
          bg-linear-to-r from-white to-pink-200  transform duration-300"
          >
            Faça sua encomenda!
          </button>
        </Link>
      </div>
    </div>
  );
}
