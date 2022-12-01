import React, { useEffect } from 'react'
import Image, { StaticImageData } from 'next/image'
import image from "public/assets/bizworx.png"
import transport from "public/assets/transport.png"
import workPlace from "public/assets/WorkPlace.png"
import workPlaceTwo from "public/assets/WorkPlaceTwo.png"
import organogram from "public/assets/organogram.png"
import processTabel from "/public/assets/ProcessTabel.png"
import usecasediagram from "public/assets/usecasediagram.png"
import uitgewerktProcess from "/public/assets/UitgewerktProcess.png"
import opinion from "public/assets/opinion.png"
import rules from "public/assets/rules.png"
import Lunch from "public/assets/lunch.png"
import { useScroll } from "framer-motion"

// const { scrollY } = useScroll()

// useEffect(() => {
//   return scrollY.onChange((latest) => {
//     console.log("Page scroll: ", latest)
//   })
// }, [])

const Poster = () => {
  return (
    <PosterLayout>
      <PosterCardsTitle src={image} title={"Bizworx creative it solutions"} text={"Bizworx Solution Provider was founded around April 2004, and we have been working in different areas of expertise, mainly as a service provider in the airfreight logistics branch at Schiphol. Being a service provider for logistics companies brings challenges and we love them. Adres : Opaallaan 1180, 2132 LN Hoofddorp nummer : +31 (0) 20 8800 180"} />
      <PosterCards src={transport} title={"bereikbaarheid :"} text={"Ik fiets elke dag. Het is best wel te doen paar plekken waar je moet stoppen maar niks te erg. Met de bus moet je nog een stuk lopen en als je de auto gebruikt ben je zoizo het snelst."} bgColor={'bg-gray-600'} />
      <PosterCardTwoImages src={workPlace} secondSrc={workPlaceTwo} title={"Werkplek omgeving :"} text={"Ik vind dat de sfeer helemaal geweldig hier iedereen kan met elkaar lachen en je kan ook zelfstandig voor jezelf gaan werken en maar tegelijkertijd nogsteeds voor hulp vragen als je echt vast zit."} bgcolor={'bg-red-600'} />
      <PosterCards src={Lunch} title={"Pauzes :"} text={"We hebben vaak pauze ergens tussen 12:00 en 13:00 gewoon voor een kleine lunch en een beetje praten over dingen die er zijn gebeurt op het nieuws of gewoon door het weekend. Op maandag doen ze altijd de boodschappen Ik heb mijn eigen eten dus ik ga nooit eigenlijk mee ik lunch wel gewoon nogsteeds met hun samen."} bgColor={'bg-gray-600'} />
      <PosterCardTwoTexts src={organogram} text={"De mensen waar ik mee werk hier hebben niet echt een organogram zelf of een type hierarchy, maar jeroen zij dat ze meer een driehoek zijn ze zijn allemaal belangerijk in het bedrijf en werken allemaal samen met elkaar om er iets van te maken. Tim is de hoofdpersoon van alle software creëren Koen is de lead egineer van het bedrijf haar neemt ook elk telefoontje op en praat met klanten en helpt ze met hun pc en andere elektronica en Jeroen is de founder van Bizworx hij helpt voornamelijk Tim met een tweede perspectief op problemen en praat ook met Koen veel over ideeën over het bedrijf."} para={'Ik ben Davide één van de stage personen ik zit in het midden van de driehoek wel meer geleunt naar Tim natuurlijk omdat ik ook software develepor/programmeren doe en Tim is mijn begeleider op Bizworx. We hebben ook nog een ander stage persoon die heet Ali hij is meer aan de engineering stuck dus hij zit ook meer gericht naar Koen die hem begeleid en tips geeft.'} bgcolor={'bg-red-600'} />
      <PosterCardImage src={processTabel} bgcolor={'bg-gray-600'} />
      <PosterCardImage src={usecasediagram} bgcolor={'bg-red-600'} />
      <PosterCardImage src={uitgewerktProcess} bgcolor={'bg-gray-600'} />
      <PosterCards src={rules} title={"Regels :"} text={"Ze hebben hier niet eigenlijk veel regels gewoon op tijd komen op werk en niet alle geheime dingen die hier worden gezegt door vertellen aan mensen. Het is zakkelijk maar nog steeds persoonlijk dus we hebben nogsteeds respect voor elkaars privacy en persoonlijke interacties wat het belangerijkste is"} bgColor={'bg-red-600'} />
      <PosterCards src={opinion} title={"Mening :"} text={"Persoonlijk vind ik het een leuke en gezelige plek. Tot nu toe is het heel leerzaam. Ik heb al best wel veel dingen geleerd die ik echt niet een paar weken of maanden geleden zou kunnen doen."} bgColor={`bg-gray-600 `} />
    </PosterLayout>
  )
}

