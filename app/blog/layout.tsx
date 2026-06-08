import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Journal | Matthew Lekker Photography",
  description: "Behind-the-lens stories, shoot breakdowns, and design insights from architectural photographer Matthew Lekker.",
  // noindex until content exists
  robots: {
    index: false,
    follow: true,
  },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
