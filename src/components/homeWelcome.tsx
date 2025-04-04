export default function Welcome() {
  return (
    <section
      id="welcome"
      className="w-full max-h-fit bg-[url(./assets/images/homeBg2.jpg)] sm:bg-[url(./assets/images/homeBg2.jpg)] md:bg-[url(./assets/images/homeBg.jpg)] bg-right bg-no-repeat bg-cover"
    >
      <div className="pt-30 pb-10 pl-15 max-w-9/10">
        <h1 className="text-7xl font-baby leading-20">
          Sinta o amor
          <br />
          em cada
          <br />
          ponto
        </h1>
        <p className="mt-7 text-lightPink">
          No Atelier Linhas & Curvas, onde cada criação é feita para celebrar
          <br />
          os momentos únicos da vida, descubra o aconchego dos nossos
          <br />
          enxovais, artigos de cozinha e demais peças por encomenda!
        </p>
        <button className="cursor-pointer hover:scale-110 transform duration-300 mt-4 py-3 px-4 text-xl bg-linear-to-r from-white to-pink-200 border-2 rounded-4xl shadow-lg">
          Conheça a loja
        </button>
      </div>
    </section>
  );
}
