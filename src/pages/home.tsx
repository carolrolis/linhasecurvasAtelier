import Header from "../components/header";
import HomeCategories from "../components/home-sections/categories/categoriesHome";
import Welcome from "../components/home-sections/welcome";

const Home: React.FC = () => {
  return (
    <main id="home">
      <Header />
      <Welcome/>
      <HomeCategories />
    </main>
  );
};

export default Home;
