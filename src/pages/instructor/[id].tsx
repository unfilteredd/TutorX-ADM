import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Star, MapPin, Calendar, GraduationCap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface Instructor {
  id: string;
  name: string;
  subject: string;
  avatar: string;
  bannerImage: string;
  bio: string;
  education: string[];
  experience: string;
  rating: number;
  totalReviews: number;
  location: string;
  languages: string[];
  hourlyRate: number;
}

interface Review {
  id: string;
  studentName: string;
  studentAvatar: string;
  rating: number;
  comment: string;
  date: string;
}

// Mock data for 10 tutors with different skills
const tutors: Instructor[] = [
  {
    id: '1',
      name: 'Sarah Johnson',
      subject: 'Music',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=150&h=150&fit=crop&crop=face',
      bannerImage: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1200&h=400&fit=crop',
      bio: 'Passionate music educator with over 10 years of experience teaching guitar, piano, and music theory. I believe in creating a fun and supportive learning environment where students can explore their musical creativity while building solid technical foundations. My teaching approach combines traditional methods with modern techniques to help students achieve their musical goals.',
      education: [
        'Master of Music in Performance - Berklee College of Music (2012)',
        'Bachelor of Arts in Music Education - University of Southern California (2010)'
      ],
      experience: '10+ years',
      rating: 4.9,
      totalReviews: 247,
      location: 'Los Angeles, CA',
      languages: ['English', 'Spanish'],
      hourlyRate: 75
  },
  {
    id: '2',
    name: 'Michael Chen',
    subject: 'Programming',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    bannerImage: 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=1200&h=400&fit=crop',
    bio: 'Software engineer with expertise in web development, machine learning, and mobile app development. I have a passion for teaching coding to beginners and helping experienced developers level up their skills. My approach focuses on practical, project-based learning that builds both technical skills and problem-solving abilities.',
    education: [
      'MS in Computer Science - Stanford University (2015)',
      'BS in Computer Engineering - MIT (2013)'
    ],
    experience: '8+ years',
    rating: 4.8,
    totalReviews: 189,
    location: 'San Francisco, CA',
    languages: ['English', 'Mandarin'],
    hourlyRate: 95
  },
  {
    id: '3',
    name: 'Emma Rodriguez',
    subject: 'Culinary Arts',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
    bannerImage: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&h=400&fit=crop',
    bio: 'Professional chef with experience in Michelin-starred restaurants. I specialize in teaching home cooking techniques, international cuisines, and pastry arts. My teaching philosophy emphasizes building confidence in the kitchen through mastering fundamental techniques and understanding ingredients.',
    education: [
      'Diploma in Culinary Arts - Le Cordon Bleu Paris (2014)',
      'Certificate in Pastry Arts - Culinary Institute of America (2016)'
    ],
    experience: '7+ years',
    rating: 4.9,
    totalReviews: 156,
    location: 'Chicago, IL',
    languages: ['English', 'Spanish', 'French'],
    hourlyRate: 65
  },
  {
    id: '4',
    name: 'David Park',
    subject: 'Photography',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    bannerImage: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=1200&h=400&fit=crop',
    bio: 'Award-winning photographer specializing in portrait, landscape, and commercial photography. I teach both technical aspects of photography and artistic composition. My lessons are tailored to each student\'s skill level and goals, whether you\'re just starting out or looking to refine your professional skills.',
    education: [
      'MFA in Photography - Rhode Island School of Design (2011)',
      'BA in Visual Arts - New York University (2009)'
    ],
    experience: '12+ years',
    rating: 4.7,
    totalReviews: 203,
    location: 'New York, NY',
    languages: ['English', 'Korean'],
    hourlyRate: 85
  },
  {
    id: '5',
    name: 'Priya Sharma',
    subject: 'Yoga & Meditation',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=150&h=150&fit=crop&crop=face',
    bannerImage: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=400&fit=crop',
    bio: 'Certified yoga instructor and mindfulness coach with over 15 years of practice. I teach various yoga styles including Hatha, Vinyasa, and Restorative yoga, as well as meditation techniques for stress reduction and mental clarity. My holistic approach helps students improve physical wellbeing while developing mindfulness practices for daily life.',
    education: [
      'RYT 500 Certification - Yoga Alliance (2010)',
      'Mindfulness-Based Stress Reduction Teacher Training - UMass Medical School (2013)'
    ],
    experience: '15+ years',
    rating: 5.0,
    totalReviews: 312,
    location: 'Austin, TX',
    languages: ['English', 'Hindi'],
    hourlyRate: 60
  },
  {
    id: '6',
    name: 'James Wilson',
    subject: 'Finance & Investing',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
    bannerImage: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&h=400&fit=crop',
    bio: 'Former investment banker and financial advisor with expertise in personal finance, investment strategies, and financial planning. I help students understand complex financial concepts and develop practical skills for managing money, investing wisely, and building long-term wealth. My teaching style makes finance accessible and actionable for everyone.',
    education: [
      'MBA in Finance - Wharton School of Business (2008)',
      'BS in Economics - London School of Economics (2006)',
      'Certified Financial Planner (CFP)'
    ],
    experience: '14+ years',
    rating: 4.8,
    totalReviews: 176,
    location: 'Boston, MA',
    languages: ['English'],
    hourlyRate: 110
  },
  {
    id: '7',
    name: 'Sofia Garcia',
    subject: 'Language Learning',
    avatar: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=150&h=150&fit=crop&crop=face',
    bannerImage: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1200&h=400&fit=crop',
    bio: 'Multilingual language instructor specializing in Spanish, Portuguese, and English. My teaching methodology combines conversational practice, cultural immersion, and personalized learning plans. I focus on helping students develop practical communication skills while building confidence in speaking and understanding a new language.',
    education: [
      'MA in Applied Linguistics - Georgetown University (2014)',
      'BA in Modern Languages - University of Barcelona (2012)',
      'TEFL Certification - Cambridge University (2013)'
    ],
    experience: '9+ years',
    rating: 4.9,
    totalReviews: 245,
    location: 'Miami, FL',
    languages: ['English', 'Spanish', 'Portuguese', 'Italian'],
    hourlyRate: 55
  },
  {
    id: '8',
    name: 'Robert Taylor',
    subject: 'Fitness & Nutrition',
    avatar: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=150&h=150&fit=crop&crop=face',
    bannerImage: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&h=400&fit=crop',
    bio: 'Certified personal trainer and nutritionist with expertise in strength training, weight management, and sports nutrition. I create customized fitness and nutrition plans based on individual goals and needs. My coaching approach combines science-based methods with practical strategies that fit into busy lifestyles.',
    education: [
      'MS in Exercise Science - University of Florida (2016)',
      'BS in Nutrition - Penn State University (2014)',
      'NASM Certified Personal Trainer',
      'Precision Nutrition Level 2 Coach'
    ],
    experience: '7+ years',
    rating: 4.7,
    totalReviews: 198,
    location: 'Denver, CO',
    languages: ['English'],
    hourlyRate: 70
  },
  {
    id: '9',
    name: 'Olivia Kim',
    subject: 'Digital Marketing',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face',
    bannerImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=400&fit=crop',
    bio: 'Digital marketing strategist with experience working with startups and Fortune 500 companies. I teach SEO, social media marketing, content strategy, and paid advertising. My lessons provide both theoretical knowledge and hands-on practice with real-world marketing campaigns and analytics tools.',
    education: [
      'MBA in Marketing - Northwestern University (2015)',
      'BS in Business Administration - UC Berkeley (2013)',
      'Google Ads Certification',
      'Facebook Blueprint Certification'
    ],
    experience: '8+ years',
    rating: 4.8,
    totalReviews: 167,
    location: 'Seattle, WA',
    languages: ['English', 'Korean'],
    hourlyRate: 90
  },
  {
    id: '10',
    name: 'Thomas Brown',
    subject: 'Mathematics',
    avatar: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=150&h=150&fit=crop&crop=face',
    bannerImage: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?w=1200&h=400&fit=crop',
    bio: 'Mathematics educator with expertise in algebra, calculus, statistics, and test preparation. I make complex mathematical concepts accessible through clear explanations and practical examples. My teaching approach builds strong foundations while developing problem-solving skills that extend beyond the classroom.',
    education: [
      'PhD in Mathematics - Princeton University (2014)',
      'MS in Applied Mathematics - California Institute of Technology (2010)',
      'BS in Mathematics - University of Michigan (2008)'
    ],
    experience: '11+ years',
    rating: 4.9,
    totalReviews: 231,
    location: 'Atlanta, GA',
    languages: ['English', 'French'],
    hourlyRate: 80
  }
];

