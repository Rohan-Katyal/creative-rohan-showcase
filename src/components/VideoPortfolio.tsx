
import { Play } from "lucide-react";

const VideoPortfolio = () => {
  const videos = [
    {
      id: "dQw4w9WgXcQ",
      title: "Brand Commercial",
      description: "A dynamic commercial showcasing modern brand identity with smooth transitions and engaging storytelling.",
      platform: "youtube"
    },
    {
      id: "9bZkp7q19f0",
      title: "Product Showcase",
      description: "Professional product demonstration video with cinematic shots and compelling narrative flow.",
      platform: "youtube"
    },
    {
      id: "kJQP7kiw5Fk",
      title: "Social Media Campaign",
      description: "Creative social media content designed to maximize engagement and brand awareness.",
      platform: "youtube"
    },
    {
      id: "L_jWHffIx5E",
      title: "Event Highlights",
      description: "Captivating event coverage with dynamic editing and professional audio mixing.",
      platform: "youtube"
    }
  ];

  return (
    <section id="videos" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Video <span className="text-cyan-400">Portfolio</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mb-8"></div>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Explore my latest video editing projects showcasing creative storytelling and professional production quality
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {videos.map((video, index) => (
            <div
              key={video.id}
              className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:transform hover:scale-105 group"
            >
              <div className="relative aspect-video bg-gray-700">
                <iframe
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={video.title}
                  className="w-full h-full rounded-t-xl"
                  allowFullScreen
                ></iframe>
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Play className="text-white w-16 h-16 opacity-80" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {video.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {video.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoPortfolio;
