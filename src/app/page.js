'use client'
import HomeCoverSection from "../components/Home/HomeCoverSection";
import RecentPost from "../components/Home/RecentPost";
import RecentPosts from "../components/Home/Articoli";
import Articoli from "../components/Home/Articoli";
import Tutorial from "../components/Home/Tutorial";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center">
      <HomeCoverSection />
      <RecentPost />
      <Articoli />
      <Tutorial />
    </main>
  )
}
