import { useEffect, useState, useRef } from "react";
import { TrendingUp, Users, MapPin, Clock } from "lucide-react";

const stats = [
  {
    icon: TrendingUp,
    value: 50000,
    suffix: "+",
    label: "Items Recovered",
    color: "text-primary",
  },
  {
    icon: Users,
    value: 125000,
    suffix: "+",
    label: "Active Users",
    color: "text-accent",
  },
  {
    icon: MapPin,
    value: 500,
    suffix: "+",
    label: "Cities Covered",
    color: "text-success",
  },
  {
    icon: Clock,
    value: 24,
    suffix: "hrs",
    label: "Avg Recovery Time",
    color: "text-primary",
  },
];

function useCountUp(end: number, duration: number = 2000, start: boolean = false) {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    if (!start) return;
    
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [end, duration, start]);

  return count;
}

function StatCard({ stat, index, isVisible }: { stat: typeof stats[0], index: number, isVisible: boolean }) {
  const count = useCountUp(stat.value, 2000, isVisible);

  return (
    <div 
      className="relative group text-center p-8"
      style={{ animationDelay: `${index * 0.15}s` }}
    >
      {/* Background glow */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-card opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="relative">
        {/* Icon */}
        <div className={`mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-card border border-border ${stat.color} transition-transform duration-300 group-hover:scale-110`}>
          <stat.icon className="h-7 w-7" />
        </div>

        {/* Value */}
        <div className={`font-display text-4xl lg:text-5xl font-bold ${stat.color} mb-2`}>
          {count.toLocaleString()}{stat.suffix}
        </div>

        {/* Label */}
        <p className="text-muted-foreground font-medium">{stat.label}</p>
      </div>
    </div>
  );
}

export function StatsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="stats" ref={sectionRef} className="py-24 bg-gradient-hero relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container relative mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold text-primary mb-4">Our Impact</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Making a{" "}
            <span className="text-gradient-primary">Difference</span>{" "}
            Every Day
          </h2>
          <p className="text-muted-foreground text-lg">
            Join thousands of Indians who have successfully recovered their lost belongings through Findify.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8 rounded-3xl border border-border bg-card/50 backdrop-blur-sm p-4 lg:p-8">
          {stats.map((stat, index) => (
            <StatCard key={stat.label} stat={stat} index={index} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  );
}
