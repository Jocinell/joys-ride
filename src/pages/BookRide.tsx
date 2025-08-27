import BookingForm from "@/components/ride/BookingForm";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Zap, Shield, Clock } from "lucide-react";

const BookRide = () => {
  const features = [
    {
      icon: Zap,
      title: "Quick Booking",
      description: "Book a ride in seconds with our easy-to-use app"
    },
    {
      icon: Shield,
      title: "Safe & Secure",
      description: "All drivers are verified and vehicles are insured"
    },
    {
      icon: Clock,
      title: "24/7 Service",
      description: "Available around the clock for your convenience"
    },
    {
      icon: MapPin,
      title: "GPS Tracking",
      description: "Real-time tracking for peace of mind"
    }
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Hero Section */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
          Book Your Joy's Ride
        </h1>
        <p className="text-xl text-muted-foreground">
          Have a Joyous trip, Stay happy with Joy's ride
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Booking Form */}
        <div className="lg:col-span-2">
          <BookingForm />
        </div>

        {/* Features & Info */}
        <div className="space-y-6">
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="text-primary">Why Choose Joy's Ride?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="bg-primary/10 p-2 rounded-lg">
                      <IconComponent className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </CardContent>
          </Card>

          <Card className="shadow-card bg-gradient-accent">
            <CardContent className="pt-6">
              <div className="text-center">
                <h3 className="font-bold text-lg mb-2">First Ride Special!</h3>
                <p className="text-sm mb-4">Get 20% off your first ride with Joy's Ride</p>
                <div className="bg-white/80 rounded-lg p-3">
                  <code className="font-mono font-bold text-primary">JOYFIRST20</code>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default BookRide;