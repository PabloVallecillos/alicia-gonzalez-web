import { ReactNode } from "react";

export default function PostsLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-bg-primary pt-24 pb-16">
      <article className="prose prose-invert mx-auto px-6 max-w-3xl lg:prose-lg prose-headings:font-headings prose-headings:text-gold prose-a:text-gold hover:prose-a:text-gold-light">
        {children}
      </article>
    </div>
  );
}
