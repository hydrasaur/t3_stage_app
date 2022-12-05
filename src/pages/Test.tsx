import { motion, useScroll, useSpring } from "framer-motion"
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

    return (
        <>
            <motion.div
                className={stylesheet.progressbar}
                style={{ scaleX: scrollYProgress }}
            />
            <ProgressBar progressPercentage={scrollPercentage} />
            <h1 className="fixed"></h1>
            <div className='h-96'>
                hallo
            </div>
            <div className='h-96'>
                hallo
            </div>
            <div className='h-96'>
                hallo
            </div>
            <div className='h-96'>
                hallo
            </div>
        </>
    )
}
export default Test


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
