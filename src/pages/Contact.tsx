import React, { useState } from "react";
import { motion } from 'framer-motion';
import { useForm, ValidationError } from "@formspree/react";
import AppointmentModal from "../utilities/AppointmentModal";
import { Helmet } from "react-helmet-async";

const Contact: React.FC = () => {

    const [state, handleSubmit] = useForm('123xyz');
    console.log(state);

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        date: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleFinalSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        handleSubmit(formData);
        handleWhatsAppSubmit();
    };

    const handleWhatsAppSubmit = () => {
        const phoneNumber = '919599106813'; // Dr. Chetan's number without spaces or special characters

        // Format the message for WhatsApp
        const message = `Hello Dr. Chetan,\n\nNew appointment request:\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nPreferred Date: ${formData.date}\nQuery: ${formData.message}`;

        // Encode the message for URL
        const encodedMessage = encodeURIComponent(message);

        // Create WhatsApp URL
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

        // Open WhatsApp in a new tab
        window.open(whatsappUrl, '_blank');
    };


    return (
        <>
            <Helmet>
                <title>Book Appointment with Back Pain Specialist | Dr. Chetan Ram Delhi</title>
                <meta name="description" content="Schedule a consultation with Delhi's leading spine specialist at Sir Ganga Ram Hospital. Easy appointment booking for back pain, spine problems & slip disc treatment. Quick response guaranteed." />

                {/* OpenGraph Tags */}
                <meta property="og:title" content="Book Appointment - Back Pain Treatment in Delhi | Dr. Chetan Ram" />
                <meta property="og:description" content="Schedule your consultation with Delhi's trusted spine specialist at Sir Ganga Ram Hospital. Expert treatment for back pain, slip disc & spine problems. Easy online booking available." />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="https://yourwebsite.com/images/contact.png" />

                {/* Additional SEO Keywords */}
                <meta name="keywords" content="book spine doctor appointment, back pain consultation delhi, spine specialist appointment, Sir Ganga Ram Hospital spine doctor, back pain treatment booking" />

                {/* Schema.org Local Business */}
                <script type="application/ld+json">{`
    {
      "@context": "https://schema.org",
      "@type": "MedicalClinic",
      "name": "Dr. Chetan Ram - Spine Specialist Clinic",
      "telephone": "+919599106813",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Sir Ganga Ram Hospital",
        "addressLocality": "New Delhi",
        "addressRegion": "Delhi",
        "addressCountry": "IN"
      },
      "potentialAction": {
        "@type": "ReserveAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://yourwebsite.com/contact",
          "inLanguage": "en-US",
          "actionPlatform": [
            "http://schema.org/DesktopWebPlatform",
            "http://schema.org/IOSPlatform",
            "http://schema.org/AndroidPlatform"
          ]
        },
        "result": {
          "@type": "Reservation",
          "name": "Spine Consultation Appointment"
        }
      },
      "medicalSpecialty": [
        "Spine Surgery",
        "Orthopedic Surgery",
        "Back Pain Treatment"
      ],
      "availableService": {
        "@type": "MedicalProcedure",
        "name": "Spine Consultation",
        "description": "Expert consultation for back pain, spine problems and treatment planning"
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday"
          ],
          "opens": "09:00",
          "closes": "18:00"
        }
      ]
    }
  `}</script>
            </Helmet>
            <div className="relative">
                <div className="relative min-h-[80vh]">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                        className="absolute inset-0"
                        style={{
                            backgroundImage: `url('/images/contact.png')`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center'
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
                                    SCHEDULE A CONSULTATION
                                </h2>
                                <h1 className="text-white text-2xl md:text-4xl lg:text-5xl font-light leading-relaxed md:leading-tight px-2 md:px-0">
                                    SIR GANGA RAM HOSPITAL
                                    <br className="hidden md:block" />
                                    <span className="block mt-2 md:mt-0 md:inline">NEW DELHI</span>
                                </h1>

                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.5, delay: 1 }}
                                    className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-4 mt-10 md:mt-8"
                                >
                                    <button onClick={openModal} className="w-full md:w-auto bg-white text-black hover:bg-gray-200 px-4 py-2 md:px-8 md:py-4 text-lg">
                                        Book Appointment
                                    </button>
                                    <button className="w-full md:w-auto text-white border border-white hover:bg-white hover:text-black px-4 py-2 md:px-8 md:py-4 text-lg mt-4 md:mt-0">
                                        Contact Details
                                    </button>
                                </motion.div>

                                <AppointmentModal isOpen={isModalOpen} onClose={closeModal} />
                            </motion.div>
                        </div>
                    </div>
                </div>
                {/* second section form and close up */}
                <section id="contact-form" className="contact-form bg-white py-20">
                    <motion.div className="container mx-auto px-4">
                        <motion.div className="max-w-6xl mx-auto">
                            <motion.div className="flex flex-col lg:flex-row items-center">
                                {/* Image section */}
                                <motion.div className="w-full lg:w-1/2 lg:pl-8 mb-8 lg:mb-0 order-1 lg:order-2">
                                    <img
                                        src="/images/contact-appointment.png"
                                        alt="Doctor consultation"
                                        className="rounded-lg w-full h-auto object-cover"
                                    />
                                </motion.div>
                                {/* Form section */}
                                <motion.div className="w-full lg:w-1/2 lg:pr-8 order-2 lg:order-1">
                                    {state.succeeded ? (
                                        <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 lg:mb-8 text-center lg:text-left mt-4 sm:mt-6 lg:mt-0 px-4 lg:px-0">
                                            Your Form has been sent successfully!
                                        </h3>
                                    ) : (
                                        <motion.div>
                                            <h3 className="text-3xl font-bold mb-8 text-center lg:text-left mt-8 lg:mt-0">Schedule Your
                                                <span className="text-amber-600">
                                                    {' '} Appointment
                                                </span>
                                            </h3>

                                            <form onSubmit={handleFinalSubmit} className="space-y-6">
                                                <motion.div className="mb-8">
                                                    <label htmlFor="name" className="block text-oxford-blue text-sm font-semibold mb-2">Name </label>
                                                    <input
                                                        type="text"
                                                        name="name"
                                                        id="name"
                                                        value={formData.name}
                                                        onChange={handleChange}
                                                        required
                                                        placeholder="Type Name"
                                                        className="border-b border-platinum py-2 text-sm w-full"
                                                    />
                                                </motion.div>

                                                <motion.div className="mb-8">
                                                    <label htmlFor="phone" className="block text-oxford-blue text-sm font-semibold mb-2">Phone</label>
                                                    <input
                                                        type="tel"
                                                        name="phone"
                                                        id="phone"
                                                        value={formData.phone}
                                                        onChange={handleChange}
                                                        placeholder="Type Phone Number"
                                                        className="border-b border-platinum py-2 text-sm w-full"
                                                    />
                                                </motion.div>

                                                <motion.div className="mb-8">
                                                    <label htmlFor="email" className="block text-oxford-blue text-sm font-semibold mb-2">Email Address </label>
                                                    <input
                                                        type="email"
                                                        name="email"
                                                        id="email"
                                                        required
                                                        value={formData.email}
                                                        onChange={handleChange}
                                                        placeholder="Type Email Address"
                                                        className="border-b border-platinum py-2 text-sm w-full"
                                                    />
                                                    <ValidationError prefix="Email" field="email" errors={state.errors} />
                                                </motion.div>
                                                <motion.div className="mb-8">
                                                    <label htmlFor="date" className="block text-oxford-blue text-sm font-semibold mb-2">Date</label>
                                                    <input
                                                        type="date"
                                                        name="date"
                                                        id="date"
                                                        value={formData.date}
                                                        onChange={handleChange}
                                                        required
                                                        placeholder="Select Date"
                                                        className="border-b border-platinum py-2 text-sm w-full"
                                                    />
                                                    <ValidationError prefix="Date" field="date" errors={state.errors} />
                                                </motion.div>

                                                <motion.div className="mb-8">
                                                    <label htmlFor="message" className="block text-oxford-blue text-sm font-semibold mb-2">How can I help? </label>
                                                    <textarea
                                                        name="message"
                                                        id="message"
                                                        placeholder="Type Description"
                                                        value={formData.message}
                                                        onChange={handleChange}
                                                        required
                                                        className="border-b border-platinum py-2 text-sm w-full max-h-72 min-h-24 h-24 resize-vertical"
                                                    ></textarea>
                                                </motion.div>

                                                <button
                                                    type="submit"
                                                    className="w-full bg-gray-900 text-white font-semibold py-3 px-6 rounded-md hover:bg-gray-700 transition duration-300 ease-in-out transform hover:scale-105"
                                                >
                                                    Schedule Appointment
                                                </button>
                                            </form>
                                        </motion.div>)}
                                </motion.div>


                            </motion.div>
                        </motion.div>
                    </motion.div>
                </section>
            </div>
        </>
    )
}

export default Contact;