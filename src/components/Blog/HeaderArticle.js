"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import axios from 'axios'
import { Spin } from 'antd'
import './css/headerArticle.css'

const HeaderArticle = (slug) => {


  const [blog, setBlog] = useState(null);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Funzione auto-invocante
    (async () => {
      handleSubmit();
    })();
  }, []);

  const handleSubmit = async () => {
    try {
      const response = await axios.post("https://versatile-topic-442111-u7.oa.r.appspot.com/retrieveArticleByTitle", { search: slug.slug }); {/* come%20creare%20blog%20con%20blalalallal */ }
      setBlog(response.data);
      // Ecco la risposta dal server
      console.log("Risposta dal server:", response.status + response.data);
      return blog;
    } catch (error) {
      console.error("Errore durante la chiamata POST article:", error);
    }
  };

  return (
    <div className='w-full flex flex-col items-center justify-center'>
      {blog === undefined || blog === null ?
        <Spin className='fixed top-1/2 left-1/2' />
        :
        <div className='w-full flex flex-col h-full items-center justify-center'>
          <div className='w-full flex flex-col items-center justify-center'>
            <h2 className='text-3xl mb-3 text-center'>{blog.titleArticle}</h2>
            <h3 className='text-lg mb-2 text-center'>{blog.subTitle}</h3>
            <div className='relative h-[60vh] sm:h-[87vh] w-full flex items-center justify-center'>
              <div className='absolute top-0 left-0 bottom-0 right-0 h-full
            bg-gradient-to-b from-transparent from-0% to-dark/90 rounded-3xl z-0
            ' />
              <Image src={blog.imgCopertina} width={200} height={200} className='w-full h-auto md:w-auto md:h-auto md:border-2 md:border-solid md:border-slate-300 dark:md:border-light' />
            </div>
          </div>
        </div>
      }
    </div>
  )
}

export default HeaderArticle