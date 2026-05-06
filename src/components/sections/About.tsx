import { CheckCircle2 } from "lucide-react";
import portrait from "@/assets/portrait.jpg";

const points = [
  "End-to-end HVAC system design, installation and commissioning",
  "Chiller plants, cooling towers and central AC systems",
  "VRF / VRV system specification and execution",
  "Refrigeration troubleshooting and preventive maintenance",
];

export const About = () => (
  <section id="about" className="section-pad bg-background">
    <div className="container-pro grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
      <div className="lg:col-span-5 relative">
        <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-elegant">
          <img src={portrait} alt="Portrait of Mukund S. Patel" className="h-full w-full object-cover" loading="lazy" width={768} height={960} />
        </div>
        <div className="hidden md:block absolute -bottom-6 -right-6 bg-card border border-border shadow-card rounded-xl p-5 max-w-[200px]">
          <p className="text-3xl font-display font-bold text-primary">30+</p>
          <p className="text-xs uppercase tracking-wider text-muted-foreground mt-1">Years engineering HVAC excellence</p>
        </div>
      </div>

      <div className="lg:col-span-7">
        <span className="eyebrow">About</span>
        <h2 className="mt-4 text-3xl md:text-5xl font-display font-bold text-primary leading-tight">
          Three decades of trusted HVAC engineering leadership.
        </h2>
        <p className="mt-6 text-muted-foreground leading-relaxed text-lg">
          With over <strong className="text-foreground">30 years of hands-on experience</strong> in the HVAC industry,
          Mukund S. Patel has led the design, installation and maintenance of complex cooling systems
          for commercial, industrial and residential projects across India.
        </p>
        <p className="mt-4 text-muted-foreground leading-relaxed">
          As Head of the HVAC Division at Linc Digital Systems Pvt. Ltd., he combines deep technical
          expertise with site execution discipline — ensuring every project is delivered on time, on
          spec, and built to last.
        </p>

        <ul className="mt-8 grid sm:grid-cols-2 gap-3">
          {points.map((p) => (
            <li key={p} className="flex gap-3 text-sm text-foreground">
              <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
              <span>{p}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);