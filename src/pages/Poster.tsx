import Image from "next/image"
import image from "public/assets/bizworx.png"
import transport from "public/assets/transport.png"
import workPlace from "public/assets/WorkPlace.png"
import Lunch from "public/assets/lunch.png"
import workPlaceTwo from "public/assets/WorkPlaceTwo.png"
import organogram from "public/assets/organogram.png"
import processTabel from "/public/assets/ProcessTabel.png"
import usecasediagram from "public/assets/usecasediagram.png"
import uitgewerktProcess from "/public/assets/UitgewerktProcess.png"
import opinion from "public/assets/opinion.png"
import rules from "public/assets/rules.png"
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion"
import { StaticImageData } from "next/image"
import React, { Children, useEffect, useRef, useState } from 'react'
import stylesheet from "../styles/Test.module.css"
import { variants } from '../components/AnimatedLayout'
import ScrollTopButton from "../components/ScrollTopButton"

const Poster = () => {
    const { scrollY } = useScroll()
    const { scrollYProgress } = useScroll()
    const [scrollPercentage, setScrollPercentage] = useState<number>(0)

    useEffect(() => {
        scrollY.onChange((latest) => {
            console.log("Page scroll: ", latest)
        })
        scrollYProgress.onChange((latest) => {
            console.log(latest);
            setScrollPercentage(latest)
        })
    }, [])

    const handleIsVisible = (checkPoint: number) => {
        if (scrollYProgress.get() > checkPoint) {
            return true
        }
        return false
    }

    return (
        <PosterLayout>
            <ProgressBarr progressPercentage={scrollPercentage} />
            <AnimatedCard
                isVisible={true}
                duration={2}
            >
                <div className="flex-col">
                    <Image
                        src={image}
                        alt="CardImage"
                    />
                    <h1 className="text-8xl my-[50px] font-bold text-gray-100">Stage Poster</h1>
                    <p className="text-4xl text-gray-400">
                        Deze website gaat over elke opdracht die ik heb gemaakt voor mijn eerste stage periode bij Bizworx creative it solutions.
                    </p>
                </div>
            </AnimatedCard>
            <AnimatedCard
                isVisible={handleIsVisible(0.08)}
                initialX={400}
                inititalY={-400}
                lastY={-300}
                duration={2}
            >
                <div className="flex-col">
                    <Image
                        src={transport}
                        alt="CardImage"
                    />
                    <h1 className="text-4xl my-[50px] font-bold text-gray-100">Bereikbaarheid</h1>
                    <p className="text-3xl text-gray-400">
                        Ik fiets elke dag omdat ik alleen maar een fiets heb.
                        Het is best wel te doen paar plekken waar je moet stoppen maar niks te erg.
                        Met de bus moet je nog een stuk lopen en als je de auto gebruikt ben je zoizo het snelst.
                    </p>
                </div>
            </AnimatedCard>
            <AnimatedCard
                isVisible={handleIsVisible(0.18)}
                initialX={900}
                duration={2}
            >
                <div className="flex-col">
                    <Image
                        src={workPlace}
                        alt="CardImage"
                    />
                    <h1 className="text-4xl font-bold text-zinc-400">Kantoor</h1>
                    <h2 className="text-3xl text-gray-400">Ik vind dat de sfeer hier helemaal geweldig is,
                        want iedereen kan met elkaar lachen en je kan ook zelfstandig voor jezelf gaan werken en tegelijkertijd nog steeds vragen stellen als je echt vast zit en iemand anders zijn Perspectief nodig hebt om door te kunnen gaan.</h2>

                </div>
            </AnimatedCard>
            <AnimatedCard
                isVisible={handleIsVisible(0.28)}
                initialX={900}
                duration={2}
            >
                <div className="flex-col">
                    <Image
                        className="p-2"
                        src={Lunch}
                        alt="CardImage"
                    />
                    <h1 className="text-4xl font-bold text-zinc-400">Pauzes</h1>
                    <h2 className="text-3xl text-gray-400">We hebben vaak pauze ergens tussen 12:00 en 13:00 gewoon voor een kleine lunch en een beetje praten over dingen die er zijn gebeurt op het nieuws of gewoon door het weekend.
                        Op maandag doen ze altijd de boodschappen Ik heb mijn eigen eten dus ik ga nooit eigenlijk mee.
                        ik lunch wel gewoon nog steeds met hun samen en ik eet wel ook wat van het eten dat ze halen.</h2>
                </div>
            </AnimatedCard>
            <AnimatedCard
                isVisible={handleIsVisible(0.36)}
                initialX={900}
                duration={2}
                isMaxHeight={true}
            >
                <div className="flex-col">
                    <h1 className="text-4xl font-bold text-zinc-400">Bizworx Personeel</h1>
                    <h2 className="text-3xl text-gray-400 my-2">
                        De mensen waar ik mee werk hier hebben niet echt een organogram zelf of een type hiërarchie,
                        maar jeroen (de baas) zij dat ze meer een driehoek zijn ze zijn allemaal belangerijk in het bedrijf en werken allemaal samen met elkaar om er iets van te maken.
                        Tim is de hoofdpersoon van alle software Creëren.
                        Koen is de lead engineer van het bedrijf hij neemt ook elk telefoontje op en praat met klanten en helpt ze met hun pc en andere elektronica.
                        En Jeroen is de founder van Bizworx hij helpt voornamelijk Tim met een tweede perspectief op problemen waar tim mee vast zit met zijn code en praat ook met Koen veel over ideeën over het bedrijf en of ze oplossingen kunnen verzinnen.
                    </h2>
                    <h1 className=" text-4xl font-bold text-zinc-400">Stage Personeel</h1>
                    <h3 className="text-3xl text-gray-400 my-2">
                        Ik ben Davide ik ben één van de stage personen.
                        Ik zit in het midden van de driehoek wel meer geleunt naar Tim natuurlijk omdat ik ook aan de kant zit van software develepor/programmeren en Tim is mijn begeleider op Bizworx.
                        We hebben ook nog een ander stage persoon die heet Ali hij is meer aan de engineering stuck dus hij zit ook meer gericht naar Koen die hem begeleid en tips geeft en ook veel leert.
                    </h3>
                    <Image
                        className="p-2"
                        src={organogram}
                        alt="CardImage"
                    />
                </div>
            </AnimatedCard>
            <AnimatedCard
                isVisible={handleIsVisible(0.55)}
                initialX={900}
                duration={2}
            >
                <div className="flex-col">
                    <h1 className="text-4xl font-bold text-zinc-400">Processen</h1>
                    <h2 className="text-3xl text-gray-400 my-2">Dit is het begin process tussen bizworx en een klant van het aanvragen van een nieuw account.</h2>
                    <Image
                        className="p-2"
                        src={processTabel}
                        alt="CardImage"
                    />
                </div>
            </AnimatedCard>
            <AnimatedCard
                isVisible={handleIsVisible(0.65)}
                initialX={900}
                duration={2}
            >
                <div className="flex-col">
                    <h1 className="text-4xl font-bold text-zinc-400">Usecasediagram</h1>
                    <h2 className="text-3xl text-gray-400 my-2">Deze usecase laat zien wat er gebeurt aan beide kanten van het aanvragen van een nieuw account.</h2>
                    <Image
                        className="p-2"
                        src={usecasediagram}
                        alt="CardImage"

                    />
                </div>

            </AnimatedCard>
            <AnimatedCard
                isVisible={handleIsVisible(0.73)}
                initialX={900}
                duration={2}
            >
                <div className="flex-col">
                    <h1 className="text-4xl font-bold text-zinc-400">ProcessUitwerking</h1>
                    <h2 className="text-3xl text-gray-400 my-2">Dit is één van de processen uitgelegt over wat all de nodig heden zijn en wat er moet gebeuren zodat het process door kan gaan.
                        Het laat ook zien wat er fout zou kunnen gaan en hoe het dan dat process stopt</h2>
                    <Image
                        className="p-2"
                        src={uitgewerktProcess}
                        alt="CardImage"
                    />
                </div>
            </AnimatedCard>
            <AnimatedCard
                isVisible={handleIsVisible(0.82)}
                initialX={900}
                duration={2}
            >
                <div className="flex-col">
                    <Image className="p-2"
                        src={rules}
                        alt="CardImage"
                    />
                    <h1 className="text-4xl font-bold text-zinc-400">Regels</h1>
                    <h2 className="text-3xl text-gray-400 my-2">Ze hebben hier niet eigenlijk veel regels gewoon op tijd komen op werk en dingen tot je zelf houden als je een prive conversatie hebt gehad met iemand en ook niet alles vertellen van het bedrijf aan andere mensen die hier worden gezegt in prive.
                        Het is zakkelijk maar nog steeds persoonlijk dus we hebben nogsteeds respect voor elkaars privacy en persoonlijke interacties wat het belangerijkste is.</h2>
                </div>
            </AnimatedCard>
            <AnimatedCard
                isVisible={handleIsVisible(0.92)}
                initialX={-300}
                duration={2}


            >
                <div className="flex-col">
                    <Image className="p-2"
                        src={opinion}
                        alt="CardImage"
                    />
                    <h1 className="text-4xl font-bold text-zinc-400">Mening</h1>
                    <h2 className="text-3xl text-gray-400 my-2">Persoonlijk vind ik het een leuke en gezelige plek.
                        Ik vind persoonlijk dat ik veel heb geleerd en nog meer kan leren van hun,
                        en wat ik heb geleerd heel erg nuttig vind en ook op een goeie manier dingen uitgelegt gekregen heb.
                        Ik heb al best wel veel dingen geleerd die ik echt niet een paar weken of maanden geleden zou kunnen doen dus daar ben ik ook best wel verbaast van.</h2>
                </div>
            </AnimatedCard>
            <ScrollTopButton />
        </PosterLayout >
    )
}

