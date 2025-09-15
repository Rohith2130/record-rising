import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Target, 
  Briefcase, 
  GraduationCap, 
  TrendingUp, 
  Users, 
  FileCheck,
  Building,
  Award
} from "lucide-react";

const Benefits = () => {
  const studentBenefits = [
    {
      icon: Target,
      title: "Holistic Digital Profile",
      description: "Build a comprehensive, verified portfolio from day one of college"
    },
    {
      icon: Briefcase,
      title: "Career Advancement",
      description: "Better prepared for placements, fellowships, and postgraduate admissions"
    },
    {
      icon: GraduationCap,
      title: "Skill Recognition",
      description: "Get credit for all your activities, not just academic grades"
    },
    {
      icon: TrendingUp,
      title: "Personal Growth Tracking",
      description: "Visualize your development and identify areas for improvement"
    }
  ];

  const facultyBenefits = [
    {
      icon: Users,
      title: "Enhanced Mentoring",
      description: "Real-time student data enables better guidance and support"
    },
    {
      icon: FileCheck,
      title: "Streamlined Approval",
      description: "Efficient verification workflow for student achievements"
    },
    {
      icon: Award,
      title: "Performance Analytics",
      description: "Track class-wide progress and identify high performers"
    },
    {
      icon: TrendingUp,
      title: "Data-Driven Insights",
      description: "Make informed decisions based on comprehensive student data"
    }
  ];

  const institutionBenefits = [
    {
      icon: Building,
      title: "Accreditation Ready",
      description: "Simplified compliance for NAAC, AICTE, and NIRF evaluations"
    },
    {
      icon: FileCheck,
      title: "Reduced Paperwork",
      description: "Digital transformation eliminates manual record keeping"
    },
    {
      icon: TrendingUp,
      title: "Institutional Analytics",
      description: "Comprehensive insights for strategic planning and improvement"
    },
    {
      icon: Users,
      title: "Enhanced Reputation",
      description: "Modern platform attracts quality students and faculty"
    }
  ];

  const BenefitCard = ({ icon: Icon, title, description }: { icon: any, title: string, description: string }) => (
    <Card className="gradient-card shadow-card border-card-border hover:shadow-feature transition-all duration-300 group">
      <CardContent className="p-6">
        <div className="flex items-start space-x-4">
          <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
            <Icon className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-2">{title}</h3>
            <p className="text-muted-foreground leading-relaxed">{description}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <section id="benefits" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <Badge variant="outline" className="border-success/20 text-success">
            Impact & Benefits
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold">
            Transforming Education for
            <span className="bg-gradient-to-r from-success to-primary bg-clip-text text-transparent">
              {" "}Everyone
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Smart Student Hub creates value for all stakeholders in the higher education ecosystem.
          </p>
        </div>
        
        <div className="space-y-16">
          {/* Students Benefits */}
          <div>
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-primary mb-2">For Students</h3>
              <p className="text-muted-foreground">Empower your academic and career journey</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {studentBenefits.map((benefit, index) => (
                <BenefitCard key={index} {...benefit} />
              ))}
            </div>
          </div>
          
          {/* Faculty Benefits */}
          <div>
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-secondary mb-2">For Faculty</h3>
              <p className="text-muted-foreground">Enhance teaching and mentoring capabilities</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {facultyBenefits.map((benefit, index) => (
                <BenefitCard key={index} {...benefit} />
              ))}
            </div>
          </div>
          
          {/* Institution Benefits */}
          <div>
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-success mb-2">For Institutions</h3>
              <p className="text-muted-foreground">Modernize operations and improve outcomes</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {institutionBenefits.map((benefit, index) => (
                <BenefitCard key={index} {...benefit} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;