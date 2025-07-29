
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/contexts/ThemeContext";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import VideoDetailPage from "./pages/tutorial/[id]";
import InstructorProfilePage from "./pages/instructor/[id]";
import SkillsPage from "./pages/skills";
import SkillDetailPage from "./pages/skills/[slug]";
import LoginPage from "./pages/auth/login";
import SignupPage from "./pages/auth/signup";
import TutorsPage from "./pages/tutors";
import AboutPage from "./pages/about";
import ContactPage from "./pages/contact";
import BecomeTutor from "./pages/become-tutor";
import ScrollToTop from "./components/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/tutorial/:id" element={<VideoDetailPage />} />
            <Route path="/instructor/:id" element={<InstructorProfilePage />} />
            <Route path="/skills" element={<SkillsPage />} />
            <Route path="/skills/:slug" element={<SkillDetailPage />} />
            <Route path="/auth/login" element={<LoginPage />} />
            <Route path="/auth/signup" element={<SignupPage />} />
            <Route path="/tutors" element={<TutorsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/become-tutor" element={<BecomeTutor />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
