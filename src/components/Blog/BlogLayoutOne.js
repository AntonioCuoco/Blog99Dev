'use client'
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";

const BlogLayoutOne = (props) => {
  useEffect(() => {
    // Funzione auto-invocante
    (async () => {
      handleSubmit(props.number);
      handlegetCategories();
    })();
  }, []);

  const [blog, setBlogArticle] = useState([]);
  const [categories, setCategories] = useState([]);


  const handleSubmit = async (number) => {
    try {
      const response = await axios.get("https://versatile-topic-442111-u7.oa.r.appspot.com/getArticle");
      setBlogArticle(response.data[number]);
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
    <div className="group inline-block overflow-hidden rounded-xl">
      <div
        className="absolute top-0 left-0 bottom-0 right-0 h-full
            bg-gradient-to-b from-transparent from-0% to-dark/90 rounded-xl z-10
            "
      />
      <div className="relative">
        <Image
          src={blog.imgCopertina}
          // placeholder="blur"

          alt={blog.titleArticle}
          width={60}
          height={40}
          className="w-full h-full object-center object-cover rounded-xl group-hover:scale-105 transition-all ease duration-300"
        />
      </div>

      <div className="w-full absolute bottom-0 p-4 xs:p-6 sm:p-10 z-20">
        {/* <Tag link={`/categories/${slug(categories.category)}`} name={categories.category}
        className="px-6 text-xs font-bold sm:text-sm sm:font-bold py-1 sm:py-2 !border"
        /> */}
        <span className="uppercase text-accent dark:text-accentDark font-semibold text-xs sm:text-sm w-fit" style={{ backgroundColor: "#000", border: 3, borderColor: "cyan", borderStyle: "solid", borderRadius: 18, padding: 8, color: "white", fontSize: "0.875rem" }}>
          {categories.category}
        </span>
        <Link href={`/blog/${blog.titleArticle}`} className="mt-6">
          <h2 className="font-bold capitalize text-sm xs:text-base sm:text-xl md:text-2xl text-light mt-2 sm:mt-4">
            <span
              className="bg-gradient-to-r from-accent to-accent bg-[length:0px_6px] dark:from-accentDark/50 dark:to-accentDark/50
                group-hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500"
            >
              {blog.titleArticle}
            </span>
          </h2>
        </Link>
        <Link href={`/blog/${blog.titleArticle}`} className="mt-6">
          <h2 className="capitalize text-sm xs:text- sm:text-lg md:text-xl text-light mt-2 sm:mt-4">
            {blog.subTitle}
          </h2>
        </Link>
      </div>
    </div>
  );
};

export default BlogLayoutOne;
