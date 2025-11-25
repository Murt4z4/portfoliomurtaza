import Layout from "../../../layout/Layout";
import { motion } from 'framer-motion';



import { useLocation } from 'react-router-dom';

const Projects = () => {
    const location = useLocation();
    const title = location.state?.title || "My Design Work";
    return (
        <Layout>
            <motion.section
                className="px-4 py-6 md:px-14 md:py-6 text-white flex flex-col justify-center"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
            >
                <div className="flex flex-col md:flex-row justify-between w-full">
                    {/* Left Text */}
                    <div className="space-y-8">
                        <h1 className="text-2xl md:text-4xl font-base leading-tight">
                            {title}
                        </h1>
                    </div>
                </div>
            </motion.section>
        </Layout>

    );
}

export default Projects;
