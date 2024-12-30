export function OurMission() {
    return (
      <section className="py-24">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="mb-6">Our Mission</h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  At Wellness Dialogues, we believe that every healthcare journey
                  tells a story worth sharing. Our mission is to create a space
                  where these stories can inspire, educate, and connect.
                </p>
                <p>
                  We're building more than just a platform - we're nurturing a
                  community where experiences are shared with authenticity,
                  understanding is fostered through genuine dialogue, and support
                  is always available.
                </p>
              </div>
            </div>
            <div className="relative aspect-square rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=800&auto=format"
                alt="People supporting each other"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>
    );
  }