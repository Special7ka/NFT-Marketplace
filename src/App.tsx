import "./App.css";
import { Header } from "./components/Sections/Header";
import { HeroSection } from "./components/Sections/HeroSection";
import { CollecionSection } from "./components/Sections/CollecionSection";
import { TopRatedSection } from "./components/Sections/TopRatedSection";
import { BrowseCategoresSection } from "./components/Sections/BrowseCategoresSection";

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <CollecionSection />
      <TopRatedSection />
      <BrowseCategoresSection />
    </>
  );
}

export default App;
