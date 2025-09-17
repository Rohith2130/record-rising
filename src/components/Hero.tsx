import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Users, Award, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-students.jpg";

const Hero = () => {
  return (
    <section className="hero-content overflow-hidden">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="responsive-spacing order-2 lg:order-1">
            <div className="space-y-4 sm:space-y-6">
              <Badge variant="secondary" className="bg-secondary/10 text-secondary hover:bg-secondary/20">
                🚀 Transforming Higher Education
              </Badge>
              <h1 className="font-bold leading-tight">
                Centralized
                <span className="bg-gradient-to-r from-primary via-secondary to-success bg-clip-text text-transparent">
                  {" "}Digital Platform
                </span>
                <br />
                for Student Excellence
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl">
                Empower students with a comprehensive digital portfolio that tracks academic achievements, 
                extracurricular activities, and career growth from day one through graduation.
              </p>
            </div>
            
            <div className="responsive-button-group">
              <Link to="/dashboard">
                <Button size="lg" className="gradient-primary shadow-hero group w-full sm:w-auto">
                  Start Your Journey
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="border-primary/20 hover:bg-primary/5 w-full sm:w-auto" onClick={() => {
                const element = document.getElementById('dashboard');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}>
                Watch Demo
              </Button>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 pt-6 sm:pt-8">
              <div className="flex items-center space-x-2">
                <Users className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-sm text-muted-foreground">50,000+ Students</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="h-5 w-5 text-success flex-shrink-0" />
                <span className="text-sm text-muted-foreground">500+ Institutions</span>
              </div>
              <div className="flex items-center space-x-2">
                <TrendingUp className="h-5 w-5 text-secondary flex-shrink-0" />
                <span className="text-sm text-muted-foreground">95% Placement Rate</span>
              </div>
            </div>
          </div>
          
          <div className="relative order-1 lg:order-2">
            <div className="absolute inset-0 gradient-hero rounded-2xl lg:rounded-3xl blur-3xl opacity-20 animate-pulse"></div>
            <div className="image-container shadow-hero">
              <img 
                src={heroImage} 
                alt="Students using Smart Student Hub platform" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;