import { Header } from "../Sections/Sheared/Header";
import { HeroSection } from "../Sections/Home/HeroSection";
import { CollecionSection } from "../Sections/Home/CollecionSection";
import { TopRatedSection } from "../Sections/Home/TopRatedSection";
import { BrowseCategoresSection } from "../Sections/Home/BrowseCategoresSection";
import { DiscoverMore } from "../Sections/Home/DiscoverMore";
import { MagicMashroomsSection } from "../Sections/Home/MagicMashroomsSection";
import { HowItWorksSection } from "../Sections/Home/HowItWorksSection";
import { SubscribeSection } from "../Sections/Home/SubscribeSection";
import { Footer } from "../Sections/Sheared/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <CollecionSection />
      <TopRatedSection />
      <BrowseCategoresSection />
      <DiscoverMore />
      <MagicMashroomsSection />
      <HowItWorksSection />
      <SubscribeSection />
      <Footer />
    </>
  );
};

export default Home;
