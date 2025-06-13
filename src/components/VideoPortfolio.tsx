
import { Play, ExternalLink } from "lucide-react";

const VideoPortfolio = () => {
  const videos = [
    {
      id: "hhpWg-IOkco",
      title: "Creative Short #1",
      description: "Dynamic short-form video content showcasing creative editing techniques and storytelling.",
      platform: "youtube"
    },
    {
      id: "4KholOiElJc",
      title: "Creative Short #2",
      description: "Engaging video content with smooth transitions and compelling visual narrative.",
      platform: "youtube"
    },
    {
      id: "AjYfHJpFpCs",
      title: "Creative Short #3",
      description: "Professional video editing demonstrating advanced Filmora techniques and creativity.",
      platform: "youtube"
    },
    {
      id: "BfXUfORsyvM",
      title: "Creative Short #4",
      description: "Captivating short-form content with dynamic editing and visual storytelling.",
      platform: "youtube"
    },
    {
      id: "l7PKgYKEN3w",
      title: "Creative Short #5",
      description: "Latest video editing work showcasing growth and skill development in Filmora.",
      platform: "youtube"
    }
  ];

  const openVideo = (videoId: string) => {
    const youtubeUrl = `https://www.youtube.com/watch?v=${videoId}`;
    window.open(youtubeUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="videos" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Video <span className="text-cyan-400">Portfolio</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mb-8"></div>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Explore my video editing journey - 4 months of freelance work using Filmora, showcasing creative storytelling and professional growth
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video, index) => (
            <div
              key={video.id}
              className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:transform hover:scale-105 group"
            >
              <div className="relative aspect-[9/16] bg-gray-700">
                <iframe
                  src={`https://www.youtube.com/embed/${video.id}?rel=0&modestbranding=1`}
                  title={video.title}
                  className="w-full h-full rounded-t-xl"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <div className="absolute top-4 right-4 bg-black/70 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ExternalLink 
                    className="text-white w-4 h-4 cursor-pointer" 
                    onClick={() => openVideo(video.id)}
                  />
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {video.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {video.description}
                </p>
                <div className="mt-3 flex items-center justify-between">
                  <div className="flex items-center text-cyan-400 text-sm font-medium">
                    <Play className="w-4 h-4 mr-1" />
                    Watch above
                  </div>
                  <button
                    onClick={() => openVideo(video.id)}
                    className="text-gray-400 hover:text-cyan-400 text-xs underline transition-colors"
                  >
                    Open in YouTube
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoPortfolio;