// Mock reviews data
const mockReviews: Record<string, Review[]> = {
  '1': [
      {
        id: '1',
        studentName: 'Mike Chen',
        studentAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face',
        rating: 5,
        comment: 'Sarah is an amazing teacher! She helped me understand complex music theory concepts in a way that made sense. Highly recommend!',
        date: '2 weeks ago'
      },
      {
        id: '2',
        studentName: 'Emma Davis',
        studentAvatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop&crop=face',
        rating: 5,
        comment: 'Patient, knowledgeable, and encouraging. Sarah helped me improve my guitar skills tremendously.',
        date: '1 month ago'
      },
      {
        id: '3',
        studentName: 'Alex Rodriguez',
        studentAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face',
        rating: 4,
        comment: 'Great instructor with excellent communication skills. The lessons are well-structured and fun.',
        date: '2 months ago'
    }
  ],
  '2': [
    {
      id: '4',
      studentName: 'Lisa Wang',
      studentAvatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=60&h=60&fit=crop&crop=face',
      rating: 5,
      comment: 'Michael is an exceptional programming instructor. His explanations are clear and he\'s very patient with beginners.',
      date: '3 weeks ago'
    },
    {
      id: '5',
      studentName: 'David Park',
      studentAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face',
      rating: 5,
      comment: 'I learned more in 5 sessions with Michael than I did in an entire semester of CS classes. Highly recommended!',
      date: '1 month ago'
    }
  ]
};

