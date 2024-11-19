import { Toaster } from "react-hot-toast";
import FeatureSection from "../components/FeatureSection";
import HeroSection from "../components/HeroSection";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <FeatureSection />
      <Toaster/>
    </>
  );
};

export default HomePage;