import { Timeline } from "@/components/our-story/timeline";
import { Values } from "@/components/our-story/values";
import { OurMission } from "@/components/our-story/our-mission";
import SEO from "@/components/SEO";
import { TeamSection } from "@/components/our-story/team-section";

export default function OurStory() {

  return (
    <>
      <SEO
        title="About Us - Your Company Name"
        description="Learn more about our company, mission, and team."
        canonicalUrl="https://www.yourwebsite.com/about"
        ogTitle="About Your Company"
        ogDescription="Discover the story behind our innovative solutions"
        ogImage="https://www.yourwebsite.com/about-og-image.jpg"
      />
      <main className="flex-1 responsive">
        {/* Hero Section */}
        <section className="relative bg-muted/40 py-24">
          <div className="container">
            <div className="max-w-2xl">
              <h1 className="mb-6">Our Story</h1>
              <p className="text-xl text-muted-foreground">
                Building a community where healthcare experiences are shared,
                understood, and valued. Together, we're making healthcare more
                human.
              </p>
            </div>
          </div>
        </section>

        <OurMission />
        <Values />
        <Timeline />
        <TeamSection />
      </main>
    </>
  );
}
