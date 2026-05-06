import { ArrowUpRight } from "lucide-react";
import commercial from "@/assets/project-commercial.jpg";
import industrial from "@/assets/project-industrial.jpg";
import residential from "@/assets/project-residential.jpg";

const projects = [
  {
    img: commercial,
    type: "Commercial",
    title: "Office Tower HVAC Retrofit",
    desc: "Central chiller plant upgrade and AHU replacement for a multi-tenant commercial tower.",
  },
  {
    img: industrial,
    type: "Industrial",
    title: "Manufacturing Plant Cooling",
    desc: "Cooling tower and process refrigeration system for a large industrial facility.",
  },
  {
    img: residential,
    type: "Residential",
    title: "VRF System for Apartments",
    desc: "VRV outdoor units with multi-zone indoor configuration for a residential complex.",
  },
  {
    img: commercial,
    type: "Commercial",
    title: "Hospital HVAC Installation",
    desc: "Hygienic-grade HVAC and AHU installation with redundancy for critical care areas.",
  },
  {
    img: industrial,
    type: "Industrial",
    title: "Cold Storage Refrigeration",
    desc: "Low-temperature refrigeration plant design and commissioning for cold storage.",
  },
  {
    img: residential,
    type: "Residential",
    title: "Premium Villa AC Design",
    desc: "Concealed ducted AC and zoning controls for premium residential project.",
  },
];

export const Projects = () => (
  <section id="projects" className="section-pad bg-background">
    <div className="container-pro">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div className="max-w-2xl">
          <span className="eyebrow">Projects</span>
          <h2 className="mt-4 text-3xl md:text-5xl font-display font-bold text-primary leading-tight">
            Selected work across sectors.
          </h2>
        </div>
        <p className="text-muted-foreground max-w-sm">
          A snapshot of commercial, industrial and residential HVAC projects delivered over the years.
        </p>
      </div>

      <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <article
            key={i}
            className="group bg-card border border-border rounded-xl overflow-hidden shadow-card hover:shadow-elegant transition-all duration-300"
          >
            <div className="relative aspect-[4/3] overflow-hidden bg-muted">
              <img
                src={p.img}
                alt={p.title}
                loading="lazy"
                width={1024}
                height={768}
                className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <span className="absolute top-4 left-4 bg-background/90 backdrop-blur text-primary text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full">
                {p.type}
              </span>
            </div>
            <div className="p-6">
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-lg font-display font-semibold text-primary">{p.title}</h3>
                <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-accent group-hover:rotate-12 transition-all flex-shrink-0" />
              </div>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);