const team = [
    {
      name: "Dr. Sarah Chen",
      role: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400&auto=format"
    },
    {
      name: "Michael Roberts",
      role: "Community Director",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format"
    },
    {
      name: "Dr. Emily Thompson",
      role: "Medical Advisor",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&auto=format"
    }
  ];
  
  export function TeamSection() {
    return (
      <section className="py-24 bg-muted/40">
        <div className="container">
          <h2 className="text-center mb-16">Our Team</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {team.map((member) => (
              <div key={member.name} className="text-center">
                <div className="aspect-square relative rounded-full overflow-hidden mb-4 max-w-[240px] mx-auto">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="object-cover w-full h-full"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-muted-foreground">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }