import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Play, Clock, Eye, Star, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface Tutorial {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  duration: string;
  views: number;
  tutor: {
    name: string;
    avatar: string;
  };
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  category: string;
  rating?: number;
}

interface SkillDetail {
  title: string;
  description: string;
  totalTutorials: number;
  totalTutors: number;
  category: string;
}

const SkillDetailPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [skillDetail, setSkillDetail] = useState<SkillDetail | null>(null);
  const [tutorials, setTutorials] = useState<Tutorial[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Mock data based on slug - replace with actual API call
    const getSkillData = (slug: string) => {
      // Check if the skill is one of the coming soon skills
      const comingSoonSlugs = ['digital-photography', 'web-development', 'culinary-arts'];
      
      if (comingSoonSlugs.includes(slug)) {
        // For coming soon skills, set a special skill detail
        const skillTitles: Record<string, string> = {
          'digital-photography': 'Digital Photography',
          'web-development': 'Web Development',
          'culinary-arts': 'Culinary Arts'
        };
        
        return {
          detail: {
            title: skillTitles[slug] || 'Coming Soon',
            description: 'This skill is coming soon! We are currently recruiting expert tutors in this field.',
            totalTutorials: 0,
            totalTutors: 0,
            category: 'Coming Soon'
          },
          tutorials: []
        };
      }
      
      const skillMap: Record<string, { detail: SkillDetail; tutorials: Tutorial[] }> = {
        'academic-tuition': {
          detail: {
            title: 'Academic Tuition',
            description: 'Excel in mathematics, science, languages and more with expert academic tutors. Choose the appropriate level for your educational needs.',
            totalTutorials: 145,
            totalTutors: 78,
            category: 'Education'
          },
          tutorials: [
            {
              id: 'nursery-3',
              title: 'Nursery to 3rd Class',
              description: 'Foundation learning programs for young students with interactive lessons in mathematics, language, and general knowledge',
              thumbnail: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=250&fit=crop',
              duration: 'Multiple Courses',
              views: 18500,
              tutor: {
                name: 'Emily Parker',
                avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&h=50&fit=crop&crop=face'
              },
              difficulty: 'Beginner',
              category: 'Early Education',
              rating: 4.9
            },
            {
              id: 'class4-8',
              title: '4th to 8th Class',
              description: 'Comprehensive educational programs covering mathematics, science, social studies, and language arts for middle school students',
              thumbnail: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=400&h=250&fit=crop',
              duration: 'Multiple Courses',
              views: 22400,
              tutor: {
                name: 'David Wilson',
                avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop&crop=face'
              },
              difficulty: 'Intermediate',
              category: 'Middle School',
              rating: 4.7
            },
            {
              id: 'class9-above',
              title: '9th Class and Above',
              description: 'Advanced academic programs for high school students preparing for board exams and college entrance tests with specialized coaching',
              thumbnail: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=250&fit=crop',
              duration: 'Multiple Courses',
              views: 31200,
              tutor: {
                name: 'Sophia Chen',
                avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=50&h=50&fit=crop&crop=face'
              },
              difficulty: 'Advanced',
              category: 'High School & College',
              rating: 4.8
            }
          ]
        },
        'music-production': {
          detail: {
            title: 'Music & Instruments',
            description: 'Master various musical instruments and vocal techniques with expert guidance from professional musicians and instructors.',
            totalTutorials: 127,
            totalTutors: 45,
            category: 'Music'
          },
          tutorials: [
            {
              id: 'instrument',
              title: 'Instrument',
              description: 'Learn to play various musical instruments with comprehensive lessons covering technique, theory, and performance for all skill levels',
              thumbnail: 'https://images.unsplash.com/photo-1525201548942-d8732f6617a0?w=400&h=250&fit=crop',
              duration: 'Multiple Courses',
              views: 46100,
              tutor: {
                name: 'James Wilson',
                avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face'
              },
              difficulty: 'Beginner',
              category: 'Instruments',
              rating: 4.9
            },
            {
              id: 'singing',
              title: 'Singing',
              description: 'Develop your vocal skills with professional voice training covering technique, range, and performance skills',
              thumbnail: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=400&h=250&fit=crop',
              duration: 'Multiple Courses',
              views: 18950,
              tutor: {
                name: 'Maria Garcia',
                avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=50&h=50&fit=crop&crop=face'
              },
              difficulty: 'Intermediate',
              category: 'Vocal Training',
              rating: 4.8
            }
          ]
        },
        'career-counselling': {
          detail: {
            title: 'Career Counselling',
            description: 'Get expert guidance on career paths, job opportunities, and professional development strategies for your future success.',
            totalTutorials: 75,
            totalTutors: 22,
            category: 'Professional'
          },
          tutorials: [
            {
              id: 'career-planning',
              title: 'Career Planning & Development',
              description: 'Learn how to identify your strengths, set career goals, and create a strategic plan for professional growth and advancement',
              thumbnail: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400&h=250&fit=crop',
              duration: '24:15',
              views: 32000,
              tutor: {
                name: 'Dr. Michael Stevens',
                avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=50&h=50&fit=crop&crop=face'
              },
              difficulty: 'Beginner',
              category: 'Career Development',
              rating: 4.9
            },
            {
              id: 'interview-skills',
              title: 'Interview Mastery',
              description: 'Master the art of interviewing with techniques for answering tough questions, body language tips, and strategies to stand out from other candidates',
              thumbnail: 'https://images.unsplash.com/photo-1560264280-88b68371db39?w=400&h=250&fit=crop',
              duration: '18:45',
              views: 28500,
              tutor: {
                name: 'Jennifer Adams',
                avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=50&h=50&fit=crop&crop=face'
              },
              difficulty: 'Intermediate',
              category: 'Job Search',
              rating: 4.8
            },
            {
              id: 'resume-building',
              title: 'Resume & Portfolio Building',
              description: 'Create standout resumes and portfolios that highlight your skills and experience effectively to attract potential employers',
              thumbnail: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&h=250&fit=crop',
              duration: '21:30',
              views: 25700,
              tutor: {
                name: 'Robert Chen',
                avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop&crop=face'
              },
              difficulty: 'Beginner',
              category: 'Job Search',
              rating: 4.7
            }
          ]
        },
        'calm-chat': {
          detail: {
            title: 'The Calm Chat',
            description: 'A safe space to discuss anything on your mind, get advice, and find solutions with empathetic listeners who understand your concerns.',
            totalTutorials: 42,
            totalTutors: 15,
            category: 'Wellness'
          },
          tutorials: [
            {
              id: 'mindful-conversations',
              title: 'Mindful Conversations',
              description: 'Learn the art of mindful listening and speaking to create meaningful connections and have more productive conversations',
              thumbnail: 'https://images.unsplash.com/photo-1573497620053-ea5300f94f21?w=400&h=250&fit=crop',
              duration: '19:45',
              views: 27000,
              tutor: {
                name: 'Sarah Johnson',
                avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&h=50&fit=crop&crop=face'
              },
              difficulty: 'Beginner',
              category: 'Communication',
              rating: 4.9
            },
            {
              id: 'stress-management',
              title: 'Stress Management Techniques',
              description: 'Discover effective strategies to manage stress, anxiety, and overwhelm in your daily life and challenging situations',
              thumbnail: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400&h=250&fit=crop',
              duration: '22:15',
              views: 31500,
              tutor: {
                name: 'Dr. James Miller',
                avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop&crop=face'
              },
              difficulty: 'Intermediate',
              category: 'Mental Wellness',
              rating: 4.8
            }
          ]
        },
        'web-development': {
          detail: {
            title: 'Web Development',
            description: 'Build modern, responsive websites and web applications using the latest technologies and frameworks. Master HTML, CSS, JavaScript, and popular frameworks like React and Node.js.',
            totalTutorials: 156,
            totalTutors: 67,
            category: 'Technology'
          },
          tutorials: [
            {
              id: '4',
              title: 'React.js Complete Guide',
              description: 'Master React.js from basics to advanced concepts',
              thumbnail: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=400&h=250&fit=crop',
              duration: '45:00',
              views: 28500,
              tutor: {
                name: 'Alex Rodriguez',
                avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop&crop=face'
              },
              difficulty: 'Intermediate',
              category: 'Web Development'
            },
            {
              id: '5',
              title: 'CSS Grid and Flexbox Mastery',
              description: 'Modern CSS layout techniques for responsive design',
              thumbnail: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=250&fit=crop',
              duration: '32:15',
              views: 19200,
              tutor: {
                name: 'Lisa Wang',
                avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=50&h=50&fit=crop&crop=face'
              },
              difficulty: 'Intermediate',
              category: 'Web Development'
            }
          ]
        }
      };

      return skillMap[slug] || {
        detail: {
          title: 'Skill Not Found',
          description: 'The requested skill could not be found.',
          totalTutorials: 0,
          totalTutors: 0,
          category: 'Unknown'
        },
        tutorials: []
      };
    };

    const data = getSkillData(slug || '');
    setSkillDetail(data.detail);
    setTutorials(data.tutorials);
    setLoading(false);
  }, [slug]);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner':
        return 'bg-green-500/10 text-green-700 dark:text-green-400';
      case 'Intermediate':
        return 'bg-yellow-500/10 text-yellow-700 dark:text-yellow-400';
      case 'Advanced':
        return 'bg-red-500/10 text-red-700 dark:text-red-400';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!skillDetail) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Skill Not Found</h1>
          <Button onClick={() => navigate('/skills')}>Back to Skills</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <Button
          variant="ghost"
          onClick={() => navigate('/skills')}
          className="mb-6 hover:bg-accent/10 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Skills
        </Button>

        {/* Skill Header */}
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-4">
            <h1 className="text-4xl md:text-5xl font-bold">{skillDetail.title}</h1>
            <Badge variant="secondary" className="text-lg px-3 py-1">
              {skillDetail.category}
            </Badge>
          </div>
          <p className="text-xl text-muted-foreground mb-6 max-w-4xl">
            {skillDetail.description}
          </p>
          
          {/* Stats */}
          <div className="flex flex-wrap gap-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">{skillDetail.totalTutorials}</div>
              <div className="text-sm text-muted-foreground">Tutorials</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">{skillDetail.totalTutors}</div>
              <div className="text-sm text-muted-foreground">Expert Tutors</div>
            </div>
          </div>
        </div>

        {/* Tutorials Grid or Coming Soon Message */}
        <div>
          {skillDetail.category === 'Coming Soon' ? (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <div className="bg-muted p-8 rounded-lg max-w-2xl mx-auto mb-8">
                <h2 className="text-3xl font-bold mb-6">Coming Soon!</h2>
                <p className="text-xl text-muted-foreground mb-8">
                  We're currently developing high-quality content for this skill and recruiting expert tutors.
                  Would you like to join our team of tutors?
                </p>
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-6 text-lg"
                  onClick={() => navigate('/become-tutor')}
                >
                  Become a Tutor
                </Button>
              </div>
            </div>
          ) : (
            <>
              <h2 className="text-2xl font-bold mb-6">Tutorials</h2>
              {tutorials.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {tutorials.map((tutorial) => (
                    <Card
                      key={tutorial.id}
                      className="group cursor-pointer hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                      onClick={() => navigate(`/skills/subskill/${tutorial.id}`)}
                    >
                      <CardContent className="p-0">
                        <div className="relative overflow-hidden">
                          <img
                            src={tutorial.thumbnail}
                            alt={tutorial.title}
                            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                            <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform scale-75 group-hover:scale-100">
                              <ArrowLeft className="w-5 h-5 text-primary rotate-180" />
                            </div>
                          </div>
                          <div className="absolute bottom-2 right-2 bg-primary/80 text-white px-2 py-1 rounded text-sm">
                            Explore
                          </div>
                          <div className="absolute top-2 left-2">
                            <span className="text-sm text-muted-foreground">
                              {tutorial.duration}
                            </span>
                          </div>
                        </div>
                        
                        <div className="p-4">
                          <h3 className="font-semibold text-lg mb-1 line-clamp-1">{tutorial.title}</h3>
                          <p className="text-muted-foreground text-sm line-clamp-2 mb-3">{tutorial.description}</p>
                          <div className="flex items-center gap-3">
                            <div className="flex items-center gap-1">
                              <Users className="w-3 h-3 text-muted-foreground" />
                              <span className="text-xs text-muted-foreground">{tutorial.views}+ students</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Star className="w-3 h-3 text-amber-500" fill="currentColor" />
                              <span className="text-xs text-muted-foreground">4.8 rating</span>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                <Card className="p-8 text-center">
                  <h3 className="text-xl font-semibold mb-2">No Tutorials Available</h3>
                  <p className="text-muted-foreground">
                    Tutorials for this skill are coming soon. Check back later!
                  </p>
                </Card>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default SkillDetailPage;