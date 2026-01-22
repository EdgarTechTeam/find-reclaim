import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "./ui/button";

export function CTASection() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="relative rounded-3xl overflow-hidden">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-primary" />
          
          {/* Pattern overlay */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
              backgroundSize: '32px 32px'
            }} />
          </div>

          {/* Decorative circles */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-2xl" />
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-white/10 rounded-full blur-2xl" />

          <div className="relative px-8 py-16 lg:px-16 lg:py-24 text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm px-4 py-2 text-sm font-medium text-white mb-8">
              <Sparkles className="h-4 w-4" />
              Join 125,000+ Users
            </div>

            {/* Heading */}
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 max-w-3xl mx-auto">
              Ready to Recover What's Lost?
            </h2>

            {/* Description */}
            <p className="text-white/80 text-lg max-w-xl mx-auto mb-10">
              Don't let your valuable items stay lost. Join Findify today and increase your chances of recovery by up to 80%.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90 group px-8"
              >
                Get Started Free
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 px-8"
              >
                Learn More
              </Button>
            </div>

            {/* Trust text */}
            <p className="mt-8 text-white/60 text-sm">
              No credit card required • Free forever plan • Cancel anytime
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
