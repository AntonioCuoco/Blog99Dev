import BodyArticle from "@/src/components/Blog/BodyArticle";
import HeaderArticle from "@/src/components/Blog/HeaderArticle";
import Sidebar from "@/src/components/Blog/Sidebar";

export const metadata = {
  title: "blogOpenArticle",
  description: `my article`,
};

export default function BlogSlug({params: {slug}}) {
  
  return (
    <section className="w-full h-auto md:h-[75vh] border-t-2 border-solid border-slate-300 dark:border-light text-dark dark:text-light flex flex-row justify-between mt-1">
      <div className="w-full h-auto flex flex-row justify-between md:w-full px-5 xs:px-10 md:px-16 pb-8 mt-8">
        {/* <div className="w-full h-auto md:w-2/6">
          <Sidebar />
        </div>
        <div className="w-full h-auto md:w-2/6">
          <HeaderArticle slug={slug}/>
        </div>
        <div className="w-full h-auto md:w-2/6">
          <BodyArticle slug={slug}/>
        </div> */}
        <Sidebar />
        <HeaderArticle slug={slug}/>
        <BodyArticle slug={slug}/>
      </div>
    </section>
  );
}