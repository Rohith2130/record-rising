import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Monitor, Smartphone, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import dashboardImage from "@/assets/dashboard-mockup.jpg";

const Dashboard = () => {
  return (
    <section id="dashboard" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <Badge variant="outline" className="border-secondary/20 text-secondary">
            Platform Preview
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold">
            Intuitive Dashboard for
            <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
              {" "}Every User
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Clean, modern interface designed for students, faculty, and administrators 
            with role-based access and personalized experiences.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="absolute inset-0 gradient-primary rounded-2xl blur-2xl opacity-10"></div>
            <div className="relative rounded-2xl overflow-hidden shadow-feature border border-card-border">
              <img 
                src={dashboardImage} 
                alt="Smart Student Hub Dashboard Interface" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
          
          <div className="space-y-8 order-1 lg:order-2">
            <div className="space-y-6">
              <Card className="gradient-card shadow-card border-card-border">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="p-2 rounded-lg bg-success/10">
                      <Monitor className="h-5 w-5 text-success" />
                    </div>
                    <CardTitle className="text-lg">Student Dashboard</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Track achievements, view progress analytics, manage portfolios, 
                    and connect with alumni mentors.
                  </CardDescription>
                </CardContent>
              </Card>
              
              <Card className="gradient-card shadow-card border-card-border">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Smartphone className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle className="text-lg">Faculty Panel</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Approve student activities, generate reports, monitor class progress, 
                    and provide mentorship insights.
                  </CardDescription>
                </CardContent>
              </Card>
              
              <Card className="gradient-card shadow-card border-card-border">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="p-2 rounded-lg bg-secondary/10">
                      <ArrowRight className="h-5 w-5 text-secondary" />
                    </div>
                    <CardTitle className="text-lg">Admin Console</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Institution-wide analytics, compliance reporting, integration management, 
                    and system administration.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
            
            <Link to="/dashboard">
              <Button size="lg" className="gradient-primary shadow-hero w-full sm:w-auto">
                Explore Dashboard Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;