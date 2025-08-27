import DriverDashboard from "@/components/driver/DriverDashboard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Car, Users, TrendingUp, Award } from "lucide-react";

const DriverMode = () => {
  const benefits = [
    {
      icon: TrendingUp,
      title: "Flexible Earnings",
      description: "Earn money on your own schedule"
    },
    {
      icon: Users,
      title: "Growing Community",
      description: "Join thousands of Joy's Ride drivers"
    },
    {
      icon: Award,
      title: "Driver Rewards",
      description: "Earn bonuses and rewards for excellent service"
    },
    {
      icon: Car,
      title: "Vehicle Support",
      description: "Get help with vehicle maintenance and insurance"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center space-x-2">
          <h1 className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            Driver Dashboard
          </h1>
          <Badge className="bg-success text-success-foreground">
            Pro Driver
          </Badge>
        </div>
        <p className="text-xl text-muted-foreground">
          Drive with Joy's Ride and earn on your terms
        </p>
      </div>

      <div className="grid lg:grid-cols-4 gap-8">
        {/* Driver Dashboard */}
        <div className="lg:col-span-3">
          <DriverDashboard />
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Weekly Goal */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="text-primary text-lg">Weekly Goal</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Progress</span>
                  <span className="text-sm font-medium">72%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-gradient-primary h-2 rounded-full" style={{ width: '72%' }} />
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-primary">$346</p>
                  <p className="text-sm text-muted-foreground">of $480 goal</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Driver Benefits */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="text-primary text-lg">Driver Benefits</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="bg-primary/10 p-1.5 rounded">
                      <IconComponent className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium text-sm">{benefit.title}</h4>
                      <p className="text-xs text-muted-foreground">{benefit.description}</p>
                    </div>
                  </div>
                );
              })}
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="text-primary text-lg">Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button variant="outline" className="w-full justify-start" size="sm">
                Vehicle Inspection
              </Button>
              <Button variant="outline" className="w-full justify-start" size="sm">
                Weekly Summary
              </Button>
              <Button variant="outline" className="w-full justify-start" size="sm">
                Driver Support
              </Button>
              <Button variant="outline" className="w-full justify-start" size="sm">
                Refer a Driver
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default DriverMode;