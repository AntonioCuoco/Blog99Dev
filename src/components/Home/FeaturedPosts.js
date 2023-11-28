'use client'
import React, { useEffect, useState } from "react";
import BlogLayoutOne from "../Blog/BlogLayoutOne";
import BlogLayoutTwo from "../Blog/BlogLayoutTwo";

const FeaturedPosts = () => {
      useEffect(() => {
        // Funzione auto-invocante
        (async () => {
          handleSubmit();
          handlegetCategories();
        })();
      }, []);

      const [blog,setBlog] = useState([]);
      const [categories,setCategories] = useState([]);
    
      const handleSubmit = async () => {
          try {
            const response = await axios.get("http://localhost:8080/cms/getArticle");
            setBlog(response.data[0]);
            // Ecco la risposta dal server
            console.log("Risposta dal server:", response.status + response.data);
            return response.data;
          } catch (error) {
            console.error("Errore durante la chiamata POST article:", error);
          }
      };
  
      const handlegetCategories = async () => {
          try {
            const response = await axios.get("http://localhost:8080/cms/getCategory");
            setCategories(response.data[0]);
            // Ecco la risposta dal server
            console.log("Risposta dal server:", response.status + response.data);
            return response.data;
          } catch (error) {
            console.error("Errore durante la chiamata POST Category:", error);
          }
      };


  return (
  <section className="w-full mt-16 sm:mt-24  md:mt-32 px-5 sm:px-10 md:px-24  sxl:px-32 flex flex-col justify-center">
    <h2 className="inline-block font-bold capitalize text-2xl md:text-4xl text-dark dark:text-light border-b-2 w-fit pb-3">Featured Posts</h2>

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
