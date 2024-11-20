'use client'
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";
import { format } from "date-fns";

const BlogLayoutFive = (props) => {
  useEffect(() => {
    // Funzione auto-invocante
    (async () => {
      handleSubmit();
      handlegetCategories();
    })();
  }, []);
  
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
        setCategories(response.data[props.number]);
        // Ecco la risposta dal server
        console.log("Risposta dal server:", response.status + response.data);
        return response.data;
      } catch (error) {
        console.error("Errore durante la chiamata POST Category:", error);
      }
  };

  return (
    <div className="group grid grid-cols-12 gap-4 items-center text-dark dark:text-light mt-6">
      <Link
        href={`/blog/${blog.titleArticle}`}
        className=" col-span-12  lg:col-span-4 h-full rounded-xl overflow-hidden"
      >
        <Image
          src={blog.imgCopertina}
          // placeholder="blur"
          // blurDataURL={blog.image.blurhashDataUrl}
          alt={blog.titleArticle}
          width={20}
          height={20}
          className="aspect-square w-full h-min h-full object-cover object-center group-hover:scale-105 transition-all ease duration-300 rounded-full border-2 border-black"
          sizes="(max-width: 640px) 100vw,(max-width: 1024px) 50vw, 33vw"
        />
       </Link> 

      <div className="col-span-12  lg:col-span-8 w-full flex flex-col ">
        <span className="inline-block uppercase text-accent dark:text-accentDark font-semibold text-xs sm:text-sm border-4 w-fit" style={{backgroundColor:"#000" ,border: 3,borderColor:"cyan",borderStyle:"solid",borderRadius:18,padding:8,color:"white",fontSize:"0.875rem"}}>
          {categories.category}
        </span>
         <Link href={`/blog/${blog.titleArticle}`} className="inline-block my-1"> 
          <h2 className="font-semibold capitalize text-base sm:text-lg">
            <span
              className="bg-gradient-to-r from-accent/50 dark:from-accentDark/50 to-accent/50 dark:to-accentDark/50 bg-[length:0px_6px]
                group-hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 "
            >
              {blog.titleArticle}
            </span>
          </h2>
         </Link>
         {/* <Link href={`/blog/${blog.titleArticle}`} className="inline-block my-1"> 
          <h2 className="capitalize text-base sm:text-base">
              {blog.subTitle}
          </h2>
         </Link> */}

        <span className="inline-block w-full capitalize text-gray dark:text-light/50 font-semibold  text-xs sm:text-base">
          {format(new Date(2023, 10, 17), "dd/MM/yyyy")}
        </span>
      </div>
    </div>
  );
};

export default BlogLayoutFive;
