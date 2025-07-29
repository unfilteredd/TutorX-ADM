
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, LogOut } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { useNavigate, useLocation, Link } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { useAuth } from "@/contexts/AuthContext";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignupOpen, setIsSignupOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { user, logout } = useAuth();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const openLogin = () => {
    setIsLoginOpen(true);
    setIsSignupOpen(false);
  };

  const openSignup = () => {
    setIsSignupOpen(true);
    setIsLoginOpen(false);
  };

  const handleLoginClick = () => {
    openLogin();
  };

  const handleSignupClick = () => {
    openSignup();
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const switchToSignup = () => {
    setIsLoginOpen(false);
    setIsSignupOpen(true);
  };

  const switchToLogin = () => {
    setIsSignupOpen(false);
    setIsLoginOpen(true);
  };

  const navigateToFullPage = (path: string) => {
    setIsLoginOpen(false);
    setIsSignupOpen(false);
    navigate(path);
    window.scrollTo({ top: 0, behavior: "instant" });
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/20 shadow-card">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2 group cursor-pointer" onClick={() => {
            navigate('/');
            window.scrollTo({ top: 0, behavior: "instant" });
          }}>
            <div className="w-10 h-10 bg-hero-gradient rounded-xl flex items-center justify-center shadow-glow group-hover:scale-110 transition-transform duration-300">
              <span className="text-white font-bold text-lg">TX</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-medium text-muted-foreground -mb-1">ADM</span>
              <h1 className="text-2xl font-bold bg-hero-gradient bg-clip-text text-transparent">
                TutorX
              </h1>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`${isActive('/') ? 'text-primary' : 'text-muted-foreground'} hover:text-primary transition-colors duration-300 font-medium relative group`}
            >
              Home
              <span className={`absolute inset-x-0 -bottom-1 h-0.5 bg-primary transform ${isActive('/') ? 'scale-x-100' : 'scale-x-0'} group-hover:scale-x-100 transition-transform duration-300`}></span>
            </Link>
            <Link 
              to="/about" 
              className={`${isActive('/about') ? 'text-primary' : 'text-muted-foreground'} hover:text-primary transition-colors duration-300 font-medium relative group`}
            >
              About Us
              <span className={`absolute inset-x-0 -bottom-1 h-0.5 bg-primary transform ${isActive('/about') ? 'scale-x-100' : 'scale-x-0'} group-hover:scale-x-100 transition-transform duration-300`}></span>
            </Link>
            <Link 
              to="/skills" 
              className={`${isActive('/skills') ? 'text-primary' : 'text-muted-foreground'} hover:text-primary transition-colors duration-300 font-medium relative group`}
            >
              Skills
              <span className={`absolute inset-x-0 -bottom-1 h-0.5 bg-primary transform ${isActive('/skills') ? 'scale-x-100' : 'scale-x-0'} group-hover:scale-x-100 transition-transform duration-300`}></span>
            </Link>
            <Link 
              to="/contact" 
              className={`${isActive('/contact') ? 'text-primary' : 'text-muted-foreground'} hover:text-primary transition-colors duration-300 font-medium relative group`}
            >
              Contact Us
              <span className={`absolute inset-x-0 -bottom-1 h-0.5 bg-primary transform ${isActive('/contact') ? 'scale-x-100' : 'scale-x-0'} group-hover:scale-x-100 transition-transform duration-300`}></span>
            </Link>
          </nav>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center gap-4">
            {user ? (
              <>
                <span className="text-sm">Welcome, {user.name}</span>
                <Button variant="ghost" onClick={handleLogout}>
                  <LogOut className="h-4 w-4 mr-2" />
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Link to="/auth/login">
                  <Button variant="ghost">Login</Button>
                </Link>
                <Link to="/auth/signup">
                  <Button>Sign Up</Button>
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <button
              className="p-2 text-foreground hover:text-primary transition-colors duration-300"
              onClick={toggleMenu}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 top-16 bg-background/95 backdrop-blur-xl z-40">
          <nav className="container mx-auto px-4 py-8">
            <div className="flex flex-col space-y-6">
              <Link 
                to="/" 
                className={`text-xl font-medium ${isActive('/') ? 'text-primary' : 'text-muted-foreground'} hover:text-primary transition-colors duration-300 py-2`}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className={`text-xl font-medium ${isActive('/about') ? 'text-primary' : 'text-muted-foreground'} hover:text-primary transition-colors duration-300 py-2`}
              >
                About Us
              </Link>
              <Link 
                to="/skills" 
                className={`text-xl font-medium ${isActive('/skills') ? 'text-primary' : 'text-muted-foreground'} hover:text-primary transition-colors duration-300 py-2`}
              >
                Skills
              </Link>
              <Link 
                to="/contact" 
                className={`text-xl font-medium ${isActive('/contact') ? 'text-primary' : 'text-muted-foreground'} hover:text-primary transition-colors duration-300 py-2`}
              >
                Contact Us
              </Link>
              
              <div className="pt-6 border-t border-border/20 space-y-4">
                {user ? (
                  <>
                    <div className="text-lg py-2 font-medium">Welcome, {user.name}</div>
                    <Button 
                      variant="outline" 
                      className="w-full text-lg py-6 border-primary/30 text-foreground hover:bg-primary/10"
                      onClick={handleLogout}
                    >
                      <LogOut className="h-4 w-4 mr-2" />
                      Logout
                    </Button>
                  </>
                ) : (
                  <>
                    <Button 
                      variant="outline" 
                      className="w-full text-lg py-6 border-primary/30 text-foreground hover:bg-primary/10"
                      onClick={handleLoginClick}
                    >
                      Login
                    </Button>
                    <Button 
                      className="w-full text-lg py-6 bg-secondary hover:bg-secondary/90 text-secondary-foreground"
                      onClick={handleSignupClick}
                    >
                      Sign Up
                    </Button>
                  </>
                )}
              </div>
            </div>
          </nav>
        </div>
      )}

      {/* Login Dialog */}
      <Dialog open={isLoginOpen} onOpenChange={setIsLoginOpen}>
        <DialogContent className="sm:max-w-md bg-card-gradient border-border/20 backdrop-blur-sm">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold bg-hero-gradient bg-clip-text text-transparent">
              Welcome Back
            </DialogTitle>
            <DialogDescription className="text-muted-foreground">
              Sign in to your TutorX account
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">Email</label>
              <input
                id="email"
                type="email"
                placeholder="your.email@example.com"
                className="w-full px-3 py-2 border border-border bg-background/50 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="text-sm font-medium">Password</label>
                <a href="#" className="text-xs text-primary hover:underline">Forgot password?</a>
              </div>
              <input
                id="password"
                type="password"
                placeholder="••••••••"
                className="w-full px-3 py-2 border border-border bg-background/50 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>
          <DialogFooter className="flex-col sm:flex-col gap-2">
            <Button
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
              onClick={() => navigateToFullPage('/auth/login')}
            >
              Sign In
            </Button>
            <div className="text-center text-sm text-muted-foreground mt-2">
              Don't have an account?{" "}
              <button onClick={switchToSignup} className="text-primary hover:underline">
                Sign up
              </button>
            </div>
            <div className="text-center text-xs text-muted-foreground mt-2">
              <button onClick={() => navigateToFullPage('/auth/login')} className="hover:underline">
                Open full login page
              </button>
            </div>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Signup Dialog */}
      <Dialog open={isSignupOpen} onOpenChange={setIsSignupOpen}>
        <DialogContent className="sm:max-w-md bg-card-gradient border-border/20 backdrop-blur-sm">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold bg-hero-gradient bg-clip-text text-transparent">
              Create Account
            </DialogTitle>
            <DialogDescription className="text-muted-foreground">
              Join TutorX to start your learning journey
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium">Full Name</label>
              <input
                id="name"
                type="text"
                placeholder="John Doe"
                className="w-full px-3 py-2 border border-border bg-background/50 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="signup-email" className="text-sm font-medium">Email</label>
              <input
                id="signup-email"
                type="email"
                placeholder="your.email@example.com"
                className="w-full px-3 py-2 border border-border bg-background/50 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="signup-password" className="text-sm font-medium">Password</label>
              <input
                id="signup-password"
                type="password"
                placeholder="••••••••"
                className="w-full px-3 py-2 border border-border bg-background/50 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>
          <DialogFooter className="flex-col sm:flex-col gap-2">
            <Button
              className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground"
              onClick={() => navigateToFullPage('/auth/signup')}
            >
              Create Account
            </Button>
            <div className="text-center text-sm text-muted-foreground mt-2">
              Already have an account?{" "}
              <button onClick={switchToLogin} className="text-primary hover:underline">
                Sign in
              </button>
            </div>
            <div className="text-center text-xs text-muted-foreground mt-2">
              <button onClick={() => navigateToFullPage('/auth/signup')} className="hover:underline">
                Open full signup page
              </button>
            </div>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </header>
  );
};

export default Header;