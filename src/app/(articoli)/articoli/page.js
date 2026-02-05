import AllArticle from "@/src/components/Articoli/AllArticle";

export const metadata = {
    title: "Tutti gli Articoli",
    description: `Lista di tutti gli articoli`,
  };
  
  export default function About() {
    return (
      <>
        <AllArticle />
      </>
    );
  }