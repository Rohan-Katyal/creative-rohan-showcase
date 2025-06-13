
import Hero from "../components/Hero";
import About from "../components/About";
import VideoPortfolio from "../components/VideoPortfolio";
import WebDevelopment from "../components/WebDevelopment";
import Navigation from "../components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navigation />
      <Hero />
      <About />
      <VideoPortfolio />
      <WebDevelopment />
    </div>
  );
};

export default Index;
