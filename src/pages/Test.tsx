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
import React, { useEffect, useRef, useState } from 'react'
import stylesheet from "../styles/Test.module.css"
import { PosterLayout } from "./poster"

export const Test = () => {
    const { scrollY } = useScroll()
    const { scrollYProgress } = useScroll()
    const [scrollPercentage, setScrollPercentage] = useState<number>(0)

    const [width, setWidth] = useState<number>(window.innerWidth);

    useEffect(() => {
        const updateWindowDimensions = () => {
            const newWidth = window.innerWidth;
            setWidth(newWidth);
        };
        window.addEventListener("resize", updateWindowDimensions);

        return () => window.removeEventListener("resize", updateWindowDimensions)
    }, []);

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
            <AnimatedCardTitle src={image} title={"Stage Poster"} text={"Deze website gaat over elke opdracht die ik heb gemaakt voor mijn eerste stage periode bij Bizworx creative it solutions."}
                initialX={900}
                inititalY={-1100}
                lastY={-250}
                duration={2}
            />
            <AnimatedCardLeft
                isVisible={handleIsVisible(0.5)}
                src={transport} title={"Bereikbaarheid"} text={"Ik fiets elke dag. Het is best wel te doen paar plekken waar je moet stoppen maar niks te erg. Met de bus moet je nog een stuk lopen en als je de auto gebruikt ben je zoizo het snelst."}
                initialX={400}
                inititalY={-400}
                lastY={-300}
                duration={4}
            />
            {/* <AnimatedCardTwoImages
                isVisible={handleIsVisible(0.14)}
                src={workPlace}
                srcTwo={workPlaceTwo}
                title={"Werkplaats"}
                text={"Ik vind dat de sfeer helemaal geweldig hier iedereen kan met elkaar lachen en je kan ook zelfstandig voor jezelf gaan werken en maar tegelijkertijd nogsteeds voor hulp vragen als je echt vast zit."}
                initialx={900}
                lastx={900}
                duration={2}
                height={1250}
            />

            <AnimatedCardRight isVisible={handleIsVisible(0.2)}
                src={Lunch}
                title={"Pauzes"}
                text={"We hebben vaak pauze ergens tussen 12:00 en 13:00 gewoon voor een kleine lunch en een beetje praten over dingen die er zijn gebeurt op het nieuws of gewoon door het weekend. Op maandag doen ze altijd de boodschappen Ik heb mijn eigen eten dus ik ga nooit eigenlijk mee ik lunch wel gewoon nogsteeds met hun samen."}
                initialx={2500}
                lastx={1700}
                duration={4}
                height={950}
            />
            <AnimatedCardTwoText isVisible={handleIsVisible(0.32)}
                src={organogram}
                text={"De mensen waar ik mee werk hier hebben niet echt een organogram zelf of een type hierarchy, maar jeroen zij dat ze meer een driehoek zijn ze zijn allemaal belangerijk in het bedrijf en werken allemaal samen met elkaar om er iets van te maken. Tim is de hoofdpersoon van alle software creëren Koen is de lead egineer van het bedrijf haar neemt ook elk telefoontje op en praat met klanten en helpt ze met hun pc en andere elektronica en Jeroen is de founder van Bizworx hij helpt voornamelijk Tim met een tweede perspectief op problemen en praat ook met Koen veel over ideeën over het bedrijf."} textTwo={"Ik ben Davide één van de stage personen ik zit in het midden van de driehoek wel meer geleunt naar Tim natuurlijk omdat ik ook software develepor/programmeren doe en Tim is mijn begeleider op Bizworx. We hebben ook nog een ander stage persoon die heet Ali hij is meer aan de engineering stuck dus hij zit ook meer gericht naar Koen die hem begeleid en tips geeft."}
                initialx={900}
                lastx={900}
                duration={7}
                height={900}
            />

            <AnimatedCardImage isVisible={handleIsVisible(0.44)}
                src={processTabel}
                initialx={900}
                lastx={900}
                duration={4}
                height={420}
            />

            <AnimatedCardImage isVisible={handleIsVisible(0.55)}
                src={usecasediagram}
                initialx={900}
                lastx={900}
                duration={4}
                height={750}
            />

            <AnimatedCardImage isVisible={handleIsVisible(0.66)}
                src={uitgewerktProcess}
                initialx={900}
                lastx={900}
                duration={4}
                height={580}
            />

            <AnimatedCardRight isVisible={handleIsVisible(0.77)}
                src={rules}
                title={"Regels"}
                text={"Ze hebben hier niet eigenlijk veel regels gewoon op tijd komen op werk en niet alle geheime dingen die hier worden gezegt door vertellen aan mensen. Het is zakkelijk maar nog steeds persoonlijk dus we hebben nogsteeds respect voor elkaars privacy en persoonlijke interacties wat het belangerijkste is."}
                initialx={2500}
                lastx={1700}
                duration={4}
                height={850}
            />

            <AnimatedCardLeft isVisible={handleIsVisible(0.88)}
                src={opinion}
                title={"Mening"}
                text={"Persoonlijk vind ik het een leuke en gezelige plek. Tot nu toe is het heel leerzaam. Ik heb al best wel veel dingen geleerd die ik echt niet een paar weken of maanden geleden zou kunnen doen."}
                initialx={-300}
                lastx={50}
                duration={4}
                height={850}
            /> */}

        </PosterLayout>
    )
}


