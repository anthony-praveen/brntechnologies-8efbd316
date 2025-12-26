import { Code, TestTube2, Cloud, Globe } from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Custom Software Development",
    description:
      "Enterprise-grade, cloud-native platforms tailored to your business needs. From architecture to deployment.",
  },
  {
    icon: TestTube2,
    title: "Quality Engineering & Testing",
    description:
      "Automation, performance testing, reliability engineering, and release confidence for mission-critical applications.",
  },
  {
    icon: Cloud,
    title: "Cloud Hosting & Deployment",
    description:
      "Secure, scalable, production-ready environments with continuous integration and delivery pipelines.",
  },
  {
    icon: Globe,
    title: "Websites & Digital Platforms",
    description:
      "From fast static websites to full-scale web applications—designed for performance and user experience.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            What We Do
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6">
            Enterprise Services
          </h2>
          <p className="text-muted-foreground text-lg">
            Comprehensive technology solutions with engineering discipline and structured delivery.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
