const milestones = [
  {
    year: "2022",
    title: "The Beginning",
    description:
      "Wellness Dialogues was founded with a vision to transform healthcare storytelling.",
  },
  {
    year: "2023",
    title: "Community Growth",
    description:
      "Reached 10,000 shared stories and launched support communities.",
  },
  {
    year: "2024",
    title: "Platform Evolution",
    description:
      "Introduced the Knowledge Hub and expanded our reach globally.",
  },
];

export function Timeline() {
  return (
    <section className="py-24">
      <div className="container">
        <h2 className="mb-16 text-center">Our Journey</h2>
        <div className="mx-auto max-w-3xl">
          {milestones.map((milestone, index) => (
            <div key={milestone.year} className="relative pb-12 pl-8 last:pb-0">
              {/* Timeline line */}
              <div className="absolute bottom-0 left-0 top-0 w-px bg-border" />
              {/* Timeline dot */}
              <div className="absolute left-[-4px] top-1 h-2 w-2 rounded-full bg-primary" />

              <div>
                <span className="text-sm font-medium text-muted-foreground">
                  {milestone.year}
                </span>
                <h3 className="mb-2 mt-2 text-xl font-semibold">
                  {milestone.title}
                </h3>
                <p className="text-muted-foreground">{milestone.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