interface PosterCardImageProps {
  src: StaticImageData;
  bgcolor: string
}

const PosterCardImage: React.FC<PosterCardImageProps> = ({ src, bgcolor }) => {
  return (
    <div className={`${bgcolor} bg-opacity-25 flex`}>
      <Image className={`p-2 mx-auto md:h-auto w-96 md:flex`}
        src={src}
        alt="CardImage"
      />
    </div>
  )
}

interface PosterCardsProps {
  src: StaticImageData;
  title: string;
  text: string;
  bgColor: string
}

const PosterCards: React.FC<PosterCardsProps> = ({ src, title, text, bgColor}) => {
  return (
  <div className={`${bgColor} bg-opacity-25 flex`}>
      <Image className={`p-2 mx-auto md:h-auto w-96 md:flex`}
        src={src}
        alt="CardImage"
      />
      <div className={`font-bold p-2 m-2`}>
        <h4 className="text-3xl">{title}</h4>
        <p className='text-2xl'>
          {text}
        </p>
      </div>
    </div>
  )
}

interface PosterCardsTitleProps {
  src: StaticImageData;
  title: string;
  text: string;
}

const PosterCardsTitle: React.FC<PosterCardsTitleProps> = ({ src, title, text }) => {
  return (
    <div className='flex'>
      <Image className={`p-2 mx-auto md:h-auto w-96 md:flex`}
        src={src}
        alt="CardImage"
      />
      <div className={`font-bold p-2 m-2`}>
        <h4 className="text-3xl">{title}</h4>
        <p className='text-1xl'>
          {text}
        </p>
      </div>
    </div>
  )
}

interface PosterCardTwoTextsProps {
  src: StaticImageData;
  text: string;
  para: string
  bgcolor: string
}

const PosterCardTwoTexts: React.FC<PosterCardTwoTextsProps> = ({ src, text, para, bgcolor }) => {
  return (
    <div className={`${bgcolor} bg-opacity-25 flex`}>
      <div className={`font-bold text-1xl p-2 m-2`}>
        <p>
          {text}
        </p>
      </div>
      <Image className={`p-2 mx-auto md:h-auto w-96 md:flex`}
        src={src}
        alt="CardImage"
      />
      <div className={`font-bold text-1xl p-2 m-2`}>
        <p>
          {para}
        </p>
      </div>

    </div>
  )
}

interface PosterCardsTwoImagesProps {
  src: StaticImageData;
  secondSrc: StaticImageData;
  title: string
  text: string
  bgcolor: string
}

const PosterCardTwoImages: React.FC<PosterCardsTwoImagesProps> = ({ src, secondSrc, title, text, bgcolor }) => {
  return (
    <div className={`${bgcolor} bg-opacity-25 flex`}>
      <Image className={`p-2 mx-auto md:h-auto w-96 md:flex`}
        src={src}
        alt="CardImage"
      />
      <div className={`font-bold p-2 m-2`}>
        <h4 className='text-3xl'>{title}</h4>
        <p className='text-2xl'>
          {text}
        </p>
      </div>
      <div>
        <Image className={`p-2 mx-auto md:h-auto w-96 md:flex`}
          src={secondSrc}
          alt="CardImage"
        />
      </div>
    </div>
  )
}


interface PosterLayoutProps {
  children: React.ReactNode
}

const PosterLayout: React.FC<PosterLayoutProps> = ({ children }) => {

  return (
    <div className='flex flex-col bg-gradient-to-r from-magenta to-darkpink justify-center items-center'>
      <div className='max-w-screen-lg space-y-96'>
        {children}
      </div>
    </div>
  )
}
export default Poster