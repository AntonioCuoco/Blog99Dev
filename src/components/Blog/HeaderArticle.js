"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import RetrieveArticle from '@/src/utils/retrieveArticle'
import axios from 'axios'
import { Spin } from 'antd'

const HeaderArticle = (slug) => {

  useEffect(() => {
    // Funzione auto-invocante
    (async () => {
      handleSubmit();
    })();
  }, []);

  const [blog,setBlog] = useState([]);
  const [categories,setCategories] = useState([]);

  const handleSubmit = async () => {
      try {
        const response = await axios.post("http://localhost:8080/cms/retrieveArticleByTitle",slug.slug);
        setBlog(response.data);
        // Ecco la risposta dal server
        console.log("Risposta dal server:", response.status + response.data);
        return blog;
      } catch (error) {
        console.error("Errore durante la chiamata POST article:", error);
      }
  };

  return (
    <div className='w-full flex flex-col md:ml-28'>
      {blog.length === 0 ? 
        <Spin className='fixed top-1/2 left-1/2'/>
       : 
    <div className='w-full flex flex-col h-full'>
      <div className='w-full flex flex-col'>
          <h2 className='text-3xl mb-3'>{blog.length === 0 ? "sto caricando" : blog.titleArticle}</h2>
          <h3 className='text-lg mb-2'>{blog.length === 0 ? "sto caricando" : blog.subTitle}</h3>
          <Image src={blog.imgCopertina} width={200} height={200} className='w-full md:w-11/12 md:h-2/6'/>
          <p className='text-lg mt-3'>{blog.length === 0 ? "sto caricando" : blog.bodyArticle}</p>
      </div>
    </div>
    }
    </div>
  )
}

export default HeaderArticle