import { motion } from "framer-motion";

function FallDown({children}){
    return(
        <motion.div
        initial={{ y: -100 }}
        whileInView={{ y: 0}}
        transition={{ duration: 0.5 }}
        >
            {children}
        </motion.div>
    )
}

export default FallDown