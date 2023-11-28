'use client'
import Link from "next/link";
import React, { useState } from "react";
import BlogLayoutThree from "../Blog/BlogLayoutThree";

const RecentPosts = () => {

   return (
     <section className="w-full  mt-16 sm:mt-24  md:mt-32 px-5 sm:px-10 md:px-24  sxl:px-32 flex flex-col items-center justify-center">
       <div className="w-full flex  justify-between">
         <h2 className="w-fit inline-block font-bold capitalize text-2xl md:text-4xl text-dark dark:text-light border-b-2 pb-3">
           Recent Posts
         </h2>
         <Link
           href="/"
           className="inline-block font-medium text-accent dark:text-accentDark underline underline-offset-2      text-base md:text-lg"
         >
           view all
         </Link>
       </div>
       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-rows-2 gap-16 mt-16">
         {/* {blog.map((ithBlog,index) => {
           return(
             <article key={index} className="col-span-1 row-span-1 relative">
               <BlogLayoutThree number={0}/>
             </article>
           );
         })} */}
            <article className="col-span-1 row-span-1 relative">
              <BlogLayoutThree number={0}/>
            </article>
            <article className="col-span-1 row-span-1 relative">
              <BlogLayoutThree number={1}/>
            </article>
            <article className="col-span-1 row-span-1 relative">
              <BlogLayoutThree number={2}/>
            </article>
            <article className="col-span-1 row-span-1 relative">
              <BlogLayoutThree number={0}/>
            </article>
            <article className="col-span-1 row-span-1 relative">
              <BlogLayoutThree number={1}/>
            </article>
            <article className="col-span-1 row-span-1 relative">
              <BlogLayoutThree number={2}/>
            </article>
            <article className="col-span-1 row-span-1 relative">
              <BlogLayoutThree number={0}/>
            </article>
            <article className="col-span-1 row-span-1 relative">
              <BlogLayoutThree number={1}/>
            </article>
            <article className="col-span-1 row-span-1 relative">
              <BlogLayoutThree number={2}/>
            </article>
       </div>
     </section>
   );
  };

export default RecentPosts;
