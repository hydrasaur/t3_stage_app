import Image from "next/image"
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
import React, { useEffect, useState } from 'react'
import stylesheet from "../styles/Test.module.css"
export const Test = () => {
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

    const handleIsVisible = () => {
        if (scrollYProgress.get() > 0.9) {
            return true
        }
        return false
    }

    return (
        <div className="flex-col  mt-[300px] space-y-20 justify-center items-center">
            <motion.div
                className="flex-col max-w-screen-md justify-center items-center"
                style={{
                    height: "100vh",
                    borderRadius: "50%",

                }}
                initial={{
                    x: 1200,
                    opacity: 0,
                    scale: 0.5

                }}
                animate={{
                    x: 1200,
                    opacity: 1,
                    scale: 1
                }}
                transition={{
                    default: {
                        duration: 4,
                        ease: [0, 0.71, 0.2, 1.01]
                    },

                }}
            >
                <div className="flex-col justify-center items-start">
                    <Image
                        src={image}
                        alt="CardImage"
                    />
                    <h1 className="text-8xl my-[50px] font-bold">Stage Poster</h1>
                    <span className="text-4xl text-gray-500">
                        Deze website gaat over elke opdracht die ik heb gemaakt voor mijn eerste stage periode bij Bizworx creative it solutions.
                    </span>
                    <div className="flex-col  mt-[300px] space-y-20 justify-center items-center">
                    </div>
                </div >
            </motion.div >
            <div className="flex-col mt-[300px] space-y-20 justify-center items-center">
                <motion.div
                    className="flex-col max-w-screen-md justify-center items-center"
                    style={{
                        height: "100vh",
                        borderRadius: "50",
                    }}
                    initial={{
                        x: -100,
                        opacity: 0,
                        scale: 0.5
                    }}
                    animate={{
                        x: 100,
                        opacity: 1,
                        scale: 1
                    }}
                    transition={{
                        default: {
                            duration: 4,
                            ease: [0, 0.71, 0.2, 1.01]
                        }
                    }}
                >
                    <div className="flex-col justify-center items-start">
                        <Image
                            src={transport}
                            alt="cardImage"
                        />
                        <h1 className="text-8xl my-[50px] font-bold">bereikbaarheid</h1>
                        <span className="text-4xl text-gray-500">
                            Ik fiets elke dag. Het is best wel te doen paar plekken waar je moet stoppen maar niks te erg. Met de bus moet je nog een stuk lopen en als je de auto gebruikt ben je zoizo het snelst.
                        </span>

                    </div>
                </motion.div>
            </div>
            <div className="flex-col mt-[300px] space-y-20 justify-center items-center">
                <motion.div
                    className="flex-col max-w-screen-md justify-center items-center"
                    style={{
                        height: "100vh",
                        borderRadius: "50",
                    }}
                    initial={{
                        x: -100,
                        opacity: 0,
                        scale: 0.5
                    }}
                    animate={{
                        x: 1200,
                        opacity: 1,
                        scale: 1
                    }}
                    transition={{
                        default: {
                            duration: 4,
                            ease: [0, 0.71, 0.2, 1.01]
                        }
                    }}
                >
                    <div className="flex-col justify-center items-start">
                        <Image
                            src={workPlace}
                            alt="cardImage"
                        />
                        <h1 className="text-8xl my-[50px] font-bold">Werkplek omgeving :</h1>
                        <span className="text-4xl text-gray-500">
                            Ik vind dat de sfeer helemaal geweldig hier iedereen kan met elkaar lachen en je kan ook zelfstandig voor jezelf gaan werken en maar tegelijkertijd nogsteeds voor hulp vragen als je echt vast zit.
                        </span>

                    </div>
                </motion.div>
            </div>
            <div className="flex-col mt-[300px] space-y-20 justify-center items-center">
                <motion.div
                    className="flex-col max-w-screen-md justify-center items-center"
                    style={{
                        height: "100vh",
                        borderRadius: "50",
                    }}
                    initial={{
                        x: 2800,
                        opacity: 0,
                        scale: 0.5
                    }}
                    animate={{
                        x: 2500,
                        opacity: 1,
                        scale: 1
                    }}
                    transition={{
                        default: {
                            duration: 4,
                            ease: [0, 0.71, 0.2, 1.01]
                        }
                    }}
                >
                    <div className="flex-col justify-center items-start">
                        <Image
                            src={Lunch}
                            alt="cardImage"
                        />
                        <h1 className="text-8xl my-[50px] font-bold">Pauzes :</h1>
                        <span className="text-4xl text-gray-500">
                            We hebben vaak pauze ergens tussen 12:00 en 13:00 gewoon voor een kleine lunch en een beetje praten over dingen die er zijn gebeurt op het nieuws of gewoon door het weekend. Op maandag doen ze altijd de boodschappen Ik heb mijn eigen eten dus ik ga nooit eigenlijk mee ik lunch wel gewoon nogsteeds met hun samen.
                        </span>

                    </div>
                </motion.div>
            </div>
            <div className="flex-col mt-[300px] space-y-20 justify-center items-center">
                <motion.div
                    className="flex-col max-w-screen-md justify-center items-center"
                    style={{
                        height: "100vh",
                        borderRadius: "50",
                    }}
                    initial={{
                        x: -100,
                        opacity: 0,
                        scale: 0.5
                    }}
                    animate={{
                        x: 1200,
                        opacity: 1,
                        scale: 1
                    }}
                    transition={{
                        default: {
                            duration: 4,
                            ease: [0, 0.71, 0.2, 1.01]
                        }
                    }}
                >
                    <div className="flex-col justify-center items-start">
                        <Image
                            src={organogram}
                            alt="cardImage"
                        />
                        <h1 className="text-8xl my-[50px] font-bold"></h1>
                        <span className="text-4xl text-gray-500">
                            De mensen waar ik mee werk hier hebben niet echt een organogram zelf of een type hierarchy, maar jeroen zij dat ze meer een driehoek zijn ze zijn allemaal belangerijk in het bedrijf en werken allemaal samen met elkaar om er iets van te maken. Tim is de hoofdpersoon van alle software creëren Koen is de lead egineer van het bedrijf haar neemt ook elk telefoontje op en praat met klanten en helpt ze met hun pc en andere elektronica en Jeroen is de founder van Bizworx hij helpt voornamelijk Tim met een tweede perspectief op problemen en praat ook met Koen veel over ideeën over het bedrijf.
                        </span>

                    </div>
                </motion.div>
            </div>
            <div className="flex-col mt-[300px] space-y-20 justify-center items-center">
                <motion.div
                    className="flex-col max-w-screen-md justify-center items-center"
                    style={{
                        height: "100vh",
                        borderRadius: "50",
                    }}
                    initial={{
                        x: 1200,
                        opacity: 0,
                        scale: 0.5
                    }}
                    animate={{
                        x: 1200,
                        opacity: 1,
                        scale: 1
                    }}
                    transition={{
                        default: {
                            duration: 4,
                            ease: [0, 0.71, 0.2, 1.01]
                        }
                    }}
                >
                    <div className="flex-col justify-center items-start">
                        <Image
                            src={processTabel}
                            alt="cardImage"
                        />
                        <h1 className="text-8xl my-[50px] font-bold"></h1>
                        <span className="text-4xl text-gray-500">
                        </span>

                    </div>
                </motion.div>
            </div>
            <div className="flex-col mt-[300px] space-y-20 justify-center items-center">
                <motion.div
                    className="flex-col max-w-screen-md justify-center items-center"
                    style={{
                        height: "100vh",
                        borderRadius: "50",
                    }}
                    initial={{
                        x: 1200,
                        opacity: 0,
                        scale: 0.5
                    }}
                    animate={{
                        x: 1200,
                        opacity: 1,
                        scale: 1
                    }}
                    transition={{
                        default: {
                            duration: 4,
                            ease: [0, 0.71, 0.2, 1.01]
                        }
                    }}
                >
                    <div className="flex-col justify-center items-start">
                        <Image
                            src={usecasediagram}
                            alt="cardImage"
                        />
                        <h1 className="text-8xl my-[50px] font-bold"></h1>
                        <span className="text-4xl text-gray-500">
                        </span>

                    </div>
                </motion.div>
            </div>
            <div className="flex-col mt-[300px] space-y-20 justify-center items-center">
                <motion.div
                    className="flex-col max-w-screen-md justify-center items-center"
                    style={{
                        height: "100vh",
                        borderRadius: "50",
                    }}
                    initial={{
                        x: 1200,
                        opacity: 0,
                        scale: 0.5
                    }}
                    animate={{
                        x: 1200,
                        opacity: 1,
                        scale: 1
                    }}
                    transition={{
                        default: {
                            duration: 4,
                            ease: [0, 0.71, 0.2, 1.01]
                        }
                    }}
                >
                    <div className="flex-col justify-center items-start">
                        <Image
                            src={uitgewerktProcess}
                            alt="cardImage"
                        />
                        <h1 className="text-8xl my-[50px] font-bold"></h1>
                        <span className="text-4xl text-gray-500">
                        </span>

                    </div>
                </motion.div>
            </div>
            <div className="flex-col mt-[300px] space-y-20 justify-center items-center">
                <motion.div
                    className="flex-col max-w-screen-md justify-center items-center"
                    style={{
                        height: "100vh",
                        borderRadius: "50",
                    }}
                    initial={{
                        x: 2800,
                        opacity: 0,
                        scale: 0.5
                    }}
                    animate={{
                        x: 2500,
                        opacity: 1,
                        scale: 1
                    }}
                    transition={{
                        default: {
                            duration: 4,
                            ease: [0, 0.71, 0.2, 1.01]
                        }
                    }}
                >
                    <div className="flex-col justify-center items-start">
                        <Image
                            src={rules}
                            alt="cardImage"
                        />
                        <h1 className="text-8xl my-[50px] font-bold">Regels :</h1>
                        <span className="text-4xl text-gray-500">
                            Ze hebben hier niet eigenlijk veel regels gewoon op tijd komen op werk en niet alle geheime dingen die hier worden gezegt door vertellen aan mensen. Het is zakkelijk maar nog steeds persoonlijk dus we hebben nogsteeds respect voor elkaars privacy en persoonlijke interacties wat het belangerijkste is.
                        </span>

                    </div>
                </motion.div>
            </div>
            <div className="flex-col mt-[300px] space-y-20 justify-center items-center">
                <motion.div
                    className="flex-col max-w-screen-md justify-center items-center"
                    style={{
                        height: "100vh",
                        borderRadius: "50",
                    }}
                    initial={{
                        x: -1000,
                        opacity: 0,
                        scale: 0.5
                    }}
                    animate={{
                        x: 100,
                        opacity: 1,
                        scale: 1
                    }}
                    transition={{
                        default: {
                            duration: 4,
                            ease: [0, 0.71, 0.2, 1.01]
                        }
                    }}
                >
                    <div className="flex-col justify-center items-start">
                        <Image
                            src={opinion}
                            alt="cardImage"
                        />
                        <h1 className="text-8xl my-[50px] font-bold">Mening :</h1>
                        <span className="text-4xl text-gray-500">
                            Persoonlijk vind ik het een leuke en gezelige plek. Tot nu toe is het heel leerzaam. Ik heb al best wel veel dingen geleerd die ik echt niet een paar weken of maanden geleden zou kunnen doen.
                        </span>

                    </div>
                </motion.div>
            </div>


        </div >
    )
}
export default Test

