import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  GraduationCap, 
  ArrowLeft, 
  Award, 
  BookOpen, 
  Users, 
  TrendingUp,
  Calendar,
  FileText,
  Star,
  Target
} from "lucide-react";
import { Link } from "react-router-dom";

const DashboardPage = () => {
  const achievements = [
    { title: "Academic Excellence Award", date: "Dec 2024", verified: true },
    { title: "Hackathon Winner", date: "Nov 2024", verified: true },
    { title: "Volunteer Certificate", date: "Oct 2024", verified: false },
  ];

  const activities = [
    { name: "Research Project", progress: 85, color: "bg-primary" },
    { name: "Internship Program", progress: 60, color: "bg-secondary" },
    { name: "Community Service", progress: 45, color: "bg-success" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-secondary/5 to-success/5">
      {/* Header */}
      <header className="bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
              <ArrowLeft className="h-5 w-5" />
            </Link>
            <div className="flex items-center space-x-2">
              <div className="p-2 rounded-lg gradient-primary">
                <GraduationCap className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-primary">Smart Student Hub</span>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <Badge variant="outline" className="border-success/20 text-success">
              Student Dashboard
            </Badge>
            <Avatar>
              <AvatarImage src="/placeholder.svg" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Welcome back, John!</h1>
          <p className="text-muted-foreground">Track your academic journey and achievements</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Stats Cards */}
            <div className="grid md:grid-cols-2 gap-4">
              <Card className="gradient-card shadow-card border-card-border">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Achievements</CardTitle>
                  <Award className="h-4 w-4 text-primary" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">24</div>
                  <p className="text-xs text-muted-foreground">+3 this month</p>
                </CardContent>
              </Card>
              
              <Card className="gradient-card shadow-card border-card-border">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Course Progress</CardTitle>
                  <BookOpen className="h-4 w-4 text-secondary" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">78%</div>
                  <p className="text-xs text-muted-foreground">Above average</p>
                </CardContent>
              </Card>
            </div>

            {/* Activities Progress */}
            <Card className="gradient-card shadow-card border-card-border">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Target className="h-5 w-5 text-primary" />
                  <span>Current Activities</span>
                </CardTitle>
                <CardDescription>Track your ongoing projects and commitments</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {activities.map((activity, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="font-medium">{activity.name}</span>
                      <span className="text-muted-foreground">{activity.progress}%</span>
                    </div>
                    <Progress value={activity.progress} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Recent Achievements */}
            <Card className="gradient-card shadow-card border-card-border">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Star className="h-5 w-5 text-success" />
                  <span>Recent Achievements</span>
                </CardTitle>
                <CardDescription>Your latest verified accomplishments</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-muted/30 border border-border">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 rounded-lg bg-success/10">
                        <Award className="h-4 w-4 text-success" />
                      </div>
                      <div>
                        <p className="font-medium text-sm">{achievement.title}</p>
                        <p className="text-xs text-muted-foreground">{achievement.date}</p>
                      </div>
                    </div>
                    <Badge variant={achievement.verified ? "default" : "secondary"} className="text-xs">
                      {achievement.verified ? "Verified" : "Pending"}
                    </Badge>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <Card className="gradient-card shadow-card border-card-border">
              <CardHeader>
                <CardTitle className="text-lg">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full gradient-primary" size="sm">
                  <FileText className="mr-2 h-4 w-4" />
                  Add Achievement
                </Button>
                <Button variant="outline" className="w-full border-secondary/20 hover:bg-secondary/5" size="sm">
                  <Calendar className="mr-2 h-4 w-4" />
                  View Calendar
                </Button>
                <Button variant="outline" className="w-full border-primary/20 hover:bg-primary/5" size="sm">
                  <Users className="mr-2 h-4 w-4" />
                  Connect Alumni
                </Button>
              </CardContent>
            </Card>

            {/* Profile Completeness */}
            <Card className="gradient-card shadow-card border-card-border">
              <CardHeader>
                <CardTitle className="text-lg">Profile Strength</CardTitle>
                <CardDescription>Complete your profile to increase visibility</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">85%</div>
                  <Progress value={85} className="mt-2" />
                </div>
                <div className="text-sm space-y-2">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Basic Info</span>
                    <span className="text-success">✓</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Skills</span>
                    <span className="text-success">✓</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Portfolio</span>
                    <span className="text-orange-500">15%</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Upcoming Events */}
            <Card className="gradient-card shadow-card border-card-border">
              <CardHeader>
                <CardTitle className="text-lg">Upcoming Events</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-2 text-sm">
                  <div className="p-2 rounded bg-primary/5 border border-primary/20">
                    <p className="font-medium">Tech Conference 2024</p>
                    <p className="text-xs text-muted-foreground">Dec 15, 2024</p>
                  </div>
                  <div className="p-2 rounded bg-secondary/5 border border-secondary/20">
                    <p className="font-medium">Career Fair</p>
                    <p className="text-xs text-muted-foreground">Dec 20, 2024</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;