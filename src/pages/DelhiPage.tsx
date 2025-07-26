import React, { useState } from "react";
import { MapPin, Phone, Mail, Clock, Award, Users, Calendar } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import AppointmentModal from "../utilities/AppointmentModal";

const DelhiPage: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const navigate = useNavigate();

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <>
            <Helmet>
                <title>Best Spine Surgeon in Delhi | Dr Chetan Ram | Sir Ganga Ram Hospital</title>
                <meta name="description" content="Looking for the best spine surgeon in Delhi? Dr Chetan Ram at Sir Ganga Ram Hospital offers expert spine care with 10+ years experience. Book appointment now." />
                <meta name="keywords" content="spine surgeon delhi, back pain doctor delhi, best spine specialist delhi, sir ganga ram hospital, spine surgery delhi" />
                
                <meta property="og:title" content="Best Spine Surgeon in Delhi | Dr Chetan Ram | Sir Ganga Ram Hospital" />
                <meta property="og:description" content="Looking for the best spine surgeon in Delhi? Dr Chetan Ram at Sir Ganga Ram Hospital offers expert spine care with 10+ years experience. Book appointment now." />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="https://drchetanspinesurgeon.com/images/doc3.jpg" />

                <script type="application/ld+json">{`
                    {
                        "@context": "https://schema.org",
                        "@type": "MedicalBusiness",
                        "name": "Dr. Chetan Ram - Best Spine Surgeon in Delhi",
                        "description": "Expert spine surgeon in Delhi with 10+ years experience at Sir Ganga Ram Hospital",
                        "address": {
                            "@type": "PostalAddress",
                            "streetAddress": "Sir Ganga Ram Hospital, Rajinder Nagar",
                            "addressLocality": "New Delhi",
                            "addressRegion": "Delhi",
                            "postalCode": "110060",
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
                <section className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-36 px-4 md:px-8">
                    <div className="max-w-6xl mx-auto">
                        <div className="flex flex-col md:flex-row items-center justify-between">
                            <motion.div 
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                                className="md:w-1/2 mb-8 md:mb-0"
                            >
                                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                                    Best Spine Surgeon in Delhi
                                </h1>
                                <p className="text-lg mb-8">
                                    Expert spine care with Dr Chetan Ram at Sir Ganga Ram Hospital. Over 10+ years of experience in advanced spine surgery and minimally invasive procedures.
                                </p>
                                <button
                                    onClick={openModal}
                                    className="bg-amber-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-amber-600 transition duration-300"
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
                                    alt="Dr Chetan Ram - Best Spine Surgeon in Delhi"
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
                            Looking for a Spine Surgeon in Delhi?
                        </h2>
                        <p className="mb-6 text-gray-700">
                            Dr Chetan Ram is one of the most trusted spine surgeons in Delhi, currently practicing as a consultant at Sir Ganga Ram Hospital. With internationally acquired training from Japan and over a decade of experience, he has successfully performed thousands of spine surgeries.
                        </p>
                        <p className="mb-6 text-gray-700">
                            Whether you're dealing with back pain, neck pain, or complex spine disorders, Dr Chetan Ram provides personalized care using the latest minimally invasive techniques for faster recovery and better outcomes.
                        </p>
                        <div className="inline-block bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-medium mb-6">
                            Japan-Trained Spine Specialist
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
                            Why Choose Dr Chetan Ram for Your Spine Care?
                        </h2>
                        <p className="mb-6 text-gray-700">
                            Dr Chetan Ram brings world-class expertise to spine care in Delhi. His unique combination of international training and deep understanding of patient needs makes him the preferred choice for spine surgery.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                            <div className="flex items-center p-4 bg-white rounded-lg shadow">
                                <Award className="text-amber-500 h-5 w-5 mr-2" />
                                <span>Japan Fellowship Training</span>
                            </div>
                            <div className="flex items-center p-4 bg-white rounded-lg shadow">
                                <Users className="text-amber-500 h-5 w-5 mr-2" />
                                <span>10+ Years Experience</span>
                            </div>
                            <div className="flex items-center p-4 bg-white rounded-lg shadow">
                                <Calendar className="text-amber-500 h-5 w-5 mr-2" />
                                <span>Thousands of Surgeries</span>
                            </div>
                        </div>

                        <div className="inline-block bg-gray-800 text-white px-3 py-1 rounded-full text-sm font-medium">
                            Minimally Invasive Techniques
                        </div>
                    </motion.div>

                    {/* Conditions Treated Section */}
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="mb-10"
                    >
                        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6 text-center">
                            Spine Conditions We Treat
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
                            <div className="bg-white rounded-lg shadow-md overflow-hidden">
                                <div className="h-48 bg-gray-100">
                                    <img
                                        src="/images/spine1.jpg"
                                        alt="Back Pain Treatment Delhi"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold mb-3 text-gray-700">Back Pain</h3>
                                    <p className="text-gray-600">Chronic back pain, acute injuries, muscle strain, disc problems, and spinal alignment issues</p>
                                </div>
                            </div>

                            <div className="bg-white rounded-lg shadow-md overflow-hidden">
                                <div className="h-48 bg-gray-100">
                                    <img
                                        src="/images/landing.jpg"
                                        alt="Spine Surgery Delhi"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold mb-3 text-gray-700">Disc Problems</h3>
                                    <p className="text-gray-600">Herniated disc, bulging disc, degenerative disc disease, and disc-related nerve compression</p>
                                </div>
                            </div>

                            <div className="bg-white rounded-lg shadow-md overflow-hidden">
                                <div className="h-48 bg-gray-100">
                                    <img
                                        src="/images/doc1.jpg"
                                        alt="Neck Pain Doctor Delhi"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold mb-3 text-gray-700">Spinal Deformities</h3>
                                    <p className="text-gray-600">Scoliosis, spinal stenosis, spondylolisthesis, and other structural spine problems</p>
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
                        className="bg-amber-50 rounded-lg shadow-md p-6 md:p-8 mb-10"
                    >
                        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6">
                            Visit Us at Sir Ganga Ram Hospital
                        </h2>
                        <p className="mb-6 text-gray-700">
                            Dr Chetan Ram practices at one of Delhi's most prestigious hospitals, Sir Ganga Ram Hospital, known for its world-class facilities and patient care standards.
                        </p>

                        <div className="mb-8">
                            <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                                <h3 className="text-xl font-semibold mb-2 text-gray-700">Sir Ganga Ram Hospital</h3>
                                <p className="flex items-start mb-2">
                                    <MapPin className="text-amber-500 h-5 w-5 mr-2 mt-1 flex-shrink-0" />
                                    <span>Rajinder Nagar, New Delhi - 110060</span>
                                </p>
                                <ul className="ml-7 text-gray-600 list-disc">
                                    <li>World-class spine surgery facilities</li>
                                    <li>Advanced imaging and diagnostic equipment</li>
                                    <li>24/7 emergency spine care</li>
                                    <li>Experienced surgical team</li>
                                    <li>Post-operative rehabilitation services</li>
                                </ul>
                            </div>

                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                                <div className="bg-white p-4 rounded-lg shadow-md flex items-center justify-center">
                                    <span className="text-gray-600">Karol Bagh</span>
                                </div>
                                <div className="bg-white p-4 rounded-lg shadow-md flex items-center justify-center">
                                    <span className="text-gray-600">Connaught Place</span>
                                </div>
                                <div className="bg-white p-4 rounded-lg shadow-md flex items-center justify-center">
                                    <span className="text-gray-600">Rajinder Nagar</span>
                                </div>
                                <div className="bg-white p-4 rounded-lg shadow-md flex items-center justify-center">
                                    <span className="text-gray-600">Paharganj</span>
                                </div>
                                <div className="bg-white p-4 rounded-lg shadow-md flex items-center justify-center">
                                    <span className="text-gray-600">Central Delhi</span>
                                </div>
                                <div className="bg-white p-4 rounded-lg shadow-md flex items-center justify-center">
                                    <span className="text-gray-600">South Delhi</span>
                                </div>
                                <div className="bg-white p-4 rounded-lg shadow-md flex items-center justify-center">
                                    <span className="text-gray-600">West Delhi</span>
                                </div>
                                <div className="bg-white p-4 rounded-lg shadow-md flex items-center justify-center">
                                    <span className="text-gray-600">North Delhi</span>
                                </div>
                            </div>
                        </div>

                        <div className="inline-block bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-medium">
                            Convenient Location in Central Delhi
                        </div>
                    </motion.div>

                    {/* Treatment Approach Section */}
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="bg-gray-800 text-white rounded-lg shadow-md p-6 md:p-8 mb-10"
                    >
                        <h2 className="text-2xl md:text-3xl font-semibold mb-6">
                            Our Treatment Approach
                        </h2>
                        <p className="mb-6">
                            Dr Chetan Ram believes in personalized care for every patient. Using advanced diagnostic tools and his extensive experience, he creates treatment plans that focus on your specific needs and recovery goals.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 mb-8">
                            <div className="flex items-start">
                                <div className="h-6 w-6 rounded-full bg-amber-500 text-white flex items-center justify-center font-bold mr-3 mt-1">1</div>
                                <div>
                                    <h3 className="font-semibold mb-1">Detailed Consultation</h3>
                                    <p className="text-gray-300 text-sm">Thorough examination and discussion of your symptoms</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <div className="h-6 w-6 rounded-full bg-amber-500 text-white flex items-center justify-center font-bold mr-3 mt-1">2</div>
                                <div>
                                    <h3 className="font-semibold mb-1">Advanced Diagnosis</h3>
                                    <p className="text-gray-300 text-sm">Using latest imaging and diagnostic techniques</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <div className="h-6 w-6 rounded-full bg-amber-500 text-white flex items-center justify-center font-bold mr-3 mt-1">3</div>
                                <div>
                                    <h3 className="font-semibold mb-1">Personalized Treatment</h3>
                                    <p className="text-gray-300 text-sm">Customized plan based on your specific condition</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <div className="h-6 w-6 rounded-full bg-amber-500 text-white flex items-center justify-center font-bold mr-3 mt-1">4</div>
                                <div>
                                    <h3 className="font-semibold mb-1">Minimally Invasive Surgery</h3>
                                    <p className="text-gray-300 text-sm">Advanced techniques for faster recovery</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <div className="h-6 w-6 rounded-full bg-amber-500 text-white flex items-center justify-center font-bold mr-3 mt-1">5</div>
                                <div>
                                    <h3 className="font-semibold mb-1">Post-Surgery Care</h3>
                                    <p className="text-gray-300 text-sm">Comprehensive follow-up and rehabilitation</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-700 p-6 rounded-lg shadow-md">
                            <h3 className="text-lg font-semibold mb-4 text-amber-400">Our commitment to you includes:</h3>
                            <ul className="space-y-2 text-gray-300">
                                <li className="flex items-center">
                                    <div className="h-2 w-2 rounded-full bg-amber-500 mr-3"></div>
                                    Clear explanation of your condition and treatment options
                                </li>
                                <li className="flex items-center">
                                    <div className="h-2 w-2 rounded-full bg-amber-500 mr-3"></div>
                                    Honest discussion about expected outcomes
                                </li>
                                <li className="flex items-center">
                                    <div className="h-2 w-2 rounded-full bg-amber-500 mr-3"></div>
                                    Support throughout your recovery journey
                                </li>
                                <li className="flex items-center">
                                    <div className="h-2 w-2 rounded-full bg-amber-500 mr-3"></div>
                                    Access to advanced surgical techniques
                                </li>
                                <li className="flex items-center">
                                    <div className="h-2 w-2 rounded-full bg-amber-500 mr-3"></div>
                                    Compassionate care from an experienced team
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
                        className="bg-amber-50 rounded-lg shadow-md p-6 md:p-8 mb-10"
                    >
                        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6">
                            Schedule Your Consultation
                        </h2>
                        <p className="mb-6 text-gray-700">
                            Don't let spine pain limit your life. Take the first step towards recovery by scheduling a consultation with Dr Chetan Ram. Our team is here to help you get back to doing what you love.
                        </p>

                        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div className="text-center">
                                    <h3 className="font-semibold mb-2 text-gray-700">Consultation</h3>
                                    <p className="text-sm text-gray-600">Comprehensive evaluation and diagnosis</p>
                                </div>
                                <div className="text-center">
                                    <h3 className="font-semibold mb-2 text-gray-700">Treatment Planning</h3>
                                    <p className="text-sm text-gray-600">Personalized approach to your care</p>
                                </div>
                                <div className="text-center">
                                    <h3 className="font-semibold mb-2 text-gray-700">Recovery Support</h3>
                                    <p className="text-sm text-gray-600">Ongoing care and rehabilitation</p>
                                </div>
                            </div>
                        </div>

                        <p className="text-gray-700 mb-6">
                            Call us or use our online booking system to schedule your appointment. We'll work with you to find a convenient time that fits your schedule.
                        </p>

                        <div className="text-center">
                            <button
                                onClick={openModal}
                                className="bg-amber-500 text-white px-8 py-3 rounded-lg font-medium hover:bg-amber-600 transition duration-300 mr-4"
                            >
                                Book Appointment Online
                            </button>
                            <button
                                onClick={() => window.open('tel:+919599106813')}
                                className="bg-gray-800 text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-700 transition duration-300"
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
                        className="bg-gray-800 text-white rounded-lg shadow-md p-6 md:p-8 text-center"
                    >
                        <h2 className="text-2xl md:text-3xl font-semibold mb-6">
                            Get Expert Spine Care in Delhi
                        </h2>
                        <p className="mb-6 text-gray-300 max-w-3xl mx-auto">
                            Whether you're dealing with chronic back pain, a recent injury, or need a second opinion on spine surgery, Dr Chetan Ram is here to help. With advanced training and years of experience, you can trust your spine care to one of Delhi's leading specialists.
                        </p>
                        <p className="mb-8 text-gray-300 max-w-3xl mx-auto">
                            Don't let spine problems control your life. Take the first step towards better health and schedule your consultation today.
                        </p>

                        <div className="bg-gray-700 p-6 rounded-lg shadow-md inline-block">
                            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                                <div className="flex items-center">
                                    <Phone className="text-amber-500 h-5 w-5 mr-2" />
                                    <span>+91 9599106813</span>
                                </div>
                                <div className="flex items-center">
                                    <Mail className="text-amber-500 h-5 w-5 mr-2" />
                                    <span>ckumawatdr@gmail.com</span>
                                </div>
                                <div className="flex items-center">
                                    <Clock className="text-amber-500 h-5 w-5 mr-2" />
                                    <span>Mon-Sat: 9 AM - 6 PM</span>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8">
                            <p className="text-lg font-medium text-amber-400">
                                Dr Chetan Ram - Your trusted spine surgeon in Delhi, committed to helping you live pain-free.
                            </p>
                        </div>
                    </motion.div>
                </section>

                <AppointmentModal isOpen={isModalOpen} onClose={closeModal} />
            </div>
        </>
    );
};

export default DelhiPage;