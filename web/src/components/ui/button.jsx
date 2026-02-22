import { cn } from "@/lib/utils";

export function Button({ className, variant = "primary", size = "default", ...props }) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-xl font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]",
        {
          primary: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm hover:shadow-md hover:scale-[1.02]",
          outline: "border-2 border-primary text-primary bg-transparent hover:bg-primary/5",
          ghost: "text-foreground hover:bg-muted",
          accent: "bg-accent text-accent-foreground hover:bg-accent/90 shadow-sm hover:shadow-md hover:scale-[1.02]",
        }[variant],
        {
          default: "h-10 px-4 py-2 text-sm",
          lg: "h-12 px-6 text-base",
          sm: "h-8 px-3 text-sm",
        }[size],
        className
      )}
      {...props}
    />
  );
}

export function ButtonLink({ className, variant = "primary", size = "default", ...props }) {
  return (
    <a
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-xl font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 active:scale-[0.98]",
        {
          primary: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm hover:shadow-md hover:scale-[1.02]",
          outline: "border-2 border-primary text-primary bg-transparent hover:bg-primary/5",
          ghost: "text-foreground hover:bg-muted",
          accent: "bg-accent text-accent-foreground hover:bg-accent/90 shadow-sm hover:shadow-md hover:scale-[1.02]",
        }[variant],
        {
          default: "h-10 px-4 py-2 text-sm",
          lg: "h-12 px-6 text-base",
          sm: "h-8 px-3 text-sm",
        }[size],
        className
      )}
      {...props}
    />
  );
}
