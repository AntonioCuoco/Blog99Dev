'use client'
import Link from "next/link";
import BlogLayoutThree from "../Blog/BlogLayoutThree";
import { useState, useEffect } from "react";
import RetrieveAllArticleByCategory from "@/src/utils/retrieveAllArticleByCategory";

const Tutorial = () => {
    const [tutorials, setTutorials] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchTutorials = async () => {
            try {
                const data = await RetrieveAllArticleByCategory("Tutorial");
                setTutorials(data);
            } catch (error) {
                console.error("Errore nel caricamento dei tutorial:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchTutorials();
    }, []);

    return (
      <section className="w-full px-5 sm:px-10 mt-16 sm:mt-24 md:mt-24 flex flex-col items-center justify-center">
        <div className="w-full flex  justify-between">
          <h2 className="w-fit inline-block font-bold capitalize text-2xl md:text-4xl text-dark border-b-2 pb-3">
            Guide
          </h2>
          <Link
            href="/guide"
            className="inline-block font-medium visited:text-[#000] text-accent underline underline-offset-2 md:text-lg mt-0 text-lg"
          >
            vedi tutti
          </Link>
        </div>
        {loading ? (
          <p className="mt-16 text-center text-gray-500">Caricamento guide...</p>
        ) : tutorials.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16 mt-16">
            {tutorials.slice(0,6).map((ithBlog,index) => {
              return(
                <article key={index} className="col-span-1 relative">
                  <BlogLayoutThree number={index} blog={ithBlog}/>
                </article>
              );
            })}
          </div>
        ) : (
          <p className="mt-16 text-center text-gray-500">Nessuna guida disponibile.</p>
        )}
      </section>
    );
  };

export default Tutorial;
