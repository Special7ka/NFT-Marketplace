import "./App.css";
import { Header } from "./components/Header";
import { HeroSection } from "./components/Sections/HeroSection";
import { CollecionSection } from "./components/Sections/CollecionSection";
import { TopRatedSection } from "./components/Sections/TopRatedSection";
import { BrowseCategoresSection } from "./components/Sections/BrowseCategoresSection";
import { DiscoverMore } from "./components/Sections/DiscoverMore";
import { MagicMashroomsSection } from "./components/Sections/MagicMashroomsSection";
import { HowItWorksSection } from "./components/Sections/HowItWorksSection";
import { SubscribeSection } from "./components/Sections/SubscribeSection";
import { Footer } from "./components/Footer";

function App() {
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
}

export default App;
