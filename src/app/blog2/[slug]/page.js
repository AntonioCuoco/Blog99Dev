import BodyArticle from "@/src/components/Blog/BodyArticle";
import HeaderArticle from "@/src/components/Blog/HeaderArticle";

export const metadata = {
  title: "blogOpenArticle",
  description: `my article`,
};

export default function BlogSlug({params: {slug}}) {
  
  return (
    // <section className="w-full h-auto md:h-[75vh] border-t-2 border-solid border-slate-300 dark:border-light text-dark dark:text-light flex flex-row justify-center mt-1">
    //   <div className="w-full flex flex-row items-center md:w-3/5 px-5 xs:px-10 md:px-16 pb-8 mt-8">
    //     <HeaderArticle slug={slug}/>
    //     <BodyArticle slug={slug}/>
    //   </div>
    // </section>

    <section className="w-full h-auto p-8">
      <div className="w-full h-auto flex flex-col gap-16">
        {/* <Sidebar /> */}
        <HeaderArticle slug={slug}/>
        <BodyArticle slug={slug}/>
      </div>
    </section>
  );
}
