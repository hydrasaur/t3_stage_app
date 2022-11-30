import React, { useEffect } from 'react'
import Image from 'next/image'
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
      <BizworxCard />
      <Transport />
      <WorkPlace />
      <Pauzes />
      <OrganoGram />
      <ProcessTabel />
      <UseCaseDiagram />
      <UitgewerktProcess  />
      <Rules />
      <Opinion/>
    </PosterLayout>
  )
}

export default Poster

const BizworxCard = () => {
  return (
    <div className="bg-gradient-to-r from-magenta to-darkpink md:flex p-2 m-2">
      <Image className=" p-2 m-2 mx-auto md:h-auto w-96 object-contain"
        src={image}
        alt={'picture for bizworx'}
      />
      <div className="pt-6 md:p-8 text-right md:text-right space-y-4">
        <p className="text-xl text-transparent bg-clip-text bg-gradient-to-{flow} bg-gradient-to-r from-darkpink to-magenta font-extrabold">
          Bizworx creative it solutions
        </p>
        <div className="font-medium">
          <div className="text-sky-500 dark:text-sky-400 text-right">
            Bizworx Solution Provider was founded around April 2004, and we have been working in different areas of expertise, mainly as a service provider in the airfreight logistics branch at Schiphol. Being a service provider for logistics companies brings challenges and we love them.
          </div>
          <div className="text-amber-700 dark:black-slate-500 text-right">
            Adres : Opaallaan 1180, 2132 LN Hoofddorp
            <br />
            nummer : +31 (0) 20 8800 180
          </div>
        </div>
      </div>
    </div>
  )
}
const Transport = () => {
  return (
    <div className="object-fill flex rounded-xl p-8 md:p-0  m-2 justify-between ">
      <Image className="bg-alizarin m-2 js-show-on-scroll"
        src={transport}
        alt={'picture for transport'}
        width="380"
        height="180"
      />
      <div className='bg-alizarin flex flex-row p-2 m-2 font-bold'>
        bereikbaarheid:
        <br />
        Ik fiets elke dag het is best wel te doen paar plekken waar je moet stoppen maar <br />
        niks te erg met de bus moet je nog een stuk lopen en als je de auto gebruikt ben <br />
        je zoizo het snelst.

      </div>
    </div>
  )
}

