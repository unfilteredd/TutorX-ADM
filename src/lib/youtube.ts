/**
 * YouTube utility functions
 */

/**
 * Extract YouTube video ID from various YouTube URL formats
 * @param url YouTube URL or embed code
 * @returns YouTube video ID
 */
export const extractYouTubeVideoId = (url: string): string | null => {
  // Handle iframe embed code
  const iframeMatch = url.match(/youtube\.com\/embed\/([^"&?\/\s]+)/);
  if (iframeMatch && iframeMatch[1]) {
    return iframeMatch[1];
  }
  
  // Handle standard YouTube URLs
  const standardMatch = url.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/);
  if (standardMatch && standardMatch[1]) {
    return standardMatch[1];
  }
  
  return null;
};

/**
 * Generate YouTube embed URL from video ID
 * @param videoId YouTube video ID
 * @param autoplay Whether to autoplay the video
 * @returns YouTube embed URL
 */
export const generateYouTubeEmbedUrl = (videoId: string, autoplay: boolean = false): string => {
  const params = new URLSearchParams();
  
  if (autoplay) {
    params.append('autoplay', '1');
  }
  
  // Add additional parameters for better embedding
  params.append('si', 'bVMKPwFiup0HnIeq');
  params.append('rel', '0'); // Don't show related videos
  
  const queryString = params.toString();
  return `https://www.youtube.com/embed/${videoId}${queryString ? `?${queryString}` : ''}`;
}; 