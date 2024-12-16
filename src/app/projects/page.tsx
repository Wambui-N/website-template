import SEO from "@/components/SEO";

export default function Projects() {

  return (
    <>
      <SEO
        title="Our Projects - Your Company Name"
        description="Learn more about our company, mission, and team."
        canonicalUrl="https://www.yourwebsite.com/about"
        ogTitle="About Your Company"
        ogDescription="Discover the story behind our innovative solutions"
        ogImage="https://www.yourwebsite.com/about-og-image.jpg"
      />
      <main>
        {/* Page content */}
        <div className="container mx-auto px-4 ">
          <div className="py-32 text-center">
            <h1 className="mb-4 text-4xl font-bold">Welcome to Our Services</h1>
            <p className="text-xl text-gray-600">
              We offer a wide range of professional services to help your
              business grow.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
