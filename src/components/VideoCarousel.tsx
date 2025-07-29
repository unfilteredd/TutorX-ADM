import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

// Mock trending videos data
const trendingVideos = [
  {
    id: "academic-1",
    title: "Early Mathematics: Numbers and Counting",
    tutor: "Emily Parker",
    thumbnail: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=225&fit=crop",
    duration: "15:30",
    views: "18.5K views"
  },
  {
    id: "music-1",
    title: "Learn Guitar: From Beginner to Pro",
    tutor: "Jake Thompson",
    thumbnail: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=225&fit=crop",
    duration: "18:20",
    views: "45K views"
  },
  {
    id: "career-1",
    title: "Career Planning: Finding Your Perfect Path",
    tutor: "Dr. Michael Stevens",
    thumbnail: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400&h=225&fit=crop",
    duration: "24:15",
    views: "32K views"
  },
  {
    id: "calm-chat-1",
    title: "Mindful Conversations: The Art of Listening",
    tutor: "Sarah Johnson",
    thumbnail: "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?w=400&h=225&fit=crop",
    duration: "19:45",
    views: "27K views"
  }
];

const VideoCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % Math.max(1, trendingVideos.length - 2));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + Math.max(1, trendingVideos.length - 2)) % Math.max(1, trendingVideos.length - 2));
  };

  const handleVideoClick = (videoId: number | string) => {
    // Navigate to the tutorial page
    navigate(`/tutorial/${videoId}`);
    window.scrollTo(0, 0);
  };

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Trending Videos</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover what's popular right now and join thousands of learners mastering new skills
          </p>
        </div>

        <div className="relative">
          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm"
            onClick={prevSlide}
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>
          
          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm"
            onClick={nextSlide}
          >
            <ChevronRight className="w-4 h-4" />
          </Button>

          {/* Video Cards */}
          <div className="overflow-hidden mx-8">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 33.333}%)` }}
            >
              {trendingVideos.map((video) => (
                <div key={video.id} className="w-1/3 flex-shrink-0 px-3" onClick={() => handleVideoClick(video.id)}>
                  <Card className="group hover:shadow-glow transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 bg-card-gradient border-border/20 backdrop-blur-sm cursor-pointer">
                    <CardContent className="p-0">
                      <div className="relative overflow-hidden rounded-t-lg">
                        <img
                          src={video.thumbnail}
                          alt={video.title}
                          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/30 opacity-0 group-hover:opacity-90 transition-opacity duration-500 flex items-center justify-center">
                          <Button size="icon" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full shadow-glow animate-glow-pulse">
                            <Play className="w-6 h-6" />
                          </Button>
                        </div>
                        <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                          {video.duration}
                        </div>
                      </div>
                      <div className="p-4">
                        <h3 className="font-semibold text-lg mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                          {video.title}
                        </h3>
                        <p className="text-muted-foreground text-sm mb-1">{video.tutor}</p>
                        <p className="text-muted-foreground text-xs">{video.views}</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoCarousel;