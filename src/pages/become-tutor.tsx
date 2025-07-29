import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "@/hooks/use-toast";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Footer from "@/components/Footer";
import tutorService from "@/services/tutorService";

const BecomeTutor = () => {
  const [isApplyOpen, setIsApplyOpen] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    expertise: "",
    experience: "",
    about: "",
    availability: "",
    agreeToTerms: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (name: string, checked: boolean) => {
    setFormData(prev => ({ ...prev, [name]: checked }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.agreeToTerms) {
      toast({
        title: "Please agree to the terms",
        description: "You must agree to our terms and conditions to proceed.",
        variant: "destructive"
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const { fullName, email, phone, expertise, experience, about, availability } = formData;
      
      await tutorService.applyAsTutor({
        fullName,
        email,
        phone,
        expertise,
        experience,
        about,
        availability
      });
      
      toast({
        title: "Application Submitted!",
        description: "We've received your application and will contact you soon.",
      });
      
      setIsApplyOpen(false);
      // Reset form
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        expertise: "",
        experience: "",
        about: "",
        availability: "",
        agreeToTerms: false
      });
    } catch (error: any) {
      toast({
        title: "Application failed",
        description: error.response?.data?.message || "Please try again later",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Back Button */}
      <div className="fixed top-20 left-4 z-40">
        <Button 
          variant="ghost" 
          size="icon" 
          className="rounded-full bg-background/80 backdrop-blur-sm border border-border/30 shadow-md hover:bg-background/90 hover:shadow-lg transition-all duration-300"
          onClick={() => {
            navigate(-1);
            window.scrollTo({ top: 0, behavior: "instant" });
          }}
        >
          <ArrowLeft className="h-5 w-5" />
          <span className="sr-only">Back</span>
        </Button>
      </div>

      <div className="pt-20 pb-16">
        {/* Hero Section */}
        <section className="bg-hero-gradient text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              TutorXus
            </h1>
            <p className="text-xl max-w-2xl mx-auto opacity-90">
              Join our community of expert tutors and help students achieve their academic goals while growing your teaching career.
            </p>
          </div>
        </section>

        {/* Why Join Us Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 bg-hero-gradient bg-clip-text text-transparent">
              Why Teach With ADM TutorX?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-card rounded-xl p-6 shadow-elegant hover:shadow-glow transition-all duration-300">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M12 6v6l4 2"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-center mb-2">Flexible Schedule</h3>
                <p className="text-muted-foreground text-center">
                  Choose your own hours and teach when it's convenient for you. Build a schedule that fits your lifestyle.
                </p>
              </div>
              
              <div className="bg-card rounded-xl p-6 shadow-elegant hover:shadow-glow transition-all duration-300">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-center mb-2">Competitive Pay</h3>
                <p className="text-muted-foreground text-center">
                  Earn competitive rates based on your expertise and experience. Get paid on time, every time.
                </p>
              </div>
              
              <div className="bg-card rounded-xl p-6 shadow-elegant hover:shadow-glow transition-all duration-300">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-center mb-2">Growing Community</h3>
                <p className="text-muted-foreground text-center">
                  Join a supportive network of educators and gain access to resources to enhance your teaching skills.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Badges Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 bg-hero-gradient bg-clip-text text-transparent">
              Achievement Badges
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* First Row of Badges */}
              <div className="bg-card rounded-xl p-6 shadow-elegant hover:shadow-glow transition-all duration-300 flex flex-col items-center">
                <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mb-4 relative">
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <path d="M12 2v20"></path>
                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                  </svg>
                  <div className="absolute -top-2 -right-2 bg-primary text-white text-xs font-bold rounded-full w-8 h-8 flex items-center justify-center">
                    1y
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-center mb-2">1-Year Expert</h3>
                <p className="text-muted-foreground text-center">
                  Awarded to tutors who have completed one year of consistent teaching excellence on our platform.
                </p>
              </div>
              
              <div className="bg-card rounded-xl p-6 shadow-elegant hover:shadow-glow transition-all duration-300 flex flex-col items-center">
                <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mb-4 relative">
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  <div className="absolute -top-2 -right-2 bg-primary text-white text-xs font-bold rounded-full w-8 h-8 flex items-center justify-center">
                    2y
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-center mb-2">2-Year Veteran</h3>
                <p className="text-muted-foreground text-center">
                  Recognizes tutors who have maintained high standards of teaching for two consecutive years.
                </p>
              </div>
              
              <div className="bg-card rounded-xl p-6 shadow-elegant hover:shadow-glow transition-all duration-300 flex flex-col items-center">
                <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mb-4 relative">
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                  <div className="absolute -top-2 -right-2 bg-secondary text-white text-xs font-bold rounded-full w-8 h-8 flex items-center justify-center">
                    New
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-center mb-2">Rising Star</h3>
                <p className="text-muted-foreground text-center">
                  Given to new tutors who quickly demonstrate exceptional teaching abilities and student satisfaction.
                </p>
              </div>

              {/* Second Row of Badges */}
              <div className="bg-card rounded-xl p-6 shadow-elegant hover:shadow-glow transition-all duration-300 flex flex-col items-center">
                <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-center mb-2">Content Creator</h3>
                <p className="text-muted-foreground text-center">
                  Awarded to tutors who develop original teaching materials and resources for the platform.
                </p>
              </div>
              
              <div className="bg-card rounded-xl p-6 shadow-elegant hover:shadow-glow transition-all duration-300 flex flex-col items-center">
                <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-center mb-2">Student Favorite</h3>
                <p className="text-muted-foreground text-center">
                  Recognizes tutors who consistently receive exceptional feedback and ratings from students.
                </p>
              </div>
              
              <div className="bg-card rounded-xl p-6 shadow-elegant hover:shadow-glow transition-all duration-300 flex flex-col items-center">
                <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                    <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-center mb-2">Mentor Guru</h3>
                <p className="text-muted-foreground text-center">
                  Given to tutors who excel at guiding other tutors and contributing to the community's growth.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Apply Now Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6 bg-hero-gradient bg-clip-text text-transparent">
              Ready to Start Your Teaching Journey?
            </h2>
            <p className="text-xl max-w-2xl mx-auto mb-8 text-muted-foreground">
              Join our platform today and start making a difference in students' lives while growing your teaching career.
            </p>
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg shadow-glow hover:shadow-elegant transform hover:scale-105 transition-all duration-300"
              onClick={() => setIsApplyOpen(true)}
            >
              Apply Now
            </Button>
          </div>
        </section>

        {/* Application Dialog */}
        <Dialog open={isApplyOpen} onOpenChange={setIsApplyOpen}>
          <DialogContent className="sm:max-w-lg bg-card-gradient border-border/20 backdrop-blur-sm">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold bg-hero-gradient bg-clip-text text-transparent">
                Apply to Become a Tutor
              </DialogTitle>
              <DialogDescription className="text-muted-foreground">
                Fill out the form below to start your application process.
              </DialogDescription>
            </DialogHeader>
            
            <form onSubmit={handleSubmit} className="space-y-4 py-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="fullName">Full Name</Label>
                  <Input
                    id="fullName"
                    name="fullName"
                    placeholder="John Doe"
                    required
                    value={formData.fullName}
                    onChange={handleInputChange}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your.email@example.com"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    name="phone"
                    placeholder="+1 (555) 123-4567"
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="expertise">Primary Subject Expertise</Label>
                  <Select 
                    value={formData.expertise} 
                    onValueChange={(value) => handleSelectChange("expertise", value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select a subject" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="mathematics">Mathematics</SelectItem>
                      <SelectItem value="science">Science</SelectItem>
                      <SelectItem value="english">English</SelectItem>
                      <SelectItem value="history">History</SelectItem>
                      <SelectItem value="programming">Programming</SelectItem>
                      <SelectItem value="languages">Foreign Languages</SelectItem>
                      <SelectItem value="music">Music</SelectItem>
                      <SelectItem value="art">Art</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="experience">Years of Teaching Experience</Label>
                <Select 
                  value={formData.experience} 
                  onValueChange={(value) => handleSelectChange("experience", value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select experience level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="0-1">Less than 1 year</SelectItem>
                    <SelectItem value="1-2">1-2 years</SelectItem>
                    <SelectItem value="3-5">3-5 years</SelectItem>
                    <SelectItem value="5-10">5-10 years</SelectItem>
                    <SelectItem value="10+">10+ years</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="about">Tell Us About Yourself</Label>
                <Textarea
                  id="about"
                  name="about"
                  placeholder="Share your teaching philosophy, experience, and why you want to join our platform..."
                  rows={4}
                  value={formData.about}
                  onChange={handleInputChange}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="availability">Weekly Availability (hours)</Label>
                <Select 
                  value={formData.availability} 
                  onValueChange={(value) => handleSelectChange("availability", value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select availability" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1-5">1-5 hours</SelectItem>
                    <SelectItem value="5-10">5-10 hours</SelectItem>
                    <SelectItem value="10-20">10-20 hours</SelectItem>
                    <SelectItem value="20-30">20-30 hours</SelectItem>
                    <SelectItem value="30+">30+ hours</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="flex items-center space-x-2 pt-2">
                <Checkbox 
                  id="agreeToTerms" 
                  checked={formData.agreeToTerms}
                  onCheckedChange={(checked) => handleCheckboxChange("agreeToTerms", checked as boolean)}
                />
                <label
                  htmlFor="agreeToTerms"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  I agree to the terms and conditions and privacy policy
                </label>
              </div>
            
              <DialogFooter className="pt-4">
                <Button 
                  type="submit" 
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Submit Application"}
                </Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default BecomeTutor; 