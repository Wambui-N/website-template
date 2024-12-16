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
      <section className="flex min-h-screen flex-col items-center justify-center ">
        <div className="container mx-auto px-4 py-16">
          <div className="mb-12 text-center">
            <h1 className="mb-4 text-4xl font-bold">
              Welcome to Your Next.js Boilerplate!
            </h1>
            <p className="text-xl text-gray-600">
              Discover our comprehensive suite of services
            </p>
          </div>
          
        </div>
      </section>
    </main>
    </>
  );
}
