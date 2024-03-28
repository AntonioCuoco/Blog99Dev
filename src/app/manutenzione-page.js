import Link from "next/link";
import LottieAnimation from "../components/Contact/LottieAnimation";
import ContactForm from "../components/Contact/ContactForm";

export default function ManutenzionePage() {
  return (
    <main className="w-full h-full dark:bg-dark flex justify-center font-mr">
      <div className="h-screen flex sm:flex-row items-center justify-center flex-col">
      <div className="inline-block w-full  sm:w-4/5 md:w-2/5 sm:h-3/4 h-1/4 sm:border-r-2 sm:border-black sm:border-solid"><LottieAnimation /></div>
      <div className="w-full flex flex-col ml-8">
      <h1 className="text-lg sm:text-3xl">IL SITO E IN MANUTENZIONE</h1>
      <p className="mt-1">Se volete contattare il proprietario, scrivete qui sotto:</p>
      <ContactForm />
      </div>
      </div>
    </main>
  );
}
