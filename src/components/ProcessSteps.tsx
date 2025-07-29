
import { Play, UserPlus, GraduationCap } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const steps = [
  {
    icon: Play,
    title: "Watch Tutorials",
    description: "Browse our extensive library of expert-led tutorials across various skills and subjects.",
    color: "text-primary",
    bgColor: "bg-primary/10",
    borderColor: "border-primary/20"
  },
  {
    icon: UserPlus,
    title: "Request Your Tutor",
    description: "Found the perfect instructor? Book a personalized session online or in-person.",
    color: "text-secondary",
    bgColor: "bg-secondary/10",
    borderColor: "border-secondary/20"
  },
  {
    icon: GraduationCap,
    title: "Start Learning",
    description: "Begin your learning journey with personalized guidance and achieve your goals faster.",
    color: "text-primary",
    bgColor: "bg-primary/10",
    borderColor: "border-primary/20"
  }
];

const ProcessSteps = () => {
  const navigate = useNavigate();

  const handleNavigateToSkills = () => {
    navigate('/skills');
    window.scrollTo({ top: 0, behavior: "instant" });
  };

  return (
    <section id="process-steps" className="py-20 bg-background relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-secondary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-hero-gradient bg-clip-text text-transparent">
            Your Learning Journey in 3 Steps
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From discovery to mastery, we've simplified the path to learning new skills
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto relative">
          {/* Connection Lines */}
          <div className="hidden md:block absolute top-1/2 left-1/3 w-1/3 h-px bg-gradient-to-r from-primary/20 via-secondary/40 to-primary/20 -translate-y-1/2"></div>
          <div className="hidden md:block absolute top-1/2 right-1/3 w-1/3 h-px bg-gradient-to-r from-primary/20 via-secondary/40 to-primary/20 -translate-y-1/2"></div>

          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div
                key={index}
                className="text-center group animate-fade-in relative"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Glass Card Background */}
                <div className="absolute inset-0 bg-glass-bg backdrop-blur-md rounded-2xl border border-glass-border opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-card"></div>
                
                <div className="relative p-6">
                  {/* Step Number & Icon */}
                  <div className="flex items-center justify-center mb-6">
                    <div className="relative">
                      <div className={`w-20 h-20 rounded-full ${step.bgColor} border-2 ${step.borderColor} flex items-center justify-center group-hover:scale-110 group-hover:shadow-glow transition-all duration-500 backdrop-blur-sm`}>
                        <IconComponent className={`w-10 h-10 ${step.color} group-hover:animate-pulse`} />
                      </div>
                      <div className="absolute -top-3 -right-3 w-8 h-8 bg-hero-gradient rounded-full flex items-center justify-center text-white font-bold text-sm shadow-elegant animate-glow-pulse">
                        {index + 1}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Enhanced CTA Section */}
        <div className="relative mt-20">
          <div className="absolute inset-0 bg-card-gradient rounded-3xl transform -rotate-1 shadow-elegant"></div>
          <div className="absolute inset-0 bg-hero-gradient opacity-10 rounded-3xl transform rotate-1"></div>
          
          <div className="relative bg-glass-bg backdrop-blur-xl border border-glass-border p-8 md:p-12 rounded-2xl shadow-card text-center">
            <div className="absolute top-4 left-4 w-6 h-6 bg-primary rounded-full animate-particle-float opacity-60"></div>
            <div className="absolute bottom-4 right-4 w-4 h-4 bg-secondary rounded-full animate-particle-float opacity-60" style={{ animationDelay: '2s' }}></div>
            
            <h3 className="text-2xl md:text-3xl font-bold mb-4 bg-hero-gradient bg-clip-text text-transparent">
              Ready to Begin Your Journey?
            </h3>
            <p className="text-muted-foreground mb-8 text-lg max-w-2xl mx-auto">
              Join thousands of learners who've transformed their skills with TutorX's personalized approach
            </p>
            <Button 
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-10 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-elegant hover:shadow-glow hover:scale-105"
              onClick={handleNavigateToSkills}
            >
              Explore Skills Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;
