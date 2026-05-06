export const Footer = () => (
  <footer className="bg-primary text-primary-foreground/80 py-10">
    <div className="container-pro flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
      <p className="font-display font-semibold text-primary-foreground">Mukund S. Patel</p>
      <p>© {new Date().getFullYear()} Mukund S. Patel — HVAC Expert. All rights reserved.</p>
    </div>
  </footer>
);