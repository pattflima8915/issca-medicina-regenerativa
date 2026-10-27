import {
  useEffect,
  useRef,
  useState,
  type ElementType,
  type MouseEvent,
  type ReactNode,
} from "react";
import { cn } from "@/utils/cn";

/* ------------------------------------------------------------------ */
/* Scroll reveal                                                       */
/* ------------------------------------------------------------------ */

export function useInView<T extends HTMLElement>(options?: IntersectionObserverInit) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px", ...options },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [options]);

  return { ref, inView };
}

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  dir?: "up" | "left" | "right" | "scale";
  as?: ElementType;
};

export function Reveal({ children, className, delay = 0, dir = "up", as }: RevealProps) {
  const Tag = (as ?? "div") as ElementType;
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <Tag
      ref={ref}
      data-dir={dir}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn("reveal", inView && "is-visible", className)}
    >
      {children}
    </Tag>
  );
}

/* ------------------------------------------------------------------ */
/* Buttons                                                             */
/* ------------------------------------------------------------------ */

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
  ariaLabel?: string;
};

export function Button({
  children,
  href = "#inscricao",
  variant = "primary",
  size = "md",
  className,
  onClick,
  ariaLabel,
}: ButtonProps) {
  const base =
    "btn-glow group relative inline-flex items-center justify-center gap-2 rounded-full font-display font-semibold tracking-tight transition-all duration-300 active:scale-[0.97]";
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-[15px]",
    lg: "px-8 py-4 text-base",
  };
  const variants = {
    primary:
      "bg-gradient-to-r from-gold-300 via-gold-400 to-gold-500 text-navy-900 shadow-[0_12px_40px_-12px_rgba(240,178,64,0.7)] hover:shadow-[0_20px_55px_-10px_rgba(240,178,64,0.9)] hover:-translate-y-0.5",
    outline:
      "glass text-white hover:bg-white/10 hover:-translate-y-0.5 hover:border-white/25",
    ghost: "text-slate-300 hover:text-white",
  };

  return (
    <a
      href={href}
      onClick={onClick}
      aria-label={ariaLabel}
      className={cn(base, sizes[size], variants[variant], className)}
    >
      <span className="relative z-10 inline-flex items-center gap-2">{children}</span>
    </a>
  );
}

/* ------------------------------------------------------------------ */
/* Eyebrow / headings                                                  */
/* ------------------------------------------------------------------ */

export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-gold-400/30 bg-gold-400/[0.08] px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-gold-200",
        className,
      )}
    >
      <span className="relative inline-flex h-1.5 w-1.5 text-gold-400 pulse-ring">
        <span className="h-1.5 w-1.5 rounded-full bg-gold-400" />
      </span>
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "center" | "left";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-5",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className,
      )}
    >
      {eyebrow && (
        <Reveal>
          <Eyebrow>{eyebrow}</Eyebrow>
        </Reveal>
      )}
      <Reveal delay={80}>
        <h2
          className={cn(
            "font-display text-[clamp(1.9rem,4.4vw,3.35rem)] font-extrabold leading-[1.08] tracking-[-0.035em] text-white",
            align === "center" ? "mx-auto max-w-3xl" : "max-w-2xl",
          )}
        >
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={160}>
          <p
            className={cn(
              "text-[15px] leading-relaxed text-slate-400 sm:text-[17px]",
              align === "center" ? "mx-auto max-w-2xl" : "max-w-xl",
            )}
          >
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Spotlight card (pointer-tracking microinteraction)                   */
/* ------------------------------------------------------------------ */

export function SpotlightCard({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - rect.top}px`);
  };

  return (
    <div onMouseMove={handleMove} className={cn("card-sheen", className)}>
      {children}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Count-up stat                                                       */
/* ------------------------------------------------------------------ */

export function CountUp({
  to,
  suffix = "",
  prefix = "",
  decimals = 0,
  duration = 1800,
  className,
}: {
  to: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  duration?: number;
  className?: string;
}) {
  const { ref, inView } = useInView<HTMLSpanElement>({ threshold: 0.4 });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(to * eased);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {value.toLocaleString("pt-BR", {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      })}
      {suffix}
    </span>
  );
}

/* ------------------------------------------------------------------ */
/* Ambient background orbs                                             */
/* ------------------------------------------------------------------ */

export function Aurora({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
    >
      <div className="anim-drift absolute -left-32 top-[-10%] h-[38rem] w-[38rem] rounded-full bg-[radial-gradient(circle,rgba(47,124,246,0.24),transparent_62%)] blur-3xl" />
      <div
        className="anim-drift absolute -right-40 top-[18%] h-[34rem] w-[34rem] rounded-full bg-[radial-gradient(circle,rgba(240,178,64,0.18),transparent_62%)] blur-3xl"
        style={{ animationDelay: "-7s" }}
      />
      <div
        className="anim-drift absolute bottom-[-18%] left-1/3 h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(circle,rgba(26,63,158,0.28),transparent_62%)] blur-3xl"
        style={{ animationDelay: "-14s" }}
      />
    </div>
  );
}
