import { Heart, Users, Shield, MessageCircle } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Empathy First",
    description: "We believe in the power of understanding and compassion in healthcare."
  },
  {
    icon: Users,
    title: "Community Driven",
    description: "Our strength lies in the diverse experiences and perspectives we share."
  },
  {
    icon: Shield,
    title: "Trust & Safety",
    description: "We maintain the highest standards of privacy and security for our community."
  },
  {
    icon: MessageCircle,
    title: "Open Dialogue",
    description: "We encourage honest, respectful conversations about health experiences."
  }
];

export function Values() {
  return (
    <section className="py-24 bg-muted/40">
      <div className="container">
        <h2 className="text-center mb-16">Our Values</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value) => (
            <div key={value.title} className="text-center">
              <div className="mb-4 flex justify-center">
                <value.icon className="h-12 w-12 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
              <p className="text-muted-foreground">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}