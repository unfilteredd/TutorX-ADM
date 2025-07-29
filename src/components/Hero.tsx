
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import appointmentService from "@/services/appointmentService";

const Hero = () => {
  const [isAppointmentDialogOpen, setIsAppointmentDialogOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const scrollToSkills = () => {
    const skillsSection = document.getElementById('skills-preview');
    skillsSection?.scrollIntoView({ behavior: 'smooth' });
  };
  
  const openAppointmentDialog = () => {
    setIsAppointmentDialogOpen(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await appointmentService.bookAppointment(formData);
      
      toast({
        title: "Appointment Request Sent!",
        description: "We'll contact you shortly to confirm your appointment.",
      });
      
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
      
      setIsAppointmentDialogOpen(false);
    } catch (error: any) {
      toast({
        title: "Failed to send appointment request",
        description: error.response?.data?.message || "Please try again later",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Modern Mesh Gradient Background */}
      <div className="absolute inset-0 mesh-gradient geometric-pattern animate-mesh-move"></div>
      
      {/* Enhanced Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/70 via-background/40 to-background/70"></div>
      
      {/* Subtle Animated Gradients */}
      <div className="absolute inset-0 bg-gradient-animated bg-[length:400%_400%] animate-gradient-shift opacity-20"></div>

      {/* Reduced Floating Elements - More Subtle */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-primary/30 rounded-full animate-particle-float shadow-sm" style={{ animationDelay: '0s' }}></div>
      <div className="absolute top-40 right-20 w-6 h-6 bg-secondary/30 rounded-full animate-particle-float shadow-sm" style={{ animationDelay: '3s' }}></div>
      <div className="absolute bottom-40 left-20 w-3 h-3 bg-primary/30 rounded-full animate-particle-float shadow-sm" style={{ animationDelay: '6s' }}></div>

      {/* Main Content */}
      <div className="relative z-10 text-center text-foreground px-4 max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight animate-fade-in">
          Master Any Skill—
          <br />
          <span className="bg-hero-gradient bg-clip-text text-transparent">
            Watch. Book. Learn.
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-12 text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
          Discover expert-led tutorials, connect with passionate tutors, and transform your skills with personalized learning experiences.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <Button 
            size="lg" 
            onClick={scrollToSkills}
            className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-10 py-4 text-lg font-semibold shadow-elegant transform hover:scale-105 transition-all duration-300"
          >
            Explore Skills
            <ArrowDown className="ml-2 w-5 h-5" />
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            onClick={openAppointmentDialog}
            className="border-2 border-primary/30 text-foreground hover:bg-primary/10 backdrop-blur-sm px-10 py-4 text-lg font-semibold transform hover:scale-105 transition-all duration-300"
          >
            Book your Appointment
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">400+</div>
            <div className="text-muted-foreground text-sm uppercase tracking-wide">Active Learners</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">50+</div>
            <div className="text-muted-foreground text-sm uppercase tracking-wide">Expert Tutors</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">6+</div>
            <div className="text-muted-foreground text-sm uppercase tracking-wide">Skill Categories</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>

      {/* Appointment Booking Dialog */}
      <Dialog open={isAppointmentDialogOpen} onOpenChange={setIsAppointmentDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold bg-hero-gradient bg-clip-text text-transparent">Book your Appointment</DialogTitle>
            <DialogDescription>
              Fill out the form below and we'll contact you to schedule your appointment.
            </DialogDescription>
          </DialogHeader>
          
          <form onSubmit={handleSubmit} className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                name="name"
                placeholder="John Doe"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="john@example.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                name="phone"
                placeholder="Your phone number"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="message">Additional Information (Optional)</Label>
              <Textarea
                id="message"
                name="message"
                placeholder="Tell us about your learning goals or any specific requirements"
                value={formData.message}
                onChange={handleChange}
                rows={3}
              />
            </div>
            
            <DialogFooter className="pt-4">
              <Button
                type="submit"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <div className="flex items-center gap-2">
                    <div className="h-4 w-4 rounded-full border-2 border-t-transparent border-white animate-spin"></div>
                    <span>Submitting...</span>
                  </div>
                ) : (
                  "Request Appointment"
                )}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Hero;
