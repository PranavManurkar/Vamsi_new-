// Button styles ported from the design's shadcn button (ui/button.tsx), as plain class strings.
// pointer-coarse:* lifts touch targets to 44px on touch devices only; desktop keeps the design heights.
const base =
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] pointer-coarse:min-h-11";

const variants = {
  default: "bg-primary text-primary-foreground hover:bg-primary/90",
  outline: "border bg-background text-foreground hover:bg-accent hover:text-accent-foreground",
  secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
  ghost: "hover:bg-accent hover:text-accent-foreground",
  link: "text-primary underline-offset-4 hover:underline",
  terracotta: "bg-terracotta text-white hover:bg-terracotta/90",
};

const sizes = {
  default: "h-9 px-4 py-2 has-[>svg]:px-3",
  sm: "h-8 gap-1.5 px-3 has-[>svg]:px-2.5",
  lg: "h-10 px-6 has-[>svg]:px-4",
  icon: "size-9 pointer-coarse:size-11",
};

export function buttonClasses({ variant = "default", size = "default", className } = {}) {
  return [base, variants[variant], sizes[size], className].filter(Boolean).join(" ");
}
