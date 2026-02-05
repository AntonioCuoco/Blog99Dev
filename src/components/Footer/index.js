"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { LinkedinIcon } from "../Icons";
import { FaBitbucket } from "react-icons/fa";
import Link from "next/link";
import siteMetadata from "@/src/utils/siteMetaData";
import axios from "axios";
import Swal from "sweetalert2";
import PrivacyPolicyButton from "../Button/buttonPrivacyPolicy";
import CookiePolicyButton from "../Button/buttonCookiePolicy";

const Footer = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    handleSubmitDataForm(data);
  }
  console.log(errors);

  const handleSubmitDataForm = async (data) => {
    Swal.fire({
      title: "Sei iscritto alla newsletter",
      icon: "success",
    });
    // const dataForm = {
    //   name: 'nuovo utente iscritto alla newsletter', //da cambiare con l'username
    //   email: data.email,
    //   phone_number:'',
    //   project_details:`l utente ${data.email} si è iscritto alla newsletter`
    // };

    // {/* FARE MODALE CHE MOSTRA SE LA CHIAMATA E ANDATA A BUON FINE */}

    // try {
    //   const response = await axios.post("http://localhost:8081/email/send",dataForm);
    //   // Ecco la risposta dal server
    //   console.log("Risposta dal server post Email:", response.status + response.data);

    //   return response.data;
    // } catch (error) {
    //   console.error("Errore durante la chiamata POST email:", error);
    // }
  };

  return (
    <footer className="mt-16 rounded-2xl bg-dark m-2 sm:m-10 flex flex-col items-center !text-light">
      <h2 className="mt-16 font-medium dark:font-bold text-center capitalize text-2xl sm:text-3xl lg:text-4xl px-4 !text-white">
        Devs News | devs guide | devs update
      </h2>
      <p className="mt-5 px-4 text-center w-full sm:w-3/5 font-light dark:font-medium text-sm sm:text-base !text-white">
        Iscriviti per rimanere aggiornato sulle ultime notizie inerenti al mondo di noi sviluppatori come per esempio guide interessanti da studiare o siti che ti possono semplificare il lavoro o notizie dagli strumenti e linguaggi che si utilizzano tutti i giorni
      </p>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className=" mt-6 w-fit sm:min-w-[384px] flex items-stretch bg-light p-3 rounded mx-4"
      >
        <input
          type="email"
          placeholder="Enter your email"
          {...register("email", { required: true, maxLength: 80 })}
          className="w-full bg-transparent pl-2 sm:pl-0 text-dark focus:border-dark focus:ring-0 border-0 border-b mr-2 pb-1"
        />
        {/* aggiungere input username */}
        <input
          type="submit"
          className="bg-dark text-light cursor-pointer font-medium rounded px-3 sm:px-5 py-1"
        />
      </form>
      <div className="flex items-center mt-8 lg:ml-8">
        <a
          href={siteMetadata.linkedin}
          className="inline-block w-6 h-6 mr-4"
          aria-label="Reach out to me via LinkedIn"
          target="_blank"
        >
          <LinkedinIcon className="hover:scale-125 transition-all ease duration-200" />
        </a>
        <a
          href={siteMetadata.bitbucket}
          className="inline-block w-6 h-6 mr-4 fill-light"
          aria-label="Check my profile on BitBucket"
          target="_blank"
        >
          <FaBitbucket className="fill-light dark:fill-dark  hover:scale-125 transition-all ease duration-200 w-[2rem] h-[2rem]" />
        </a>
      </div>

      <div className="w-full mt-16 md:mt-24 relative font-medium border-t border-solid border-light py-6 px-8 flex gap-3 flex-col md:flex-row items-center justify-between">
        <p className="text-center !text-white">
          &copy;2025 99DEV. All rights reserved.
        </p>
        <div className="flex items-center gap-8">
          <PrivacyPolicyButton />
          <CookiePolicyButton />
          {/* <PrivacyPolicy />
          <CookiePolicy /> */}
        </div>
        <div className="text-center">
          Made with &hearts; by{" "}
          <a href="https://99dev.net" className="underline" target="_blank">
            99DEV
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
