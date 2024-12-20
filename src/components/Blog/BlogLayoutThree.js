'use client'
import { isNilAndLenghtIs0 } from "@/src/utils/utils";
import axios from "axios";
import { format, parseISO, startOfDay } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const BlogLayoutThree = (props) => {

  useEffect(() => {    // Funzione auto-invocante
    (async () => {
      handleSubmit();
      handlegetCategories();
    })();
  },[]);

  const [blog,setBlogArticle] = useState([]);
  const [categories,setCategories] = useState([]);

  const handleSubmit = async () => {
      try {
        const response = await axios.get("https://versatile-topic-442111-u7.oa.r.appspot.com/getArticle");
        setBlogArticle(response.data[props.number]);
        // Ecco la risposta dal server
        console.log("Risposta dal server:", response.status + response.data);
        return response.data;
      } catch (error) {
        console.error("Errore durante la chiamata POST article:", error);
      }
  };

  const handlegetCategories = async () => {
      try {
        const response = await axios.get("https://versatile-topic-442111-u7.oa.r.appspot.com/getCategory");
        setCategories(response.data[0]);
        // Ecco la risposta dal server
        console.log("Risposta dal server:", response.status + response.data);
        return response.data;
      } catch (error) {
        console.error("Errore durante la chiamata POST Category:", error);
      }
  };



  return (
    <div className="group flex flex-col items-center text-dark border border-slate-300 p-2">
      <div className='absolute top-0 left-0 bottom-0 right-0 h-full
            bg-gradient-to-b from-transparent from-10% to-zinc-400/20 z-0
            ' />
      <Link href={`/blog/${blog.titleArticle}`} className="h-full rounded-xl overflow-hidden">
        <Image
          src={blog.imgCopertina}
          // placeholder="blur"
          // blurDataURL={blog.image.blurhashDataUrl}
          alt={blog.titleArticle}
          width={20}
          height={20}
          className=" aspect-[4/3] w-full h-full object-scale-down object-center  group-hover:scale-105 transition-all ease duration-300 "
          sizes="(max-width: 640px) 100vw,(max-width: 1024px) 50vw, 33vw" 
        />
      </Link>

      <div className="flex flex-col w-full mt-4 ">
        <span className="uppercase text-accent dark:text-accentDark font-semibold text-xs sm:text-sm w-fit" style={{backgroundColor:"#000" ,border: 3,borderColor:"cyan",borderStyle:"solid",borderRadius:18,padding:8,color:"white",fontSize:"0.875rem"}}>
           {categories.category} 
        </span>
        <Link href={`/blog/${blog.titleArticle}`} className="inline-block my-1">
          <h2 className="font-semibold capitalize  text-base sm:text-lg">
            <span
              className="bg-gradient-to-r from-accent/50 to-accent/50  dark:from-accentDark/50
              dark:to-accentDark/50
              bg-[length:0px_6px]
              group-hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 "
            >
              {blog.titleArticle}
            </span>
          </h2>
        </Link>

        <Link href={`/blog/${blog.titleArticle}`} className="inline-block my-1">
          <h2 className="capitalize  text-sm sm:text-base">
              {blog.subTitle}
          </h2>
        </Link>
        <span className="capitalize text-gray dark:text-light/50 font-semibold text-sm  sm:text-base">
          {isNilAndLenghtIs0(blog.dataPubblicazione) ? "Data non disponibile" : format(new Date(blog.dataPubblicazione), "dd/MM/yyyy")}
        </span>
      </div>
    </div>
  );
};

export default BlogLayoutThree;
