import Link from "next/link";

export function TrendingStories() {
  return (
    <div>
      <h2 className="text-xl mb-4">Trending on Knowledge Hub</h2>
      <div className="space-y-6">
        {[1, 2, 3].map((i) => (
          <div key={i} className="flex gap-4">
            <span className="text-3xl text-muted-foreground/30">
              {String(i).padStart(2, '0')}
            </span>
            <div>
              <div className="text-sm text-muted-foreground mb-2">
                <span>Emma Thompson</span>
                <span> · </span>
                <span>Mar 16</span>
              </div>
              <Link 
                href="#" 
                className="font-medium hover:text-primary line-clamp-2"
              >
                Breaking the Stigma: Mental Health in the Workplace
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}