interface AnimatedCardTitleProps {
    isVisible?: boolean;
    src: StaticImageData;
    initialX: number;
    inititalY: number;
    lastY: number;
    title: string;
    text: string;
    duration: number;
}

const AnimatedCardTitle: React.FC<AnimatedCardTitleProps> = ({ src, title, text, initialX, inititalY, lastY, duration }) => {
    return (
        <motion.div
            className="flex-col justify-center items-start  bg-[#161b22] border border-gray-700 p-16 rounded-lg"
            initial={{
                x: initialX,
                y: inititalY,
                opacity: 0,
                scale: 0.5

            }}
            animate={{
                x: 0,
                y: lastY,
                opacity: 1,
                scale: 1
            }}
            transition={{
                default: {
                    duration: duration,
                    ease: [0, 0.71, 0.2, 1.01]
                },
            }}
        >
            <Image
                src={src}
                alt="CardImage"
            />
            <h1 className="text-8xl my-[50px] font-bold text-gray-100">{title}</h1>
            <p className="text-4xl text-gray-400">
                {text}
            </p>
        </motion.div>
    )
}


const AnimatedCardLeft: React.FC<AnimatedCardTitleProps> = ({ isVisible, inititalY, initialX, src, title, text, duration }) => {
    return (
        <div className="h-screen">
            <AnimatePresence>
                {isVisible && (
                    <motion.div
                        className="flex-col justify-center items-start bg-[#161b22] border border-gray-700 p-8 rounded-lg"
                        initial={{
                            x: initialX,
                            y: inititalY,
                            opacity: 0,
                            scale: 0.5
                        }}
                        animate={{
                            x: 0,
                            y: 0,
                            opacity: 1,
                            scale: 1
                        }}
                        transition={{
                            default: {
                                duration: duration,
                                ease: [0, 0.71, 0.2, 1.01]
                            },
                        }

                        }
                    >
                        <Image
                            src={src}
                            alt="CardImage"
                        />
                        <h1 className="text-6xl my-[50px] font-bold text-gray-100">{title}</h1>
                        <p className="text-4xl text-gray-400">
                            {text}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}
interface AnimatedCardTwoImagesProps {
    isVisible: boolean;
    src: StaticImageData;
    srcTwo: StaticImageData;
    initialx: number;
    lastx: number;
    title: string;
    text: string;
    duration: number;
    height: number;
}

const AnimatedCardTwoImages: React.FC<AnimatedCardTwoImagesProps> = ({ isVisible, src, srcTwo, title, text, initialx, lastx, duration, height }) => {
    return (
        <div className="h-screen flex">
            <AnimatePresence>
                {isVisible && (
                    <motion.div
                        className="max-w-screen-md justify-center items-center bg-[#161b22] border border-gray-700 p-8 rounded-lg"
                        style={{
                            height: height
                        }}
                        initial={{
                            x: initialx,
                            opacity: 0,
                            scale: 0.5
                        }}
                        animate={{
                            x: lastx,
                            opacity: 1,
                            scale: 1
                        }}
                        transition={{
                            default: {
                                duration: duration,
                                ease: [0, 0.71, 0.2, 1.01]
                            }
                        }}
                    >
                        <div className="flex-col justify-center items-start">
                            <Image className="p-2 m-2"
                                src={src}
                                alt="cardImage"
                            />
                            <h1 className="text-6xl my-[50px] font-bold text-gray-100">{title}</h1>
                            <span className="text-4xl text-gray-400">
                                {text}
                            </span>
                            <Image className="p-2 m-2"
                                src={srcTwo}
                                alt="cardImage"
                            />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}
interface AnimatedCardRightProps {
    isVisible: boolean;
    src: StaticImageData;
    initialx: number;
    lastx: number;
    title: string;
    text: string;
    duration: number;
    height: number;
}
const AnimatedCardRight: React.FC<AnimatedCardRightProps> = ({ isVisible, src, title, text, initialx, lastx, duration, height }) => {
    return (
        <div className="h-screen">
            <AnimatePresence>
                {isVisible && (
                    <motion.div
                        className="flex-col max-w-screen-md justify-center items-center bg-[#161b22] border border-gray-700 p-8 rounded-lg"
                        style={{
                            height: height
                        }}
                        initial={{
                            x: initialx,
                            opacity: 0,
                            scale: 0.5

                        }}
                        animate={{
                            x: lastx,
                            opacity: 1,
                            scale: 1
                        }}
                        transition={{
                            default: {
                                duration: duration,
                                ease: [0, 0.71, 0.2, 1.01]
                            },
                        }

                        }
                    >
                        <div className="flex-col justify-center items-start">
                            <Image
                                src={src}
                                alt="CardImage"
                            />
                            <h1 className="text-6xl my-[50px] font-bold text-gray-100">{title}</h1>
                            <span className="text-4xl text-gray-400">
                                {text}
                            </span>
                            <div className="flex-col  mt-[300px] space-y-20 justify-center items-center">
                            </div>
                        </div >

                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

interface AnimatedCardTwoTextProps {
    isVisible: boolean;
    src: StaticImageData;
    initialx: number;
    lastx: number;
    text: string;
    textTwo: string;
    duration: number;
    height: number;
}

const AnimatedCardTwoText: React.FC<AnimatedCardTwoTextProps> = ({ isVisible, src, text, textTwo, initialx, lastx, duration, height }) => {
    return (
        <div className="h-screen w-screen">
            <AnimatePresence>
                {isVisible && (
                    <motion.div
                        className="flex justify-center items-center bg-[#161b22] border border-gray-700 p-8 rounded-lg"
                        style={{
                            height: height
                        }}
                        initial={{
                            x: initialx,
                            opacity: 0,
                            scale: 0.5

                        }}
                        animate={{
                            x: lastx,
                            opacity: 1,
                            scale: 1
                        }}
                        transition={{
                            default: {
                                duration: duration,
                                ease: [0, 0.71, 0.2, 1.01]
                            },
                        }

                        }
                    >
                        <div className="flex justify-center items-start">
                            <h3 className="text-3xl my-[50px] text-gray-400">{text}</h3>
                            <Image className="p-2"
                                src={src}
                                alt="CardImage"
                            />
                            <span className="text-4xl text-gray-400">
                                {textTwo}
                            </span>
                            <div className="flex mt-[300px] space-y-20 justify-center items-center">
                            </div>
                        </div >

                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}
interface AnimatedCardImageProps {
    isVisible: boolean;
    src: StaticImageData;
    initialx: number;
    lastx: number;
    duration: number;
    height: number;
}
const AnimatedCardImage: React.FC<AnimatedCardImageProps> = ({ isVisible, src, initialx, lastx, duration, height }) => {
    return (
        <div className="h-screen">
            <AnimatePresence>
                {isVisible && (
                    <motion.div
                        className="flex-col max-w-screen-md justify-center items-center object-fill bg-[#161b22] border border-gray-700 p-8     rounded-lg"
                        style={{
                            height: height
                        }}
                        initial={{
                            x: initialx,
                            opacity: 0,
                            scale: 0.5
                        }}
                        animate={{
                            x: lastx,
                            opacity: 1,
                            scale: 1
                        }}
                        transition={{
                            default: {
                                duration: duration,
                                ease: [0, 0.71, 0.2, 1.01]
                            }
                        }}
                    >
                        <div className="flex-col justify-center items-start">
                            <Image
                                src={src}
                                alt="cardImage"
                            />
                        </div>
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
export default Test






