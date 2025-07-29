import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Play, Clock, Eye } from 'lucide-react';
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
}

interface SubSkillDetail {
  title: string;
  description: string;
  totalTutorials: number;
  totalTutors: number;
  category: string;
  parentSkill: string;
  parentSkillTitle: string;
}

const SubSkillDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [subSkillDetail, setSubSkillDetail] = useState<SubSkillDetail | null>(null);
  const [tutorials, setTutorials] = useState<Tutorial[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Mock data based on id - replace with actual API call
    const getSubSkillData = (id: string) => {
      const subSkillMap: Record<string, { detail: SubSkillDetail; tutorials: Tutorial[] }> = {
        'mindful-conversations': {
          detail: {
            title: 'Mindful Conversations',
            description: 'Learn the art of mindful listening and speaking to create meaningful connections and have more productive conversations. Our expert communication coaches will help you develop skills for empathetic listening, clear expression, and authentic engagement.',
            totalTutorials: 24,
            totalTutors: 8,
            category: 'Communication',
            parentSkill: 'calm-chat',
            parentSkillTitle: 'The Calm Chat'
          },
          tutorials: [
            {
              id: 'active-listening',
              title: 'The Art of Active Listening',
              description: 'Learn techniques to become fully present in conversations, understand others deeply, and respond thoughtfully',
              thumbnail: 'https://images.unsplash.com/photo-1516726817505-f5ed825624d8?w=400&h=250&fit=crop',
              duration: '18:30',
              views: 15200,
              tutor: {
                name: 'Sarah Johnson',
                avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&h=50&fit=crop&crop=face'
              },
              difficulty: 'Beginner',
              category: 'Communication'
            },
            {
              id: 'difficult-conversations',
              title: 'Navigating Difficult Conversations',
              description: 'Develop skills to handle challenging discussions with confidence, clarity and compassion',
              thumbnail: 'https://images.unsplash.com/photo-1573497620053-ea5300f94f21?w=400&h=250&fit=crop',
              duration: '22:15',
              views: 18600,
              tutor: {
                name: 'Mark Williams',
                avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face'
              },
              difficulty: 'Intermediate',
              category: 'Communication'
            },
            {
              id: 'nonverbal-communication',
              title: 'Understanding Nonverbal Communication',
              description: 'Learn to read and use body language, facial expressions, and other nonverbal cues effectively',
              thumbnail: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&h=250&fit=crop',
              duration: '19:45',
              views: 14300,
              tutor: {
                name: 'Jennifer Lee',
                avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=50&h=50&fit=crop&crop=face'
              },
              difficulty: 'Beginner',
              category: 'Communication'
            },
            {
              id: 'mindful-speaking',
              title: 'Mindful Speaking: Choosing Words Wisely',
              description: 'Develop the ability to communicate clearly, authentically, and with intention in any situation',
              thumbnail: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=400&h=250&fit=crop',
              duration: '21:10',
              views: 12800,
              tutor: {
                name: 'David Chen',
                avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=50&h=50&fit=crop&crop=face'
              },
              difficulty: 'Intermediate',
              category: 'Communication'
            }
          ]
        },
        'stress-management-techniques': {
          detail: {
            title: 'Stress Management Techniques',
            description: 'Discover effective strategies to manage stress and anxiety in your daily life. Our expert instructors will guide you through practical techniques for relaxation, mindfulness, and emotional regulation that you can apply immediately to improve your wellbeing.',
            totalTutorials: 18,
            totalTutors: 6,
            category: 'Mental Wellbeing',
            parentSkill: 'calm-chat',
            parentSkillTitle: 'The Calm Chat'
          },
          tutorials: [
            {
              id: 'breathing-techniques',
              title: 'Calming Breathing Techniques',
              description: 'Learn simple yet powerful breathing exercises to reduce stress and anxiety in any situation',
              thumbnail: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400&h=250&fit=crop',
              duration: '14:20',
              views: 28700,
              tutor: {
                name: 'Emma Roberts',
                avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&h=50&fit=crop&crop=face'
              },
              difficulty: 'Beginner',
              category: 'Stress Relief'
            },
            {
              id: 'progressive-relaxation',
              title: 'Progressive Muscle Relaxation',
              description: 'Master the technique of systematically tensing and relaxing muscle groups to release physical tension',
              thumbnail: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=250&fit=crop',
              duration: '18:45',
              views: 16300,
              tutor: {
                name: 'Daniel Kim',
                avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face'
              },
              difficulty: 'Beginner',
              category: 'Stress Relief'
            },
            {
              id: 'mindfulness-meditation',
              title: 'Introduction to Mindfulness Meditation',
              description: 'Learn the fundamentals of mindfulness practice to reduce stress and increase present-moment awareness',
              thumbnail: 'https://images.unsplash.com/photo-1506126279646-a697353d3166?w=400&h=250&fit=crop',
              duration: '20:10',
              views: 22800,
              tutor: {
                name: 'Lisa Chen',
                avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=50&h=50&fit=crop&crop=face'
              },
              difficulty: 'Beginner',
              category: 'Meditation'
            },
            {
              id: 'stress-journaling',
              title: 'Therapeutic Journaling for Stress Relief',
              description: 'Discover how writing can help process emotions and reduce stress through guided journaling practices',
              thumbnail: 'https://images.unsplash.com/photo-1517842645767-c639042777db?w=400&h=250&fit=crop',
              duration: '16:35',
              views: 14100,
              tutor: {
                name: 'James Wilson',
                avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=50&h=50&fit=crop&crop=face'
              },
              difficulty: 'Beginner',
              category: 'Self-Care'
            }
          ]
        },
        'career-planning': {
          detail: {
            title: 'Career Planning & Development',
            description: 'Comprehensive guidance for mapping your career path and achieving your professional goals. Our expert career coaches provide strategies for career exploration, goal setting, skill development, and creating actionable plans for long-term success.',
            totalTutorials: 24,
            totalTutors: 8,
            category: 'Career Development',
            parentSkill: 'career-counselling',
            parentSkillTitle: 'Career Counselling'
          },
          tutorials: [
            {
              id: 'career-assessment',
              title: 'Self-Assessment: Discovering Your Career Path',
              description: 'Learn how to identify your strengths, interests, values, and skills to find career directions that align with who you are',
              thumbnail: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=250&fit=crop',
              duration: '26:30',
              views: 32500,
              tutor: {
                name: 'Jessica Morgan',
                avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=50&h=50&fit=crop&crop=face'
              },
              difficulty: 'Beginner',
              category: 'Career Planning'
            },
            {
              id: 'goal-setting',
              title: 'Strategic Career Goal Setting',
              description: 'Master the process of setting SMART career goals and creating actionable plans to achieve them',
              thumbnail: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=250&fit=crop',
              duration: '24:15',
              views: 28800,
              tutor: {
                name: 'David Chen',
                avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face'
              },
              difficulty: 'Intermediate',
              category: 'Career Planning'
            },
            {
              id: 'skill-development',
              title: 'Strategic Skill Development for Career Growth',
              description: 'Learn how to identify and develop the most valuable skills for your target career path',
              thumbnail: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=250&fit=crop',
              duration: '28:45',
              views: 26200,
              tutor: {
                name: 'Michael Reed',
                avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=50&h=50&fit=crop&crop=face'
              },
              difficulty: 'Intermediate',
              category: 'Professional Development'
            },
            {
              id: 'career-transitions',
              title: 'Navigating Career Transitions Successfully',
              description: 'Strategies for making smooth and successful transitions between jobs, industries, or career paths',
              thumbnail: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=250&fit=crop',
              duration: '30:30',
              views: 24600,
              tutor: {
                name: 'Sarah Williams',
                avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=50&h=50&fit=crop&crop=face'
              },
              difficulty: 'Advanced',
              category: 'Career Transitions'
            }
          ]
        },
        'interview-mastery': {
          detail: {
            title: 'Interview Mastery',
            description: 'Comprehensive preparation for job interviews across all industries and levels. Our expert coaches provide strategies for answering common and challenging questions, mastering body language, handling stress, and making a lasting positive impression on potential employers.',
            totalTutorials: 18,
            totalTutors: 6,
            category: 'Job Interviews',
            parentSkill: 'career-counselling',
            parentSkillTitle: 'Career Counselling'
          },
          tutorials: [
            {
              id: 'interview-preparation',
              title: 'Strategic Interview Preparation',
              description: 'Learn how to research companies, anticipate questions, and prepare compelling answers that showcase your value',
              thumbnail: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400&h=250&fit=crop',
              duration: '28:30',
              views: 42500,
              tutor: {
                name: 'Thomas Anderson',
                avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face'
              },
              difficulty: 'Intermediate',
              category: 'Interview Preparation'
            },
            {
              id: 'behavioral-questions',
              title: 'Mastering Behavioral Interview Questions',
              description: 'Learn the STAR method and other techniques to effectively answer questions about your past experiences',
              thumbnail: 'https://images.unsplash.com/photo-1565688534245-05d6b5be184a?w=400&h=250&fit=crop',
              duration: '32:15',
              views: 38200,
              tutor: {
                name: 'Jennifer Lee',
                avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=50&h=50&fit=crop&crop=face'
              },
              difficulty: 'Intermediate',
              category: 'Interview Techniques'
            },
            {
              id: 'technical-interviews',
              title: 'Navigating Technical Interviews',
              description: 'Strategies for demonstrating your technical skills and problem-solving abilities under pressure',
              thumbnail: 'https://images.unsplash.com/photo-1573497620053-ea5300f94f21?w=400&h=250&fit=crop',
              duration: '34:45',
              views: 29800,
              tutor: {
                name: 'David Chen',
                avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=50&h=50&fit=crop&crop=face'
              },
              difficulty: 'Advanced',
              category: 'Technical Interviews'
            },
            {
              id: 'interview-confidence',
              title: 'Building Interview Confidence',
              description: 'Mental preparation techniques to reduce anxiety and project confidence during job interviews',
              thumbnail: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=400&h=250&fit=crop',
              duration: '26:30',
              views: 34600,
              tutor: {
                name: 'Emma Roberts',
                avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&h=50&fit=crop&crop=face'
              },
              difficulty: 'Beginner',
              category: 'Interview Psychology'
            }
          ]
        },
        'resume-portfolio': {
          detail: {
            title: 'Resume & Portfolio Building',
            description: 'Learn how to create compelling resumes, CVs, and professional portfolios that showcase your skills and experience effectively. Our expert career coaches provide guidance on crafting documents that stand out to employers and highlight your unique value proposition.',
            totalTutorials: 16,
            totalTutors: 5,
            category: 'Career Documents',
            parentSkill: 'career-counselling',
            parentSkillTitle: 'Career Counselling'
          },
          tutorials: [
            {
              id: 'resume-essentials',
              title: 'Resume Essentials: Structure and Content',
              description: 'Learn how to create a well-organized resume with compelling content that highlights your qualifications',
              thumbnail: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&h=250&fit=crop',
              duration: '24:30',
              views: 38500,
              tutor: {
                name: 'Jessica Morgan',
                avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=50&h=50&fit=crop&crop=face'
              },
              difficulty: 'Beginner',
              category: 'Resume Writing'
            },
            {
              id: 'achievement-statements',
              title: 'Writing Powerful Achievement Statements',
              description: 'Master the art of quantifying your accomplishments and writing impactful bullet points for your resume',
              thumbnail: 'https://images.unsplash.com/photo-1483213097419-365e22f0f258?w=400&h=250&fit=crop',
              duration: '28:15',
              views: 32200,
              tutor: {
                name: 'David Chen',
                avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=50&h=50&fit=crop&crop=face'
              },
              difficulty: 'Intermediate',
              category: 'Resume Writing'
            },
            {
              id: 'portfolio-development',
              title: 'Creating an Impressive Professional Portfolio',
              description: 'Learn how to showcase your work samples, projects, and achievements in a compelling portfolio',
              thumbnail: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=250&fit=crop',
              duration: '32:45',
              views: 26800,
              tutor: {
                name: 'Sarah Williams',
                avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=50&h=50&fit=crop&crop=face'
              },
              difficulty: 'Intermediate',
              category: 'Portfolio Development'
            },
            {
              id: 'linkedin-optimization',
              title: 'LinkedIn Profile Optimization',
              description: 'Strategies for creating a standout LinkedIn profile that attracts recruiters and opportunities',
              thumbnail: 'https://images.unsplash.com/photo-1611944212129-29977ae1398c?w=400&h=250&fit=crop',
              duration: '26:30',
              views: 34600,
              tutor: {
                name: 'Thomas Anderson',
                avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face'
              },
              difficulty: 'Beginner',
              category: 'Online Presence'
            }
          ]
        }
      };

      return subSkillMap[id] || {
        detail: {
          title: 'SubSkill Not Found',
          description: 'The requested sub-skill could not be found.',
          totalTutorials: 0,
          totalTutors: 0,
          category: 'Unknown',
          parentSkill: '',
          parentSkillTitle: ''
        },
        tutorials: []
      };
    };

    const data = getSubSkillData(id || '');
    setSubSkillDetail(data.detail);
    setTutorials(data.tutorials);
    setLoading(false);
  }, [id]);

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

  if (!subSkillDetail) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">SubSkill Not Found</h1>
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
          onClick={() => navigate(`/skills/${subSkillDetail.parentSkill}`)}
          className="mb-6 hover:bg-accent/10 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to {subSkillDetail.parentSkillTitle}
        </Button>

        {/* SubSkill Header */}
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-4">
            <h1 className="text-4xl md:text-5xl font-bold">{subSkillDetail.title}</h1>
            <Badge variant="secondary" className="text-lg px-3 py-1">
              {subSkillDetail.category}
            </Badge>
          </div>
          <p className="text-xl text-muted-foreground mb-6 max-w-4xl">
            {subSkillDetail.description}
          </p>
          
          {/* Stats */}
          <div className="flex flex-wrap gap-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">{subSkillDetail.totalTutorials}</div>
              <div className="text-sm text-muted-foreground">Tutorials</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">{subSkillDetail.totalTutors}</div>
              <div className="text-sm text-muted-foreground">Expert Tutors</div>
            </div>
          </div>
        </div>

        {/* Expert Tutors Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Expert Tutors</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Tutor Cards - These would be dynamically generated in a real app */}
            <Card className="overflow-hidden hover:shadow-lg transition-all duration-300">
              <CardContent className="p-0">
                <div className="relative h-48 bg-gradient-to-r from-primary/20 to-secondary/20 flex items-center justify-center">
                  <img 
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face" 
                    alt="Tutor" 
                    className="w-24 h-24 rounded-full border-4 border-background"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-bold text-lg">Emily Parker</h3>
                  <p className="text-sm text-muted-foreground mb-2">Early Education Specialist</p>
                  <div className="flex items-center justify-center gap-1 text-yellow-500 mb-3">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                        <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                      </svg>
                    ))}
                    <span className="text-xs font-medium text-foreground ml-1">5.0</span>
                  </div>
                  <Button 
                    variant="outline" 
                    className="w-full" 
                    onClick={() => navigate('/instructor/1')}
                  >
                    View Profile
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-all duration-300">
              <CardContent className="p-0">
                <div className="relative h-48 bg-gradient-to-r from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                  <img 
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face" 
                    alt="Tutor" 
                    className="w-24 h-24 rounded-full border-4 border-background"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-bold text-lg">Robert Johnson</h3>
                  <p className="text-sm text-muted-foreground mb-2">Reading & Language Arts</p>
                  <div className="flex items-center justify-center gap-1 text-yellow-500 mb-3">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                        <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                      </svg>
                    ))}
                    <span className="text-xs font-medium text-foreground ml-1">4.9</span>
                  </div>
                  <Button 
                    variant="outline" 
                    className="w-full" 
                    onClick={() => navigate('/instructor/2')}
                  >
                    View Profile
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-all duration-300">
              <CardContent className="p-0">
                <div className="relative h-48 bg-gradient-to-r from-green-500/20 to-teal-500/20 flex items-center justify-center">
                  <img 
                    src="https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=150&h=150&fit=crop&crop=face" 
                    alt="Tutor" 
                    className="w-24 h-24 rounded-full border-4 border-background"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-bold text-lg">Sarah Williams</h3>
                  <p className="text-sm text-muted-foreground mb-2">Science Education</p>
                  <div className="flex items-center justify-center gap-1 text-yellow-500 mb-3">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                        <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                      </svg>
                    ))}
                    <span className="text-xs font-medium text-foreground ml-1">4.8</span>
                  </div>
                  <Button 
                    variant="outline" 
                    className="w-full" 
                    onClick={() => navigate('/instructor/3')}
                  >
                    View Profile
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-all duration-300">
              <CardContent className="p-0">
                <div className="relative h-48 bg-gradient-to-r from-orange-500/20 to-red-500/20 flex items-center justify-center">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face" 
                    alt="Tutor" 
                    className="w-24 h-24 rounded-full border-4 border-background"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-bold text-lg">Michael Chen</h3>
                  <p className="text-sm text-muted-foreground mb-2">Arts & Creative Education</p>
                  <div className="flex items-center justify-center gap-1 text-yellow-500 mb-3">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                        <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                      </svg>
                    ))}
                    <span className="text-xs font-medium text-foreground ml-1">4.7</span>
                  </div>
                  <Button 
                    variant="outline" 
                    className="w-full" 
                    onClick={() => navigate('/instructor/4')}
                  >
                    View Profile
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Tutorials Grid */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Tutorials</h2>
          {tutorials.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {tutorials.map((tutorial) => (
                <Card
                  key={tutorial.id}
                  className="group cursor-pointer hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                  onClick={() => navigate(`/tutorial/${tutorial.id}`)}
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
                          <Play className="w-5 h-5 text-primary ml-0.5" fill="currentColor" />
                        </div>
                      </div>
                      <div className="absolute bottom-2 right-2 bg-black/80 text-white px-2 py-1 rounded text-sm flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {tutorial.duration}
                      </div>
                      <div className="absolute top-2 left-2">
                        <span className="text-sm text-muted-foreground">
                          {tutorial.duration}
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-4">
                      <h3 className="font-bold text-lg mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                        {tutorial.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
                        {tutorial.description}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <img
                            src={tutorial.tutor.avatar}
                            alt={tutorial.tutor.name}
                            className="w-6 h-6 rounded-full"
                          />
                          <span className="text-sm font-medium">{tutorial.tutor.name}</span>
                        </div>
                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Eye className="w-3 h-3" />
                          {tutorial.views.toLocaleString()}
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
                Tutorials for this sub-skill are coming soon. Check back later!
              </p>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default SubSkillDetailPage;