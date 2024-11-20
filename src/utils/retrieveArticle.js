'use client'
import axios from "axios";
import { useEffect, useState } from "react";


const RetrieveArticle = (number) => {
      useEffect(() => {
        // Funzione auto-invocante
        (async () => {
          handleSubmit();
          handlegetCategories();
        })();
      }, []);

      const [blog,setBlog] = useState([]);
      const [categories,setCategories] = useState([]);
    
      const handleSubmit = async () => {
          try {
            const response = await axios.get("https://versatile-topic-442111-u7.oa.r.appspot.com/getArticle");
            setBlog(response.data[number]);
            // Ecco la risposta dal server
            console.log("Risposta dal server:", response.status + response.data);
            return blog;
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
};

export default RetrieveArticle;
