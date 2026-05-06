import { useState } from "react";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { z } from "zod";

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  message: z.string().trim().min(1, "Message is required").max(1000),
});

const contactItems = [
  { icon: Phone, label: "Phone", value: "+91 9925228203", href: "tel:+919925228203" },
  { icon: Mail, label: "Email", value: "mukundpatel1970@gmail.com", href: "mailto:mukundpatel1970@gmail.com" },
  { icon: MapPin, label: "Location", value: "Ahmedabad, India" },
];

export const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = schema.safeParse(form);
    if (!result.success) {
      toast.error(result.error.issues[0].message);
      return;
    }
    toast.success("Message sent — I'll get back to you shortly.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="section-pad bg-secondary">
      <div className="container-pro grid lg:grid-cols-2 gap-12 lg:gap-20">
        <div>
          <span className="eyebrow">Contact</span>
          <h2 className="mt-4 text-3xl md:text-5xl font-display font-bold text-primary leading-tight">
          </h2>
          <p className="mt-5 text-muted-foreground text-lg leading-relaxed">
          </p>

          <ul className="mt-10 space-y-5">
            {contactItems.map((c) => (
              <li key={c.label} className="flex items-start gap-4">
                <span className="h-11 w-11 rounded-lg bg-card border border-border grid place-items-center text-accent flex-shrink-0">
                  <c.icon className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">{c.label}</p>
                  {c.href ? (
                    <a href={c.href} className="text-base font-semibold text-primary hover:text-accent transition-colors">
                      {c.value}
                    </a>
                  ) : (
                    <p className="text-base font-semibold text-primary">{c.value}</p>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>

        <form onSubmit={submit} className="bg-card border border-border rounded-2xl p-8 shadow-card space-y-5">
          <div>
            <label className="text-sm font-semibold text-primary mb-2 block">Name</label>
            <Input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your full name" maxLength={100} />
          </div>
          <div>
            <label className="text-sm font-semibold text-primary mb-2 block">Email</label>
            <Input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="you@company.com" maxLength={255} />
          </div>
          <div>
            <label className="text-sm font-semibold text-primary mb-2 block">Message</label>
            <Textarea rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Tell me about your project..." maxLength={1000} />
          </div>
          <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
            Send Message <Send className="h-4 w-4" />
          </Button>
        </form>
      </div>
    </section>
  );
};