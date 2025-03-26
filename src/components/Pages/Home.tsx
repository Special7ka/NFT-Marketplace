import { Header } from "../Header";
import { HeroSection } from "../Sections/HeroSection";
import { CollecionSection } from "../Sections/CollecionSection";
import { TopRatedSection } from "../Sections/TopRatedSection";
import { BrowseCategoresSection } from "../Sections/BrowseCategoresSection";
import { DiscoverMore } from "../Sections/DiscoverMore";
import { MagicMashroomsSection } from "../Sections/MagicMashroomsSection";
import { HowItWorksSection } from "../Sections/HowItWorksSection";
import { SubscribeSection } from "../Sections/SubscribeSection";
import { Footer } from "../Footer";

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
