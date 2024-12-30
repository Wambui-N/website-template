"use client";

import { StoryCard } from "./story-card";

const SAMPLE_STORIES = [
  {
    id: 1,
    title: "Living with Chronic Pain: My Journey to Acceptance",
    excerpt: "After years of struggling with fibromyalgia, I've learned valuable lessons about self-care and resilience...",
    author: "Sarah Johnson",
    readTime: "6 min read",
    date: "Mar 15",
    tags: ["Chronic Pain", "Mental Health"],
    imageUrl: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=500&auto=format"
  },
  {
    id: 2,
    title: "Understanding Anxiety: A Doctor's Personal Story",
    excerpt: "As both a psychiatrist and someone who has experienced anxiety, I want to share insights from both perspectives...",
    author: "Dr. Michael Chen",
    readTime: "8 min read",
    date: "Mar 14",
    tags: ["Mental Health", "Professional Insights"],
    imageUrl: "https://images.unsplash.com/photo-1474418397713-7ede21d49118?w=500&auto=format"
  }
];

export function KnowledgeHubFeed() {
  return (
    <div className="space-y-8">
      {SAMPLE_STORIES.map((story) => (
        <StoryCard key={story.id} story={story} />
      ))}
    </div>
  );
}