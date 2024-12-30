import { Badge } from "@/components/ui/badge";
import Link from "next/link";

const POPULAR_TAGS = [
  "Mental Health",
  "Chronic Pain",
  "Patient Stories",
  "Healthcare Access",
  "Wellness Tips",
  "Recovery Journey",
  "Support Systems",
  "Medical Research"
];

export function PopularTags() {
  return (
    <div>
      <h2 className="text-xl mb-4">Popular Topics</h2>
      <div className="flex flex-wrap gap-2">
        {POPULAR_TAGS.map((tag) => (
          <Link key={tag} href={`/tag/${tag.toLowerCase().replace(/\s+/g, '-')}`}>
            <Badge variant="secondary" className="hover:bg-secondary/80">
              {tag}
            </Badge>
          </Link>
        ))}
      </div>
    </div>
  );
}