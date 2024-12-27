import React from "react";
import { motion } from "framer-motion";

const HomePage: React.FC = () => {
    return (
        <div className="relative">
            {/* Hero Section */}
            <div className="relative min-h-[90vh]">
                {/* Background Image with Overlay */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `url('/images/bg2.jpg')`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}
                >
                    <div className="absolute inset-0 bg-black/50" />
                </motion.div>

                {/* Hero Content */}
                <div className="relative z-10 flex items-center justify-center min-h-[calc(100vh-10vh)]">
                    <div className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-20 text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                            className="space-y-8 md:space-y-6" // Increased spacing on mobile
                        >
                            <h2 className="text-white text-lg md:text-xl tracking-wider mb-4 md:mb-0">
                                THE PRACTICE
                            </h2>
                            <h1 className="text-white text-2xl md:text-4xl lg:text-5xl font-light leading-relaxed md:leading-tight px-2 md:px-0">
                                ADVANCED SPINE CARE FROM
                                <br className="hidden md:block" />
                                <span className="block mt-2 md:mt-0 md:inline">A WORLD-CLASS SURGEON</span>
                            </h1>

                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5, delay: 1 }}
                                className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-4 mt-10 md:mt-8"
                            >
                                <button className="w-full md:w-auto bg-white text-black hover:bg-gray-200 px-4 py-2 md:px-8 md:py-4 text-lg">
                                    Schedule an Appointment
                                </button>
                                <button className="w-full md:w-auto text-white border border-white hover:bg-white hover:text-black px-4 py-2 md:px-8 md:py-4 text-lg mt-4 md:mt-0">
                                    Learn More
                                </button>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>

                {/* Contact Bar */}
                <motion.div
                    initial={{ y: 100 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="relative z-10 bg-gray-900 text-white py-6 md:py-4"
                >
                    <div className="max-w-7xl mx-auto px-4 md:px-6 flex flex-col md:flex-row justify-between items-center text-sm space-y-3 md:space-y-0">
                        <div className="text-center md:text-left">CALL US: +91 9462292022</div>
                        <div className="text-center">Sir Ganga Ram Hospital, New Delhi</div>
                        <div className="text-center md:text-right">
                            <a href="mailto:dr.ckumawat@gmail.com" className="hover:text-gray-300">
                                dr.ckumawat@gmail.com
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>

            <section className="relative py-24">
                {/* Curved background lines */}
                <div
                    className="absolute inset-0 opacity-10" // Added opacity class
                    style={{
                        backgroundImage: `url('/images/bg.png')`,
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        zIndex: 0 // Explicitly set lower z-index
                    }}
                />

                <div className="relative max-w-7xl mx-auto px-6"> {/* Added relative positioning */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Text Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="space-y-6 relative z-10" // Added relative positioning and z-index
                        >
                            <h3 className="text-gray-700 uppercase tracking-wider text-sm font-medium">
                                OUR APPROACH
                            </h3>

                            <div className="space-y-4">
                                <h2 className="text-4xl lg:text-5xl font-light text-gray-900">
                                    A Dynamic Approach with
                                    <span className="block text-amber-600">an Innovative Vision</span>
                                </h2>

                                <p className="text-gray-600 leading-relaxed">
                                    With extensive experience in minimally invasive spine surgery and the latest technological advancements, Dr. Chetan Ram remains at the forefront of spine care innovation. His approach combines cutting-edge surgical techniques with a deep commitment to patient well-being.
                                </p>

                                <p className="text-gray-600 leading-relaxed">
                                    Drawing from his international training and expertise gained from his fellowship in Japan, Dr. Ram specializes in advanced spine surgery procedures while maintaining a patient-centered focus. His dedication to utilizing navigation-guided and minimally invasive techniques ensures optimal outcomes with faster recovery times.
                                </p>

                                <p className="text-gray-600 leading-relaxed">
                                    Each treatment plan is carefully tailored to meet individual patient needs, supported by his extensive research contributions and clinical experience in complex spine disorders. Dr. Ram and his team are committed to providing comprehensive spine care that enhances patients' quality of life.
                                </p>
                            </div>
                        </motion.div>

                        {/* Image Grid */}
                        <motion.div

                            viewport={{ once: true }}
                            className="relative z-10 grid grid-cols-2 gap-4" // Added z-index
                        >
                            {/* Top image */}
                            <motion.div

                                className="col-span-2"
                            >
                                <div className="aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden">
                                    <img
                                        src="/images/doc3.JPG"
                                        alt="Medical consultation"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </motion.div>

                            {/* Bottom two images */}
                            <motion.div

                                className="aspect-square bg-gray-100 rounded-lg overflow-hidden"
                            >
                                <img
                                    src="/images/doc1.JPG"
                                    alt="Surgical procedure"
                                    className="w-full h-full object-cover"
                                />
                            </motion.div>
                            <motion.div

                                className="aspect-square bg-gray-100 rounded-lg overflow-hidden"
                            >
                                <img
                                    src="/images/doc2.JPG"
                                    alt="Medical imaging review"
                                    className="w-full h-full object-cover"
                                />
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomePage;