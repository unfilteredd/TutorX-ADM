import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * ScrollToTop is a utility component that scrolls the window to the top
 * whenever the route (pathname) changes.
 * It should be placed inside the Router component in the component tree.
 */
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top when the route changes
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant" // Use "instant" instead of "smooth" to avoid visual issues
    });
  }, [pathname]);

  return null; // This component doesn't render anything
};

export default ScrollToTop; 