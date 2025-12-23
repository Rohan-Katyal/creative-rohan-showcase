import { Play, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

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
      id: "Le_Fod4kGQ4",
      title: "Creative Short #3",
      description: "Professional video content demonstrating creative storytelling and advanced editing skills.",
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
    <section id="videos" className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-charcoal">
            Video <span className="text-mustard">Portfolio</span>
          </h2>
          <div className="w-16 md:w-20 h-1 bg-gradient-to-r from-mustard to-mustard/70 mx-auto mb-6 md:mb-8 rounded-full"></div>
          <p className="text-charcoal/70 text-base md:text-lg max-w-3xl mx-auto px-4">
            Explore my video editing journey - 4 months of freelance work using Filmora, showcasing creative storytelling and professional growth
          </p>
        </div>

        <div className="px-4 md:px-12">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {videos.map((video, index) => (
                <CarouselItem key={video.id} className="pl-2 md:pl-4 basis-[70%] sm:basis-1/2 lg:basis-1/3">
                  <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group border border-mustard/20 h-full">
                    <div className="relative aspect-[9/16] bg-gray-100">
                      <iframe
                        src={`https://www.youtube.com/embed/${video.id}?rel=0&modestbranding=1`}
                        title={video.title}
                        className="w-full h-full"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                      <div className="absolute top-3 right-3 bg-charcoal/70 rounded-full p-1.5 md:p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <ExternalLink 
                          className="text-mustard w-3 h-3 md:w-4 md:h-4 cursor-pointer" 
                          onClick={() => openVideo(video.id)}
                        />
                      </div>
                    </div>
                    <div className="p-3 md:p-4">
                      <h3 className="text-base md:text-lg font-semibold text-charcoal mb-1 md:mb-2 group-hover:text-mustard transition-colors">
                        {video.title}
                      </h3>
                      <p className="text-charcoal/60 text-xs md:text-sm leading-relaxed line-clamp-2">
                        {video.description}
                      </p>
                      <div className="mt-2 md:mt-3 flex items-center justify-between">
                        <div className="flex items-center text-mustard text-xs md:text-sm font-medium">
                          <Play className="w-3 h-3 md:w-4 md:h-4 mr-1" />
                          Watch above
                        </div>
                        <button
                          onClick={() => openVideo(video.id)}
                          className="text-charcoal/60 hover:text-mustard text-[10px] md:text-xs underline transition-colors"
                        >
                          Open in YouTube
                        </button>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-4 lg:-left-6 bg-mustard/10 border-mustard/30 hover:bg-mustard hover:text-white" />
            <CarouselNext className="hidden md:flex -right-4 lg:-right-6 bg-mustard/10 border-mustard/30 hover:bg-mustard hover:text-white" />
          </Carousel>
          
          {/* Mobile swipe indicator */}
          <div className="flex md:hidden justify-center mt-4 gap-1">
            <ChevronLeft className="w-4 h-4 text-charcoal/40" />
            <span className="text-xs text-charcoal/50">Swipe to explore</span>
            <ChevronRight className="w-4 h-4 text-charcoal/40" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoPortfolio;
