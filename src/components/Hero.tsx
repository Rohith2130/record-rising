import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Users, Award, TrendingUp } from "lucide-react";
import heroImage from "@/assets/hero-students.jpg";

const Hero = () => {
  return (
    <section className="pt-24 pb-16 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge variant="secondary" className="bg-secondary/10 text-secondary hover:bg-secondary/20">
                🚀 Transforming Higher Education
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Centralized
                <span className="bg-gradient-to-r from-primary via-secondary to-success bg-clip-text text-transparent">
                  {" "}Digital Platform
                </span>
                <br />
                for Student Excellence
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Empower students with a comprehensive digital portfolio that tracks academic achievements, 
                extracurricular activities, and career growth from day one through graduation.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="gradient-primary shadow-hero group">
                Start Your Journey
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="border-primary/20 hover:bg-primary/5">
                Watch Demo
              </Button>
            </div>
            
            <div className="flex items-center space-x-8 pt-4">
              <div className="flex items-center space-x-2">
                <Users className="h-5 w-5 text-primary" />
                <span className="text-sm text-muted-foreground">50,000+ Students</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="h-5 w-5 text-success" />
                <span className="text-sm text-muted-foreground">500+ Institutions</span>
              </div>
              <div className="flex items-center space-x-2">
                <TrendingUp className="h-5 w-5 text-secondary" />
                <span className="text-sm text-muted-foreground">95% Placement Rate</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 gradient-hero rounded-3xl blur-3xl opacity-20 animate-pulse"></div>
            <div className="relative rounded-3xl overflow-hidden shadow-hero">
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