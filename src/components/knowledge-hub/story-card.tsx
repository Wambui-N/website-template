import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";

interface StoryCardProps {
  story: {
    id: number;
    title: string;
    excerpt: string;
    author: string;
    readTime: string;
    date: string;
    tags: string[];
    imageUrl: string;
  };
}

export function StoryCard({ story }: StoryCardProps) {
  return (
    <article className="group">
      <Link href={`/story/${story.id}`}>
        <div className="grid grid-cols-12 gap-4 items-start">
          <div className="col-span-8">
            <h2 className="text-2xl font-medium mb-2 group-hover:text-primary">
              {story.title}
            </h2>
            <p className="text-muted-foreground mb-4 line-clamp-2">
              {story.excerpt}
            </p>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span>{story.author}</span>
              <span>·</span>
              <span>{story.readTime}</span>
              <span>·</span>
              <span>{story.date}</span>
            </div>
            <div className="flex gap-2 mt-4">
              {story.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
          <div className="col-span-4">
            <div className="aspect-[4/3] relative rounded-lg overflow-hidden">
              <Image
                src={story.imageUrl}
                alt=""
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
}