import { FileSearch, MapPinned, MessageCircle, CheckCircle, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: FileSearch,
    title: "Report",
    description: "Describe your lost or found item with details like type, location, date, and photos.",
    color: "primary" as const,
  },
  {
    icon: MapPinned,
    title: "Match",
    description: "Our smart system scans nearby reports and finds potential matches based on location and description.",
    color: "accent" as const,
  },
  {
    icon: MessageCircle,
    title: "Connect",
    description: "Get notified instantly when a match is found. Chat securely with the finder or owner.",
    color: "primary" as const,
  },
  {
    icon: CheckCircle,
    title: "Recover",
    description: "Verify ownership, arrange meetup, and get your item back safely. It's that simple!",
    color: "accent" as const,
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold text-primary mb-4">How It Works</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Recover Your Items in{" "}
            <span className="text-gradient-primary">4 Simple Steps</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Our streamlined process makes it easy to report, find, and recover lost items quickly and securely.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
          {steps.map((step, index) => (
            <div 
              key={step.title}
              className="relative group"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-[60%] w-full h-0.5 bg-gradient-to-r from-border via-primary/30 to-border">
                  <ArrowRight className="absolute right-0 top-1/2 -translate-y-1/2 h-4 w-4 text-primary/50" />
                </div>
              )}
              
              <div className="relative rounded-2xl border border-border bg-gradient-card p-6 transition-all duration-300 hover-lift hover:border-primary/30">
                {/* Step number */}
                <div className="absolute -top-3 -left-3 flex h-8 w-8 items-center justify-center rounded-full bg-gradient-primary text-sm font-bold text-primary-foreground shadow-glow">
                  {index + 1}
                </div>

                {/* Icon */}
                <div className={`mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl ${
                  step.color === "primary" 
                    ? "bg-primary/10 text-primary" 
                    : "bg-accent/10 text-accent"
                } transition-transform duration-300 group-hover:scale-110`}>
                  <step.icon className="h-7 w-7" />
                </div>

                {/* Content */}
                <h3 className="font-display text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