// Default reviews for tutors without specific reviews
const defaultReviews: Review[] = [
  {
    id: 'default1',
    studentName: 'John Smith',
    studentAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=60&h=60&fit=crop&crop=face',
    rating: 5,
    comment: 'Excellent instructor! Very knowledgeable and patient. Would definitely recommend to anyone looking to improve their skills.',
    date: '2 weeks ago'
  },
  {
    id: 'default2',
    studentName: 'Amanda Lee',
    studentAvatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=60&h=60&fit=crop&crop=face',
    rating: 4,
    comment: 'Great teaching style and very responsive to questions. The lessons are well-structured and engaging.',
    date: '1 month ago'
  }
];

const InstructorProfilePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [instructor, setInstructor] = useState<Instructor | null>(null);
  const [reviews, setReviews] = useState<Review[]>([]);

  useEffect(() => {
    // Find the tutor with the matching ID
    const tutorId = id || '1';
    const foundTutor = tutors.find(tutor => tutor.id === tutorId);
    
    if (foundTutor) {
      setInstructor(foundTutor);
      
      // Get reviews for this tutor or use default reviews
      const tutorReviews = mockReviews[tutorId] || defaultReviews;
      setReviews(tutorReviews);
    }
  }, [id]);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-muted-foreground'
        }`}
      />
    ));
  };

  if (!instructor) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Back Button */}
      <div className="container mx-auto px-4 pt-8">
        <Button
          variant="ghost"
          onClick={() => navigate(-1)}
          className="mb-6 hover:bg-accent/10 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </Button>
      </div>

      {/* Banner Image */}
      <div className="relative h-64 md:h-80 mb-8">
        <img
          src={instructor.bannerImage}
          alt={`${instructor.name} banner`}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 pb-12">
        {/* Instructor Header */}
        <div className="text-center mb-12 -mt-16 relative z-10">
          <img
            src={instructor.avatar}
            alt={instructor.name}
            className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-background shadow-lg"
          />
          <h1 className="text-4xl font-bold mb-2">{instructor.name}</h1>
          <p className="text-xl text-accent font-medium mb-4">{instructor.subject} Tutor</p>
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="flex items-center gap-1">
              {renderStars(instructor.rating)}
              <span className="ml-2 font-medium">{instructor.rating}</span>
              <span className="text-muted-foreground">({instructor.totalReviews} reviews)</span>
            </div>
            <div className="flex items-center gap-1 text-muted-foreground">
              <MapPin className="w-4 h-4" />
              <span>{instructor.location}</span>
            </div>
          </div>
        </div>

        {/* About Section */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4">About</h2>
            <p className="text-muted-foreground leading-relaxed">{instructor.bio}</p>
          </CardContent>
        </Card>

        {/* Experience Section */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-6">Experience & Education</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-3 flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-primary" />
                  Teaching Experience
                </h3>
                <p className="text-muted-foreground">{instructor.experience}</p>
              </div>
              <div>
                <h3 className="font-semibold mb-3 flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-primary" />
                  Education
                </h3>
                <ul className="space-y-2">
                  {instructor.education.map((edu, index) => (
                    <li key={index} className="text-muted-foreground">
                      {edu}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-border">
              <div className="flex flex-wrap gap-4">
                <div>
                  <span className="font-semibold">Languages: </span>
                  <span className="text-muted-foreground">{instructor.languages.join(', ')}</span>
                </div>
                <div>
                  <span className="font-semibold">Hourly Rate: </span>
                  <span className="text-primary font-bold">${instructor.hourlyRate}/hour</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Request Tutoring Button */}
        <div className="mb-12">
          <Button
            size="lg"
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-4 text-lg font-semibold"
          >
            Request Tutoring Session
          </Button>
        </div>

        {/* Student Reviews */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Student Reviews</h2>
          <div className="grid gap-6">
            {reviews.map((review) => (
              <Card key={review.id}>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <img
                      src={review.studentAvatar}
                      alt={review.studentName}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h4 className="font-semibold">{review.studentName}</h4>
                        <div className="flex items-center gap-1">
                          {renderStars(review.rating)}
                        </div>
                        <span className="text-sm text-muted-foreground">{review.date}</span>
                      </div>
                      <p className="text-muted-foreground">{review.comment}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructorProfilePage;