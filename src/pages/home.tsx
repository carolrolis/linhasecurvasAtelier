import Header from "../components/header";
import HomeCategories from "../components/homeCategories";
import Welcome from "../components/homeWelcome";

const Home: React.FC = () => {
  return (
    <div id="home">
      <Header />
      <Welcome/>
      <HomeCategories />
    </div>
  );
};

export default Home;
