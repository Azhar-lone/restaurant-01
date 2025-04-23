import HomeSection from "./_components/Hero";
import FeaturedSection from "./_components/Featured";
import DishesSection from "./_components/Dishes";
import AboutSection from "./_components/About";
import MenuSection from "./_components/MenuSection";

const Home = () => {
  return (
    <div>
      <HomeSection />
      <FeaturedSection />
      <DishesSection />
      <AboutSection />
      <MenuSection />
    </div>
  );
};

export default Home;
