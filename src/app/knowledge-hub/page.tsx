import { KnowledgeHubFeed } from "@/components/knowledge-hub/feed";
import { PopularTags } from "@/components/knowledge-hub/popular-tags";
import { TrendingStories } from "@/components/knowledge-hub/trending-stories";
import SEO from "@/components/SEO";
import { SiteHeader } from "@/components/ui/site-header";

export default function KnowledgeHub() {
  return (
    <>
      <SEO
        title="Knowledge Hub - Your Company Name"
        description="Learn more about our company, mission, and team."
        canonicalUrl="https://www.yourwebsite.com/about"
        ogTitle="About Your Company"
        ogDescription="Discover the story behind our innovative solutions"
        ogImage="https://www.yourwebsite.com/about-og-image.jpg"
      />
      <main>
        <div className="responsive flex min-h-screen flex-col">
          {/* <SiteHeader /> */}
          <main className="container flex-1 py-8">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
              {/* Main Content */}
              <div className="lg:col-span-8">
                <h1 className="mb-8">Knowledge Hub</h1>
                <KnowledgeHubFeed />
              </div>

              {/* Sidebar */}
              <aside className="lg:col-span-4">
                <div className="sticky top-20 space-y-8">
                  <TrendingStories />
                  <PopularTags />
                </div>
              </aside>
            </div>
          </main>
        </div>
      </main>
    </>
  );
}
