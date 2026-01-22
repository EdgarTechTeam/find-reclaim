import { LucideIcon } from "lucide-react";

interface FloatingIconProps {
  icon: LucideIcon;
  className?: string;
  size?: number;
  variant?: "primary" | "accent" | "muted";
}

export function FloatingIcon({ icon: Icon, className = "", size = 24, variant = "primary" }: FloatingIconProps) {
  const variantStyles = {
    primary: "bg-primary/10 text-primary border-primary/20",
    accent: "bg-accent/10 text-accent border-accent/20",
    muted: "bg-muted text-muted-foreground border-border",
  };

  return (
    <div className={`flex items-center justify-center rounded-2xl border p-4 backdrop-blur-sm ${variantStyles[variant]} ${className}`}>
      <Icon size={size} />
    </div>
  );
}
