"use client";
import { data } from "autoprefixer";
import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

export default function ContactForm() {

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
    try {
      const response = await axios.post("http://localhost:8081/email/send",data);
      // Ecco la risposta dal server
      console.log("Risposta dal server post Email:", response.status + response.data);
      return response.data;
    } catch (error) {
      console.error("Errore durante la chiamata POST email:", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mt-12 text-base xs:text-lg sm:text-xl font-medium leading-relaxed font-in"
    >
      Hello! My name is{" "}
      <input
        type="text"
        placeholder="your name"
        {...register("name", { required: true, maxLength: 80 })}
        className="outline-none border-0 p-0 mx-2 focus:ring-0 placeholder:text-center placeholder:text-lg border-b border-gray 
        focus:border-gray bg-transparent"
      />
      and I want to discuss a potential project. You can email me at
      <input type="email" placeholder="your@email" {...register("email", {})}  className="outline-none border-0 p-0 mx-2 focus:ring-0 placeholder:text-center placeholder:text-lg border-b border-gray 
        focus:border-gray bg-transparent"/>
      or reach out to me on
      <input
        type="tel"
        placeholder="your phone"
        {...register("phone_number", {})}
        className="outline-none border-0 p-0 mx-2 focus:ring-0 placeholder:text-center placeholder:text-lg border-b border-gray 
        focus:border-gray bg-transparent"
      />
      Here are some details about my project: <br />
      <textarea {...register("project_details", {})} 
      placeholder="My project is about..."
      rows={3}
      className="w-full outline-none border-0 p-0 mx-0 focus:ring-0  placeholder:text-lg border-b border-gray 
        focus:border-gray bg-transparent" />
      <input type="submit" value="send request" className="mt-8 font-medium inline-block capitalize text-lg sm:text-xl py-2 sm:py-3 px-6 sm:px-8 border-2 border-solid border-dark dark:border-light rounded cursor-pointer"/>
    </form>
  );
}
