import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, User, MapPin, Car, Clock, Settings } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gradient-primary text-white shadow-primary">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="bg-white/20 p-2 rounded-lg">
            <Car className="h-6 w-6" />
          </div>
          <h1 className="text-xl font-bold">Joy's Ride</h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Button variant="ghost" className="text-white hover:bg-white/20">
            <MapPin className="h-4 w-4 mr-2" />
            Book a Ride
          </Button>
          <Button variant="ghost" className="text-white hover:bg-white/20">
            <Clock className="h-4 w-4 mr-2" />
            My Trips
          </Button>
          <Button variant="ghost" className="text-white hover:bg-white/20">
            <User className="h-4 w-4 mr-2" />
            Profile
          </Button>
        </nav>

        {/* Mobile Menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] bg-card">
            <div className="flex flex-col space-y-4 mt-8">
              <Button variant="ghost" className="justify-start" onClick={() => setIsOpen(false)}>
                <MapPin className="h-4 w-4 mr-2" />
                Book a Ride
              </Button>
              <Button variant="ghost" className="justify-start" onClick={() => setIsOpen(false)}>
                <Clock className="h-4 w-4 mr-2" />
                My Trips
              </Button>
              <Button variant="ghost" className="justify-start" onClick={() => setIsOpen(false)}>
                <User className="h-4 w-4 mr-2" />
                Profile
              </Button>
              <Button variant="ghost" className="justify-start" onClick={() => setIsOpen(false)}>
                <Settings className="h-4 w-4 mr-2" />
                Settings
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;