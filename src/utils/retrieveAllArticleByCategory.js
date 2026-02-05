'use client'
import axios from "axios";

const RetrieveAllArticleByCategory = async (category) => {
    try {
        const response = await axios.post("https://versatile-topic-442111-u7.oa.r.appspot.com/getArticleByCategory", { category: category });
        console.log("Risposta dal server:", response.status + response.data);
        return response.data;
    } catch (error) {
        console.error("Errore durante la chiamata POST article:", error);
        return [];
    }
};

export default RetrieveAllArticleByCategory;
