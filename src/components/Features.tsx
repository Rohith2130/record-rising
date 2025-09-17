import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  BarChart3, 
  Shield, 
  Zap, 
  Users, 
  FileText, 
  Award,
  Network,
  Brain,
  CheckCircle
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: BarChart3,
      title: "Dynamic Student Dashboard",
      description: "Real-time updates on academic performance, attendance, and credit-based activities with intuitive visualizations.",
      badge: "Core Feature"
    },
    {
      icon: Shield,
      title: "Faculty Approval Panel",
      description: "Maintain credibility with faculty verification and approval workflows for all student achievements.",
      badge: "Verification"
    },
    {
      icon: FileText,
      title: "Auto-Generated Portfolio",
      description: "Downloadable and shareable verified student portfolios in PDF or web link format.",
      badge: "Portfolio"
    },
    {
      icon: Zap,
      title: "Activity Tracker",
      description: "Upload and validate participation in seminars, conferences, online courses, internships, and extracurriculars.",
      badge: "Tracking"
    },
    {
      icon: Network,
      title: "Cross-Institutional Recognition",
      description: "Universal student ID supporting inter-college collaboration and seamless credit transfers.",
      badge: "Innovation"
    },
    {
      icon: Users,
      title: "Alumni Connect & Endorsements",
      description: "LinkedIn-style endorsements from alumni to build credibility and networking opportunities.",
      badge: "Networking"
    },
    {
      icon: Brain,
      title: "AI-Powered Career Recommendations",
      description: "Personalized career paths, certifications, and internship recommendations based on achievements.",
      badge: "AI-Powered"
    },
    {
      icon: Award,
      title: "Analytics & Reporting",
      description: "Comprehensive reports for NAAC, AICTE, NIRF compliance and institutional evaluations.",
      badge: "Compliance"
    },
    {
      icon: CheckCircle,
      title: "Integration Support",
      description: "Seamless integration with existing LMS, ERP, and digital university platforms.",
      badge: "Integration"
    }
  ];

  return (
    <section id="features" className="responsive-section bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center responsive-spacing mb-12 lg:mb-16">
          <Badge variant="outline" className="border-primary/20 text-primary">
            Platform Features
          </Badge>
          <h2 className="font-bold">
            Everything You Need for
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              {" "}Student Success
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive tools designed to track, verify, and showcase student achievements 
            throughout their academic journey.
          </p>
        </div>
        
        <div className="card-grid">
          {features.map((feature, index) => (
            <Card key={index} className="gradient-card shadow-card border-card-border hover:shadow-feature transition-all duration-300 group">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;