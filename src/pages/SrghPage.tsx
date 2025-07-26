import React, { useState } from "react";
import { MapPin, Phone, Mail, Clock, Award, Users, Calendar, Star, CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import AppointmentModal from "../utilities/AppointmentModal";

const SirGangaRamPage: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const navigate = useNavigate();

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <>
            <Helmet>
                <title>Best Spine Doctor in Sir Ganga Ram Hospital | Dr Chetan Ram | Back Pain Specialist</title>
                <meta name="description" content="Looking for the best spine doctor in Sir Ganga Ram Hospital? Dr Chetan Ram specializes in back pain, neck pain & spine problems. Expert spine treatment at Sir Ganga Ram Hospital Delhi." />
                <meta name="keywords" content="spine doctor sir ganga ram hospital, back pain doctor sir ganga ram, neck pain specialist delhi, spine treatment sir ganga ram, best spine doctor delhi" />
                
                <meta property="og:title" content="Best Spine Doctor in Sir Ganga Ram Hospital | Dr Chetan Ram" />
                <meta property="og:description" content="Expert spine doctor at Sir Ganga Ram Hospital. Specializing in back pain, neck pain & spine surgery. Book appointment with Dr Chetan Ram today." />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="https://drchetanspinesurgeon.com/images/doc3.jpg" />

                <script type="application/ld+json">{`
                    {
                        "@context": "https://schema.org",
                        "@type": "MedicalBusiness",
                        "name": "Dr. Chetan Ram - Best Spine Doctor in Sir Ganga Ram Hospital",
                        "description": "Expert back pain and spine doctor at Sir Ganga Ram Hospital Delhi with 10+ years experience",
                        "address": {
                            "@type": "PostalAddress",
                            "streetAddress": "Sir Ganga Ram Hospital, Rajinder Nagar",
                            "addressLocality": "New Delhi",
                            "addressRegion": "Delhi",
                            "postalCode": "110060",
                            "addressCountry": "IN"
                        },
                        "telephone": "+919599106813",
                        "medicalSpecialty": "Spine Surgery, Back Pain Treatment",
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
                                    Best Spine Doctor in Sir Ganga Ram Hospital
                                </h1>
                                <p className="text-lg mb-8">
                                    Expert back pain treatment and spine care with Dr Chetan Ram. 10+ years experience treating back pain, neck pain, and spine problems at Sir Ganga Ram Hospital Delhi.
                                </p>
                                <div className="flex items-center mb-6">
                                    <div className="flex text-yellow-400">
                                        <Star className="h-5 w-5" fill="currentColor" />
                                        <Star className="h-5 w-5" fill="currentColor" />
                                        <Star className="h-5 w-5" fill="currentColor" />
                                        <Star className="h-5 w-5" fill="currentColor" />
                                        <Star className="h-5 w-5" fill="currentColor" />
                                    </div>
                                    <span className="ml-2 text-sm">Trusted by thousands of patients</span>
                                </div>
                                <button
                                    onClick={openModal}
                                    className="bg-green-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-600 transition duration-300"
                                >
                                    Book Appointment Now
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
                                    alt="Dr Chetan Ram - Best Spine Doctor at Sir Ganga Ram Hospital"
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
                            Need a Back Pain Doctor at Sir Ganga Ram Hospital?
                        </h2>
                        <p className="mb-6 text-gray-700">
                            Dr Chetan Ram is the most trusted spine doctor at Sir Ganga Ram Hospital Delhi. If you're suffering from back pain, neck pain, or spine problems, you've come to the right place. With special training from Japan and over 10 years of experience, Dr Chetan Ram has helped thousands of patients get relief from spine pain.
                        </p>
                        <p className="mb-6 text-gray-700">
                            Whether your back pain is new or you've been suffering for months, Dr Chetan Ram uses the latest treatments to help you feel better quickly. He specializes in treating all types of spine problems without major surgery when possible.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                            <div className="bg-green-100 text-green-800 px-3 py-2 rounded-lg text-center font-medium">
                                Japan-Trained Spine Expert
                            </div>
                            <div className="bg-blue-100 text-blue-800 px-3 py-2 rounded-lg text-center font-medium">
                                Sir Ganga Ram Hospital
                            </div>
                            <div className="bg-purple-100 text-purple-800 px-3 py-2 rounded-lg text-center font-medium">
                                10+ Years Experience
                            </div>
                        </div>
                    </motion.div>

                    {/* Common Problems Section */}
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="bg-red-50 rounded-lg shadow-md p-6 md:p-8 mb-10"
                    >
                        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6">
                            Do You Have These Common Spine Problems?
                        </h2>
                        <p className="mb-6 text-gray-700">
                            If you're experiencing any of these symptoms, Dr Chetan Ram at Sir Ganga Ram Hospital can help you get better:
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <h3 className="text-xl font-semibold mb-4 text-red-700 flex items-center">
                                    <CheckCircle className="h-5 w-5 mr-2" />
                                    Back Pain Problems
                                </h3>
                                <ul className="space-y-2 text-gray-600">
                                    <li>• Lower back pain that won't go away</li>
                                    <li>• Pain that shoots down your leg</li>
                                    <li>• Back pain after sitting or standing</li>
                                    <li>• Pain that gets worse with movement</li>
                                    <li>• Morning back stiffness</li>
                                </ul>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <h3 className="text-xl font-semibold mb-4 text-red-700 flex items-center">
                                    <CheckCircle className="h-5 w-5 mr-2" />
                                    Neck Pain Problems
                                </h3>
                                <ul className="space-y-2 text-gray-600">
                                    <li>• Neck pain and stiffness</li>
                                    <li>• Pain that goes to your shoulder</li>
                                    <li>• Headaches from neck problems</li>
                                    <li>• Numbness in hands or fingers</li>
                                    <li>• Pain while looking up or down</li>
                                </ul>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <h3 className="text-xl font-semibold mb-4 text-red-700 flex items-center">
                                    <CheckCircle className="h-5 w-5 mr-2" />
                                    Disc Problems
                                </h3>
                                <ul className="space-y-2 text-gray-600">
                                    <li>• Slipped disc pain</li>
                                    <li>• Bulging disc problems</li>
                                    <li>• Disc pressing on nerves</li>
                                    <li>• Sciatica pain down leg</li>
                                    <li>• Weakness in legs or arms</li>
                                </ul>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <h3 className="text-xl font-semibold mb-4 text-red-700 flex items-center">
                                    <CheckCircle className="h-5 w-5 mr-2" />
                                    Other Spine Issues
                                </h3>
                                <ul className="space-y-2 text-gray-600">
                                    <li>• Spine curvature problems</li>
                                    <li>• Arthritis in spine</li>
                                    <li>• Spine injury from accident</li>
                                    <li>• Old age spine problems</li>
                                    <li>• Spine pain after work</li>
                                </ul>
                            </div>
                        </div>

                        <div className="bg-red-100 border border-red-300 p-4 rounded-lg">
                            <p className="text-red-800 font-medium">
                                Don't ignore spine pain! Early treatment prevents bigger problems later. Book your appointment today.
                            </p>
                        </div>
                    </motion.div>

                    {/* Why Choose Section */}
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="bg-blue-50 rounded-lg shadow-md p-6 md:p-8 mb-10"
                    >
                        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6">
                            Why Choose Dr Chetan Ram at Sir Ganga Ram Hospital?
                        </h2>
                        <p className="mb-6 text-gray-700">
                            When you need spine treatment, you want the best doctor at the best hospital. Here's why patients trust Dr Chetan Ram:
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                            <div className="bg-white p-6 rounded-lg shadow-md text-center">
                                <Award className="text-blue-500 h-8 w-8 mx-auto mb-3" />
                                <h3 className="font-semibold mb-2">Expert Training from Japan</h3>
                                <p className="text-gray-600 text-sm">Special spine surgery training from Japan makes him one of the best</p>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow-md text-center">
                                <Users className="text-blue-500 h-8 w-8 mx-auto mb-3" />
                                <h3 className="font-semibold mb-2">10+ Years Experience</h3>
                                <p className="text-gray-600 text-sm">Over a decade helping patients with back pain and spine problems</p>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow-md text-center">
                                <Calendar className="text-blue-500 h-8 w-8 mx-auto mb-3" />
                                <h3 className="font-semibold mb-2">Thousands of Happy Patients</h3>
                                <p className="text-gray-600 text-sm">Successfully treated thousands of spine patients</p>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow-md text-center">
                                <MapPin className="text-blue-500 h-8 w-8 mx-auto mb-3" />
                                <h3 className="font-semibold mb-2">Sir Ganga Ram Hospital</h3>
                                <p className="text-gray-600 text-sm">Delhi's most trusted hospital for spine treatment</p>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow-md text-center">
                                <CheckCircle className="text-blue-500 h-8 w-8 mx-auto mb-3" />
                                <h3 className="font-semibold mb-2">Latest Treatment Methods</h3>
                                <p className="text-gray-600 text-sm">Uses modern techniques for faster recovery</p>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow-md text-center">
                                <Star className="text-blue-500 h-8 w-8 mx-auto mb-3" />
                                <h3 className="font-semibold mb-2">Patient-Friendly Care</h3>
                                <p className="text-gray-600 text-sm">Explains everything clearly and cares about your comfort</p>
                            </div>
                        </div>

                        <div className="bg-blue-100 border border-blue-300 p-4 rounded-lg">
                            <p className="text-blue-800 font-medium">
                                "Dr Chetan Ram explained my back problem clearly and gave me treatment that really worked. I'm pain-free now!" - Patient Review
                            </p>
                        </div>
                    </motion.div>

                    {/* Treatment Types Section */}
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="mb-10"
                    >
                        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6 text-center">
                            Types of Spine Treatment We Provide
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
                            <div className="bg-white rounded-lg shadow-md overflow-hidden">
                                <div className="h-48 bg-gray-100">
                                    <img
                                        src="/images/spine1.jpg"
                                        alt="Back Pain Treatment at Sir Ganga Ram Hospital"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold mb-3 text-gray-700">Back Pain Treatment</h3>
                                    <p className="text-gray-600 mb-4">Complete treatment for all types of back pain - from medicine to surgery if needed</p>
                                    <ul className="text-sm text-gray-500 space-y-1">
                                        <li>• Lower back pain relief</li>
                                        <li>• Chronic back pain treatment</li>
                                        <li>• Back injury treatment</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="bg-white rounded-lg shadow-md overflow-hidden">
                                <div className="h-48 bg-gray-100">
                                    <img
                                        src="/images/landing.jpg"
                                        alt="Neck Pain Doctor Sir Ganga Ram"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold mb-3 text-gray-700">Neck Pain Treatment</h3>
                                    <p className="text-gray-600 mb-4">Expert care for neck pain, stiffness, and headaches caused by neck problems</p>
                                    <ul className="text-sm text-gray-500 space-y-1">
                                        <li>• Neck stiffness relief</li>
                                        <li>• Cervical spine problems</li>
                                        <li>• Headache from neck issues</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="bg-white rounded-lg shadow-md overflow-hidden">
                                <div className="h-48 bg-gray-100">
                                    <img
                                        src="/images/doc1.jpg"
                                        alt="Spine Surgery Sir Ganga Ram Hospital"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold mb-3 text-gray-700">Spine Surgery</h3>
                                    <p className="text-gray-600 mb-4">Advanced spine surgery with small cuts for faster healing and less pain</p>
                                    <ul className="text-sm text-gray-500 space-y-1">
                                        <li>• Disc surgery</li>
                                        <li>• Spine deformity correction</li>
                                        <li>• Minimally invasive surgery</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* About Sir Ganga Ram Hospital Section */}
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="bg-green-50 rounded-lg shadow-md p-6 md:p-8 mb-10"
                    >
                        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6">
                            About Sir Ganga Ram Hospital - Delhi's Best Hospital
                        </h2>
                        <p className="mb-6 text-gray-700">
                            Sir Ganga Ram Hospital is one of Delhi's most famous and trusted hospitals. When you choose Dr Chetan Ram for your spine treatment, you get the best doctor at the best hospital.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <h3 className="text-xl font-semibold mb-4 text-green-700">Hospital Features</h3>
                                <ul className="space-y-2 text-gray-600">
                                    <li className="flex items-center">
                                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                        <span>Latest spine surgery equipment</span>
                                    </li>
                                    <li className="flex items-center">
                                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                        <span>24/7 emergency spine care</span>
                                    </li>
                                    <li className="flex items-center">
                                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                        <span>Advanced MRI and CT scan</span>
                                    </li>
                                    <li className="flex items-center">
                                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                        <span>Expert nursing staff</span>
                                    </li>
                                    <li className="flex items-center">
                                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                        <span>Clean and safe environment</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <h3 className="text-xl font-semibold mb-4 text-green-700">Location Benefits</h3>
                                <div className="flex items-start mb-4">
                                    <MapPin className="text-green-500 h-5 w-5 mr-2 mt-1" />
                                    <div>
                                        <p className="font-medium">Sir Ganga Ram Hospital</p>
                                        <p className="text-sm text-gray-600">Rajinder Nagar, New Delhi - 110060</p>
                                    </div>
                                </div>
                                <ul className="space-y-2 text-gray-600">
                                    <li className="flex items-center">
                                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                        <span>Easy to reach from all Delhi areas</span>
                                    </li>
                                    <li className="flex items-center">
                                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                        <span>Near Karol Bagh metro station</span>
                                    </li>
                                    <li className="flex items-center">
                                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                        <span>Parking available</span>
                                    </li>
                                    <li className="flex items-center">
                                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                        <span>Good transport connections</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="bg-green-100 border border-green-300 p-4 rounded-lg">
                            <p className="text-green-800 font-medium">
                                Sir Ganga Ram Hospital is trusted by lakhs of patients across Delhi NCR for quality healthcare and expert doctors.
                            </p>
                        </div>
                    </motion.div>

                    {/* Treatment Process Section */}
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="bg-gray-800 text-white rounded-lg shadow-md p-6 md:p-8 mb-10"
                    >
                        <h2 className="text-2xl md:text-3xl font-semibold mb-6">
                            How Dr Chetan Ram Will Help You Get Better
                        </h2>
                        <p className="mb-8 text-gray-300">
                            When you visit Dr Chetan Ram at Sir Ganga Ram Hospital, here's what happens step by step:
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 mb-8">
                            <div className="flex items-start">
                                <div className="h-8 w-8 rounded-full bg-green-500 text-white flex items-center justify-center font-bold mr-4 mt-1">1</div>
                                <div>
                                    <h3 className="font-semibold mb-2">First Visit - Understanding Your Problem</h3>
                                    <p className="text-gray-300 text-sm">Dr Chetan Ram will listen to your pain problems and examine you carefully to understand what's wrong</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="h-8 w-8 rounded-full bg-green-500 text-white flex items-center justify-center font-bold mr-4 mt-1">2</div>
                                <div>
                                    <h3 className="font-semibold mb-2">Tests if Needed</h3>
                                    <p className="text-gray-300 text-sm">If required, he may suggest X-ray, MRI or other tests to see your spine clearly</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="h-8 w-8 rounded-full bg-green-500 text-white flex items-center justify-center font-bold mr-4 mt-1">3</div>
                                <div>
                                    <h3 className="font-semibold mb-2">Explaining Your Condition</h3>
                                    <p className="text-gray-300 text-sm">He will explain what's causing your pain in simple words you can understand</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="h-8 w-8 rounded-full bg-green-500 text-white flex items-center justify-center font-bold mr-4 mt-1">4</div>
                                <div>
                                    <h3 className="font-semibold mb-2">Treatment Plan Just for You</h3>
                                    <p className="text-gray-300 text-sm">Based on your problem, he'll make a treatment plan that's right for you</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="h-8 w-8 rounded-full bg-green-500 text-white flex items-center justify-center font-bold mr-4 mt-1">5</div>
                                <div>
                                    <h3 className="font-semibold mb-2">Treatment and Follow-up</h3>
                                    <p className="text-gray-300 text-sm">Whether it's medicine, therapy, or surgery, he'll monitor your progress and adjust treatment</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="h-8 w-8 rounded-full bg-green-500 text-white flex items-center justify-center font-bold mr-4 mt-1">6</div>
                                <div>
                                    <h3 className="font-semibold mb-2">Getting You Back to Normal Life</h3>
                                    <p className="text-gray-300 text-sm">The goal is to make you pain-free and help you return to your daily activities</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-700 p-6 rounded-lg">
                            <h3 className="text-lg font-semibold mb-4 text-green-400">What Makes Our Treatment Special:</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <ul className="space-y-2 text-gray-300">
                                    <li className="flex items-center">
                                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                        We try non-surgical treatment first
                                    </li>
                                    <li className="flex items-center">
                                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                        Surgery only when really needed
                                    </li>
                                    <li className="flex items-center">
                                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                        Small cut surgery for faster healing
                                    </li>
                                </ul>
                                <ul className="space-y-2 text-gray-300">
                                    <li className="flex items-center">
                                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                        Clear explanation of treatment
                                    </li>
                                    <li className="flex items-center">
                                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                        Honest about recovery time
                                    </li>
                                    <li className="flex items-center">
                                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                        Support throughout your recovery </li>
                                </ul>
                            </div>
                        </div>
                    </motion.div>

                    {/* Appointment Booking Section */}
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="bg-blue-50 rounded-lg shadow-md p-6 md:p-8 mb-10"
                    >
                        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6">
                            Book Your Appointment with Dr Chetan Ram Today
                        </h2>
                        <p className="mb-6 text-gray-700">
                            Don't let back pain or spine problems control your life. Dr Chetan Ram at Sir Ganga Ram Hospital is ready to help you feel better. Many patients get relief after just one visit!
                        </p>

                        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div className="text-center">
                                    <Clock className="text-blue-500 h-8 w-8 mx-auto mb-2" />
                                    <h3 className="font-semibold mb-2 text-gray-700">Quick Appointment</h3>
                                    <p className="text-sm text-gray-600">Usually available within 2-3 days</p>
                                </div>
                                <div className="text-center">
                                    <CheckCircle className="text-blue-500 h-8 w-8 mx-auto mb-2" />
                                    <h3 className="font-semibold mb-2 text-gray-700">Easy Process</h3>
                                    <p className="text-sm text-gray-600">Simple booking, no complicated procedures</p>
                                </div>
                                <div className="text-center">
                                    <Star className="text-blue-500 h-8 w-8 mx-auto mb-2" />
                                    <h3 className="font-semibold mb-2 text-gray-700">Expert Care</h3>
                                    <p className="text-sm text-gray-600">Get treated by Delhi's best spine doctor</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-blue-100 border border-blue-300 p-4 rounded-lg mb-6">
                            <p className="text-blue-800 font-medium">
                                ⚡ Emergency spine problems? Dr Chetan Ram is available for urgent cases at Sir Ganga Ram Hospital 24/7
                            </p>
                        </div>

                        <div className="text-center">
                            <button
                                onClick={openModal}
                                className="bg-green-500 text-white px-8 py-3 rounded-lg font-medium hover:bg-green-600 transition duration-300 mr-4 mb-4 md:mb-0"
                            >
                                Book Online Appointment
                            </button>
                            <button
                                onClick={() => window.open('tel:+919599106813')}
                                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition duration-300"
                            >
                                Call: +91 9599106813
                            </button>
                        </div>

                        <p className="text-center text-gray-600 mt-4 text-sm">
                            Call now or book online - we'll confirm your appointment within 2 hours
                        </p>
                    </motion.div>

                    {/* Patient Stories Section */}
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="bg-yellow-50 rounded-lg shadow-md p-6 md:p-8 mb-10"
                    >
                        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6 text-center">
                            What Patients Say About Dr Chetan Ram
                        </h2>
                        <p className="mb-8 text-gray-700 text-center">
                            Read what other patients say about their experience with Dr Chetan Ram at Sir Ganga Ram Hospital:
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <div className="flex text-yellow-400 mb-3">
                                    <Star className="h-4 w-4" fill="currentColor" />
                                    <Star className="h-4 w-4" fill="currentColor" />
                                    <Star className="h-4 w-4" fill="currentColor" />
                                    <Star className="h-4 w-4" fill="currentColor" />
                                    <Star className="h-4 w-4" fill="currentColor" />
                                </div>
                                <p className="text-gray-700 mb-4 italic">
                                    "I had terrible back pain for 6 months. Dr Chetan Ram found the problem quickly and treated me without surgery. Now I'm completely fine!"
                                </p>
                                <p className="text-sm text-gray-500">- Rajesh Kumar, Delhi</p>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <div className="flex text-yellow-400 mb-3">
                                    <Star className="h-4 w-4" fill="currentColor" />
                                    <Star className="h-4 w-4" fill="currentColor" />
                                    <Star className="h-4 w-4" fill="currentColor" />
                                    <Star className="h-4 w-4" fill="currentColor" />
                                    <Star className="h-4 w-4" fill="currentColor" />
                                </div>
                                <p className="text-gray-700 mb-4 italic">
                                    "My neck pain was so bad I couldn't work. Dr Chetan Ram explained everything clearly and the treatment worked perfectly. Highly recommended!"
                                </p>
                                <p className="text-sm text-gray-500">- Priya Sharma, Gurgaon</p>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <div className="flex text-yellow-400 mb-3">
                                    <Star className="h-4 w-4" fill="currentColor" />
                                    <Star className="h-4 w-4" fill="currentColor" />
                                    <Star className="h-4 w-4" fill="currentColor" />
                                    <Star className="h-4 w-4" fill="currentColor" />
                                    <Star className="h-4 w-4" fill="currentColor" />
                                </div>
                                <p className="text-gray-700 mb-4 italic">
                                    "I needed spine surgery and was scared. Dr Chetan Ram did minimally invasive surgery. Recovery was much faster than expected!"
                                </p>
                                <p className="text-sm text-gray-500">- Amit Singh, Noida</p>
                            </div>
                        </div>

                        <div className="bg-yellow-100 border border-yellow-300 p-4 rounded-lg mt-6">
                            <p className="text-yellow-800 font-medium text-center">
                                Join thousands of happy patients who got their life back from spine pain with Dr Chetan Ram's expert care!
                            </p>
                        </div>
                    </motion.div>

                    {/* Contact Information Section */}
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="bg-gray-800 text-white rounded-lg shadow-md p-6 md:p-8 text-center"
                    >
                        <h2 className="text-2xl md:text-3xl font-semibold mb-6">
                            Contact Dr Chetan Ram at Sir Ganga Ram Hospital
                        </h2>
                        <p className="mb-6 text-gray-300 max-w-3xl mx-auto">
                            Ready to get relief from your spine pain? Dr Chetan Ram is here to help you at Sir Ganga Ram Hospital Delhi. Don't wait - spine problems get worse if not treated early.
                        </p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                            <div className="bg-gray-700 p-6 rounded-lg">
                                <h3 className="text-xl font-semibold mb-4 text-blue-400">Hospital Details</h3>
                                <div className="space-y-3 text-left">
                                    <div className="flex items-start">
                                        <MapPin className="text-blue-400 h-5 w-5 mr-3 mt-1" />
                                        <div>
                                            <p className="font-medium">Sir Ganga Ram Hospital</p>
                                            <p className="text-gray-300 text-sm">Rajinder Nagar, New Delhi - 110060</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center">
                                        <Phone className="text-blue-400 h-5 w-5 mr-3" />
                                        <span>+91 9599106813</span>
                                    </div>
                                    <div className="flex items-center">
                                        <Mail className="text-blue-400 h-5 w-5 mr-3" />
                                        <span>ckumawatdr@gmail.com</span>
                                    </div>
                                    <div className="flex items-center">
                                        <Clock className="text-blue-400 h-5 w-5 mr-3" />
                                        <span>Monday to Saturday: 9 AM - 6 PM</span>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gray-700 p-6 rounded-lg">
                                <h3 className="text-xl font-semibold mb-4 text-green-400">Easy to Reach From</h3>
                                <div className="grid grid-cols-2 gap-2 text-sm">
                                    <div className="bg-gray-600 p-2 rounded text-center">Karol Bagh</div>
                                    <div className="bg-gray-600 p-2 rounded text-center">CP</div>
                                    <div className="bg-gray-600 p-2 rounded text-center">Paharganj</div>
                                    <div className="bg-gray-600 p-2 rounded text-center">Delhi Cantt</div>
                                    <div className="bg-gray-600 p-2 rounded text-center">South Delhi</div>
                                    <div className="bg-gray-600 p-2 rounded text-center">Gurgaon</div>
                                    <div className="bg-gray-600 p-2 rounded text-center">Faridabad</div>
                                    <div className="bg-gray-600 p-2 rounded text-center">Noida</div>
                                </div>
                                <p className="text-gray-300 text-sm mt-3">
                                    Near Karol Bagh Metro Station • Free Parking Available
                                </p>
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-blue-600 to-green-600 p-6 rounded-lg">
                            <h3 className="text-xl font-semibold mb-4">Don't Let Spine Pain Control Your Life!</h3>
                            <p className="mb-6 text-blue-100">
                                Dr Chetan Ram at Sir Ganga Ram Hospital has helped thousands of patients live pain-free lives. You can be next!
                            </p>
                            <div className="space-y-4 md:space-y-0 md:flex md:justify-center md:space-x-4">
                                <button
                                    onClick={openModal}
                                    className="w-full md:w-auto bg-yellow-500 text-gray-900 px-6 py-3 rounded-lg font-bold hover:bg-yellow-400 transition duration-300"
                                >
                                    Book Appointment Now
                                </button>
                                <button
                                    onClick={() => window.open('tel:+919599106813')}
                                    className="w-full md:w-auto bg-white text-gray-900 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition duration-300"
                                >
                                    Call: +91 9599106813
                                </button>
                            </div>
                            <p className="mt-4 text-blue-100 text-sm">
                                Available for emergency spine cases 24/7 at Sir Ganga Ram Hospital
                            </p>
                        </div>
                    </motion.div>
                </section>

                <AppointmentModal isOpen={isModalOpen} onClose={closeModal} />
            </div>
        </>
    );
};

export default SirGangaRamPage;