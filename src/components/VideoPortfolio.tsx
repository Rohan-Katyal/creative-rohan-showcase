
import { Play, ExternalLink } from "lucide-react";

const VideoPortfolio = () => {
  const videos = [
    {
      id: "-ayhDIdxYvg",
      title: "Creative Short #1",
      description: "Dynamic short-form video content showcasing creative editing techniques and storytelling.",
      platform: "youtube"
    },
    {
      id: "c0jed_vHyFM",
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
    },
    {
      id: "Le_Fod4kGQ4",
      title: "Creative Short #6",
      description: "Professional video content demonstrating creative storytelling and advanced editing skills.",
      platform: "youtube"
    }
  ];

  const openVideo = (videoId: string) => {
    const youtubeUrl = `https://www.youtube.com/watch?v=${videoId}`;
    window.open(youtubeUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="videos" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-charcoal">
            Video <span className="text-mustard">Portfolio</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-mustard to-mustard/70 mx-auto mb-8 rounded-full"></div>
          <p className="text-charcoal/70 text-lg max-w-3xl mx-auto">
            Explore my video editing journey - 4 months of freelance work using Filmora, showcasing creative storytelling and professional growth
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video, index) => (
            <div
              key={video.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105 group border border-mustard/20"
            >
              <div className="relative aspect-[9/16] bg-gray-100">
                <iframe
                  src={`https://www.youtube.com/embed/${video.id}?rel=0&modestbranding=1`}
                  title={video.title}
                  className="w-full h-full rounded-t-xl"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <div className="absolute top-4 right-4 bg-charcoal/70 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ExternalLink 
                    className="text-mustard w-4 h-4 cursor-pointer" 
                    onClick={() => openVideo(video.id)}
                  />
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-charcoal mb-2 group-hover:text-mustard transition-colors">
                  {video.title}
                </h3>
                <p className="text-charcoal/60 text-sm leading-relaxed">
                  {video.description}
                </p>
                <div className="mt-3 flex items-center justify-between">
                  <div className="flex items-center text-mustard text-sm font-medium">
                    <Play className="w-4 h-4 mr-1" />
                    Watch above
                  </div>
                  <button
                    onClick={() => openVideo(video.id)}
                    className="text-charcoal/60 hover:text-mustard text-xs underline transition-colors"
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
