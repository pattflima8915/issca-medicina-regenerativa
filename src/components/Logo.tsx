import { cn } from "@/utils/cn";
import logo from "@/assets/logo-issca.png";
const sizes = { sm: "h-12", md: "h-20", lg: "h-24 sm:h-32" } as const;
export function IssCaLogo({ size = "md", className }: { size?: keyof typeof sizes; variant?: "full" | "compact"; className?: string }) {
  return <img width={1200} height={378} src={logo} alt="ISSCA Brasil – International Society for Stem Cell Application" className={cn("w-auto max-w-full object-contain", sizes[size], className)} />;
}
export function BrandLink({ className }: { className?: string }) {
  return <a href="#top" aria-label="ISSCA Brasil – início" className={cn("logo-plate inline-flex max-w-[65vw] items-center rounded-2xl px-3 py-2", className)}><IssCaLogo size="sm" /></a>;
}

