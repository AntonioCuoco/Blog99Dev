'use client'
import axios from "axios";
import React, { useEffect, useState } from "react";


const RetrieveAllArticle = () => {
      useEffect(() => {
        // Funzione auto-invocante
        (async () => {
          handleSubmit();
        })();
      }, []);

      const [blog,setBlog] = useState([]);
    
      const handleSubmit = async () => {
          try {
            const response = await axios.get("https://versatile-topic-442111-u7.oa.r.appspot.com/getArticle");
            setBlog(response.data);
            // Ecco la risposta dal server
            console.log("Risposta dal server:", response.status + response.data);
            return response.data;
          } catch (error) {
            console.error("Errore durante la chiamata POST article:", error);
          }
      };

      return blog;
};

export default RetrieveAllArticle;
