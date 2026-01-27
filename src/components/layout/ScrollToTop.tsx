import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * ScrollToTop component
 *
 * This component listens for route changes and automatically scrolls
 * the window to the top of the page whenever the pathname changes.
 *
 * This is necessary in React SPAs because React Router does not trigger
 * a full page reload, so the browser preserves the scroll position.
 *
 * Usage: Mount once in App.tsx inside <Router> but above <Routes>
 */
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
