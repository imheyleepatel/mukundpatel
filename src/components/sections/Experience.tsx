import { Briefcase, MapPin } from "lucide-react";

const responsibilities = [
  "Lead the HVAC division — strategy, planning and team management",
  "Design and oversee installation of chiller plants and central AC systems",
  "Specify and execute VRF / VRV solutions for commercial buildings",
  "Drive preventive maintenance programs and AMC service delivery",
  "Manage vendor coordination, procurement and on-site project execution",
  "Mentor junior engineers and technicians across project sites",
];

export const Experience = () => (
  <section id="experience" className="section-pad bg-secondary">
    <div className="container-pro">
      
      {/* Heading */}
      <div className="max-w-2xl">
        <span className="eyebrow">Experience</span>
        <h2 className="mt-4 text-3xl md:text-5xl font-display font-bold text-primary leading-tight">
          Career milestones built on consistency.
        </h2>
      </div>

      <div className="mt-14 relative">

        {/* Timeline line */}
        <div className="absolute left-2 md:left-1/2 top-0 bottom-0 w-px bg-border" />

        <div className="relative grid md:grid-cols-2 gap-8 items-start">

          {/* LEFT CONTENT */}
          <div className="pl-16 md:pl-0 md:text-right md:pr-12">
            <div className="inline-flex items-center gap-2 text-accent text-sm font-semibold uppercase tracking-widest">
              1995 — Present
            </div>

            <h3 className="mt-2 text-2xl font-display font-bold text-primary">
              Head — HVAC Division
            </h3>

            <p className="mt-1 text-muted-foreground flex items-center gap-2 md:justify-end">
              <Briefcase className="h-4 w-4" />
              Linc Digital Systems Pvt. Ltd.
            </p>

            <p className="mt-1 text-sm text-muted-foreground flex items-center gap-2 md:justify-end">
              <MapPin className="h-4 w-4" />
              Ahmedabad, India
            </p>
          </div>

          {/* Timeline dot */}
          <span className="hidden md:block absolute left-1/2 top-2 -translate-x-1/2 h-4 w-4 rounded-full bg-accent ring-4 ring-secondary" />
          <span className="md:hidden absolute left-2 top-2 -translate-x-1/2 h-4 w-4 rounded-full bg-accent ring-4 ring-secondary" />

          {/* RIGHT CONTENT */}
          <div className="pl-16 md:pl-12">
            <div className="bg-card border border-border rounded-xl p-6 shadow-card">
              
              <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
                Key Responsibilities
              </p>

              <ul className="space-y-2.5">
                {responsibilities.map((r) => (
                  <li key={r} className="flex gap-3 text-sm text-foreground">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0" />
                    <span>{r}</span>
                  </li>
                ))}
              </ul>

            </div>
          </div>

        </div>
      </div>
    </div>
  </section>
);