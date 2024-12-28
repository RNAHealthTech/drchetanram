import React from "react";
import { motion } from 'framer-motion';

const AboutPage: React.FC = () => {
    return (
        <div className="relative">
            <div className="relative min-h-[80vh]">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `url('/images/doc4.JPG')`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                >
                    <div className="absolute inset-0 bg-black/50" />
                </motion.div>

                <div className="relative z-10 flex items-center justify-center min-h-[calc(100vh-10vh)]">
                    <div className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-20 text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                            className="space-y-8 md:space-y-6"
                        >
                            <h2 className="text-white text-lg md:text-xl tracking-wider mb-4 md:mb-0">
                                MEET DR. CHETAN RAM
                            </h2>
                            <h1 className="text-white text-2xl md:text-4xl lg:text-5xl font-light leading-relaxed md:leading-tight px-2 md:px-0">
                                INTERNATIONALLY TRAINED
                                <br className="hidden md:block" />
                                <span className="block mt-2 md:mt-0 md:inline">SPINE SURGERY SPECIALIST</span>
                            </h1>

                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5, delay: 1 }}
                                className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-4 mt-10 md:mt-8"
                            >
                                <button className="w-full md:w-auto bg-white text-black hover:bg-gray-200 px-4 py-2 md:px-8 md:py-4 text-lg">
                                    View Credentials
                                </button>
                                <button className="w-full md:w-auto text-white border border-white hover:bg-white hover:text-black px-4 py-2 md:px-8 md:py-4 text-lg mt-4 md:mt-0">
                                    Research Publications
                                </button>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutPage;