import React, { useState } from "react";
import { MapPin, Phone, Mail, Clock, Award, Users, Calendar } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import AppointmentModal from "../utilities/AppointmentModal";

const GurgaonPage: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const navigate = useNavigate();

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <>
            <Helmet>
                <title>Best Back Pain Doctor in Gurgaon | Dr Chetan Ram | Spine Specialist</title>
                <meta name="description" content="Looking for back pain doctor in Gurgaon? Dr Chetan Ram is the best spine specialist in Gurgaon with 10+ years experience. Expert treatment for back pain, disc problems." />
                <meta name="keywords" content="back pain doctor gurgaon, spine doctor gurgaon, best spine specialist gurgaon, disc problem treatment gurgaon, neck pain doctor gurgaon" />
                
                <meta property="og:title" content="Best Back Pain Doctor in Gurgaon | Dr Chetan Ram | Spine Specialist" />
                <meta property="og:description" content="Looking for back pain doctor in Gurgaon? Dr Chetan Ram is the best spine specialist in Gurgaon with 10+ years experience. Expert treatment for back pain, disc problems." />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="https://drchetanspinesurgeon.com/images/doc3.jpg" />

                <script type="application/ld+json">{`
                    {
                        "@context": "https://schema.org",
                        "@type": "MedicalBusiness",
                        "name": "Dr. Chetan Ram - Best Back Pain Doctor in Gurgaon",
                        "description": "Expert back pain doctor and spine specialist in Gurgaon with 10+ years experience",
                        "address": {
                            "@type": "PostalAddress",
                            "addressLocality": "Gurgaon",
                            "addressRegion": "Haryana",
                            "addressCountry": "IN"
                        },
                        "telephone": "+919599106813",
                        "medicalSpecialty": "Spine Surgery",
                        "priceRange": "$$"
                    }
                `}</script>
            </Helmet>

            <div className="flex flex-col min-h-screen bg-white font-sans">
                {/* Hero Section */}
                <section className="bg-gradient-to-r from-blue-800 to-blue-900 text-white py-36 px-4 md:px-8">
                    <div className="max-w-6xl mx-auto">
                        <div className="flex flex-col md:flex-row items-center justify-between">
                            <motion.div 
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                                className="md:w-1/2 mb-8 md:mb-0"
                            >
                                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                                    Best Back Pain Doctor in Gurgaon
                                </h1>
                                <p className="text-lg mb-8">
                                    Expert back pain treatment with Dr Chetan Ram. Over 10+ years of experience treating spine problems, disc issues, and neck pain in Gurgaon.
                                </p>
                                <button
                                    onClick={openModal}
                                    className="bg-green-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-600 transition duration-300"
                                >
                                    Book an Appointment
                                </button>
                            </motion.div>
                            <motion.div 
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="md:w-1/2"
                            >
                                <img
                                    src="/images/doc3.jpg"
                                    alt="Dr Chetan Ram - Best Back Pain Doctor in Gurgaon"
                                    className="rounded-lg shadow-xl w-full"
                                />
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Main Content Section */}
                <section className="py-12 md:px-8 max-w-6xl mx-auto">
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="bg-white rounded-lg shadow-md p-6 md:p-8 mb-10"
                    >
                        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6">
                            Suffering from Back Pain in Gurgaon?
                        </h2>
                        <p className="mb-6 text-gray-700">
                            Dr Chetan Ram is one of the most trusted back pain doctors in Gurgaon, helping thousands of patients get relief from spine problems. With special training from Japan and over 10 years of experience, he provides the best treatment for all types of back and neck pain.
                        </p>
                        <p className="mb-6 text-gray-700">
                            Whether you have chronic back pain, slip disc, neck pain, or any spine problem, Dr Chetan Ram offers modern treatment methods that help you recover faster and get back to your normal life.
                        </p>
                        <div className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium mb-6">
                            Japan-Trained Spine Doctor
                        </div>
                    </motion.div>

                    {/* Why Choose Dr Chetan Ram Section */}
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="bg-gray-50 rounded-lg shadow-md p-6 md:p-8 mb-10"
                    >
                        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6">
                            Why Choose Dr Chetan Ram for Back Pain Treatment?
                        </h2>
                        <p className="mb-6 text-gray-700">
                            Dr Chetan Ram is known as the best spine doctor in Gurgaon because of his expertise and caring approach. He understands that back pain can make your life difficult, and he works to give you the best treatment possible.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                            <div className="flex items-center p-4 bg-white rounded-lg shadow">
                                <Award className="text-green-500 h-5 w-5 mr-2" />
                                <span>International Training</span>
                            </div>
                            <div className="flex items-center p-4 bg-white rounded-lg shadow">
                                <Users className="text-green-500 h-5 w-5 mr-2" />
                                <span>10+ Years Experience</span>
                            </div>
                            <div className="flex items-center p-4 bg-white rounded-lg shadow">
                                <Calendar className="text-green-500 h-5 w-5 mr-2" />
                                <span>Thousands of Happy Patients</span>
                            </div>
                        </div>

                        <div className="inline-block bg-blue-800 text-white px-3 py-1 rounded-full text-sm font-medium">
                            Modern Treatment Methods
                        </div>
                    </motion.div>

                    {/* Back Pain Problems We Treat Section */}
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="mb-10"
                    >
                        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6 text-center">
                            Back Pain Problems We Treat in Gurgaon
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
                            <div className="bg-white rounded-lg shadow-md overflow-hidden">
                                <div className="h-48 bg-gray-100">
                                    <img
                                        src="/images/spine1.jpg"
                                        alt="Back Pain Treatment Gurgaon"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold mb-3 text-gray-700">Chronic Back Pain</h3>
                                    <p className="text-gray-600">Long-term back pain, lower back pain, muscle pain, and spine stiffness problems</p>
                                </div>
                            </div>

                            <div className="bg-white rounded-lg shadow-md overflow-hidden">
                                <div className="h-48 bg-gray-100">
                                    <img
                                        src="/images/landing.jpg"
                                        alt="Slip Disc Treatment Gurgaon"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold mb-3 text-gray-700">Slip Disc Problems</h3>
                                    <p className="text-gray-600">Slip disc, disc bulge, disc damage, and nerve pain caused by disc problems</p>
                                </div>
                            </div>

                            <div className="bg-white rounded-lg shadow-md overflow-hidden">
                                <div className="h-48 bg-gray-100">
                                    <img
                                        src="/images/doc1.jpg"
                                        alt="Neck Pain Doctor Gurgaon"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold mb-3 text-gray-700">Neck Pain & Spine Problems</h3>
                                    <p className="text-gray-600">Neck pain, spine curvature problems, and other spine bone issues</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Location Section */}
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="bg-green-50 rounded-lg shadow-md p-6 md:p-8 mb-10"
                    >
                        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6">
                            Serving Gurgaon and Nearby Areas
                        </h2>
                        <p className="mb-6 text-gray-700">
                            Dr Chetan Ram provides back pain treatment to patients from all over Gurgaon and nearby areas. We understand the convenience of our patients and try to make treatment as easy as possible.
                        </p>

                        <div className="mb-8">
                            <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                                <h3 className="text-xl font-semibold mb-2 text-gray-700">Areas We Serve</h3>
                                <p className="flex items-start mb-2">
                                    <MapPin className="text-green-500 h-5 w-5 mr-2 mt-1 flex-shrink-0" />
                                    <span>Gurgaon and NCR Region</span>
                                </p>
                                <ul className="ml-7 text-gray-600 list-disc">
                                    <li>Expert back pain treatment</li>
                                    <li>Modern medical equipment</li>
                                    <li>Quick appointment booking</li>
                                    <li>Experienced medical team</li>
                                    <li>Follow-up care and support</li>
                                </ul>
                            </div>

                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                                <div className="bg-white p-4 rounded-lg shadow-md flex items-center justify-center">
                                    <span className="text-gray-600">Cyber City</span>
                                </div>
                                <div className="bg-white p-4 rounded-lg shadow-md flex items-center justify-center">
                                    <span className="text-gray-600">DLF Phase 1</span>
                                </div>
                                <div className="bg-white p-4 rounded-lg shadow-md flex items-center justify-center">
                                    <span className="text-gray-600">Golf Course Road</span>
                                </div>
                                <div className="bg-white p-4 rounded-lg shadow-md flex items-center justify-center">
                                    <span className="text-gray-600">Sohna Road</span>
                                </div>
                                <div className="bg-white p-4 rounded-lg shadow-md flex items-center justify-center">
                                    <span className="text-gray-600">Sector 14</span>
                                </div>
                                <div className="bg-white p-4 rounded-lg shadow-md flex items-center justify-center">
                                    <span className="text-gray-600">MG Road</span>
                                </div>
                                <div className="bg-white p-4 rounded-lg shadow-md flex items-center justify-center">
                                    <span className="text-gray-600">Udyog Vihar</span>
                                </div>
                                <div className="bg-white p-4 rounded-lg shadow-md flex items-center justify-center">
                                    <span className="text-gray-600">New Gurgaon</span>
                                </div>
                            </div>
                        </div>

                        <div className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                            Easy to Reach from Anywhere in Gurgaon
                        </div>
                    </motion.div>

                    {/* Treatment Process Section */}
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="bg-blue-800 text-white rounded-lg shadow-md p-6 md:p-8 mb-10"
                    >
                        <h2 className="text-2xl md:text-3xl font-semibold mb-6">
                            How We Treat Your Back Pain
                        </h2>
                        <p className="mb-6">
                            Dr Chetan Ram follows a step-by-step process to understand your back pain problem and give you the best treatment. Every patient gets personal attention and care.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 mb-8">
                            <div className="flex items-start">
                                <div className="h-6 w-6 rounded-full bg-green-500 text-white flex items-center justify-center font-bold mr-3 mt-1">1</div>
                                <div>
                                    <h3 className="font-semibold mb-1">Listen to Your Problem</h3>
                                    <p className="text-gray-300 text-sm">We carefully listen to your back pain symptoms</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <div className="h-6 w-6 rounded-full bg-green-500 text-white flex items-center justify-center font-bold mr-3 mt-1">2</div>
                                <div>
                                    <h3 className="font-semibold mb-1">Check Your Spine</h3>
                                    <p className="text-gray-300 text-sm">Complete examination using modern equipment</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <div className="h-6 w-6 rounded-full bg-green-500 text-white flex items-center justify-center font-bold mr-3 mt-1">3</div>
                                <div>
                                    <h3 className="font-semibold mb-1">Make Treatment Plan</h3>
                                    <p className="text-gray-300 text-sm">Create a plan that works best for your problem</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <div className="h-6 w-6 rounded-full bg-green-500 text-white flex items-center justify-center font-bold mr-3 mt-1">4</div>
                                <div>
                                    <h3 className="font-semibold mb-1">Modern Treatment</h3>
                                    <p className="text-gray-300 text-sm">Latest methods for quick and safe recovery</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <div className="h-6 w-6 rounded-full bg-green-500 text-white flex items-center justify-center font-bold mr-3 mt-1">5</div>
                                <div>
                                    <h3 className="font-semibold mb-1">Follow-up Care</h3>
                                    <p className="text-gray-300 text-sm">Regular check-ups to ensure complete recovery</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-blue-700 p-6 rounded-lg shadow-md">
                            <h3 className="text-lg font-semibold mb-4 text-green-400">What makes us different:</h3>
                            <ul className="space-y-2 text-gray-300">
                                <li className="flex items-center">
                                    <div className="h-2 w-2 rounded-full bg-green-500 mr-3"></div>
                                    Simple explanation of your back pain problem
                                </li>
                                <li className="flex items-center">
                                    <div className="h-2 w-2 rounded-full bg-green-500 mr-3"></div>
                                    Clear information about treatment options
                                </li>
                                <li className="flex items-center">
                                    <div className="h-2 w-2 rounded-full bg-green-500 mr-3"></div>
                                    Support during your recovery
                                </li>
                                <li className="flex items-center">
                                    <div className="h-2 w-2 rounded-full bg-green-500 mr-3"></div>
                                    Modern and safe treatment methods
                                </li>
                                <li className="flex items-center">
                                    <div className="h-2 w-2 rounded-full bg-green-500 mr-3"></div>
                                    Caring and experienced medical team
                                </li>
                            </ul>
                        </div>
                    </motion.div>

                    {/* Appointment Booking Section */}
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="bg-green-50 rounded-lg shadow-md p-6 md:p-8 mb-10"
                    >
                        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6">
                            Book Your Appointment Today
                        </h2>
                        <p className="mb-6 text-gray-700">
                            Don't let back pain stop you from enjoying life. Meet Dr Chetan Ram and get the best treatment for your spine problems. Our team is ready to help you feel better.
                        </p>

                        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div className="text-center">
                                    <h3 className="font-semibold mb-2 text-gray-700">Check Your Problem</h3>
                                    <p className="text-sm text-gray-600">Complete examination and understanding</p>
                                </div>
                                <div className="text-center">
                                    <h3 className="font-semibold mb-2 text-gray-700">Get Treatment Plan</h3>
                                    <p className="text-sm text-gray-600">Personal treatment plan for you</p>
                                </div>
                                <div className="text-center">
                                    <h3 className="font-semibold mb-2 text-gray-700">Recovery Support</h3>
                                    <p className="text-sm text-gray-600">Help and guidance during recovery</p>
                                </div>
                            </div>
                        </div>

                        <p className="text-gray-700 mb-6">
                            Call us or book online to fix your appointment. We will find a time that works for you.
                        </p>

                        <div className="text-center">
                            <button
                                onClick={openModal}
                                className="bg-green-500 text-white px-8 py-3 rounded-lg font-medium hover:bg-green-600 transition duration-300 mr-4"
                            >
                                Book Appointment Online
                            </button>
                            <button
                                onClick={() => window.open('tel:+919599106813')}
                                className="bg-blue-800 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition duration-300"
                            >
                                Call Now
                            </button>
                        </div>
                    </motion.div>

                    {/* Final CTA Section */}
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="bg-blue-800 text-white rounded-lg shadow-md p-6 md:p-8 text-center"
                    >
                        <h2 className="text-2xl md:text-3xl font-semibold mb-6">
                            Get Relief from Back Pain in Gurgaon
                        </h2>
                        <p className="mb-6 text-gray-300 max-w-3xl mx-auto">
                            Whether you have been suffering from back pain for a long time, recently got injured, or need a second opinion about spine surgery, Dr Chetan Ram is here to help. With expert training and years of experience, you can trust him for the best spine care in Gurgaon.
                        </p>
                        <p className="mb-8 text-gray-300 max-w-3xl mx-auto">
                            Don't let back pain control your life. Take the first step towards better health and book your appointment today.
                        </p>

                        <div className="bg-blue-700 p-6 rounded-lg shadow-md inline-block">
                            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                                <div className="flex items-center">
                                    <Phone className="text-green-500 h-5 w-5 mr-2" />
                                    <span>+91 9599106813</span>
                                </div>
                                <div className="flex items-center">
                                    <Mail className="text-green-500 h-5 w-5 mr-2" />
                                    <span>ckumawatdr@gmail.com</span>
                                </div>
                                <div className="flex items-center">
                                    <Clock className="text-green-500 h-5 w-5 mr-2" />
                                    <span>Mon-Sat: 9 AM - 6 PM</span>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8">
                            <p className="text-lg font-medium text-green-400">
                                Dr Chetan Ram - Your trusted back pain doctor in Gurgaon, helping you live without pain.
                            </p>
                        </div>
                    </motion.div>
                </section>

                <AppointmentModal isOpen={isModalOpen} onClose={closeModal} />
            </div>
        </>
    );
};

export default GurgaonPage;