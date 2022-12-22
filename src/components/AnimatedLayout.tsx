import { motion } from "framer-motion"

interface AnimatedLayoutProps {
    children: React.ReactNode
}

export const variants = {
    hidden: { opacity: 0, x: -200, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -100 },
}


const AnimatedLayout: React.FC<AnimatedLayoutProps> = ({ children }) => {
    return (
        <div className='flex bg-[#0d1116] text-white justify-center'>
            <motion.main
                initial={{ x: 300, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 300, opacity: 0 }}
                transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                }}
                className="flex-col pt-16 max-w-5xl"
            >
                {children}
            </motion.main>
        </div>
    )
}

export default AnimatedLayout