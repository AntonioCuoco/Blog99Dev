'use client'
import axios from "axios";
import { useEffect, useState } from "react";

// Funzione asincrona: restituisce l'intero elenco degli articoli recenti
export const getRecentArticles = async () => {
  try {
    const response = await axios.get("https://versatile-topic-442111-u7.oa.r.appspot.com/getRecentArticles");
    return response.data || [];
  } catch (error) {
    console.error("Errore durante la chiamata GET /getRecentArticles:", error);
    return [];
  }
};

// Funzione asincrona: restituisce il singolo articolo all'indice richiesto
export const getRecentArticleByIndex = async (index, slug) => {
  let list = await getRecentArticles();
  if (!Array.isArray(list)) return null;
  if (typeof index !== "number" || index < 0 || index >= list.length) return null;

  if(slug !== undefined && slug !== null) {
    list = list.filter(item => item.titleArticle !== decodeURI(slug));
  }
  return list[index];
};

// Hook client-side per ottenere un singolo articolo recente per indice
export const useRecentArticle = (index) => {
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;
    (async () => {
      try {
        const item = await getRecentArticleByIndex(index);
        if (isMounted) setArticle(item);
      } catch (e) {
        if (isMounted) setError(e);
      } finally {
        if (isMounted) setLoading(false);
      }
    })();
    return () => {
      isMounted = false;
    };
  }, [index]);

  return { article, loading, error };
};

// Default export mantenuto per compatibilità
export default getRecentArticles;
