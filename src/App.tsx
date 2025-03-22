import "./App.css";
import { Header } from "./components/Sections/Header";
import { HeroSection } from "./components/Sections/HeroSection";
import { CollecionSection } from "./components/Sections/CollecionSection";
import { TopRatedSection } from "./components/Sections/TopRatedSection";

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <CollecionSection />
      <TopRatedSection />
    </>
  );
}

export default App;
