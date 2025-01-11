import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import TreatmentsSection from "./TreatmentsSection";
import VideoTestimonials from "./VideoTestimonials";
import AppointmentModal from "../utilities/AppointmentModal";

const HomePage: React.FC = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const navigate = useNavigate();

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
                        backgroundImage: `url('/images/landing.jpg')`,
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
                                <button onClick={openModal} className="w-full md:w-auto bg-white text-black hover:bg-gray-200 px-4 py-2 md:px-8 md:py-4 text-lg">
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
                        <div className="text-center md:text-left">CALL US: +91 9599106813</div>
                        <div className="text-center">Sir Ganga Ram Hospital, New Delhi</div>
                        <div className="text-center md:text-right">
                            <a href="mailto:dr.ckumawat@gmail.com" className="hover:text-gray-300">
                                ckumawatdr@gmail.com
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>

            <AppointmentModal isOpen={isModalOpen} onClose={closeModal} />

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
                                MEET YOUR DOCTOR
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

                            <button onClick={() => navigate("/about")} className="bg-amber-500 text-white rounded-lg w-full md:w-auto px-4 py-2 md:px-8 md:py-4 md:text-lg">
                                Learn More About Dr. Chetan Ram
                            </button>


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

            {/* New Conditions Section */}
            <section className="py-24 bg-gray-900">
                <div className="max-w-7xl mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="space-y-6"
                        >
                            <h3 className="text-amber-500 uppercase tracking-wider text-sm font-medium">
                                CONDITIONS WE TREAT
                            </h3>

                            <div className="space-y-4">
                                <h2 className="text-4xl lg:text-5xl font-light text-white">
                                    Comprehensive
                                    <span className="block">Spine Care Solutions</span>
                                </h2>

                                <p className="text-gray-300 leading-relaxed">
                                    Dr. Chetan Ram specializes in treating a wide range of spine conditions, from common degenerative disorders to complex spinal deformities. With expertise in both surgical and non-surgical approaches, we provide personalized care for conditions including:
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                                    <div className="space-y-2">
                                        <h4 className="text-white font-medium">Degenerative Conditions</h4>
                                        <ul className="text-gray-300 space-y-1">
                                            <li>• Herniated Disc</li>
                                            <li>• Spinal Stenosis</li>
                                            <li>• Degenerative Disc Disease</li>
                                        </ul>
                                    </div>
                                    <div className="space-y-2">
                                        <h4 className="text-white font-medium">Structural Issues</h4>
                                        <ul className="text-gray-300 space-y-1">
                                            <li>• Scoliosis</li>
                                            <li>• Spinal Fractures</li>
                                            <li>• Spondylolisthesis</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="md:block flex justify-center w-full">
                                    <button
                                        onClick={() => navigate("/conditions")}
                                        className="mt-8 bg-amber-500 text-white rounded-lg px-8 py-4 text-lg hover:bg-amber-600 transition duration-300"
                                    >
                                        View All Conditions
                                    </button>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div

                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="aspect-[4/3] rounded-lg overflow-hidden">
                                <img
                                    src="/images/spine1.jpg"
                                    alt="Spine conditions treatment"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
            <TreatmentsSection />
            <VideoTestimonials />

            <section className="py-16 bg-white">
                <div className="max-w-[1920px] mx-auto px-4 md:px-6">
                    <h2 className="text-4xl text-center font-light text-gray-900 mb-12">Our Location</h2>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        className="w-full h-[400px] md:h-[500px]"
                    >
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14007.352199441619!2d77.18312725472539!3d28.63461551625263!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d02a3fdbab21b%3A0x684168a84f30def7!2sSir%20Ganga%20Ram%20Hospital%20Emergency%20Room!5e0!3m2!1sen!2sin!4v1735388465269!5m2!1sen!2sin"
                            className="w-full h-full border-0 rounded-lg shadow-lg"
                            title="Dr. Chetan Ram Location"
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </motion.div>
                </div>
            </section>


            <section className="bg-amber-500 py-16">
                <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <h2 className="text-white text-3xl md:text-4xl font-light">Ready to Take the Next Step?</h2>
                        <p className="text-white text-lg md:text-xl max-w-3xl mx-auto">
                            Schedule a consultation to discuss your condition and explore the most suitable treatment options.
                        </p>
                        <button onClick={openModal} className="bg-white text-amber-500 px-8 py-4 rounded-lg text-lg hover:bg-gray-100 transition duration-300">
                            Book Consultation
                        </button>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default HomePage;