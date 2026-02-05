'use client'
import Image from "next/image";
import Link from "next/link";

const BlogLayoutFour = (props) => {
  return (
    <div className="group flex flex-col gap-4 items-center text-dark dark:text-light" key={props.key}>
      <Link href={`/blog2/${props.titleArticle}`} className="h-full rounded-xl overflow-hidden" onClick={props.setIsModalOpen}>
        <Image
          src={props.imgCopertina}
          // placeholder="blur"
          // blurDataURL={blog.image.blurhashDataUrl}
          alt={props.titleArticle}
          width={20}
          height={20}
          className=" aspect-[4/3] w-full h-full object-cover object-center  group-hover:scale-105 transition-all ease duration-300 "
          sizes="(max-width: 640px) 100vw,(max-width: 1024px) 50vw, 33vw"
        />
      </Link>

      <div className="flex flex-col w-full mt-4 gap-2">
        <span className="uppercase !text-light dark:text-accentDark font-semibold text-xs sm:text-sm w-fit" style={{ backgroundColor: "#000", border: 3, borderColor: "cyan", borderStyle: "solid", borderRadius: 18, padding: 8, color: "white", fontSize: "0.875rem" }}>
          {props.category}
        </span>
        <Link href={`/blog2/${props.titleArticle}`} className="inline-block my-1" onClick={props.setIsModalOpen}>
          <h2 className="font-semibold capitalize  text-base sm:text-lg">
            <span
              className="!text-[#0c0c0c] bg-gradient-to-r from-accent/50 to-accent/50  dark:from-accentDark/50
              dark:to-accentDark/50
              bg-[length:0px_6px]
              group-hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 "
            >
              {props.titleArticle}
            </span>
          </h2>
        </Link>

        <Link href={`/blog2/${props.titleArticle}`} className="inline-block my-1" onClick={props.setIsModalOpen}>
          <p className="capitalize text-sm sm:text-base !text-[#64748b]">
            {props.subTitle}
          </p>
        </Link>
      </div>
    </div>
  );
};

export default BlogLayoutFour;
