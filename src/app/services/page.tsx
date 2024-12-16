import SEO from "@/components/SEO";
import {
  BeakerIcon,
  LightBulbIcon,
  ShieldCheckIcon,
  RocketLaunchIcon,
  SparklesIcon,
  CubeIcon,
} from "@heroicons/react/24/solid";
import ServiceCard from "@/components/sections/services/serviceCards/ServiceCard";

export default function Services() {
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
        title="Our Services - Your Company Name"
        description="Learn more about our company, mission, and team."
        canonicalUrl="https://www.yourwebsite.com/about"
        ogTitle="About Your Company"
        ogDescription="Discover the story behind our innovative solutions"
        ogImage="https://www.yourwebsite.com/about-og-image.jpg"
      />
      <main className="responsive flex flex-col items-center justify-center">
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