type AnimatedProps = {
    isVisible: boolean;
}

const AnimatedComponent: React.FC<AnimatedProps> = ({ isVisible }) => (
    <AnimatePresence>
        {isVisible && (
            <motion.div
                style={{
                    width: 200,
                    height: 200,
                    borderRadius: "50%",
                }}
                initial={{
                    y: 100,
                    opacity: 0,
                    scale: 0.5

                }}
                animate={{
                    y: 100,
                    opacity: 1,
                    scale: 1
                }}
                transition={{
                    default: {
                        duration: 5,
                        ease: [0, 0.71, 0.2, 1.01]
                    },
                }}
            >
                <PosterCards title="test" />
            </motion.div>

        )}
    </AnimatePresence>
)


type ProgressBarProps = {
    progressPercentage: number
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progressPercentage }) => {
    return (
        <div className='h-2 w-full bg-gray-300 rounded overflow-hidden fixed'>
            <div
                style={{ width: `${progressPercentage * 100}%` }}
                className={`h-full ${progressPercentage * 100 < 70 ? 'bg-red-600' : 'bg-green-600'
                    }`}
            ></div>
        </div>
    );
};
import image from "public/assets/bizworx.png"
interface PosterCardsProps {
    title: string;
    text?: string;
    bgColor?: string
}

const PosterCards: React.FC<PosterCardsProps> = ({ title, text, bgColor }) => {
    return (
        <div className={`${bgColor} bg-opacity-25 flex`}>
            <Image className={`p-2 mx-auto md:h-auto w-96 md:flex`}
                src={image}
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

