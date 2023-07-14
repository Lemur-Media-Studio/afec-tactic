import { motion } from "framer-motion";

function ZoomIn({children}){
    return(
        <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1.0 }}
        transition={{ duration: 0.5 }}
        >
            {children}
        </motion.div>
    )
}

export default ZoomIn