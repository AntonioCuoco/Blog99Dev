'use client'
import { useState, useEffect } from "react";
import RetrieveAllArticleByCategory from "@/src/utils/retrieveAllArticleByCategory";
import BlogLayoutSix from "../Blog/BlogLayoutSix";

export const metadata = {
    title: "About Me",
    description: `Here are some details about my self.`,
};

export default function AllArticle() {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (async () => {
            try {
                const data = await RetrieveAllArticleByCategory("Articolo");
                setArticles(data);
            } catch (error) {
                console.error("Errore nel caricamento degli articoli:", error);
            } finally {
                setLoading(false);
            }
        })();
    }, []);

    return (
        <>
            <h1 className="text-6xl py-12 text-center">Articoli</h1>
            {loading ? (
                <p className="text-center mt-8">Caricamento articoli...</p>
            ) : articles.length === 0 ? (
                <p className="text-center mt-8">Nessun articolo disponibile.</p>
            ) : (
                <div className="grid grid-cols-3 px-10">
                    {articles.map((ithBlog, index) => {
                        return (
                            <article key={index} className="relative mt-4 p-4">
                                <BlogLayoutSix blog={ithBlog} />
                            </article>
                        );
                    })}
                </div>
            )}
        </>
    );
}