import ServiceCard from "@/components/sections/services/serviceCards/ServiceCard";
import SEO from "@/components/SEO";
import TextAnimatedDecoration from "@/components/ui/TextAnimatedDecoration";
import {
  BeakerIcon,
  LightBulbIcon,
  ShieldCheckIcon,
  RocketLaunchIcon,
  SparklesIcon,
  CubeIcon,
} from "@heroicons/react/24/solid";

export default function HomePage() {
  const services = [
    {
      title: "Research",
      description: "Cutting-edge research to drive innovation",
      icon: <BeakerIcon className="h-12 w-12" />,
      href: "/services/research",
    },
    {
      title: "Innovation",
      description: "Transforming ideas into groundbreaking solutions",
      icon: <LightBulbIcon className="h-12 w-12" />,
      href: "/services/innovation",
    },
    {
      title: "Security",
      description: "Protecting your assets with advanced security measures",
      icon: <ShieldCheckIcon className="h-12 w-12" />,
      href: "/services/security",
    },
    {
      title: "Launch",
      description: "Propelling your projects to new heights",
      icon: <RocketLaunchIcon className="h-12 w-12" />,
      href: "/services/launch",
    },
    {
      title: "Magic",
      description: "Adding that special touch to your products",
      icon: <SparklesIcon className="h-12 w-12" />,
      href: "/services/magic",
    },
    {
      title: "Integration",
      description: "Seamlessly connecting all your systems",
      icon: <CubeIcon className="h-12 w-12" />,
      href: "/services/integration",
    },
  ];
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
      <section className="flex min-h-screen flex-col items-center justify-center bg-gray-100">
        <h1 className="mb-6 text-4xl font-bold text-gray-900">
          Welcome to Our Services
        </h1>
        <TextAnimatedDecoration href="#" text="welcome!" />
        <p className="text-xl text-gray-600">
          We offer a wide range of professional services to help your business
          grow.
        </p>

        <div className="container mx-auto px-4 py-16">
          <div className="mb-12 text-center">
            <h1 className="mb-4 text-4xl font-bold">
              Welcome to Your Next.js Boilerplate!
            </h1>
            <p className="text-xl text-gray-600">
              Discover our comprehensive suite of services
            </p>
          </div>
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>
    </main>
    </>
  );
}
