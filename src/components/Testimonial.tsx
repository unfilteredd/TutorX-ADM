
import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import ReviewDialog from "./ReviewDialog";
import successStoryService from "@/services/successStoryService";
import { useToast } from "@/components/ui/use-toast";

// Default testimonials as fallback
const defaultTestimonials = [
  {
    id: "1",
    name: "Ansh Choudhary",
    role: "Cyber Security Expert",
    image: "https://images.unsplash.com/photo-1494790108755-2616c6bc1413?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    text: "TutorX completely transformed my approach to learning. The personalized sessions helped me master digital marketing in just 3 months!",
    skill: "Digital Marketing",
    gradient: "from-primary/20 to-secondary/20"
  },
  {
    id: "2",
    name: "Ayush Shikhar",
    role: "Student",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    text: "The quality of tutors here is exceptional. My Python skills went from beginner to intermediate level faster than I ever imagined.",
    skill: "Programming",
    gradient: "from-secondary/20 to-primary/20"
  },
  {
    id: "3",
    name: "Amrit",
    role: "Student",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    text: "Amazing platform! The cooking tutorials and live sessions with Chef Maria helped me become confident in the kitchen.",
    skill: "Cooking",
    gradient: "from-primary/20 to-secondary/20"
  },
  {
    id: "4",
    name: "David Park",
    role: "Entrepreneur",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    text: "The business strategy sessions were game-changing. My startup's growth accelerated significantly after working with expert mentors.",
    skill: "Business Strategy",
    gradient: "from-secondary/20 to-primary/20"
  }
];

const Testimonial = () => {
  const [reviewDialogOpen, setReviewDialogOpen] = useState(false);
  const [testimonials, setTestimonials] = useState(defaultTestimonials);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    const fetchSuccessStories = async () => {
      try {
        const stories = await successStoryService.getSuccessStories();
        
        if (stories && stories.length > 0) {
          // Map API stories to the format needed for display
          const mappedStories = stories.map((story, index) => ({
            id: story._id,
            name: story.name,
            role: "Verified Learner", // Default role since API doesn't have this
            image: `https://source.unsplash.com/random/100x100?face&sig=${index}`, // Random image
            rating: story.rating,
            text: story.story,
            skill: story.title,
            gradient: index % 2 === 0 ? "from-primary/20 to-secondary/20" : "from-secondary/20 to-primary/20"
          }));
          
          setTestimonials(mappedStories);
        }
      } catch (error) {
        console.error("Failed to fetch success stories:", error);
        toast({
          title: "Failed to load success stories",
          description: "Using default testimonials instead",
          variant: "destructive",
        });
        // Keep using default testimonials
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchSuccessStories();
  }, [toast]);

  return (
    <section id="success-stories" className="py-20 bg-muted/30 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-secondary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-3/4 left-1/3 w-48 h-48 bg-primary/3 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-hero-gradient bg-clip-text text-transparent">
            Success Stories
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            See how our learners have transformed their skills and achieved their goals with TutorX
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {isLoading ? (
            // Loading skeleton
            Array(4).fill(0).map((_, index) => (
              <Card 
                key={`skeleton-${index}`} 
                className="group animate-pulse bg-card-gradient border-border/20 backdrop-blur-sm relative overflow-hidden"
              >
                <CardContent className="p-6 relative z-10 h-64">
                  <div className="w-8 h-8 rounded-full bg-primary/20 mb-4"></div>
                  <div className="h-20 bg-primary/10 rounded mb-6"></div>
                  <div className="flex items-center space-x-1 mb-4">
                    {Array(5).fill(0).map((_, i) => (
                      <div key={i} className="w-4 h-4 rounded-full bg-primary/20"></div>
                    ))}
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 rounded-full bg-primary/20"></div>
                    <div>
                      <div className="h-4 w-24 bg-primary/20 rounded mb-2"></div>
                      <div className="h-3 w-16 bg-primary/10 rounded"></div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
          ) : (
            testimonials.map((testimonial, index) => (
              <Card 
                key={testimonial.id} 
                className="group hover:shadow-glow transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 animate-fade-in bg-card-gradient border-border/20 backdrop-blur-sm relative overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Hover Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${testimonial.gradient} opacity-0 group-hover:opacity-80 transition-opacity duration-500`}></div>
                
                <CardContent className="p-6 relative z-10">
                  {/* Quote Icon with Glow */}
                  <div className="mb-4 relative">
                    <Quote className="w-8 h-8 text-primary/30 group-hover:text-primary/70 group-hover:shadow-glow transition-all duration-300" />
                    <div className="absolute inset-0 bg-primary/20 rounded-full blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-foreground mb-6 line-clamp-4 leading-relaxed group-hover:text-white transition-colors duration-300">
                    "{testimonial.text}"
                  </p>

                  {/* Rating with Animation */}
                  <div className="flex items-center mb-4 space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star 
                        key={i} 
                        className="w-4 h-4 text-yellow-400 fill-current group-hover:animate-pulse transition-all duration-300" 
                        style={{ animationDelay: `${i * 0.1}s` }}
                      />
                    ))}
                  </div>

                  {/* User Info */}
                  <div className="flex items-center space-x-3">
                    <div className="relative">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover border-2 border-primary/20 group-hover:border-secondary/60 transition-all duration-300 group-hover:shadow-glow"
                      />
                      <div className="absolute inset-0 rounded-full bg-hero-gradient opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm group-hover:text-white transition-colors duration-300">{testimonial.name}</h4>
                      <p className="text-muted-foreground text-xs group-hover:text-white/80 transition-colors duration-300">{testimonial.role}</p>
                      <span className="inline-block mt-1 text-xs bg-glass-bg backdrop-blur-sm border border-glass-border text-primary px-2 py-1 rounded-full group-hover:bg-secondary/20 group-hover:text-white transition-all duration-300">
                        {testimonial.skill}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </div>

        {/* Enhanced Call to Action */}
        <div className="text-center mt-16">
          <div className="inline-block p-8 bg-glass-bg backdrop-blur-xl border border-glass-border rounded-2xl shadow-card relative">
            <div className="absolute top-2 left-2 w-4 h-4 bg-primary rounded-full animate-particle-float"></div>
            <div className="absolute bottom-2 right-2 w-3 h-3 bg-secondary rounded-full animate-particle-float" style={{ animationDelay: '1s' }}></div>
            
            <p className="text-muted-foreground mb-6 text-lg">Join over <span className="text-secondary font-bold">10,000+</span> successful learners</p>
            <button 
              onClick={() => setReviewDialogOpen(true)}
              className="bg-primary hover:bg-primary-hover text-primary-foreground px-10 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-elegant hover:shadow-glow hover:scale-105"
            >
              Write Your Success Story
            </button>
          </div>
        </div>
      </div>

      {/* Review Dialog */}
      <ReviewDialog open={reviewDialogOpen} onOpenChange={setReviewDialogOpen} />
    </section>
  );
};

export default Testimonial;
