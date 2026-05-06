import { ArrowRight, Download, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-hvac.jpg";

export const Hero = () => (
  <section id="home" className="relative min-h-[100svh] flex items-center overflow-hidden">
    <div className="absolute inset-0">
      <img src={heroImg} alt="Industrial HVAC chiller plant room" className="h-full w-full object-cover" width={1536} height={1024} />
      <div className="absolute inset-0 bg-gradient-hero" />
    </div>

    <div className="container-pro relative z-10 pt-28 pb-20 text-primary-foreground">
      <div className="max-w-3xl animate-fade-in">
        <span className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/5 backdrop-blur px-4 py-1.5 text-xs font-medium uppercase tracking-widest">
          <Award className="h-3.5 w-3.5 text-accent" /> 30+ Years of Engineering Excellence
        </span>

        <h1 className="mt-6 text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-[1.05]">
          Mukund Patel
        </h1>
        <p className="mt-4 text-lg md:text-2xl font-medium text-primary-foreground/90">
          Head — HVAC Division, Linc Digital Systems Pvt. Ltd.
        </p>
        <p className="mt-5 max-w-2xl text-base md:text-lg text-primary-foreground/75 leading-relaxed">
          Senior expert in Refrigeration, Air Conditioning &amp; HVAC systems — delivering reliable
          chiller plants, VRF/VRV solutions and large-scale project execution across India.
        </p>

        <div className="mt-9 flex flex-wrap gap-3">
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-elegant">
            <a href="#contact">Contact Me <ArrowRight className="h-4 w-4" /></a>
          </Button>
          <Button asChild size="lg" variant="outline" className="bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary">
            <a href="/resume.pdf" download><Download className="h-4 w-4" /> Download Resume</a>
          </Button>
        </div>

        <dl className="mt-14 grid grid-cols-3 max-w-xl gap-6 border-t border-primary-foreground/15 pt-8">
          {[
            { k: "30+", v: "Years Experience" },
            { k: "200+", v: "Projects Delivered" },
            { k: "1995", v: "With Linc Since" },
          ].map((s) => (
            <div key={s.v}>
              <dt className="text-3xl md:text-4xl font-display font-bold text-primary-foreground">{s.k}</dt>
              <dd className="mt-1 text-xs md:text-sm text-primary-foreground/70 uppercase tracking-wider">{s.v}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  </section>
);