"use client"
import Link from "next/link";
import Logo from "./Logo";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "../Icons";
import siteMetadata from "@/src/utils/siteMetaData";
import { useState } from "react";
import search from "@/public/icona-search.png";
import Image from "next/image";
import { useForm } from "react-hook-form";
import axios from "axios";
import BlogLayoutFour from "../Blog/BlogLayoutFour";
import { Modal } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { CloseOutlined, SearchOutlined } from "@ant-design/icons";
import "./index.css";


const Header = () => {

  const mode = useSelector(state => state.blogSlice.Theme);
  const [click, setClick] = useState(false);
  const [IconVisibility, setIconVisibility] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filteredArticle, setFilteredArticle] = useState([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    handleSubmitDataForm(data);
    handleImageClick();
  }
  console.log(errors);

  const handleSubmitDataForm = async (data) => {
    try {
      const response = await axios.post("https://versatile-topic-442111-u7.oa.r.appspot.com/retrieveArticleByName", { search: data.valueSearch });
      setFilteredArticle(response.data);
      showModal();
      // Ecco la risposta dal server
      console.log("Risposta dal server post Email:", response.status + response.data);
      return response.data;
    } catch (error) {
      console.error("Errore durante la chiamata POST email:", error);
    }
  };

  const toggle = () => {
    setClick(!click);
  }

  const handleImageClick = () => {
    setIconVisibility(!IconVisibility);
  }

  const showModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="w-full flex-col items-center" style={{ backgroundColor: mode === "dark" ? "black" : "white" }}>
      <Modal title="Cerca Articoli" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} footer={false}>
        {filteredArticle.map((ithBlog, index) => {
          return <BlogLayoutFour bodyArticle={ithBlog.bodyArticle} titleArticle={ithBlog.titleArticle} imgCopertina={ithBlog.imgCopertina} subTitle={ithBlog.subTitle} category={ithBlog.category} setIsModalOpen={() => setIsModalOpen(false)} key={index} />
        })}
      </Modal>
      <header className="w-full p-4 px-2 sm:px-10 flex items-center justify-between">
        <Logo mode={mode} />
        <div className="flex flex-row">
        {IconVisibility ?
          // <Image src={search} alt="search icon" width={20} height={20} className="rounded-full p-3 mt-2 bg-white"  priority onClick={() => handleImageClick()} layout="responsive" quality={80}/> : null
          <SearchOutlined size={28} className="text-2xl rounded-full p-3 mt-2 bg-white sm:hidden" onClick={() => handleImageClick()} /> : null
        }
        <button className="inline-block z-50 sm:hidden" style={{ marginRight: click ? "0px" : "15px" }} onClick={toggle} aria-label="Hamburger Menu">
          <div className="w-6 cursor-pointer transition-all ease duration-300">
            <div className="relative">
              <span className="absolute top-0 inline-block w-full h-0.5 bg-dark rounded transition-all ease duration-200"
                style={{
                  transform: click ? "rotate(-45deg) translateY(0)" : "rotate(0deg) translateY(6px)"
                }}

              >&nbsp;</span>
              <span className="absolute top-0 inline-block w-full h-0.5 bg-dark rounded transition-all ease duration-200"
                style={{
                  opacity: click ? 0 : 1
                }}
              >&nbsp;</span>
              <span className="absolute top-0 inline-block w-full h-0.5 bg-dark rounded transition-all ease duration-200"
                style={{
                  transform: click ? "rotate(45deg) translateY(0)" : "rotate(0deg) translateY(-6px)"
                }}
              >&nbsp;</span>
            </div>

          </div>
        </button>
        {/* {IconVisibility ? null :
          <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-row justify-center p-2 ml-12">
            <input type="search" className="w-fit h-10 p-3" {...register("valueSearch", { required: true })} onBlur={() => handleImageClick()} />
            <input type="submit" className="ml-3 border-2 rounded-md border-indigo-600 border-solid p-2 bg-white text-black" />
          </form>
        } */}
        </div>

        <nav className=" w-full h-full font-medium capitalize flex flex-col sm:hidden
        fixed top-0 left-0 p-4 text-2xl
     bg-light/80 backdrop-blur-sm z-50
        transition-all ease duration-300
        "
          style={{ display: click ? "flex" : "none" }}
        >
          <CloseOutlined className="text-2xl" onClick={() => setClick(false)} />
          <Link href="/" className="mt-4 relative inline-block text-hover-underline cursor-pointer">Home</Link>
          <Link href="/about" className="mt-4 relative inline-block text-hover-underline cursor-pointer">About</Link>
          <Link href="/contact" className="mt-4 relative inline-block text-hover-underline cursor-pointer">Contact</Link>
          <div className="mt-4 flex gap-3">
            <a href={siteMetadata.linkedin} className="inline-block w-6 h-6 mr-4" aria-label="Reach out to me via LinkedIn" target="_blank"><LinkedinIcon className="hover:scale-125 transition-all ease duration-200" /></a>
            <a href={siteMetadata.github} className="inline-block w-6 h-6 mr-4 bg-white" aria-label="Check my profile on Github" target="_blank"><GithubIcon className="  hover:scale-125 transition-all ease duration-200 dark:fill-light" /></a>
          </div>
          {/* <button onClick={() => dispatch(switchTheme())}
            aria-label="theme-switcher"
            >
                {
                  mode === "light" ? <SunIcon className={"fill-dark"} /> : <MoonIcon className={"fill-dark"} />  
                }
            </button> */}
        </nav>


        <nav className=" w-max py-3 px-8 border border-solid border-dark rounded-full font-medium capitalize  items-center hidden sm:flex
        fixed top-6 right-1/2 translate-x-1/2 bg-light/80 backdrop-blur-sm z-50">
          <Link href="/" className="mr-2 cursor-pointer">Home</Link>
          <Link href="/about" className="mx-2 cursor-pointer">About</Link>
          <Link href="/contact" className="mx-2 cursor-pointer">Contact</Link>
          {/* <button onClick={() => dispatch(switchTheme())}
            aria-label="theme-switcher"
            >
                {
                  mode === "light" ? <SunIcon className={"fill-dark"} /> : <MoonIcon className={"fill-dark"} />
                }
            </button> */}
        </nav>
        <div className=" hidden sm:flex items-center h-fit w-fit">
          {IconVisibility ?
            // <Image src={search} alt="search icon" width={20} height={20} className="rounded-full p-3 mt-2 bg-white"  priority onClick={() => handleImageClick()} layout="responsive" quality={80}/> : null
            <SearchOutlined size={28} className="text-2xl rounded-full p-3 mt-2 bg-white cursor-pointer" onClick={() => handleImageClick()} /> : null
          }
          <a href={siteMetadata.linkedin} className="inline-block w-6 h-6 mr-4" aria-label="Reach out to me via LinkedIn" target="_blank"><LinkedinIcon className="hover:scale-125 transition-all ease duration-200" /></a>
          <a href={siteMetadata.github} className="inline-block w-6 h-6 mr-4 bg-white" aria-label="Check my profile on Github" target="_blank"><GithubIcon className="  hover:scale-125 transition-all ease duration-200 dark:fill-light" /></a>
        </div>
      </header>
      {IconVisibility ? null :
        <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-row justify-center p-2 ml-0 sm:ml-5">
          <input type="search" className="w-fit h-10 p-3" {...register("valueSearch", { required: true })} />
          <input type="submit" className="ml-3 border-2 rounded-md border-indigo-600 border-solid p-2 bg-white text-black"/>
        </form>
      }
    </div>
  )
}

export default Header;