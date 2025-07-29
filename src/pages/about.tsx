import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FoundersCarousel, { TeamMember } from '@/components/FoundersCarousel';

// Team members data
const teamMembers: TeamMember[] = [
  {
    name: "Vibhor",
    role: "Founder",
    bio: "Visionary behind TutorX, passionate about accessible education for everyone. Alumnus of VIT Vellore.",
    image: "/Vibhor-founder.jpg"
  },
  {
    name: "Vagish",
    role: "Founder",
    bio: "Design strategist and community builder helping learners connect easily. Alumnus of IIIT Kottayam.",
    image: "/Vagish-founder.jpg"
  },
  {
    name: "Aditya",
    role: "Co-Founder",
    bio: "Leads backend automation and scalable video learning systems. Alumnus of Sir MVIT.",
    image: "/Aditya-co-founder.jpg"
  },
  {
    name: "Kshitij",
    role: "Co-Founder",
    bio: "Focuses on user-centered product development and tutor growth. Alumnus of NIT Agartala.",
    image: "/Kshitij-co-founder.jpg"
  }
];

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-muted/30 py-20 mt-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Meet the Minds Behind <span className="bg-hero-gradient bg-clip-text text-transparent">TutorX</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Our team is driven by a passion for making learning accessible, personal, and powerful.
            </p>
          </div>
        </section>
        
        {/* Founders Carousel Section */}
        <section className="py-16 container mx-auto px-4">
          <FoundersCarousel founders={teamMembers} />
        </section>
        
        {/* Mission Section */}
        <section className="bg-card-gradient py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
                <p className="text-muted-foreground mb-4">
                  At TutorX, we believe that personalized education should be accessible to everyone. Our platform connects learners with expert tutors who are passionate about sharing their knowledge and skills.
                </p>
                <p className="text-muted-foreground mb-4">
                  We're building a community where learning is engaging, effective, and tailored to individual needs. Through innovative technology and a human-centered approach, we're transforming how people learn and teach online.
                </p>
                <p className="text-muted-foreground">
                  Our goal is to empower both learners and educators, creating opportunities for growth and success in an ever-changing world.
                </p>
              </div>
              <div className="bg-card rounded-xl p-8 shadow-card border border-border/20">
                <h3 className="text-2xl font-semibold mb-4">Our Values</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="bg-primary/10 p-2 rounded-full mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                        <path d="m5 12 5 5L20 7"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium">Accessibility</h4>
                      <p className="text-muted-foreground text-sm">Making quality education available to everyone, everywhere</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-primary/10 p-2 rounded-full mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                        <path d="m5 12 5 5L20 7"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium">Personalization</h4>
                      <p className="text-muted-foreground text-sm">Tailoring learning experiences to individual needs and goals</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-primary/10 p-2 rounded-full mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                        <path d="m5 12 5 5L20 7"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium">Community</h4>
                      <p className="text-muted-foreground text-sm">Building connections between learners and educators</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-primary/10 p-2 rounded-full mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                        <path d="m5 12 5 5L20 7"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium">Innovation</h4>
                      <p className="text-muted-foreground text-sm">Constantly improving our platform with cutting-edge technology</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />

      <style>
        {`
        :root {
          --primary-light: hsl(var(--primary) / 0.8);
          --primary-dark: hsl(var(--primary) / 0.5);
          --secondary-light: hsl(var(--secondary) / 0.8);
          --secondary-dark: hsl(var(--secondary) / 0.5);
          --accent-light: hsl(var(--accent) / 0.8);
          --accent-dark: hsl(var(--accent) / 0.5);
          --background-rgb: 255, 255, 255;
        }

        .dark {
          --background-rgb: 10, 10, 10;
        }
        `}
      </style>
    </div>
  );
};

export default AboutPage; 