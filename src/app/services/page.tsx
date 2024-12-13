import SEO from "@/components/SEO";

export default function Services() {

  return (
    <>
      <SEO
        title="Our Services - Your Company Name"
        description="Learn more about our company, mission, and team."
        canonicalUrl="https://www.yourwebsite.com/about"
        ogTitle="About Your Company"
        ogDescription="Discover the story behind our innovative solutions"
        ogImage="https://www.yourwebsite.com/about-og-image.jpg"
      />
      <main>
        {/* Page content */}
        <h1>Our Services</h1>
        <p>Welcome to our company...</p>
      </main>
    </>
  );
}
