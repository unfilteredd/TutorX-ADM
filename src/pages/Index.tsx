import Header from "@/components/Header";
import Hero from "@/components/Hero";
import VideoCarousel from "@/components/VideoCarousel";
import SkillsPreview from "@/components/SkillsPreview";
import ProcessSteps from "@/components/ProcessSteps";
import Testimonial from "@/components/Testimonial";
import TutorCTA from "@/components/TutorCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <VideoCarousel />
      <div id="skills-preview">
        <SkillsPreview />
      </div>
      <ProcessSteps />
      <Testimonial />
      <TutorCTA />
      <Footer />
    </div>
  );
};

export default Index;
