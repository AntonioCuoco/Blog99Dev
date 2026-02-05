"use client"
import { useEffect, useState } from 'react'
import axios from 'axios'
import BlogLayoutFive from './BlogLayoutFive'
import parse from 'html-react-parser'
import { Spin } from 'antd'
import { convertFromIsoStringToDate, isNilAndLenghtIs0 } from '@/src/utils/utils'
import WrittenBy from './WrittenBy'

const BodyArticle = (slug) => {

  useEffect(() => {
    // Funzione auto-invocante
    (async () => {
      handleSubmit();
    })();
  }, []);

  const [blog, setBlog] = useState([]);

  const handleSubmit = async () => {
    try {
      const response = await axios.post("https://versatile-topic-442111-u7.oa.r.appspot.com/retrieveArticleByTitle", { search: slug.slug });
      setBlog(response.data);
      // Ecco la risposta dal server
      console.log("Risposta dal server:", response.status + response.data); {/* il dato dataPubblicazione arrivato in formato ISOstring e non direttamente in formato quindi la data va parsata tramite la funzione di utils*/ }
      return blog;
    } catch (error) {
      console.error("Errore durante la chiamata POST article:", error);
    }
  };

  console.log(blog);

  return (
    //capire come far funzionare il loading qui
    <div className='w-full flex flex-col items-center justify-center'>
      {blog === undefined || blog === null ?
        <Spin className='fixed top-1/2 left-1/2' />
        :
        <div className='w-full flex flex-col lg:flex-row gap-4'>
          <div className='w-full h-auto'>
            {isNilAndLenghtIs0(blog.bodyArticle) ? <Spin className='fixed top-1/2 left-1/2' /> : parse(blog.bodyArticle)}
          </div>
          <div className='w-full lg:w-1/3 flex flex-col gap-4'>
            <WrittenBy />
            <p><span className='font-semibold capitalize text-base sm:text-lg whitespace-nowrap mr-2'>Data Pubblicazione:</span>{convertFromIsoStringToDate(blog.dataPubblicazione)}</p>
            <h4 className='text-lg uppercase font-semibold mt-8'>Recent Post</h4>
            <div className='flex flex-col gap-8 lg:gap-4'>
              <BlogLayoutFive number={0} recentPost={true} />
              <BlogLayoutFive number={1} recentPost={true} />
            </div>
          </div>
        </div>
      }
    </div>
  )
}

export default BodyArticle;
