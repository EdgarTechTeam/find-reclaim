import { Shield, Bell, MessageCircle, Map, Fingerprint, Zap, Globe, Clock } from "lucide-react";

const features = [
  {
    icon: Map,
    title: "Location-Based Matching",
    description: "Smart algorithms match lost and found items based on GPS location, increasing recovery chances.",
  },
  {
    icon: Bell,
    title: "Instant Notifications",
    description: "Get real-time alerts when a potential match is found for your reported item.",
  },
  {
    icon: Shield,
    title: "Secure Verification",
    description: "Multi-step ownership verification protects against false claims and fraud.",
  },
  {
    icon: MessageCircle,
    title: "Anonymous Chat",
    description: "Communicate safely with finders without revealing personal information initially.",
  },
  {
    icon: Fingerprint,
    title: "Unique Identifiers",
    description: "Add serial numbers, IMEIs, or unique marks to strengthen your claim.",
  },
  {
    icon: Zap,
    title: "Quick Reporting",
    description: "Report items in under 2 minutes with our streamlined submission process.",
  },
  {
    icon: Globe,
    title: "Pan-India Coverage",
    description: "Available across all major cities and expanding to rural areas.",
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Round-the-clock assistance to help you through the recovery process.",
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 bg-background relative overflow-hidden">
      {/* Background */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      
      <div className="container relative mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold text-accent mb-4">Features</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Everything You Need to{" "}
            <span className="text-gradient-accent">Recover Faster</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Powerful features designed to maximize your chances of finding lost items quickly and safely.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group relative rounded-2xl border border-border bg-gradient-card p-6 transition-all duration-300 hover-lift hover:border-accent/30"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent transition-all duration-300 group-hover:scale-110 group-hover:bg-accent group-hover:text-accent-foreground">
                <feature.icon className="h-6 w-6" />
              </div>

              {/* Content */}
              <h3 className="font-display text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