export default Poster


interface AnimatedCardTitleProps {
    isMaxHeight?: boolean;
    children?: React.ReactNode;
    isVisible?: boolean;
    src?: StaticImageData;
    srcTwo?: StaticImageData;
    initialX?: number;
    inititalY?: number;
    lastX?: number;
    lastY?: number;
    title?: string;
    titleTwo?: string;
    text?: string;
    textTwo?: string;
    duration: number;
}
const AnimatedCard: React.FC<AnimatedCardTitleProps> = ({ isMaxHeight, children, isVisible, initialX, duration }) => {
    return (
        <div className="flex-col" style={{ height: !isMaxHeight ? "100vh" : "2000px" }}>
            <AnimatePresence
                mode="wait"
                initial={false}
            >
                {isVisible && (
                    <motion.div
                        className="flex bg-[#161b22] border border-gray-700 p-8 rounded-lg"
                        initial={{
                            x: initialX,
                            opacity: 0,
                            scale: 0.5
                        }}
                        animate={{
                            x: 0,
                            y: 0,
                            opacity: 1,
                            scale: 1
                        }}
                        exit={{
                            x: 0,
                            y: 0,
                            opacity: 0,
                            scale: 0.5
                        }}
                        transition={{
                            default: {
                                duration: duration,
                                ease: [0, 0.71, 0.2, 1.01]
                            },
                        }}
                    >
                        {children}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

type ProgressBarrProps = {
    progressPercentage: number
}
const ProgressBarr: React.FC<ProgressBarrProps> = ({ progressPercentage }) => {
    return (
        <div className='h-2 w-full bg-gray-300 rounded overflow-hidden fixed top-12 right-0 left-0 z-10'>
            <div
                style={{ width: `${progressPercentage * 100}%` }}
                className={`h-full  bg-gradient-to-r from-magenta to-darkpink`}
            ></div>
        </div>
    );
};







interface PosterLayoutProps {
    children: React.ReactNode
}

const PosterLayout: React.FC<PosterLayoutProps> = ({ children }) => {

    return (

        <div className='flex bg-zinc-900 justify-center items-center '>
            <motion.div
                initial={{ x: 300, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 300, opacity: 0 }}
                transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                }}
                className='max-w-screen-lg space-y-96'
            >
                {children}
            </motion.div>
        </div>
    )
}
