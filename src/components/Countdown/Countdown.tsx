"use client";
import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Share2 } from "lucide-react";
import { CrossLines } from "../Lines/CrossLines";
import { Line } from "../Doodles/Line";
import Link from "next/link";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export function Countdown() {
  // Set event date to 30 days from now for demo purposes
  const eventDate = new Date("2025-09-18");
  eventDate.setDate(eventDate.getDate());
  eventDate.setHours(19, 0, 0, 0); // 7:00 PM

  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const calculateTimeLeft = () => {
      const difference = eventDate.getTime() - new Date().getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: "Ascol Hackfest 2025 - Don't Miss Out!",
        text: "Join us for the biggest event of the year!",
        url: window.location.href,
      });
    } else {
      // Fallback for browsers that don't support Web Share API
      navigator.clipboard.writeText(window.location.href);
      console.log("[v0] Event link copied to clipboard");
    }
  };

  if (!mounted) {
    return <div className="min-h-screen bg-background" />;
  }

  return (
    <div id="schedule" className="relative bg-background py-16 lg:py-36">
      <CrossLines />
      {/* Hero Section with Countdown */}
      <div
        className="relative overflow-hidden"
        // bg-gradient-to-br from-primary/10 via-background to-accent/5"
      >
        <div className="absolute inset-0 bg-[url('/abstract-tech-conference-background.png')] opacity-5 bg-cover bg-center" />

        <div className="relative max-w-6xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <div className="relative text-center mb-12">
            <h1 className="text-4xl sm:text-6xl font-bold text-foreground mb-4 tracking-tight">
              ASCOL HACKFEST <span className="text-primary">2025</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The Future of Technology Starts Here. Join industry leaders,
              innovators, and visionaries.
            </p>
            <Line
              size={100}
              className="hidden lg:block absolute rotate-[29deg] top-[80px] right-[200px] dark:text-white text-foreground"
            />
          </div>

          {/* Countdown Display */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto mb-12">
            {[
              { label: "Days", value: timeLeft.days },
              { label: "Hours", value: timeLeft.hours },
              { label: "Minutes", value: timeLeft.minutes },
              { label: "Seconds", value: timeLeft.seconds },
            ].map((item) => (
              <Card
                key={item.label}
                className="bg-card/80 backdrop-blur-sm border-border/50 hover:bg-card transition-colors"
              >
                <CardContent className="p-6 text-center">
                  <div className="text-3xl sm:text-4xl font-bold text-primary mb-2 font-mono">
                    {item.value.toString().padStart(2, "0")}
                  </div>
                  <div className="text-sm text-muted-foreground uppercase tracking-wide">
                    {item.label}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link target="blank" href="https://docs.google.com/forms/d/e/1FAIpQLSeWfX81syG9qM2ITpHlgLVZQJNELwFqZO077QGz0VTun6V7cA/viewform">
            <Button size="lg">Register Now</Button>
            </Link>
            <Button variant="outline" size="lg" onClick={handleShare}>
              <Share2 className="w-5 h-5 mr-2" />
              Share Event
            </Button>
          </div>
        </div>
      </div>

      {/* Event Details */}
      {/* <div className="max-w-6xl mx-auto px-4 py-16 sm:px-6 lg:px-8"> */}
      {/* <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="bg-card hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <Calendar className="w-8 h-8 text-primary mr-3" />
                <div>
                  <h3 className="font-semibold text-card-foreground">Date</h3>
                  <p className="text-muted-foreground">
                    {eventDate.toLocaleDateString("en-US", {
                      weekday: "long",
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <Clock className="w-8 h-8 text-accent mr-3" />
                <div>
                  <h3 className="font-semibold text-card-foreground">Time</h3>
                  <p className="text-muted-foreground">7:00 PM - 11:00 PM</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <MapPin className="w-8 h-8 text-primary mr-3" />
                <div>
                  <h3 className="font-semibold text-card-foreground">
                    Location
                  </h3>
                  <p className="text-muted-foreground">
                    Tech Convention Center
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <Users className="w-8 h-8 text-accent mr-3" />
                <div>
                  <h3 className="font-semibold text-card-foreground">
                    Capacity
                  </h3>
                  <p className="text-muted-foreground">2,500 Attendees</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div> */}

      {/* Event Highlights */}
      {/* <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-8">
            What to Expect
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground">
                Innovation Showcase
              </h3>
              <p className="text-muted-foreground">
                Discover cutting-edge technologies and breakthrough innovations
                from industry leaders.
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground">
                Networking
              </h3>
              <p className="text-muted-foreground">
                Connect with like-minded professionals, entrepreneurs, and
                thought leaders.
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground">
                Expert Insights
              </h3>
              <p className="text-muted-foreground">
                Learn from keynote speakers and panel discussions on the future
                of tech.
              </p>
            </div>
          </div>
        </div> */}
      {/* </div> */}
    </div>
  );
}
