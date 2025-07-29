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
      const skillMap: Record<string, { detail: SkillDetail; tutorials: Tutorial[] }> = {
        'music-production': {
          detail: {
            title: 'Music Production',
            description: 'Learn to create, mix, and master professional-quality music using industry-standard software and techniques. From beat making to final mastering, discover the complete music production workflow.',
            totalTutorials: 127,
            totalTutors: 45,
            category: 'Music'
          },
          tutorials: [
            {
              id: '1',
              title: 'Getting Started with Logic Pro X',
              description: 'A comprehensive introduction to Logic Pro X for beginners',
              thumbnail: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=250&fit=crop',
              duration: '18:45',
              views: 12400,
              tutor: {
                name: 'Sarah Johnson',
                avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=50&h=50&fit=crop&crop=face'
              },
              difficulty: 'Beginner',
              category: 'Music Production'
            },
            {
              id: '2',
              title: 'Advanced Mixing Techniques',
              description: 'Professional mixing strategies used in modern music production',
              thumbnail: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=400&h=250&fit=crop',
              duration: '25:30',
              views: 8950,
              tutor: {
                name: 'Mike Chen',
                avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face'
              },
              difficulty: 'Advanced',
              category: 'Music Production'
            },
            {
              id: '3',
              title: 'Beat Making Fundamentals',
              description: 'Learn the basics of creating compelling drum patterns and beats',
              thumbnail: 'https://images.unsplash.com/photo-1525201548942-d8732f6617a0?w=400&h=250&fit=crop',
              duration: '15:20',
              views: 15600,
              tutor: {
                name: 'Emma Davis',
                avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&h=50&fit=crop&crop=face'
              },
              difficulty: 'Beginner',
              category: 'Music Production'
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
                        <Badge 
                          className={`text-xs ${getDifficultyColor(tutorial.difficulty)}`}
                        >
                          {tutorial.difficulty}
                        </Badge>
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
                Tutorials for this skill are coming soon. Check back later!
              </p>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default SkillDetailPage;