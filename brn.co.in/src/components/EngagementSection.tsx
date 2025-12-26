import { Target, FileText, Palette, Rocket } from "lucide-react";

const steps = [
  {
    icon: Target,
    step: "01",
    title: "Discovery & Business Alignment",
    description: "Goals, feasibility, scope clarity",
    note: "Milestone-based payment",
  },
  {
    icon: FileText,
    step: "02",
    title: "Requirement Deep Dive",
    description: "Functional & technical definition",
    note: "Milestone-based payment",
  },
  {
    icon: Palette,
    step: "03",
    title: "UI/UX & Experience Design",
    description: "Wireframes, walkthroughs, validation",
    note: "Milestone-based payment",
  },
  {
    icon: Rocket,
    step: "04",
    title: "Development & Deployment",
    description: "Agile execution, quality gates, go-live support",
    note: "Final delivery",
  },
];

const EngagementSection = () => {
  return (
    <section id="engagement" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            How We Work
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6">
            Engagement & Delivery Model
          </h2>
          <p className="text-muted-foreground text-lg">
            A transparent, milestone-based approach that builds trust and delivers results.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Connector Line (hidden on mobile, shown on desktop) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-border -z-10 -translate-x-1/2" />
                )}

                <div className="bg-background rounded-xl border border-border p-6 h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <step.icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-2xl font-bold text-primary/30">
                      {step.step}
                    </span>
                  </div>
                  <h3 className="font-semibold text-foreground mb-2 text-sm">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    {step.description}
                  </p>
                  <span className="inline-block text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded">
                    {step.note}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EngagementSection;
