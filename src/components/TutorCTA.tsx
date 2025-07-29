
import { Button } from "@/components/ui/button";
import { Users, DollarSign, Clock, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";

const features = [
  {
    icon: Users,
    title: "Build Your Community",
    description: "Connect with eager learners worldwide"
  },
  {
    icon: DollarSign,
    title: "Earn on Your Terms",
    description: "Set your own rates and schedule"
  },
  {
    icon: Clock,
    title: "Flexible Teaching",
    description: "Online or offline sessions, your choice"
  },
  {
    icon: Star,
    title: "Expert Recognition",
    description: "Build your reputation as a top tutor"
  }
];

const TutorCTA = () => {
  const navigate = useNavigate();

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-hero-gradient opacity-10"></div>
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-secondary to-transparent"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full animate-float blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-secondary/10 rounded-full animate-float blur-xl" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-primary/5 rounded-full animate-float blur-xl" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-6xl mx-auto">
          {/* Hero Content */}
          <div className="text-center mb-16">
            <div className="inline-block p-1 bg-hero-gradient rounded-full mb-6">
              <div className="bg-background px-6 py-2 rounded-full">
                <span className="text-sm font-medium bg-hero-gradient bg-clip-text text-transparent">
                  ✨ Join Our Tutor Community
                </span>
              </div>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="bg-hero-gradient bg-clip-text text-transparent">
                Become a Tutor
              </span>
              <br />
              <span className="text-foreground">on TutorX</span>
            </h2>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
              Share your expertise, inspire learners worldwide, and build a thriving teaching career with complete flexibility
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-10 py-4 text-lg font-semibold shadow-elegant transform hover:scale-105 transition-all duration-300 hover:shadow-glow"
                onClick={() => {
                  navigate('/become-tutor');
                  window.scrollTo({ top: 0, behavior: "instant" });
                }}
              >
                Start Teaching Today
              </Button>
              
              {/* <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-primary/30 text-foreground hover:bg-primary/10 backdrop-blur-sm px-10 py-4 text-lg font-semibold transform hover:scale-105 transition-all duration-300 hover:border-primary/50"
                onClick={() => {
                  navigate('/become-tutor');
                  window.scrollTo({ top: 0, behavior: "instant" });
                }}
              >
                Learn More
              </Button> */}
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={index}
                  className="group p-6 bg-glass-bg backdrop-blur-xl border border-glass-border rounded-2xl hover:shadow-glow transition-all duration-500 transform hover:-translate-y-2 animate-fade-in relative overflow-hidden"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Hover Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative z-10">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                      <IconComponent className="w-6 h-6 text-primary group-hover:text-secondary transition-colors duration-300" />
                    </div>
                    
                    <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors duration-300">
                      {feature.title}
                    </h3>
                    
                    <p className="text-muted-foreground text-sm leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Stats Section */}
          <div className="bg-card-gradient p-8 md:p-12 rounded-3xl shadow-card border border-border/20 relative overflow-hidden">
            <div className="absolute inset-0 bg-hero-gradient opacity-5"></div>
            <div className="absolute top-4 left-4 w-8 h-8 bg-primary/20 rounded-full animate-particle-float"></div>
            <div className="absolute bottom-4 right-4 w-6 h-6 bg-secondary/20 rounded-full animate-particle-float" style={{ animationDelay: '2s' }}></div>
            
            <div className="relative z-10 text-center">
              <h3 className="text-2xl md:text-3xl font-bold mb-8 bg-hero-gradient bg-clip-text text-transparent">
                Join a Growing Community of Successful Tutors
              </h3>
              
              <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-secondary mb-2 animate-glow-pulse">50+</div>
                  <div className="text-muted-foreground text-sm uppercase tracking-wide">Expert Tutors</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-secondary mb-2 animate-glow-pulse" style={{ animationDelay: '0.5s' }}>₹50k+</div>
                  <div className="text-muted-foreground text-sm uppercase tracking-wide">Avg. Monthly Earnings</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-secondary mb-2 animate-glow-pulse" style={{ animationDelay: '1s' }}>4.9★</div>
                  <div className="text-muted-foreground text-sm uppercase tracking-wide">Tutor Rating</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TutorCTA;
