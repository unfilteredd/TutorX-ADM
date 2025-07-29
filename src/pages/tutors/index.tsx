import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Star, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

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

// Using the same tutor data from the instructor page
const tutors: Instructor[] = [
  {
    id: '1',
    name: 'Kshitij Sharma',
    subject: 'Science',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=150&h=150&fit=crop&crop=face',
    bannerImage: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1200&h=400&fit=crop',
    bio: 'Passionate music educator with over 10 years of experience teaching guitar, piano, and music theory. I believe in creating a fun and supportive learning environment where students can explore their musical creativity while building solid technical foundations.',
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
    bio: 'Software engineer with expertise in web development, machine learning, and mobile app development. I have a passion for teaching coding to beginners and helping experienced developers level up their skills.',
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
    bio: 'Professional chef with experience in Michelin-starred restaurants. I specialize in teaching home cooking techniques, international cuisines, and pastry arts.',
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
    bio: 'Award-winning photographer specializing in portrait, landscape, and commercial photography. I teach both technical aspects of photography and artistic composition.',
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
    bio: 'Certified yoga instructor and mindfulness coach with over 15 years of practice. I teach various yoga styles including Hatha, Vinyasa, and Restorative yoga, as well as meditation techniques for stress reduction and mental clarity.',
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
    bio: 'Former investment banker and financial advisor with expertise in personal finance, investment strategies, and financial planning. I help students understand complex financial concepts and develop practical skills for managing money.',
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
    bio: 'Multilingual language instructor specializing in Spanish, Portuguese, and English. My teaching methodology combines conversational practice, cultural immersion, and personalized learning plans.',
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
    bio: 'Certified personal trainer and nutritionist with expertise in strength training, weight management, and sports nutrition. I create customized fitness and nutrition plans based on individual goals and needs.',
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
    bio: 'Digital marketing strategist with experience working with startups and Fortune 500 companies. I teach SEO, social media marketing, content strategy, and paid advertising.',
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
    bio: 'Mathematics educator with expertise in algebra, calculus, statistics, and test preparation. I make complex mathematical concepts accessible through clear explanations and practical examples.',
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

const TutorsPage = () => {
  const navigate = useNavigate();

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

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-12 mt-16">
        {/* Back Button */}
        <Button
          variant="ghost"
          onClick={() => navigate('/')}
          className="mb-6 hover:bg-accent/10 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Button>
        
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="bg-hero-gradient bg-clip-text text-transparent">Expert Tutors</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Connect with passionate educators who are ready to help you master new skills and achieve your learning goals.
          </p>
        </div>
        
        {/* Tutors Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {tutors.map((tutor) => (
            <Card key={tutor.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-0">
                <div className="relative h-40 overflow-hidden">
                  <img 
                    src={tutor.bannerImage} 
                    alt={`${tutor.name} cover`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-4 flex items-center">
                    <img 
                      src={tutor.avatar} 
                      alt={tutor.name}
                      className="w-16 h-16 rounded-full border-2 border-white mr-4"
                    />
                    <div>
                      <h3 className="text-white font-bold text-lg">{tutor.name}</h3>
                      <p className="text-white/80 text-sm">{tutor.subject} Tutor</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-5">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="flex items-center gap-1">
                      {renderStars(tutor.rating)}
                      <span className="ml-2 font-medium">{tutor.rating}</span>
                      <span className="text-muted-foreground text-sm">({tutor.totalReviews})</span>
                    </div>
                    <div className="flex items-center gap-1 text-muted-foreground text-sm">
                      <MapPin className="w-3 h-3" />
                      <span>{tutor.location}</span>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-4 line-clamp-2">{tutor.bio}</p>
                  
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="font-semibold">${tutor.hourlyRate}</span>
                      <span className="text-muted-foreground text-sm">/hour</span>
                    </div>
                    <Button 
                      onClick={() => navigate(`/instructor/${tutor.id}`)}
                      className="bg-secondary hover:bg-secondary/90 text-secondary-foreground"
                    >
                      View Profile
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Stats Section */}
        <div className="mt-16 bg-card-gradient p-8 rounded-xl border border-border/20 shadow-card">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-2">Why Choose Our Tutors?</h2>
            <p className="text-muted-foreground">Our tutors are carefully selected for their expertise and teaching abilities</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground text-sm uppercase tracking-wide">Expert Tutors</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">50+</div>
              <div className="text-muted-foreground text-sm uppercase tracking-wide">Subject Areas</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">4.8</div>
              <div className="text-muted-foreground text-sm uppercase tracking-wide">Average Rating</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">10K+</div>
              <div className="text-muted-foreground text-sm uppercase tracking-wide">Happy Students</div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default TutorsPage;
