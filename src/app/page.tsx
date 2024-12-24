import Hero from "@/components/sections/hero";
import SEO from "@/components/SEO";
import TextAnimatedDecoration from "@/components/ui/TextAnimatedDecoration";

export default function HomePage() {
  
  return (
    <>
    <SEO
        title="Your Company Name"
        description="Learn more about our company, mission, and team."
        canonicalUrl="https://www.yourwebsite.com/about"
        ogTitle="About Your Company"
        ogDescription="Discover the story behind our innovative solutions"
        ogImage="https://www.yourwebsite.com/about-og-image.jpg"
      />
    <main>
      <Hero />
    </main>
    </>
  );
}
