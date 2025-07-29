import React, { useState, useEffect, useRef, KeyboardEvent } from 'react';
import styles from '@/styles/FoundersCarousel.module.css';

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
}

interface FoundersCarouselProps {
  founders: TeamMember[];
}

const FoundersCarousel: React.FC<FoundersCarouselProps> = ({ founders }) => {
  const [activeIndex, setActiveIndex] = useState(1); // Start with second item active (index 1)
  const carouselRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  // Disable intersection observer to prevent auto-scrolling
  // We'll only rely on button clicks for navigation

  // Scroll to card when activeIndex changes
  useEffect(() => {
    if (carouselRef.current && cardRefs.current[activeIndex]) {
      const card = cardRefs.current[activeIndex];
      if (card) {
        const scrollPosition = card.offsetLeft - (carouselRef.current.clientWidth / 2) + (card.clientWidth / 2);
        carouselRef.current.scrollTo({
          left: scrollPosition,
          behavior: 'smooth'
        });
      }
    }
  }, [activeIndex]);

  // Handle manual navigation - move only one card at a time
  const handleNavigation = (direction: 'prev' | 'next') => {
    if (direction === 'prev' && activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
    } else if (direction === 'next' && activeIndex < founders.length - 1) {
      setActiveIndex(activeIndex + 1);
    }
  };

  // Handle keyboard navigation
  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'ArrowLeft') {
      handleNavigation('prev');
    } else if (e.key === 'ArrowRight') {
      handleNavigation('next');
    }
  };

  // Get background color based on index for blob
  const getBlobColor = (index: number) => {
    const colors = [
      'from-primary-light to-primary-dark',
      'from-secondary-light to-secondary-dark',
      'from-accent-light to-accent-dark',
      'from-primary-light to-accent-dark',
      'from-secondary-light to-primary-dark'
    ];
    return colors[index % colors.length];
  };

  return (
    <div className="w-full relative">
      {/* Featured Team Member Info Panel - Aria live region for accessibility */}
      <div 
        className={styles.infoPanel}
        aria-live="polite"
      >
        <h3 className="text-3xl font-bold mb-2">{founders[activeIndex].name}</h3>
        <p className="text-xl text-primary mb-2">{founders[activeIndex].role}</p>
        <p className="text-muted-foreground">{founders[activeIndex].bio}</p>
      </div>

      {/* Navigation Controls */}
      <div className="flex justify-center gap-4 mb-8">
        <button 
          onClick={() => handleNavigation('prev')} 
          disabled={activeIndex === 0}
          className="w-12 h-12 rounded-full flex items-center justify-center border border-border hover:bg-accent/10 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Previous team member"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m15 18-6-6 6-6"/>
          </svg>
        </button>
        <button 
          onClick={() => handleNavigation('next')} 
          disabled={activeIndex === founders.length - 1}
          className="w-12 h-12 rounded-full flex items-center justify-center border border-border hover:bg-accent/10 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Next team member"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m9 18 6-6-6-6"/>
          </svg>
        </button>
      </div>

      {/* Carousel */}
      <div 
        ref={carouselRef}
        className={`${styles.carousel} ${styles.hideScrollbar}`}
        onKeyDown={handleKeyDown}
        tabIndex={0}
        role="region"
        aria-label="Team members carousel"
      >
        {/* Spacer for centering first card */}
        <div className="flex-shrink-0 w-[20%] md:w-[30%] lg:w-[40%]"></div>
        
        {founders.map((member, index) => (
          <div
            key={member.name}
            ref={el => cardRefs.current[index] = el}
            className={`${styles.cardWrapper} ${styles.founderCard} ${
              index === activeIndex ? 'opacity-100 z-10 ' + styles.active : 'opacity-70 ' + styles.scale85
            }`}
            onClick={() => setActiveIndex(index)}
            tabIndex={0}
            role="button"
            aria-label={`${member.name}, ${member.role}`}
            aria-selected={index === activeIndex}
          >
            <div className="relative">
              {/* Gradient Blob Background */}
              <div className={`${styles.founderBlob} bg-gradient-to-br ${getBlobColor(index)}`}></div>
              
              {/* Card with Portrait */}
              <div className={`relative overflow-hidden transition-all duration-300 ${
                index === activeIndex ? 'shadow-lg ring-2 ring-primary/20' : 'shadow-md'
              }`}>
                {/* Portrait */}
                <div 
                  className={styles.founderPortrait}
                  style={{ 
                    backgroundImage: `url(${member.image})`
                  }}
                ></div>
              </div>
            </div>
          </div>
        ))}
        
        {/* Spacer for centering last card */}
        <div className="flex-shrink-0 w-[20%] md:w-[30%] lg:w-[40%]"></div>
      </div>
    </div>
  );
};

export default FoundersCarousel; 