'use client'
import axios from "axios";
import React, { useEffect, useState } from "react";7


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
            const response = await axios.get("http://localhost:3001/getArticle");
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
            const response = await axios.get("http://localhost:3001/getCategory");
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
