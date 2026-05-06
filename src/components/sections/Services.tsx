import { Wrench, Wind, Snowflake, Building2, Cog } from "lucide-react";

const services = [
  { icon: Wind, title: "HVAC Installation", desc: "Design and turnkey installation of HVAC systems for new buildings and retrofits." },
  { icon: Wrench, title: "Maintenance & Repair", desc: "Preventive maintenance, AMC service contracts and rapid breakdown response." },
  { icon: Snowflake, title: "Chiller & Cooling Systems", desc: "Chiller plants, cooling towers and central AC plants for large facilities." },
  { icon: Building2, title: "Industrial & Commercial Projects", desc: "End-to-end project execution for factories, offices and commercial complexes." },
  { icon: Cog, title: "System Troubleshooting", desc: "Expert diagnosis of refrigeration and HVAC faults with permanent fixes." },
];

export const Services = () => (
  <section id="services" className="section-pad bg-background">
    <div className="container-pro">
      <div className="max-w-2xl">
        <span className="eyebrow">Services</span>
        <h2 className="mt-4 text-3xl md:text-5xl font-display font-bold text-primary leading-tight">
          Complete HVAC solutions, end to end.
        </h2>
        <p className="mt-4 text-muted-foreground text-lg">
          From specification to commissioning to long-term service — engineered for reliability.
        </p>
      </div>

      <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <article
            key={s.title}
            className="group relative bg-card border border-border rounded-xl p-7 shadow-card hover:shadow-elegant hover:-translate-y-1 transition-all duration-300"
          >
            <div className="h-12 w-12 rounded-lg bg-gradient-accent grid place-items-center text-primary-foreground shadow-card group-hover:scale-110 transition-transform">
              <s.icon className="h-6 w-6" />
            </div>
            <h3 className="mt-5 text-xl font-display font-semibold text-primary">{s.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            <span className="absolute top-7 right-7 text-xs font-mono text-muted-foreground/40">0{i + 1}</span>
          </article>
        ))}
      </div>
    </div>
  </section>
);