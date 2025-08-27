import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Car, MapPin, Star, Shield, Clock, Users } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center space-y-8">
        <div className="space-y-4">
          <h1 className="text-6xl font-bold bg-gradient-hero bg-clip-text text-transparent">
            Joy's Ride
          </h1>
          <p className="text-2xl text-muted-foreground mb-4">
            Have a Joyous trip, Stay happy with Joy's ride
          </p>
          <p className="text-lg text-muted-foreground">
            Quick, affordable, and reliable transportation
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/book">
            <Button size="lg" className="bg-gradient-primary text-lg px-8 py-6 shadow-button">
              <MapPin className="h-5 w-5 mr-2" />
              Book a Ride
            </Button>
          </Link>
          <Link to="/driver">
            <Button variant="outline" size="lg" className="text-lg px-8 py-6">
              <Car className="h-5 w-5 mr-2" />
              Drive with Us
            </Button>
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className="grid md:grid-cols-3 gap-8">
        <Card className="shadow-card text-center">
          <CardContent className="pt-8 pb-8">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Quick Booking</h3>
            <p className="text-muted-foreground">Get a ride in minutes with our fast matching system</p>
          </CardContent>
        </Card>

        <Card className="shadow-card text-center">
          <CardContent className="pt-8 pb-8">
            <div className="bg-success/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="h-8 w-8 text-success" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Safe & Secure</h3>
            <p className="text-muted-foreground">All drivers verified, GPS tracking, and 24/7 support</p>
          </CardContent>
        </Card>

        <Card className="shadow-card text-center">
          <CardContent className="pt-8 pb-8">
            <div className="bg-accent/50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Star className="h-8 w-8 text-accent-foreground" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Top Rated</h3>
            <p className="text-muted-foreground">Highly rated drivers committed to your comfort</p>
          </CardContent>
        </Card>
      </section>

      {/* Stats */}
      <section className="bg-gradient-primary rounded-2xl p-8 text-white text-center">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="text-4xl font-bold mb-2">50K+</div>
            <div className="text-white/80">Happy Riders</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">5K+</div>
            <div className="text-white/80">Trusted Drivers</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">4.9★</div>
            <div className="text-white/80">Average Rating</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
