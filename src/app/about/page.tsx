// app/about/page.tsx
import SEO from "../../components/SEO";

export default function AboutPage() {
  // Example of structured data for an organization
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Your Company Name",
    url: "https://www.yourwebsite.com",
    logo: "https://www.yourwebsite.com/logo.png",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+1-123-456-7890",
      contactType: "Customer service",
    },
    sameAs: [
      "https://www.facebook.com/yourcompany",
      "https://www.twitter.com/yourcompany",
      "https://www.linkedin.com/company/yourcompany",
    ],
  };

  return (
    <>
      <SEO
        title="About Us - Your Company Name"
        description="Learn more about our company, mission, and team."
        canonicalUrl="https://www.yourwebsite.com/about"
        ogTitle="About Your Company"
        ogDescription="Discover the story behind our innovative solutions"
        ogImage="https://www.yourwebsite.com/about-og-image.jpg"
        jsonLd={orgJsonLd}
      />
      <main>
        {/* Page content */}
        <h1>About Us</h1>
        <p>Welcome to our company...</p>
      </main>
    </>
  );
}
