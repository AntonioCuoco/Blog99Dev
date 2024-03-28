"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import axios from 'axios'
import BlogLayoutFive from './BlogLayoutFive'
import { Spin } from 'antd'

const BodyArticle = (slug) => {

  useEffect(() => {
    // Funzione auto-invocante
    (async () => {
      handleSubmit();
    })();
  }, []);

  const [blog,setBlog] = useState([]);

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
    //capire come far funzionare il loading qui
    <div className='w-1/3 flex flex-col'>
      {blog.length === 0 ? 
        null
       : 
        <div className='w-fit flex flex-col'>
          <h3 className='text-lg uppercase font-semibold'>Recent Post</h3>
          <div>
            <BlogLayoutFive number={0}/>
            <BlogLayoutFive number={1}/>
          </div>
        </div>
     }
    </div>
  )
}

export default BodyArticle;
