'use client'
import { useState, useEffect } from "react";
import RetrieveAllArticleByCategory from "@/src/utils/retrieveAllArticleByCategory";
import BlogLayoutSix from "../Blog/BlogLayoutSix";

export default function AllGuide() {
    const [guides, setGuides] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (async () => {
            try {
                const data = await RetrieveAllArticleByCategory("Tutorial");
                setGuides(data.slice(0, 6));
            } catch (error) {
                console.error("Errore nel caricamento delle guide:", error);
            } finally {
                setLoading(false);
            }
        })();
    }, []);

    return (
        <>
            <h1 className="text-6xl py-12 text-center">Guide</h1>
            {loading ? (
                <p className="text-center mt-8">Caricamento guide...</p>
            ) : guides.length === 0 ? (
                <p className="text-center mt-8">Nessuna guida disponibile.</p>
            ) : (
                <div className="grid grid-cols-3 px-10">
                    {
                        guides.map((ithBlog, index) => {
                            return (
                                <article key={index} className="col-span-1 row-span-1 relative mt-4 p-4">
                                    <BlogLayoutSix blog={ithBlog} />
                                </article>
                            );
                        })
                    }
                </div>
            )}
        </>
    );
};