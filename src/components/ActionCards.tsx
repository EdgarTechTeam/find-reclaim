import { Search, MapPin, ArrowUpRight, Sparkles, Shield, Zap } from "lucide-react";

const cards = [
  {
    title: "Report Lost Item",
    description: "Lost something valuable? Create a detailed report with photos and location. We'll alert finders in your area.",
    icon: Search,
    features: ["Location-based alerts", "Photo upload", "Real-time notifications"],
    gradient: "from-primary to-primary/80",
    hoverClass: "hover:shadow-glow",
    iconBg: "bg-primary/10 text-primary",
  },
  {
    title: "Report Found Item",
    description: "Found someone's belongings? Help them recover it by posting details. You could make someone's day!",
    icon: MapPin,
    features: ["Easy submission", "Secure verification", "Anonymous chat"],
    gradient: "from-accent to-accent/80",
    hoverClass: "hover:shadow-accent-glow",
    iconBg: "bg-accent/10 text-accent",
  },
];

export function ActionCards() {
  return (
    <section className="py-24 bg-background relative">
      <div className="absolute inset-0 bg-gradient-hero opacity-50" />
      
      <div className="container relative mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold text-accent mb-4">Take Action</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Start Your{" "}
            <span className="text-gradient-accent">Recovery Journey</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Whether you've lost something or found an item, we've got you covered.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {cards.map((card, index) => (
            <div
              key={card.title}
              className={`group relative overflow-hidden rounded-3xl border border-border bg-gradient-card transition-all duration-500 ${card.hoverClass} cursor-pointer`}
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
              
              <div className="relative p-8">
                {/* Icon */}
                <div className={`mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl ${card.iconBg} transition-transform duration-300 group-hover:scale-110`}>
                  <card.icon className="h-8 w-8" />
                </div>

                {/* Content */}
                <h3 className="font-display text-2xl font-bold mb-3 flex items-center gap-2">
                  {card.title}
                  <ArrowUpRight className="h-5 w-5 opacity-0 -translate-x-2 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0" />
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">{card.description}</p>

                {/* Features */}
                <div className="space-y-3">
                  {card.features.map((feature, i) => (
                    <div key={feature} className="flex items-center gap-3 text-sm">
                      {i === 0 && <Zap className="h-4 w-4 text-primary" />}
                      {i === 1 && <Shield className="h-4 w-4 text-accent" />}
                      {i === 2 && <Sparkles className="h-4 w-4 text-success" />}
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Button */}
                <button className={`mt-8 w-full rounded-xl py-3 px-6 font-semibold text-primary-foreground bg-gradient-to-r ${card.gradient} transition-all duration-300 group-hover:shadow-lg`}>
                  {card.title === "Report Lost Item" ? "Report Now" : "Submit Found Item"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
