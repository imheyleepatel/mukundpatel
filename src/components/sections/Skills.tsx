import { Settings2, Thermometer, Wind, Wrench, Layers, Zap, ClipboardCheck } from "lucide-react";

const skills = [
  { icon: Settings2, title: "HVAC Installation & Maintenance" },
  { icon: Thermometer, title: "Chiller Plant & Cooling Tower" },
  { icon: Wind, title: "VRF / VRV Systems" },
  { icon: Wrench, title: "Refrigeration Troubleshooting" },
  { icon: Layers, title: "Ducting & Insulation" },
  { icon: Zap, title: "Electrical Panel Basics" },
  { icon: ClipboardCheck, title: "Site & Project Management" },
];

export const Skills = () => (
  <section id="skills" className="section-pad bg-secondary">
    <div className="container-pro">
      <div className="max-w-2xl">
        <span className="eyebrow">Skills</span>
        <h2 className="mt-4 text-3xl md:text-5xl font-display font-bold text-primary leading-tight">
          Core technical expertise.
        </h2>
      </div>

      <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {skills.map((s) => (
          <div
            key={s.title}
            className="group bg-card border border-border rounded-xl p-5 hover:border-accent hover:shadow-card transition-all duration-300"
          >
            <div className="h-10 w-10 rounded-md bg-secondary grid place-items-center text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
              <s.icon className="h-5 w-5" />
            </div>
            <p className="mt-4 text-sm font-semibold text-primary leading-snug">{s.title}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);