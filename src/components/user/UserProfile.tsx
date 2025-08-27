import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Star, 
  Shield,
  Camera,
  Edit3,
  CreditCard,
  Bell
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const UserProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: "Alex Johnson",
    email: "alex.johnson@email.com",
    phone: "+1 (555) 123-4567",
    location: "New York, NY",
    avatar: "",
    rating: 4.8,
    totalRides: 47,
    memberSince: "March 2023"
  });

  const { toast } = useToast();

  const handleSave = () => {
    setIsEditing(false);
    toast({
      title: "Profile Updated",
      description: "Your profile has been successfully updated.",
    });
  };

  const handleImageUpload = () => {
    toast({
      title: "Photo Upload",
      description: "Photo upload functionality requires backend connection.",
      variant: "destructive",
    });
  };

  return (
    <div className="space-y-6">
      {/* Profile Header */}
      <Card className="shadow-card">
        <CardContent className="pt-6">
          <div className="flex items-center space-x-6">
            <div className="relative">
              <Avatar className="h-24 w-24">
                <AvatarImage src={profile.avatar} alt={profile.name} />
                <AvatarFallback className="bg-primary text-primary-foreground text-xl">
                  {profile.name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              <Button
                size="icon"
                className="absolute -bottom-2 -right-2 h-8 w-8 rounded-full bg-primary"
                onClick={handleImageUpload}
              >
                <Camera className="h-4 w-4" />
              </Button>
            </div>
            
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold">{profile.name}</h2>
                  <div className="flex items-center space-x-2 mt-1">
                    <Star className="h-4 w-4 fill-current text-accent-foreground" />
                    <span className="font-medium">{profile.rating}</span>
                    <span className="text-muted-foreground">• {profile.totalRides} rides</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">
                    Member since {profile.memberSince}
                  </p>
                </div>
                <Button
                  variant="outline"
                  onClick={() => setIsEditing(!isEditing)}
                >
                  <Edit3 className="h-4 w-4 mr-2" />
                  {isEditing ? 'Cancel' : 'Edit'}
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Profile Details */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="flex items-center text-primary">
            <User className="h-5 w-5 mr-2" />
            Personal Information
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-muted-foreground">Full Name</label>
              {isEditing ? (
                <Input
                  value={profile.name}
                  onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                />
              ) : (
                <p className="p-2 bg-muted/30 rounded-md">{profile.name}</p>
              )}
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-muted-foreground">Email</label>
              {isEditing ? (
                <Input
                  type="email"
                  value={profile.email}
                  onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                />
              ) : (
                <div className="flex items-center p-2 bg-muted/30 rounded-md">
                  <Mail className="h-4 w-4 mr-2 text-muted-foreground" />
                  {profile.email}
                </div>
              )}
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-muted-foreground">Phone</label>
              {isEditing ? (
                <Input
                  value={profile.phone}
                  onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
                />
              ) : (
                <div className="flex items-center p-2 bg-muted/30 rounded-md">
                  <Phone className="h-4 w-4 mr-2 text-muted-foreground" />
                  {profile.phone}
                </div>
              )}
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-muted-foreground">Location</label>
              {isEditing ? (
                <Input
                  value={profile.location}
                  onChange={(e) => setProfile({ ...profile, location: e.target.value })}
                />
              ) : (
                <div className="flex items-center p-2 bg-muted/30 rounded-md">
                  <MapPin className="h-4 w-4 mr-2 text-muted-foreground" />
                  {profile.location}
                </div>
              )}
            </div>
          </div>
          
          {isEditing && (
            <div className="flex justify-end space-x-2">
              <Button variant="outline" onClick={() => setIsEditing(false)}>
                Cancel
              </Button>
              <Button onClick={handleSave} className="bg-gradient-primary">
                Save Changes
              </Button>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="shadow-card">
          <CardContent className="pt-4 text-center">
            <div className="text-2xl font-bold text-primary">{profile.totalRides}</div>
            <p className="text-sm text-muted-foreground">Total Rides</p>
          </CardContent>
        </Card>
        
        <Card className="shadow-card">
          <CardContent className="pt-4 text-center">
            <div className="text-2xl font-bold text-primary">{profile.rating}</div>
            <p className="text-sm text-muted-foreground">Rating</p>
          </CardContent>
        </Card>
        
        <Card className="shadow-card">
          <CardContent className="pt-4 text-center">
            <div className="text-2xl font-bold text-success">$847</div>
            <p className="text-sm text-muted-foreground">Total Saved</p>
          </CardContent>
        </Card>
        
        <Card className="shadow-card">
          <CardContent className="pt-4 text-center">
            <Badge className="bg-accent text-accent-foreground">
              <Shield className="h-3 w-3 mr-1" />
              Verified
            </Badge>
            <p className="text-sm text-muted-foreground mt-1">Status</p>
          </CardContent>
        </Card>
      </div>

      {/* Account Settings */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="text-primary">Account Settings</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
            <div className="flex items-center space-x-3">
              <CreditCard className="h-5 w-5 text-muted-foreground" />
              <div>
                <p className="font-medium">Payment Methods</p>
                <p className="text-sm text-muted-foreground">Manage cards and payment options</p>
              </div>
            </div>
            <Button variant="ghost" size="sm">
              Manage
            </Button>
          </div>
          
          <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
            <div className="flex items-center space-x-3">
              <Bell className="h-5 w-5 text-muted-foreground" />
              <div>
                <p className="font-medium">Notifications</p>
                <p className="text-sm text-muted-foreground">Control your notification preferences</p>
              </div>
            </div>
            <Button variant="ghost" size="sm">
              Settings
            </Button>
          </div>
          
          <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
            <div className="flex items-center space-x-3">
              <Shield className="h-5 w-5 text-muted-foreground" />
              <div>
                <p className="font-medium">Privacy & Security</p>
                <p className="text-sm text-muted-foreground">Manage your privacy settings</p>
              </div>
            </div>
            <Button variant="ghost" size="sm">
              Configure
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default UserProfile;