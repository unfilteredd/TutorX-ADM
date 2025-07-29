import SkillCard from "./SkillCard";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const skills = [
  {
    title: "Academic Tuition",
    description: "Excel in mathematics, science, languages and more with expert academic tutors.",
    image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=500&h=300&fit=crop",
    tutorCount: 45,
    category: "Education",
    gradient: "from-blue-500/20 to-cyan-500/20",
    slug: "academic-tuition"
  },
  {
    title: "Music & Instruments",
    description: "Learn guitar, piano, violin and more from experienced musicians and music teachers.",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=500&h=300&fit=crop",
    tutorCount: 18,
    category: "Arts",
    gradient: "from-purple-500/20 to-pink-500/20",
    slug: "music-production"
  },
  {
    title: "Career Counselling",
    description: "Get expert guidance on career paths, job opportunities, and professional development strategies.",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=500&h=300&fit=crop",
    tutorCount: 22,
    category: "Professional",
    gradient: "from-amber-500/20 to-yellow-500/20",
    slug: "career-counselling"
  },
  {
    title: "The Calm Chat",
    description: "A safe space to discuss anything on your mind, get advice, and find solutions with empathetic listeners.",
    image: "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?w=500&h=300&fit=crop",
    tutorCount: 15,
    category: "Wellness",
    gradient: "from-teal-500/20 to-emerald-500/20",
    slug: "calm-chat"
  }
];

const SkillsPreview = () => {
  const navigate = useNavigate();

  const handleSkillClick = (slug: string) => {
    navigate(`/skills/${slug}`);
    window.scrollTo(0, 0);
  };

  const handleViewAllClick = () => {
    navigate('/skills');
    window.scrollTo(0, 0);
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Explore Skills</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover our comprehensive range of skills and connect with expert tutors in every field
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {skills.map((skill, index) => (
            <div 
              key={index}
              className="animate-fade-in cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => handleSkillClick(skill.slug)}
            >
              <SkillCard {...skill} />
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            size="lg"
            className="bg-primary hover:bg-primary-hover text-primary-foreground px-8 py-4 text-lg font-semibold shadow-elegant"
            onClick={handleViewAllClick}
          >
            View All Categories
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SkillsPreview;