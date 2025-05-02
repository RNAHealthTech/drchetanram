import React from "react";
import { motion } from 'framer-motion';
import { Helmet } from "react-helmet-async";

const AboutPage = () => {
    const publications = [
        "Management of avulsion fracture tibial spine by open reduction and Fixation an outcome study",
        "Functional outcome of uncemented bipolar prosthesis in fracture neck of in elderly",
        "Results Following Posterior Cervical Microforaminotomy and Discectomy using McCulloch Retractors for Cervical Radiculopathy",
        "Early versus Delayed Ballon Kyphoplasty Intervention for Osteoporotic Vertebral Fracture Treatment",
        "A Novel Technique for Basilar Invagination Treatment in a Patient with Klippel-Feil Syndrome",
        "A New Minimally Invasive Technique for Thoracolumbar Focal Kyphosis Due to Osteoporotic Vertebral Fracture",
        "Navigation-Guided C-arm Free MIS-TLIF: A Comparative Study on Cage Orientation and Screw Insertion Accuracy Against Conventional C-arm Assisted MIS-TLIF",
        "C-arm Free Unilateral Biportal Endoscopic Discectomy: A Technical Note"
    ];

    const experiences = [
        {
            period: "Dec 2019 - Sep 2022",
            role: "Consultant Orthopaedics and Spine Surgery",
            location: "Sanjivani Hospital, Sirsa"
        },
        {
            period: "Oct 2022 - Mar 2023",
            role: "Consultant Spine Surgeon and Senior Resident Orthopedist",
            location: "GIMS Greater Noida"
        },
        {
            period: "2022",
            role: "Consultant Spine Surgeon",
            location: "SRS Hospital, Noida"
        },
        {
            period: "May 2023 - Present",
            role: "Consultant Spine Surgery Department",
            location: "Sir Gangaram Hospital, New Delhi"
        }
    ];

    return (
        <>
            <Helmet>
                <title>Spine Surgeon in Delhi | Dr Chetan Ram | Ganga Ram Hospital</title>
                <meta name="description" content="Dr Chetan Ram is a leading Spine Surgeon in Sir Ganga Ram Hospital with over 10+ years of
experience. Contact now for appointment." />

                {/* OpenGraph Tags */}
                <meta property="og:title" content="Spine Surgeon in Delhi | Dr Chetan Ram | Ganga Ram Hospital" />
                <meta property="og:description" content="Dr Chetan Ram is a leading Spine Surgeon in Sir Ganga Ram Hospital with over 10+ years of
experience. Contact now for appointment." />
                <meta property="og:type" content="profile" />
                <meta property="og:image" content="https://drchetanspinesurgeon.com/images/doc4.JPG" />

                {/* Additional SEO Keywords */}
                <meta name="keywords" content="Dr Chetan Ram, spine surgeon delhi, back specialist, japan trained surgeon, minimally invasive spine surgery, spine doctor qualifications, best back doctor delhi" />

                {/* Schema.org Person Profile */}
                <script type="application/ld+json">{`
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Dr. Chetan Ram Kumawat",
      "jobTitle": "Spine Surgeon",
      "worksFor": {
        "@type": "Hospital",
        "name": "Sir Ganga Ram Hospital",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "New Delhi",
          "addressRegion": "Delhi",
          "addressCountry": "IN"
        }
      },
      "alumniOf": [
        {
          "@type": "CollegeOrUniversity",
          "name": "SMS Medical College, Jaipur",
          "award": "MBBS"
        },
        {
          "@type": "CollegeOrUniversity",
          "name": "Govt. Medical College Kota",
          "award": "M.S. Orthopaedics"
        }
      ],
      "hasCredential": [
        {
          "@type": "EducationalOccupationalCredential",
          "credentialCategory": "Fellowship",
          "about": "Advanced Spine Surgery",
          "educationalLevel": "Postgraduate",
          "recognizedBy": {
            "@type": "Organization",
            "name": "Japanese Spine Fellowship Program"
          }
        }
      ],
      "knowsAbout": [
        "Minimally Invasive Spine Surgery",
        "Back Pain Treatment",
        "Spine Surgery",
        "Orthopaedic Surgery",
        "Navigation Guided Surgery"
      ]
    }
  `}</script>
            </Helmet>
            <div className="relative">
                {/* Existing landing section remains unchanged */}
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
                                    MEET DR. CHETAN RAM KUMAWAT
                                </h2>
                                <h1 className="text-white text-2xl md:text-4xl lg:text-5xl font-light leading-relaxed md:leading-tight px-2 md:px-0">
                                    INTERNATIONALLY TRAINED
                                    <br className="hidden md:block" />
                                    <span className="block mt-2 md:mt-0 md:inline">SPINE SURGEON IN DELHI</span>
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

                {/* Professional Journey Section */}
                <section className="bg-gray-900 py-16 md:py-24">
                    <div className="max-w-7xl mx-auto px-4 md:px-6">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="text-center mb-16"
                        >
                            <h2 className="text-amber-500 text-3xl md:text-4xl font-light mb-6">Professional Journey</h2>
                            <p className="text-white text-lg md:text-xl max-w-3xl mx-auto">
                                Dr Chetan Ram is one of the most trusted spine surgeon in Delhi. Currently practicing as consultant
                                at Sir Ganga Ram Hospital, the internationally trained surgeon has successfully conducted thousands
                                of surgeries.
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {experiences.map((exp, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="bg-white p-6 rounded-lg shadow-xl"
                                >
                                    <p className="text-amber-500 font-semibold mb-2">{exp.period}</p>
                                    <h3 className="text-gray-900 font-medium mb-2">{exp.role}</h3>
                                    <p className="text-gray-600">{exp.location}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Education & Training Section */}
                <section className="bg-white py-16 md:py-24">
                    <div className="max-w-7xl mx-auto px-4 md:px-6">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="text-center mb-16"
                        >
                            <h2 className="text-gray-900 text-3xl md:text-4xl font-light mb-6">Education & Training</h2>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                                viewport={{ once: true }}
                                className="space-y-6"
                            >
                                <div className="border-l-4 border-amber-500 pl-4">
                                    <p className="text-gray-600">2024</p>
                                    <h3 className="text-gray-900 font-medium">Clinical Fellowship in Advanced Spine Surgery</h3>
                                    <p className="text-gray-600">Japan</p>
                                </div>
                                <div className="border-l-4 border-amber-500 pl-4">
                                    <p className="text-gray-600">2018-2019</p>
                                    <h3 className="text-gray-900 font-medium">Fellowship in Spine Surgery</h3>
                                    <p className="text-gray-600">Mumbai</p>
                                </div>
                                <div className="border-l-4 border-amber-500 pl-4">
                                    <p className="text-gray-600">2015-2018</p>
                                    <h3 className="text-gray-900 font-medium">M.S. Orthopaedics</h3>
                                    <p className="text-gray-600">Govt. Medical College Kota, Rajasthan</p>
                                </div>
                                <div className="border-l-4 border-amber-500 pl-4">
                                    <p className="text-gray-600">2008-2014</p>
                                    <h3 className="text-gray-900 font-medium">MBBS</h3>
                                    <p className="text-gray-600">SMS Medical College, Jaipur</p>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                                viewport={{ once: true }}
                                className="bg-gray-900 p-6 rounded-lg"
                            >
                                <h3 className="text-amber-500 text-xl mb-4">Specialized Training</h3>
                                <ul className="space-y-3 text-white">
                                    <li>Minimal Invasive Spine Course BOSC 2018</li>
                                    <li>Minimal Invasive Spine Course BOSC 2019</li>
                                    <li>Scoliosis Course in BSSCON 2022 Mumbai</li>
                                    <li>Observationship in Navigated TKR - New Delhi (2018)</li>
                                </ul>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Publications Section */}
                <section className="bg-gray-900 py-16 md:py-24">
                    <div className="max-w-7xl mx-auto px-4 md:px-6">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="text-center mb-16"
                        >
                            <h2 className="text-amber-500 text-3xl md:text-4xl font-light mb-6">Research Publications</h2>
                            <p className="text-white text-lg md:text-xl max-w-3xl mx-auto">
                                Contributing to the advancement of spine surgery through research and innovation
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {publications.map((pub, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="bg-white p-6 rounded-lg shadow-xl"
                                >
                                    <p className="text-gray-900">{pub}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default AboutPage;