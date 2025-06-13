
import Hero from "../components/Hero";
import About from "../components/About";
import VideoPortfolio from "../components/VideoPortfolio";
import WebDevelopment from "../components/WebDevelopment";
import DesignPortfolio from "../components/DesignPortfolio";
import Testimonials from "../components/Testimonials";
import Navigation from "../components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navigation />
      <Hero />
      <About />
      <VideoPortfolio />
      <WebDevelopment />
      <DesignPortfolio />
      <Testimonials />
    </div>
  );
};

export default Index;
