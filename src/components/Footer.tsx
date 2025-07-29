
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (path: string) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: "instant" });
  };

  const scrollToSection = (sectionId: string) => {
    // If not on home page, navigate to home page first
    if (location.pathname !== '/') {
      navigate('/');
      // Use setTimeout to ensure navigation completes before scrolling
      setTimeout(() => {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // Already on home page, just scroll
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-card-gradient border-t border-border/20 relative overflow-hidden py-16">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-1 bg-hero-gradient"></div>
        <div className="absolute bottom-1/3 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-secondary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/3 w-40 h-40 bg-accent/5 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-6 relative max-w-7xl">
        <div className="grid md:grid-cols-3 gap-12 lg:gap-20">
          {/* Brand Column */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-3 mb-8 cursor-pointer" onClick={() => handleNavigation('/')}>
              <div className="w-10 h-10 bg-hero-gradient rounded-lg flex items-center justify-center shadow-glow">
                <span className="text-white font-bold text-lg">TX</span>
              </div>
              <div>
                <span className="text-xs text-muted-foreground">ADM</span>
                <h3 className="text-3xl font-bold bg-hero-gradient bg-clip-text text-transparent">TutorX</h3>
              </div>
            </div>
            
            <p className="text-muted-foreground mb-8 leading-relaxed text-lg">
              Empowering learners worldwide with expert-led tutorials and personalized teaching experiences.
            </p>
            
            <div className="flex space-x-5">
              {/* <a href="#" className="w-12 h-12 bg-glass-bg backdrop-blur-sm border border-glass-border rounded-full flex items-center justify-center hover:bg-primary/20 hover:border-primary/40 transition-all duration-300 group shadow-sm">
                <Facebook className="w-5 h-5 text-muted-foreground group-hover:text-primary" />
              </a> */}
              <a href="https://www.instagram.com/admtutorx/" className="w-12 h-12 bg-glass-bg backdrop-blur-sm border border-glass-border rounded-full flex items-center justify-center hover:bg-primary/20 hover:border-primary/40 transition-all duration-300 group shadow-sm">
                <Instagram className="w-5 h-5 text-muted-foreground group-hover:text-primary" />
              </a>
              <a href="https://www.linkedin.com/company/adm-tutorx/" className="w-12 h-12 bg-glass-bg backdrop-blur-sm border border-glass-border rounded-full flex items-center justify-center hover:bg-primary/20 hover:border-primary/40 transition-all duration-300 group shadow-sm">
                <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-primary" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="mt-4 md:mt-0">
            <h4 className="font-bold text-xl mb-8 text-foreground">Quick Links</h4>
            <ul className="space-y-4">
              <li>
                <div onClick={() => handleNavigation('/about')} className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:translate-x-1 transform inline-flex items-center text-lg cursor-pointer">
                  <span className="bg-primary/10 w-1.5 h-1.5 rounded-full mr-3"></span>
                  About Us
                </div>
              </li>
              <li>
                <div 
                  onClick={() => scrollToSection('process-steps')} 
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:translate-x-1 transform inline-flex items-center text-lg cursor-pointer"
                >
                  <span className="bg-primary/10 w-1.5 h-1.5 rounded-full mr-3"></span>
                  How It Works
                </div>
              </li>
              
              <li>
                <div 
                  onClick={() => scrollToSection('success-stories')} 
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:translate-x-1 transform inline-flex items-center text-lg cursor-pointer"
                >
                  <span className="bg-primary/10 w-1.5 h-1.5 rounded-full mr-3"></span>
                  Success Stories
                </div>
              </li>
              <li>
                <div onClick={() => handleNavigation('/become-tutor')} className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:translate-x-1 transform inline-flex items-center text-lg cursor-pointer">
                  <span className="bg-primary/10 w-1.5 h-1.5 rounded-full mr-3"></span>
                  Become a Tutor
                </div>
              </li>
              {/* <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:translate-x-1 transform inline-block">
                  Blog
                </a>
              </li> */}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="mt-4 md:mt-0">
            <h4 className="font-bold text-xl mb-8 text-foreground">Contact Us</h4>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-glass-bg backdrop-blur-sm border border-glass-border rounded-full flex items-center justify-center shadow-sm">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Email</p>
                  <a href="mailto:info@admtutorx.com" className="text-foreground hover:text-primary transition-colors text-lg">
                    info@admtutorx.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-glass-bg backdrop-blur-sm border border-glass-border rounded-full flex items-center justify-center shadow-sm">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Phone</p>
                  <a href="tel:+917667078323" className="text-foreground hover:text-primary transition-colors text-lg block">
                    +91 76670 78323
                  </a>
                  <a href="tel:+917970802199" className="text-foreground hover:text-primary transition-colors text-lg mt-1 block">
                    +91 79708 02199
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-glass-bg backdrop-blur-sm border border-glass-border rounded-full flex items-center justify-center shadow-sm">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Address</p>
                  <p className="text-foreground text-lg">India</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border/20 mt-16 pt-8 text-center">
          <div className="text-sm text-muted-foreground">
            © 2024 ADM TutorX. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
