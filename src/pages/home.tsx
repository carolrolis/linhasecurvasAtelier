import Header from "../components/header";
import HomeCategories from "../components/categoriesHome";
import Welcome from "../components/welcomeHome";

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
