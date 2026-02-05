import BodyArticle from "@/src/components/Blog/BodyArticle";
import HeaderArticle from "@/src/components/Blog/HeaderArticle";
import Sidebar from "@/src/components/Blog/Sidebar";

export const metadata = {
  title: "blogOpenArticle",
  description: `my article`,
};

export default function BlogSlug({params: {slug}}) {
  
  return (
    <section className="w-full h-auto p-8">
      <div className="w-full h-auto flex flex-col gap-16">
        <HeaderArticle slug={slug}/>
        <BodyArticle slug={slug}/>
      </div>
    </section>
  );
}
