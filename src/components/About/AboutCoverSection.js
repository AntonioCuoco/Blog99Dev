import Image from 'next/image'
import React from 'react'
import profileCharacter from "../../../public/character.png"

const AboutCoverSection = () => {
  return (
    <section className='w-full md:h-[75vh] border-b-2 border-solid border-dark dark:border-light flex flex-col md:flex-row items-center justify-center text-dark dark:text-light'>
      <div className='w-full md:w-1/2 h-full border-r-2 border-solid border-dark dark:border-light flex justify-center'>
        <Image src={profileCharacter} alt="99DEV"
          className='w-4/5  xs:w-3/4 md:w-full h-full object-contain object-center'
          priority
          sizes="(max-width: 768px) 100vw,(max-width: 1180px) 50vw, 50vw"
        />
      </div>

      <div className='w-full md:w-1/2 flex flex-col text-left items-start justify-center px-5 xs:p-10 pb-10 lg:px-16'>
        <h2 className='font-bold capitalize text-4xl xs:text-5xl xl:text-6xl  text-center lg:text-left'>
          Sogna in grande, Lavora sodo e non ti arrendere mai!
        </h2>
        <p className='font-medium mt-4 text-base'>
          Sono un Frontend Developer con una forte passione per l’informatica, nata quando ero molto piccolo e cresciuta nel tempo insieme alla mia curiosità per il mondo dello sviluppo software.
          Il mio percorso è iniziato studiando la programmazione in generale, per poi specializzarmi sempre di più nel frontend, ambito in cui ho trovato il perfetto equilibrio tra logica, esperienza utente e cura del dettaglio.

          Nel corso delle mie esperienze ho avuto modo di lavorare in team, confrontarmi con altre figure tecniche e comprendere l’importanza della collaborazione, del codice condiviso e dei processi di sviluppo ben strutturati. Sono una persona che impara velocemente, soprattutto quando si tratta di nuove tecnologie o nuovi approcci.

          Man mano che proseguo nel mio percorso professionale, continuo a studiare e sperimentare soluzioni moderne e innovative: dal serverless con AWS, a linguaggi backend come .NET, fino a nuove architetture e pattern lato frontend come i microfrontend e tanstack e metodologie sempre più efficaci per lo sviluppo in React.

          Credo fortemente nella formazione continua, nella qualità del codice e nella capacità di adattarsi a un ecosistema tecnologico in costante evoluzione.
        </p>
      </div>
    </section>
  )
}

export default AboutCoverSection