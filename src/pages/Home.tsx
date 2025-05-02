import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import TreatmentsSection from "./TreatmentsSection";
import VideoTestimonials from "./VideoTestimonials";
import AppointmentModal from "../utilities/AppointmentModal";
import VideoSection from "../utilities/VideoSection";
import { Helmet } from "react-helmet-async";

const HomePage: React.FC = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const navigate = useNavigate();

    return (
        <>
            <Helmet>
                {/* Basic Meta Tags */}
                <title>Best Spine Surgeon & Back Pain doctor in Ganga Ram Hospital</title>
                <meta name="description" content="Best spine surgeon in Delhi NCR. Experience of 10+ years in spine surgeries related to back pain. Call
the consultant at SGRH now." />

                {/* OpenGraph Tags for Social Media */}
                <meta property="og:title" content="Best Spine Surgeon & Back Pain doctor in Ganga Ram Hospital" />
                <meta property="og:description" content="Best spine surgeon in Delhi NCR. Experience of 10+ years in spine surgeries related to back pain. Call
the consultant at SGRH now." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://drchetanspinesurgeon.com" />
                <meta property="og:image" content="https://drchetanspinesurgeon.com.com/images/doc3.jpg" />


                {/* Additional SEO Keywords */}
                <meta name="keywords" content="back doctor delhi, spine specialist, back pain treatment, slip disc doctor, sciatica treatment, neck pain doctor, spine surgery delhi, best spine surgeon, back specialist, minimally invasive spine surgery" />

                {/* Location Meta Tags */}
                <meta name="geo.region" content="IN-DL" />
                <meta name="geo.placename" content="New Delhi" />

                {/* Schema.org Markup */}
                <script type="application/ld+json">
                    {`
        {
          "@context": "https://schema.org",
          "@type": "MedicalBusiness",
          "name": "Dr. Chetan Ram - Spine Specialist",
          "image": "https://drchetanspinesurgeon.com/images/doc3.jpg",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Sir Ganga Ram Hospital",
            "addressLocality": "New Delhi",
            "addressRegion": "Delhi",
            "postalCode": "110060",
            "addressCountry": "IN"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 28.6346,
            "longitude": 77.1831
          },
          "url": "https://drchetanspinesurgeon.com/",
          "telephone": "+919599106813",
          "email": "ckumawatdr@gmail.com",
          "medicalSpecialty": ["Orthopedic Surgery", "Spine Surgery"],
          "availableService": [
            {
              "@type": "MedicalTherapy",
              "name": "Back Pain Treatment",
              "description": "Treatment for chronic back pain and spine conditions"
            },
            {
              "@type": "MedicalTherapy",
              "name": "Minimally Invasive Spine Surgery",
              "description": "Advanced surgical techniques for faster recovery"
            }
          ],
          "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            "opens": "09:00",
            "closes": "18:00"
          },
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Spine Treatments",
            "itemListElement": [
              {
                "@type": "MedicalProcedure",
                "name": "Slip Disc Treatment"
              },
              {
                "@type": "MedicalProcedure",
                "name": "Sciatica Treatment"
              },
              {
                "@type": "MedicalProcedure",
                "name": "Neck Pain Treatment"
              },
              {
                "@type": "MedicalProcedure",
                "name": "Back Pain Management"
              }
            ]
          }
        }
      `}
                </script>
            </Helmet>
            {/* Hero Section */}
            <div className="relative">
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
                                className="space-y-8 md:space-y-6"
                            >
                                <h2 className="text-white text-lg md:text-xl tracking-wider mb-4 md:mb-0">
                                    Best Spine Care & Internationally Trained Orthopaedic Surgeon
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
                                        Specialized
                                        <span className="block text-amber-600">Spine Care</span>
                                    </h2>

                                    <p className="text-gray-600 leading-relaxed">
                                        A consultant at Sir Ganga Ram Hospital at Karol Bagh, Dr Chetan Ram is one of the best spine
                                        surgeons in Delhi with experience of over a decade. Specialized in advanced spine surgery in Japan
                                        and trained across prestigious hospitals &amp; institutes in India, the orthopaedic surgeon brings reliable
                                        spinal care to his patients.
                                    </p>

                                    <p className="text-gray-600 leading-relaxed">
                                        His expertise in minimally-invasive procedures ensures effective treatment and faster recovery after
                                        the surgery. The experience of working with thousands of patients over the years also leads to the
                                        understanding of the patient’s conditions and the procedures required for treatment.
                                    </p>

                                    <p className="text-gray-600 leading-relaxed">
                                        Whether it is a complex spine disorder or discomfort arising from injuries, the conversation before
                                        the procedure and the right questions help in accurate diagnosis and the best way forward to
                                        resolve the issue.
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
                                            src="/images/doc3.jpg"
                                            alt="Best Spine Surgeon &amp; Back Pain doctor in Ganga Ram Hospital"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </motion.div>

                                {/* Bottom two images */}
                                <motion.div

                                    className="aspect-square bg-gray-100 rounded-lg overflow-hidden"
                                >
                                    <img
                                        src="/images/doc1.jpg"
                                        alt="Best Spine Surgeon &amp; Back Pain doctor in Ganga Ram Hospital"
                                        className="w-full h-full object-cover"
                                    />
                                </motion.div>
                                <motion.div

                                    className="aspect-square bg-gray-100 rounded-lg overflow-hidden"
                                >
                                    <img
                                        src="/images/doc2.jpg"
                                        alt="Best Spine Surgeon &amp; Back Pain doctor in Ganga Ram Hospital"
                                        className="w-full h-full object-cover"
                                    />
                                </motion.div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                <VideoSection />

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
                                        Get Advanced
                                        <span className="block">Spine Care Solutions</span>
                                    </h2>

                                    <p className="text-gray-300 leading-relaxed">
                                        From common degenerative disorders to complex deformities, Dr Chetan Ram specializes in treating
                                        a wide range of spine conditions. We offer personalized care depending on both surgical and non-
                                        surgical methods. Get treatment for various conditions, including:
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
                                        alt="Best Spine Surgeon &amp; Back Pain doctor in Ganga Ram Hospital"
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
                            <h2 className="text-white text-3xl md:text-4xl font-light">Get Your Spine Problem Resolved!</h2>
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
        </>
    );
};

export default HomePage;