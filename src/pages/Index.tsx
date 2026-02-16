import Hero from "../components/Hero";
import About from "../components/About";
import VideoPortfolio from "../components/VideoPortfolio";
import WebDevelopment from "../components/WebDevelopment";
import Navigation from "../components/Navigation";
import ThemeToggle from "../components/ThemeToggle";

const Index = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-charcoal text-charcoal dark:text-white font-poppins transition-colors duration-500">
      <Navigation />
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>
      <Hero />
      <About />
      <VideoPortfolio />
      <WebDevelopment />
    </div>
  );
};

export default Index;
