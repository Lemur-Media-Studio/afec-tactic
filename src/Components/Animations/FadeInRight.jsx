import { motion } from "framer-motion";

function FadeInRight({children}){
    return(
        <motion.div
        initial={{ x: 50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1}}
        transition={{ duration: 0.5 }}
        >
            {children}
        </motion.div>
    )
}

export default FadeInRight