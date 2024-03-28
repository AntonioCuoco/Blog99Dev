'use client'
import axios from "axios";
import React, { useEffect, useState } from "react";


const RetrieveAllArticle = () => {
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
            const response = await axios.get("https://backend-cms-w52q.onrender.com/cms/getArticle");
            setBlog(response.data);
            // Ecco la risposta dal server
            console.log("Risposta dal server:", response.status + response.data);
            return response.data;
          } catch (error) {
            console.error("Errore durante la chiamata POST article:", error);
          }
      };
  
      const handlegetCategories = async () => {
          try {
            const response = await axios.get("https://backend-cms-w52q.onrender.com/cms/getCategory");
            setCategories(response.data[0]);
            // Ecco la risposta dal server
            console.log("Risposta dal server:", response.status + response.data);
            return response.data;
          } catch (error) {
            console.error("Errore durante la chiamata POST Category:", error);
          }
      };
      return blog;
};

export default RetrieveAllArticle;
