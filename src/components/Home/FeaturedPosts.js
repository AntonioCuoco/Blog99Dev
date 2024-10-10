'use client'
import BlogLayoutOne from "../Blog/BlogLayoutOne";
import BlogLayoutTwo from "../Blog/BlogLayoutTwo";

const FeaturedPosts = () => {

  return (
  <section className="w-full mt-16 sm:mt-24  md:mt-32 px-5 sm:px-10 md:px-24  sxl:px-32 flex flex-col justify-center">
    <h2 className="inline-block font-bold capitalize text-2xl md:text-4xl text-dark border-b-2 w-fit pb-3">Featured Posts</h2>

    <div className="grid grid-cols-2 grid-rows-2 gap-6  mt-10 sm:mt-16">
      <article className=" col-span-2  sxl:col-span-1 row-span-2 relative">
        <BlogLayoutOne number={0}/>
      </article>
      <article className=" col-span-2 sm:col-span-1 row-span-1 relative">
        <BlogLayoutTwo number={0}/>
      </article>
      <article className="col-span-2 sm:col-span-1 row-span-1 relative">
        <BlogLayoutTwo number={0}/>
      </article>
    </div>
  </section>
  )
};

export default FeaturedPosts;