import { Search, MapPin, Wallet, Key, Smartphone, FileText, Dog, CreditCard, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { FloatingIcon } from "./FloatingIcon";

export function HeroSection() {
  return (
    <section className="relative min-h-screen bg-gradient-hero overflow-hidden pt-16">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/3 rounded-full blur-3xl" />
      </div>

      {/* Floating icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <FloatingIcon 
          icon={Wallet} 
          variant="primary"
          className="absolute top-32 left-[10%] animate-float opacity-60"
        />
        <FloatingIcon 
          icon={Key} 
          variant="accent"
          className="absolute top-48 right-[15%] animate-float-delayed opacity-60"
        />
        <FloatingIcon 
          icon={Smartphone} 
          variant="muted"
          className="absolute top-[60%] left-[8%] animate-float-slow opacity-50"
        />
        <FloatingIcon 
          icon={FileText} 
          variant="primary"
          className="absolute top-[45%] right-[8%] animate-float opacity-50"
        />
        <FloatingIcon 
          icon={Dog} 
          variant="accent"
          className="absolute bottom-32 left-[20%] animate-float-delayed opacity-60"
        />
        <FloatingIcon 
          icon={CreditCard} 
          variant="muted"
          className="absolute bottom-40 right-[20%] animate-float-slow opacity-50"
        />
      </div>

      <div className="container relative mx-auto px-4 py-24 lg:py-32">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium text-primary mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Reuniting People with What Matters
          </div>

          {/* Heading */}
          <h1 className="animate-fade-up stagger-1 font-display text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight mb-6">
            Lost Something?{" "}
            <span className="text-gradient-primary">We'll Help</span>{" "}
            <span className="text-gradient-accent">Find It</span>
          </h1>

          {/* Subheading */}
          <p className="animate-fade-up stagger-2 text-lg sm:text-xl text-muted-foreground max-w-2xl mb-10">
            India's smartest platform to report, track, and recover lost items. 
            Connect with finders nearby and bring your belongings back home.
          </p>

          {/* CTA Buttons */}
          <div className="animate-fade-up stagger-3 flex flex-col sm:flex-row gap-4 mb-16">
            <Button 
              size="lg" 
              className="bg-gradient-primary text-primary-foreground shadow-glow hover:opacity-90 animate-pulse-glow group px-8"
            >
              <Search className="mr-2 h-5 w-5" />
              Report Lost Item
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-accent text-accent hover:bg-accent hover:text-accent-foreground shadow-accent-glow/50 hover:shadow-accent-glow group px-8"
            >
              <MapPin className="mr-2 h-5 w-5" />
              Report Found Item
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

          {/* Search Preview */}
          <div className="animate-fade-up stagger-4 w-full max-w-2xl">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-primary rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity" />
              <div className="relative flex items-center gap-3 rounded-2xl border border-border bg-card p-4 shadow-soft">
                <Search className="h-5 w-5 text-muted-foreground" />
                <input 
                  type="text"
                  placeholder="Search for your lost item..."
                  className="flex-1 bg-transparent text-foreground placeholder:text-muted-foreground outline-none"
                />
                <Button size="sm" className="bg-gradient-primary text-primary-foreground">
                  Search
                </Button>
              </div>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              Try searching: "iPhone near Connaught Place" or "Brown wallet lost in Metro"
            </p>
          </div>
        </div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path 
            d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" 
            className="fill-background"
          />
        </svg>
      </div>
    </section>
  );
}
