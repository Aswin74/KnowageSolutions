import { motion } from "framer-motion"

function App() {
    return (
        <>
            <motion.div
                animate={{ x: 100, y: 50 }}
                transition={{
                    ease: "easeInOut",
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse",
                    repeatDelay: 1,
                }}
                className="text-red-700"
            >
                <p>asdasdasi</p>
            </motion.div>
        </>
    )
}

export default App
