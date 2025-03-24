import "./App.css";
import { Header } from "./components/Sections/Header";
import { HeroSection } from "./components/Sections/HeroSection";
import { CollecionSection } from "./components/Sections/CollecionSection";
import { TopRatedSection } from "./components/Sections/TopRatedSection";
import { BrowseCategoresSection } from "./components/Sections/BrowseCategoresSection";
import { DiscoverMore } from "./components/Sections/DiscoverMore";
import { MagicMashroomsSection } from "./components/Sections/MagicMashroomsSection";

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
    </>
  );
}

export default App;
