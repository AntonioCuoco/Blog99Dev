'use client'
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const HomeCoverSection = () => {

  useEffect(() => {
    // Funzione auto-invocante
    (async () => {
      handleSubmit();
      handlegetCategories();
    })();
  }, []);

      const [blog,setArticle] = useState([]);
      const [categories,setCategories] = useState([]);
    
      const handleSubmit = async () => {
          try {
            const response = await axios.get("http://localhost:3001/getArticle");
            setArticle(response.data[0]);
            // Ecco la risposta dal server
            console.log("Risposta dal server:", response.status + response.data);
            return response.data;
          } catch (error) {
            console.error("Errore durante la chiamata POST article:", error);
          }
      };
  
      const handlegetCategories = async () => {
          try {
            const response = await axios.get("http://localhost:3001/getCategory");
            setCategories(response.data[0]);
            // Ecco la risposta dal server
            console.log("Risposta dal server:", response.status + response.data);
            return response.data;
          } catch (error) {
            console.error("Errore durante la chiamata POST Category:", error);
          }
      };

  return (
    <div className='w-full inline-block'>
        <article className='flex flex-col items-start justify-end mx-5 sm:mx-10 relative h-[60vh] sm:h-[85vh]'>
            <div className='absolute top-0 left-0 bottom-0 right-0 h-full
            bg-gradient-to-b from-transparent from-0% to-dark/90 rounded-3xl z-0
            ' />
              <Image 
              src={blog.imgCopertina}
              alt={blog.titleArticle}
              fill
              className='w-full h-full object-center object-cover rounded-3xl -z-10'
              sizes='100vw'
              priority
              />

              <div className='w-full lg:w-3/4 p-6 sm:p-8 md:p-12  lg:p-16 flex flex-col items-start justify-center z-0 text-light'>
              <span className="uppercase text-accent dark:text-accentDark font-semibold text-xs sm:text-sm w-fit" style={{backgroundColor:"#000" ,border: 3,borderColor:"cyan",borderStyle:"solid",borderRadius:18,padding:8,color:"white",fontSize:"0.875rem"}}>
                {categories.category} 
              </span> 
                <Link 
                  href={`/blog/${blog.titleArticle}`}
                  className='mt-6'
                > 
                  <h1 className='font-bold capitalize text-lg sm:text-xl md:text-3xl lg:text-4xl'>
                      <span className='bg-gradient-to-r from-accent to-accent dark:from-accentDark/50 
                      dark:to-accentDark/50 bg-[length:0px_6px]
                      hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 '>
                      {blog.titleArticle}
                      </span>
                  </h1>
                </Link> 
                <p className='hidden  sm:inline-block mt-4 md:text-lg lg:text-xl font-in'>
                    {blog.subTitle}
                </p>
              </div>
    </article>
    </div>
  )
}

export default HomeCoverSection