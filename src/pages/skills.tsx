import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SkillCard from '@/components/SkillCard';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

interface Skill {
  id: string;
  title: string;
  description: string;
  image: string;
  tutorCount: number;
  category: string;
  slug: string;
  tutorialCount: number;
}

const SkillsPage = () => {
  const navigate = useNavigate();

  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const skills: Skill[] = [
    {
      id: '0',
      title: 'Academic Tuition',
      description: 'Enhance your academic performance with comprehensive tuition programs covering all subjects and educational levels.',
      image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=250&fit=crop',
      tutorCount: 52,
      category: 'Education',
      slug: 'academic-tuition',
      tutorialCount: 145
    },
    {
      id: '1',
      title: 'Music & Instruments',
      description: 'Master various musical instruments and vocal techniques with expert guidance from professional musicians and instructors.',
      image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop',
      tutorCount: 45,
      category: 'Music',
      slug: 'music-production',
      tutorialCount: 127
    },
    {
      id: '2',
      title: 'Career Counselling',
      description: 'Get expert guidance on career paths, job opportunities, and professional development strategies for your future success.',
      image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400&h=300&fit=crop',
      tutorCount: 22,
      category: 'Professional',
      slug: 'career-counselling',
      tutorialCount: 75
    },
    {
      id: '3',
      title: 'The Calm Chat',
      description: 'A safe space to discuss anything on your mind, get advice, and find solutions with empathetic listeners who understand your concerns.',
      image: 'https://images.unsplash.com/photo-1573497620053-ea5300f94f21?w=400&h=300&fit=crop',
      tutorCount: 15,
      category: 'Wellness',
      slug: 'calm-chat',
      tutorialCount: 68
    },
    {
      id: '4',
      title: 'Digital Photography',
      description: 'Master the art of digital photography from composition to post-processing with expert guidance.',
      image: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400&h=300&fit=crop',
      tutorCount: 32,
      category: 'Photography',
      slug: 'digital-photography',
      tutorialCount: 89
    },
    {
      id: '5',
      title: 'Web Development',
      description: 'Build modern, responsive websites and web applications using the latest technologies and frameworks.',
      image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=400&h=300&fit=crop',
      tutorCount: 67,
      category: 'Technology',
      slug: 'web-development',
      tutorialCount: 156
    },
    {
      id: '6',
      title: 'Culinary Arts',
      description: 'Learn cooking techniques, international cuisines, and food presentation from professional chefs.',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop',
      tutorCount: 38,
      category: 'Cooking',
      slug: 'culinary-arts',
      tutorialCount: 112
    },
    {
      id: '7',
      title: 'Language Learning',
      description: 'Learn new languages through immersive techniques and personalized instruction methods.',
      image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=300&fit=crop',
      tutorCount: 56,
      category: 'Languages',
      slug: 'language-learning',
      tutorialCount: 203
    },
    {
      id: '8',
      title: 'Fitness & Wellness',
      description: 'Achieve your health goals with personalized fitness programs and wellness coaching.',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop',
      tutorCount: 47,
      category: 'Health',
      slug: 'fitness-wellness',
      tutorialCount: 134
    },
    {
      id: '11',
      title: 'Financial Planning',
      description: 'Learn to manage your finances, investments, and plan for a secure financial future.',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop',
      tutorCount: 29,
      category: 'Finance',
      slug: 'financial-planning',
      tutorialCount: 71
    },
    {
      id: '12',
      title: 'Mindfulness & Meditation',
      description: 'Develop mental clarity and emotional balance through mindfulness practices and meditation.',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
      tutorCount: 31,
      category: 'Wellness',
      slug: 'mindfulness-meditation',
      tutorialCount: 56
    }
  ];

  const handleSkillClick = (slug: string) => {
    navigate(`/skills/${slug}`);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <Button
          variant="ghost"
          onClick={() => navigate('/')}
          className="mb-6 hover:bg-accent/10 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Button>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Explore <span className="bg-hero-gradient bg-clip-text text-transparent">All Skills</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover a world of learning opportunities across diverse skill categories. 
            Find expert tutors and comprehensive tutorials for your next learning journey.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {skills.map((skill) => (
            <div key={skill.id} onClick={() => handleSkillClick(skill.slug)}>
              <SkillCard
                title={skill.title}
                description={skill.description}
                image={skill.image}
                tutorCount={skill.tutorCount}
                category={skill.category}
              />
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">500+</div>
            <div className="text-muted-foreground text-sm uppercase tracking-wide">Expert Tutors</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">1.2K+</div>
            <div className="text-muted-foreground text-sm uppercase tracking-wide">Video Tutorials</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">50+</div>
            <div className="text-muted-foreground text-sm uppercase tracking-wide">Skill Categories</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">10K+</div>
            <div className="text-muted-foreground text-sm uppercase tracking-wide">Active Learners</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsPage;