"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import axios from 'axios'
import { Spin } from 'antd'
import parse from 'html-react-parser'
import './css/headerArticle.css'

const HeaderArticle = (slug) => {

  
  const [blog,setBlog] = useState(null);
  const [categories,setCategories] = useState([]);
  
  useEffect(() => {
    // Funzione auto-invocante
    (async () => {
      handleSubmit();
    })();
  }, []);
  
  const handleSubmit = async () => {
      try {
        const response = await axios.post("http://localhost:3001/retrieveArticleByTitle",{search: slug.slug});  {/* come%20creare%20blog%20con%20blalalallal */}
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
      {blog === undefined || blog === null ? 
        <Spin className='fixed top-1/2 left-1/2'/>
       : 
    <div className='w-full flex flex-col h-full'>
      <div className='w-full flex flex-col'>
          <h2 className='text-3xl mb-3'>{blog.titleArticle}</h2>
          <h3 className='text-lg mb-2'>{blog.subTitle}</h3>
          <Image src={blog.imgCopertina} width={200} height={200} className='w-full md:w-11/12 md:h-2/6'/>
          {parse(blog.bodyArticle)}
      </div>
    </div>
    }
    </div>
  )
}

export default HeaderArticle