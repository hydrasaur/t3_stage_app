import React from 'react'
import Image from 'next/image'
import image from "public/assets/bizworx.png"
import transport from "public/assets/transport.png"
import workPlace from "public/assets/WorkPlace.png"
import workPlaceTwo from "public/assets/WorkPlaceTwo.png"
import organogram from "public/assets/organogram.png"
import opinion from "public/assets/opinion.png"
import rules from "public/assets/rules.png"

export const Poster = () => {
  return (

    <PosterLayout>
      <BizworxCard />
      <Transport />
      <WorkPlace />
      <OrganoGram />
      <Rules />
      <Opinion />
    </PosterLayout>
  )
}

export default Poster

const BizworxCard = () => {
  return (
    <div className="bg-gradient-to-r from-magenta to-darkpink md:flex p-2 m-2 ">
      <Image className=" p-2 mx-auto md:h-auto w-96 object-contain"
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
    <div className="object-fill  md:flex rounded-xl p-8 md:p-0  m-2 justify-between">
      <Image className=''
        src={transport}
        alt={'picture for transport'}
        width="380"
        height="180"
      />
      <div className='pt-3 md:p-4 text-right bg-white w-96'>

      </div>
      <div className='bg bg-alizarin flex flex-row border p-2 m-2'>
        bereikbaarheid:
        <br />
        Ik fiets elke dag het is best wel te doen paar plekken waar je moet stoppen maar <br />
        niks te erg met de bus moet je nog een stuk lopen en als je de auto gebruikt ben <br />
        je zoizo het snelst

      </div>
    </div>
  )
}

const WorkPlace = () => {
  return (
    <div className="flex justify-between">
      <div className='bg-purple-600'>
        sdsdfsdfggggggggggggggggggggggggggggggggggggggggggg
        <br />gggg
      </div>
      <div className=''>
        <Image className=" p-2 w-96 bg-purple-600"
          src={workPlace}
          alt={'picture for workplace'}
        />
      </div>
      <Image className=' p-2 w-96 bg-purple-600'
        src={workPlaceTwo}
        alt={'picture for workplacetwo'}
      />
    </div>
  )
}

const OrganoGram = () => {
  return (
    <div className="flex">
      <div className='border bg-deepskyblue'>
        textfsefsefsefsefsefsef
      </div>
      <Image className="bg-deepskyblue p-2 mx-auto md:h-auto w-96 md:flex"
        src={organogram}
        alt={'picture for workplace'}
      />
      <div className='border bg-deepskyblue'>
        text asfersferfverger
      </div>
    </div>
  )
}
const Rules = () => {
  return (
    <div className='flex'>
      <Image className="bg-vividyellow p-2 mx-auto md:h-auto w-96 md:flex"
        src={rules}
        alt={'picture for workplace'}
      />
      <div className='p-2 m-3 border bg-vividyellow'>
        Pauzes :
        We hebben vaak pauze tussen 12:00 en 13:00 gewoon voor een kleine lunch alleen op maadnag <br />
        doe ze dan vaak wat kleine boodschappen voor hun zelf ik heb altijd me eigen eten
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
      <div className='bg-pumpkin'>
        textfbdbdfbdfbdfbddfbd
      </div>
    </div>
  )
}
interface PosterLayoutProps {
  children: React.ReactNode
}

const PosterLayout: React.FC<PosterLayoutProps> = ({ children }) => {

  return (
    < div className='flex flex-col'>
      {children}
    </div>
  )
}