const WorkPlace = () => {
  return (
    <div className="flex justify-between">
      <div className='bg-purple-600 font-bold p-2 m-2 h-28'>
        Werkplek omgeving :
        <br /> Ik vind dat de sfeer helemaal geweldig hier iedereen kan met elkaar lachen
        <br /> en je kan ook zelfstandig voor jezelf gaan werken en maar tegelijkertijd
        <br /> nogsteeds voor hulp vragen als je echt vast zit.
      </div>
      <div className=''>
        <Image className=" p-2 m-2 w-96 bg-purple-600"
          src={workPlace}
          alt={'picture for workplace'}
        />
      </div>
      <Image className=' p-2 m-2 w-96 bg-purple-600'
        src={workPlaceTwo}
        alt={'picture for workplacetwo'}
      />
    </div>
  )
}
const Pauzes = () => {
  return (
    <div className='flex'>
      <Image className="bg-cyan p-2 m-2 mx-auto md:h-auto w-96 md:flex"
        src={Lunch}
        alt={'picture for workplace'}
      />
      <div className='p-2 m-2 bg-cyan font-bold h-36'>
        Pauzes :
        <br /> We hebben vaak pauze ergens tussen 12:00 en 13:00 gewoon voor een kleine lunch en een beetje praten
        <br /> over dingen die er zijn gebeurt op het nieuws of gewoon door het weekend op maandag doen ze altijd
        <br />de boodschappen voorzichzelf ik heb mijn eigen eten dus ik ga nooit eigenlijk mee ik lunch wel gewoon
        <br /> nogsteeds met hun samen.
        <br />
      </div>
    </div>
  )
}
const OrganoGram = () => {
  return (
    <div className="flex">
      <div className='bg-deepskyblue p-2 m-2 font-bold h-48'>
        De mensen waar ik mee werk hier hebben niet echt een organogram zelf of een
        <br /> type hierarchy maar jeroen zij dat ze meer een driehoek zijn ze zijn allemaal belangerijk
        <br /> in het bedrijf en werken allemaal samen met elkaar om er iets van te maken. Tim is
        <br /> de hoofdpersoon van alle software creëren Koen is de lead egineer van het bedrijf haar
        <br /> neemt ook elk telefoontje op en praat met klanten en helpt ze met hun pc en andere
        <br /> elektronica en Jeroen is de founder van Bizworx hij helpt voornamelijk Tim met een
        <br /> tweede perspectief op problemen en praat ook met Koen veel over ideeën.
      </div>
      <Image className="bg-deepskyblue p-2 m-2 mx-auto md:h-auto w-96 md:flex"
        src={organogram}
        alt={'picture for workplace'}
      />
      <div className='bg-deepskyblue font-bold h-28'>
        Ik Davide één van de stage personen zit in het midden wel meer geleunt naar Tim natuurlijk omdat
        <br /> ik ook software develepor/programmeren doe en Tim is mijn begeleider op Bizworx.
        <br /> We hebben ook nog een ander stage persoon die heet Ali hij is meer aan de engineering
        <br /> stuck dus hij zit ook meer gericht naar Koen die hem begeleid en tips geeft en hulp.
      </div>
    </div>
  )
}
const ProcessTabel = () => {
  return (
    <div className="">
      <Image className="p-2 m-2 mx-auto md:h-auto w-96 md:flex"
        src={processTabel}
        alt={"picture for process"}
      />
      <div>

      </div>
    </div>
  )
}
const UseCaseDiagram = () => {
  return (
    <div className="">
      <Image className="p-2 m-2 mx-auto md:h-auto w-96 md:flex"
        src={usecasediagram}
        alt={"picture for usecase"}
      />
      <div>

      </div>
    </div>
  )
}
const UitgewerktProcess = () => {
  return (
    <div className="">
      <Image className="p-2 m-2 mx-auto md:h-auto w-96 md:flex"
        src={uitgewerktProcess}
        alt={"picture for elaborationprocess"}
      />
      <div>

      </div>
    </div>
  )
}
const Rules = () => {
  return (
    <div className='flex'>
      <Image className="bg-vividyellow p-2 m-2 mx-auto md:h-auto w-96 md:flex"
        src={rules}
        alt={'picture for workplace'}
      />
      <div className='p-2 m-3 bg-vividyellow font-bold self-auto	break-normal'>
        Regels :
        <br /> Ze hebben hier niet eigenlijk veel regels gewoon op tijd komen op werk en niet alle
        <br /> geheime dingen die hier worden gezegt door vertellen aan mensen het is zakkelijk
        <br /> maar nog steeds persoonlijk dus we hebben nogsteeds respect voor elkaars privacy en
        <br /> persoonlijke interacties wat het belangerijkste is
      </div>
    </div>
  )
}
const Opinion = () => {
  return (
    <div className='flex'>
      <Image className="bg-pumpkin p-2 mx-auto md:h-auto w-96 md:flex"
        src={opinion}
        alt={'picture for workplace'}
      />
      <div className='bg-pumpkin font-bold p-2 m-2'>
        <h4 className='text-3xl'>Mening</h4>
        <p className='text-xl'>Persoonlijk vind ik het een leuke en gezelige plek.
          Tot nu toe is het heel leerzaam.
          Ik heb al best wel veel dingen geleerd die ik echt niet een paar weken of maanden geleden niet zou kunnen doen.
        </p>
      </div>
    </div>
  )
}

// interface PosterCradsProps {
//  src: string;
//  title: string;
//  text: string;
// bgColor: string;
// }

// const PosterCards: React.FC<PosterCradsProps> = ({src, title, text}) => {
//   return (
//     <div className='flex'>
//       <Image className="bg-pumpkin p-2 mx-auto md:h-auto w-96 md:flex"
//         src={src}
//         alt={'picture for workplace'}
//       />
//       <div className='bg-pumpkin font-bold p-2 m-2'>
//         <h4 className='text-3xl'>{title}</h4>
//         <p>
//           {text}
//         </p>
//       </div>
//     </div>
//   )
// }
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