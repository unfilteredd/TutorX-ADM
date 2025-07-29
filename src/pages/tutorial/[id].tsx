import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Heart, Share2, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { generateYouTubeEmbedUrl, extractYouTubeVideoId } from '../../lib/youtube';

interface Video {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  videoUrl: string;
  tutor: {
    id: string;
    name: string;
    avatar: string;
    bio: string;
    experience: string;
    rating: number;
  };
  duration: string;
  views: number;
  likes: number;
  shares: number;
  category: string;
}

interface VideoPlayerProps {
  video: Video;
}

function VideoPlayer({ video }: VideoPlayerProps) {
  if (!video.videoUrl) {
    return (
      <div style={{ width: 560, height: 315, background: 'black', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
        Video not available
      </div>
    );
  }

  // Extract YouTube video ID if it's a full URL
  let videoId = video.videoUrl;
  if (videoId.includes('youtube.com') || videoId.includes('youtu.be')) {
    const extractedId = extractYouTubeVideoId(videoId);
    if (extractedId) {
      videoId = extractedId;
    }
  }

  return (
    <iframe
      width="560"
      height="315"
      src={generateYouTubeEmbedUrl(videoId, false)}
      title={video.title}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
    />
  );
}


interface RelatedVideo {
  id: string;
  title: string;
  thumbnail: string;
  tutor: {
    id: string;
    name: string;
  };
  duration: string;
  views: number;
}

// Define video data with different tutors
const videoData: Record<string, Video> = {
  // Academic Tuition Videos
  'nursery-3': {
    id: 'nursery-3',
    title: 'Early Mathematics: Numbers and Counting',
    description: 'A fun and engaging introduction to numbers and counting for young learners. This tutorial uses colorful visuals and interactive examples to make learning enjoyable.',
    thumbnail: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=450&fit=crop',
    videoUrl: 'dQw4w9WgXcQ', // YouTube video ID
    tutor: {
      id: '7',
      name: 'Emily Parker',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      bio: 'Early childhood educator with expertise in making learning fun and accessible for young students. Specializes in creating engaging educational content for nursery to 3rd class students.',
      experience: '12+ years',
      rating: 4.9
    },
    duration: '15:30',
    views: 18500,
    likes: 1250,
    shares: 320,
    category: 'Early Education'
  },
  'class4-8': {
    id: 'class4-8',
    title: 'Middle School Mathematics: Fractions and Decimals',
    description: 'Master the concepts of fractions and decimals with clear explanations and practical examples. This tutorial is designed for students in classes 4-8.',
    thumbnail: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800&h=450&fit=crop',
    videoUrl: 'dQw4w9WgXcQ', // YouTube video ID
    tutor: {
      id: '8',
      name: 'David Wilson',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      bio: 'Experienced middle school teacher specializing in mathematics and science education. Passionate about making complex concepts accessible to students through clear explanations and practical examples.',
      experience: '15+ years',
      rating: 4.8
    },
    duration: '22:45',
    views: 22400,
    likes: 1850,
    shares: 420,
    category: 'Middle School'
  },
  'class9-above': {
    id: 'class9-above',
    title: 'Advanced Mathematics: Calculus Fundamentals',
    description: 'A comprehensive introduction to calculus for high school and college students. This tutorial covers limits, derivatives, and integrals with clear explanations and examples.',
    thumbnail: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=450&fit=crop',
    videoUrl: 'dQw4w9WgXcQ', // YouTube video ID
    tutor: {
      id: '9',
      name: 'Sophia Chen',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=150&h=150&fit=crop&crop=face',
      bio: 'Mathematics professor with expertise in advanced mathematics and test preparation. Specializes in making complex mathematical concepts accessible to high school and college students.',
      experience: '18+ years',
      rating: 4.9
    },
    duration: '35:15',
    views: 31200,
    likes: 2450,
    shares: 580,
    category: 'High School & College'
  },
  '0': { // New video with ID 0
    id: '0',
    title: 'Mastering Data Structures & Algorithms',
    description: 'Learn essential data structures and algorithms concepts with clear explanations and practical examples. This comprehensive tutorial covers fundamental concepts that every programmer should know.',
    thumbnail: 'https://i.ytimg.com/vi/_q83F8Dn9os/maxresdefault.jpg',
    videoUrl: '_q83F8Dn9os', // YouTube video ID
    tutor: { 
      id: '6',
      name: 'Vagish Bhardwaj',
      avatar: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=150&h=150&fit=crop&crop=face',
      bio: 'Experienced software engineer and educator specializing in algorithms, data structures, and system design. Passionate about making complex programming concepts accessible to everyone.',
      experience: '8+ years',
      rating: 4.9
    },
    duration: '10:15',
    views: 50000,
    likes: 3200,
    shares: 850,
    category: 'Programming'
  },
  '1': {
    id: '1',
    title: 'Advanced Guitar Techniques for Beginners',
    description: 'Learn essential guitar techniques that will take your playing to the next level. This comprehensive tutorial covers fingerpicking, barre chords, and advanced strumming patterns.',
    thumbnail: 'https://i.ytimg.com/vi/mXYTWzHEK14/maxresdefault.jpg',
    videoUrl: 'mXYTWzHEK14', // YouTube video ID
    tutor: {
      id: '1',
      name: 'Sarah Johnson',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=150&h=150&fit=crop&crop=face',
      bio: 'Professional musician and guitar instructor with over 10 years of experience teaching students of all levels.',
      experience: '10+ years',
      rating: 4.9
    },
    duration: '15:30',
    views: 12400,
    likes: 850,
    shares: 120,
    category: 'Music'
  },
  '2': {
    id: '2',
    title: 'Basic Guitar Chords Every Beginner Should Know',
    description: 'Master the essential guitar chords that form the foundation of countless songs. Perfect for absolute beginners who want to start playing quickly.',
    thumbnail: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&h=450&fit=crop',
    videoUrl: 'dQw4w9WgXcQ', // YouTube video ID
    tutor: {
      id: '1',
      name: 'Sarah Johnson',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=150&h=150&fit=crop&crop=face',
      bio: 'Professional musician and guitar instructor with over 10 years of experience teaching students of all levels.',
      experience: '10+ years',
      rating: 4.9
    },
    duration: '12:45',
    views: 8500,
    likes: 620,
    shares: 85,
    category: 'Music'
  },
  '3': {
    id: '3',
    title: 'Guitar Fingerpicking Patterns Made Easy',
    description: 'Learn beautiful fingerpicking patterns that will elevate your guitar playing. This tutorial breaks down complex patterns into simple, manageable steps.',
    thumbnail: 'https://images.unsplash.com/photo-1525201548942-d8732f6617a0?w=800&h=450&fit=crop',
    videoUrl: 'dQw4w9WgXcQ', // YouTube video ID
    tutor: {
      id: '1',
      name: 'Sarah Johnson',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=150&h=150&fit=crop&crop=face',
      bio: 'Professional musician and guitar instructor with over 10 years of experience teaching students of all levels.',
      experience: '10+ years',
      rating: 4.9
    },
    duration: '18:20',
    views: 6200,
    likes: 450,
    shares: 72,
    category: 'Music'
  },
  '4': {
    id: '4',
    title: 'Reading Guitar Tabs for Beginners',
    description: 'Learn how to read guitar tablature and start playing your favorite songs quickly. This tutorial covers all the basics of tab notation.',
    thumbnail: 'https://images.unsplash.com/photo-1564186763535-ebb21ef5277f?w=800&h=450&fit=crop',
    
    videoUrl: 'dQw4w9WgXcQ', // YouTube video ID
    tutor: {
      id: '1',
      name: 'Sarah Johnson',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=150&h=150&fit=crop&crop=face',
      bio: 'Professional musician and guitar instructor with over 10 years of experience teaching students of all levels.',
      experience: '10+ years',
      rating: 4.9
    },
    duration: '10:15',
    views: 9800,
    likes: 720,
    shares: 95,
    category: 'Music'
  },
  '5': {
    id: '5',
    title: 'Introduction to Python Programming',
    description: 'Learn the fundamentals of Python programming in this beginner-friendly tutorial. We\'ll cover basic syntax, data types, and create your first program.',
    thumbnail: 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=800&h=450&fit=crop',
    videoUrl: 'dQw4w9WgXcQ', // YouTube video ID
    tutor: {
      id: '2',
      name: 'Michael Chen',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      bio: 'Software engineer with expertise in web development, machine learning, and mobile app development. I have a passion for teaching coding to beginners and helping experienced developers level up their skills.',
      experience: '8+ years',
      rating: 4.8
    },
    duration: '22:30',
    views: 15400,
    likes: 1250,
    shares: 320,
    category: 'Programming'
  },
  '6': {
    id: '6',
    title: 'Authentic Italian Pasta from Scratch',
    description: 'Learn how to make delicious, authentic Italian pasta from scratch. This tutorial covers dough preparation, shaping techniques, and classic sauce pairings.',
    thumbnail: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=450&fit=crop',
    videoUrl: 'dQw4w9WgXcQ', // YouTube video ID
    tutor: {
      id: '3',
      name: 'Emma Rodriguez',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      bio: 'Professional chef with experience in Michelin-starred restaurants. I specialize in teaching home cooking techniques, international cuisines, and pastry arts.',
      experience: '7+ years',
      rating: 4.9
    },
    duration: '28:15',
    views: 8700,
    likes: 780,
    shares: 145,
    category: 'Culinary Arts'
  },
  '7': {
    id: '7',
    title: 'Portrait Photography Masterclass',
    description: 'Learn professional portrait photography techniques, including lighting setups, posing guidance, and post-processing tips to create stunning portraits.',
    thumbnail: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=800&h=450&fit=crop',
    videoUrl: 'dQw4w9WgXcQ', // YouTube video ID
    tutor: {
      id: '4',
      name: 'David Park',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      bio: 'Award-winning photographer specializing in portrait, landscape, and commercial photography. I teach both technical aspects of photography and artistic composition.',
      experience: '12+ years',
      rating: 4.7
    },
    duration: '35:20',
    views: 11200,
    likes: 950,
    shares: 210,
    category: 'Photography'
  },
  '8': {
    id: '8',
    title: 'Mindfulness Meditation for Beginners',
    description: 'Learn the fundamentals of mindfulness meditation in this beginner-friendly tutorial. Discover techniques to reduce stress, improve focus, and enhance overall wellbeing.',
    thumbnail: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=450&fit=crop',
    videoUrl: 'dQw4w9WgXcQ', // YouTube video ID
    tutor: {
      id: '5',
      name: 'Priya Sharma',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=150&h=150&fit=crop&crop=face',
      bio: 'Certified yoga instructor and mindfulness coach with over 15 years of practice. I teach various yoga styles and meditation techniques for stress reduction and mental clarity.',
      experience: '15+ years',
      rating: 5.0
    },
    duration: '20:10',
    views: 18500,
    likes: 1580,
    shares: 420,
    category: 'Wellness'
  }
};

// Related videos for each tutorial
const relatedVideosByTutorial: Record<string, RelatedVideo[]> = {
  // For academic tuition tutorials
  'nursery-3': [
    {
      id: 'class4-8',
      title: 'Middle School Mathematics: Fractions and Decimals',
      thumbnail: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=300&h=200&fit=crop',
      tutor: { id: '8', name: 'David Wilson' },
      duration: '22:45',
      views: 22400
    },
    {
      id: 'class9-above',
      title: 'Advanced Mathematics: Calculus Fundamentals',
      thumbnail: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=300&h=200&fit=crop',
      tutor: { id: '9', name: 'Sophia Chen' },
      duration: '35:15',
      views: 31200
    }
  ],
  'class4-8': [
    {
      id: 'nursery-3',
      title: 'Early Mathematics: Numbers and Counting',
      thumbnail: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=300&h=200&fit=crop',
      tutor: { id: '7', name: 'Emily Parker' },
      duration: '15:30',
      views: 18500
    },
    {
      id: 'class9-above',
      title: 'Advanced Mathematics: Calculus Fundamentals',
      thumbnail: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=300&h=200&fit=crop',
      tutor: { id: '9', name: 'Sophia Chen' },
      duration: '35:15',
      views: 31200
    }
  ],
  'class9-above': [
    {
      id: 'nursery-3',
      title: 'Early Mathematics: Numbers and Counting',
      thumbnail: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=300&h=200&fit=crop',
      tutor: { id: '7', name: 'Emily Parker' },
      duration: '15:30',
      views: 18500
    },
    {
      id: 'class4-8',
      title: 'Middle School Mathematics: Fractions and Decimals',
      thumbnail: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=300&h=200&fit=crop',
      tutor: { id: '8', name: 'David Wilson' },
      duration: '22:45',
      views: 22400
    }
  ],
  '0': [ // Related videos for our new tutorial
    {
      id: '5',
      title: 'Introduction to Python Programming',
      thumbnail: 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=300&h=200&fit=crop',
      tutor: { id: '2', name: 'Michael Chen' },
      duration: '22:30',
      views: 15400
    },
    {
      id: '11',
      title: 'Web Development Fundamentals',
      thumbnail: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=300&h=200&fit=crop',
      tutor: { id: '6', name: 'Vagish Bhardwaj' },
      duration: '18:45',
      views: 12800
    },
    {
      id: '12',
      title: 'System Design Interview Preparation',
      thumbnail: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=300&h=200&fit=crop',
      tutor: { id: '6', name: 'Vagish Bhardwaj' },
      duration: '25:20',
      views: 9500
    }
  ],
  '1': [
    {
      id: '2',
      title: 'Basic Guitar Chords Every Beginner Should Know',
      thumbnail: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=300&h=200&fit=crop',
      tutor: { id: '1', name: 'Sarah Johnson' },
      duration: '12:45',
      views: 8500
    },
    {
      id: '3',
      title: 'Guitar Fingerpicking Patterns Made Easy',
      thumbnail: 'https://images.unsplash.com/photo-1525201548942-d8732f6617a0?w=300&h=200&fit=crop',
      tutor: { id: '1', name: 'Sarah Johnson' },
      duration: '18:20',
      views: 6200
    },
    {
      id: '4',
      title: 'Reading Guitar Tabs for Beginners',
      thumbnail: 'https://images.unsplash.com/photo-1564186763535-ebb21ef5277f?w=300&h=200&fit=crop',
      tutor: { id: '1', name: 'Sarah Johnson' },
      duration: '10:15',
      views: 9800
    }
  ],
  '5': [
    {
      id: '9',
      title: 'Python Data Structures Explained',
      thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&h=200&fit=crop',
      tutor: { id: '2', name: 'Michael Chen' },
      duration: '24:30',
      views: 12300
    },
    {
      id: '10',
      title: 'Building Your First Web App with Python',
      thumbnail: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=300&h=200&fit=crop',
      tutor: { id: '2', name: 'Michael Chen' },
      duration: '32:15',
      views: 9700
    }
  ]
};

// Default related videos
const defaultRelatedVideos: RelatedVideo[] = [
  {
    id: 'nursery-3',
    title: 'Early Mathematics: Numbers and Counting',
    thumbnail: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=300&h=200&fit=crop',
    tutor: { id: '7', name: 'Emily Parker' },
    duration: '15:30',
    views: 18500
  },
  {
    id: 'class4-8',
    title: 'Middle School Mathematics: Fractions and Decimals',
    thumbnail: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=300&h=200&fit=crop',
    tutor: { id: '8', name: 'David Wilson' },
    duration: '22:45',
    views: 22400
  },
  {
    id: 'class9-above',
    title: 'Advanced Mathematics: Calculus Fundamentals',
    thumbnail: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=300&h=200&fit=crop',
    tutor: { id: '9', name: 'Sophia Chen' },
    duration: '35:15',
    views: 31200
  },
  {
    id: '5',
    title: 'Introduction to Python Programming',
    thumbnail: 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=300&h=200&fit=crop',
    tutor: { id: '2', name: 'Michael Chen' },
    duration: '22:30',
    views: 15400
  },
  {
    id: '6',
    title: 'Authentic Italian Pasta from Scratch',
    thumbnail: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=300&h=200&fit=crop',
    tutor: { id: '3', name: 'Emma Rodriguez' },
    duration: '28:15',
    views: 8700
  },
  {
    id: '7',
    title: 'Portrait Photography Masterclass',
    thumbnail: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=300&h=200&fit=crop',
    tutor: { id: '4', name: 'David Park' },
    duration: '35:20',
    views: 11200
  }
];

const VideoDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [video, setVideo] = useState<Video | null>(null);
  const [relatedVideos, setRelatedVideos] = useState<RelatedVideo[]>([]);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  useEffect(() => {
    // Get the video data based on ID
    const videoId = id || '1';
    const currentVideo = videoData[videoId];
    
    if (currentVideo) {
      setVideo(currentVideo);
      
      // Get related videos for this tutorial or use default related videos
      const related = relatedVideosByTutorial[videoId] || defaultRelatedVideos;
      setRelatedVideos(related);
    } else {
      // Fallback to default video if ID not found
      setVideo(videoData['1']);
      setRelatedVideos(defaultRelatedVideos);
    }
    
    // Reset video playing state when ID changes
    setIsVideoPlaying(false);
  }, [id]);

  const handlePlayVideo = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsVideoPlaying(true);
  };

  if (!video) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
      </div>
    );
  }

  // Extract YouTube video ID if it's a full URL
  let videoId = video.videoUrl;
  if (videoId.includes('youtube.com') || videoId.includes('youtu.be')) {
    const extractedId = extractYouTubeVideoId(videoId);
    if (extractedId) {
      videoId = extractedId;
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <Button
          variant="ghost"
          onClick={() => navigate(-1)}
          className="mb-6 hover:bg-accent/10 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </Button>

        {/* Video Player */}
        <div className="mb-8">
          <div
            id="video-container"
            className="relative w-full h-[450px] bg-muted rounded-lg overflow-hidden"
          >
            {!isVideoPlaying ? (
              <div 
                className="w-full h-full cursor-pointer group"
                onClick={handlePlayVideo}
              >
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/40 transition-colors">
                  <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play className="w-8 h-8 text-primary ml-1" fill="currentColor" />
                  </div>
                </div>
              </div>
            ) : (
              <iframe
                src={generateYouTubeEmbedUrl(videoId, true)}
                title={video.title}
                width="100%"
                height="100%"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            )}
          </div>
        </div>

        {/* Video Info */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">{video.title}</h1>
          <div className="flex items-center gap-6 mb-4">
              <div className="flex items-center gap-2">
                <Heart className="w-5 h-5 text-muted-foreground" />
                <span className="text-muted-foreground">{video.likes}</span>
              </div>
              <div className="flex items-center gap-2">
                <Share2 className="w-5 h-5 text-muted-foreground" />
                <span className="text-muted-foreground">{video.shares}</span>
              </div>
              <span className="text-sm text-muted-foreground">{video.category}</span>
            </div>
          <p className="text-muted-foreground">{video.description}</p>
        </div>

        {/* Related Tutorials */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Related Tutorials</h2>
          <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory">
            {relatedVideos.map((relatedVideo) => (
              <Card
                key={relatedVideo.id}
                className="flex-shrink-0 w-80 cursor-pointer hover:shadow-lg transition-shadow snap-start"
                onClick={() => navigate(`/tutorial/${relatedVideo.id}`)}
              >
                <CardContent className="p-0">
                  <div className="relative">
                    <img
                      src={relatedVideo.thumbnail}
                      alt={relatedVideo.title}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <div className="absolute bottom-2 right-2 bg-black/80 text-white px-2 py-1 rounded text-sm">
                      {relatedVideo.duration}
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold mb-2 line-clamp-2">{relatedVideo.title}</h3>
                    <p className="text-sm text-muted-foreground mb-1">{relatedVideo.tutor.name}</p>
                    <p className="text-xs text-muted-foreground">{relatedVideo.views.toLocaleString()} views</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* About Creator */}
        <div>
          <h2 className="text-2xl font-bold mb-6">About Creator</h2>
          <Card className="p-6">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-shrink-0">
                <img
                  src={video.tutor.avatar}
                  alt={video.tutor.name}
                  className="w-24 h-24 rounded-full object-cover"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2">{video.tutor.name}</h3>
                <p className="text-muted-foreground mb-4">{video.tutor.bio}</p>
                <div className="flex flex-wrap gap-4 mb-4">
                  <div>
                    <span className="font-semibold">Experience: </span>
                    <span className="text-muted-foreground">{video.tutor.experience}</span>
                  </div>
                  <div>
                    <span className="font-semibold">Rating: </span>
                    <span className="text-muted-foreground">{video.tutor.rating}/5</span>
                  </div>
                </div>
              </div>
              <div className="flex-shrink-0">
                <Button
                  onClick={() => navigate(`/instructor/${video.tutor.id}`)}
                  className="bg-secondary hover:bg-secondary/90 text-secondary-foreground"
                >
                  View Profile
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default VideoDetailPage;