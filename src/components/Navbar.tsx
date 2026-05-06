import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#services", label: "Services" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-border shadow-card"
          : "bg-transparent"
      )}
    >
      <nav className="container-pro flex items-center justify-between h-16 md:h-20">
        <a href="#home" className="flex items-center gap-2 group">
          <span className="h-9 w-9 rounded-md bg-gradient-accent grid place-items-center text-primary-foreground font-display font-bold">
            MP
          </span>
          <span className={cn("font-display font-semibold tracking-tight", scrolled ? "text-primary" : "text-primary-foreground")}>
            Mukund Patel
          </span>
        </a>

        <ul className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={cn(
                  "text-sm font-medium transition-colors relative after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-accent after:transition-all hover:after:w-full",
                  scrolled ? "text-foreground hover:text-accent" : "text-primary-foreground/90 hover:text-primary-foreground"
                )}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-3">
          <Button asChild variant="default" size="sm" className="bg-accent hover:bg-accent/90 text-accent-foreground">
            <a href="tel:+919925228203"><Phone className="h-4 w-4" /> Call Now</a>
          </Button>
        </div>

        <button
          aria-label="Toggle menu"
          className={cn("lg:hidden p-2 rounded-md", scrolled ? "text-foreground" : "text-primary-foreground")}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div className="lg:hidden bg-background border-t border-border animate-fade-in">
          <ul className="container-pro py-4 flex flex-col gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  onClick={() => setOpen(false)}
                  href={l.href}
                  className="block py-3 text-sm font-medium text-foreground hover:text-accent"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <Button asChild className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                <a href="tel:+919925228203"><Phone className="h-4 w-4" /> Call +91 9925228203</a>
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};