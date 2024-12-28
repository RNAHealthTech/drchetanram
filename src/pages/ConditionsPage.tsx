import React, { useState } from "react";
import { motion } from 'framer-motion';

const ConditionsPage: React.FC = () => {
    const [activeCategory, setActiveCategory] = useState<string | null>(null);

    const conditions = [
        {
            category: "Degenerative Conditions",
            items: [
                {
                    title: "Herniated Disc",
                    description: "Occurs when the soft center of a spinal disc pushes through a crack in the tougher exterior casing, causing pain, numbness, and weakness in nearby nerves.",
                    symptoms: ["Arm or leg pain", "Numbness or tingling", "Muscle weakness"],
                    riskFactors: ["Age", "Excess weight", "Physically demanding jobs"],
                    imagePath: "/images/disc.png"
                },
                {
                    title: "Spinal Stenosis",
                    description: "Narrowing of the spinal canal that puts pressure on nerve roots and the spinal cord, commonly occurring in the lower back and neck.",
                    symptoms: ["Back pain", "Numbness in extremities", "Balance problems"],
                    riskFactors: ["Age over 50", "Arthritis", "Genetic factors"],
                    imagePath: "/images/spinalstenosis.webp"
                },
                {
                    title: "Degenerative Disc Disease",
                    description: "Age-related changes in spinal discs leading to loss of cushioning, stability, and flexibility.",
                    symptoms: ["Chronic lower back pain", "Pain that worsens with movement", "Radiating numbness"],
                    riskFactors: ["Aging", "Smoking", "Obesity"],
                    imagePath: "/images/degnerative.png"
                }
            ]
        },
        {
            category: "Deformities & Structural Issues",
            items: [
                {
                    title: "Scoliosis",
                    description: "Abnormal curvature of the spine that can affect posture, breathing, and movement.",
                    symptoms: ["Uneven shoulders", "One hip higher than the other", "Visible spine curve"],
                    riskFactors: ["Genetic predisposition", "Age", "Gender (more common in females)"],
                    imagePath: "/images/scoliosis.webp"
                },
                {
                    title: "Spondylolisthesis",
                    description: "Condition where one vertebra slips forward over the bone below it, causing pain and nerve compression.",
                    symptoms: ["Lower back pain", "Leg pain or numbness", "Difficulty walking"],
                    riskFactors: ["Sports activities", "Genetics", "Age"],
                    imagePath: "/images/spondylolisthesis.jpg"
                }
            ]
        },
        {
            category: "Trauma & Injuries",
            items: [
                {
                    title: "Vertebral Fractures",
                    description: "Breaks in the vertebral bones often caused by trauma or osteoporosis.",
                    symptoms: ["Sudden severe back pain", "Height loss", "Limited spinal mobility"],
                    riskFactors: ["Osteoporosis", "High-impact activities", "Age"],
                    imagePath: "/images/truama.jpg"
                },
                {
                    title: "Spinal Cord Injuries",
                    description: "Damage to the spinal cord that can result in loss of function, sensation, and mobility.",
                    symptoms: ["Loss of movement", "Loss of sensation", "Changes in reflexes"],
                    riskFactors: ["High-risk activities", "Motor vehicle accidents", "Sports injuries"],
                    imagePath: "/images/spinalcordinjury.jpg"
                }
            ]
        }
    ];

    return (
        <div className="relative">
            {/* Hero Section */}
            <div className="relative min-h-[90vh]">
                <motion.div
                    
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `url('/images/conditions.jpg')`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}
                >
                    <div className="absolute inset-0 bg-black/50" />
                </motion.div>

                <div className="relative z-10 flex items-center justify-center min-h-[calc(100vh-10vh)]">
                    <div className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-20 text-center">
                        <motion.div
                          
                            className="space-y-8 md:space-y-6"
                        >
                            <h2 className="text-white text-lg md:text-xl tracking-wider mb-4 md:mb-0">
                                SPECIALIZED CARE
                            </h2>
                            <h1 className="text-white text-2xl md:text-4xl lg:text-5xl font-light leading-relaxed md:leading-tight px-2 md:px-0">
                                COMPREHENSIVE TREATMENT OF
                                <br className="hidden md:block" />
                                <span className="block mt-2 md:mt-0 md:inline">COMPLEX SPINE CONDITIONS</span>
                            </h1>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Quick Navigation */}
            <section className="bg-gray-900 py-12">
                <div className="max-w-7xl mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {conditions.map((category, idx) => (
                            <motion.button
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                className={`p-6 text-center rounded-lg transition-all duration-300 ${
                                    activeCategory === category.category 
                                    ? 'bg-amber-500 text-white' 
                                    : 'bg-white text-gray-900 hover:bg-amber-50'
                                }`}
                                onClick={() => setActiveCategory(category.category)}
                            >
                                <h3 className="text-lg font-medium">{category.category}</h3>
                                <p className="text-sm mt-2 opacity-75">{category.items.length} conditions</p>
                            </motion.button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Conditions Sections */}
            {conditions.map((category, idx) => (
                <section 
                    key={idx} 
                    className={`py-16 md:py-24 ${idx % 2 === 0 ? 'bg-white' : 'bg-gray-900'}`}
                    id={category.category.toLowerCase().replace(/\s+/g, '-')}
                >
                    <div className="max-w-7xl mx-auto px-4 md:px-6">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="text-center mb-16"
                        >
                            <h2 className={`text-3xl md:text-4xl font-light mb-6 ${idx % 2 === 0 ? 'text-gray-900' : 'text-amber-500'}`}>
                                {category.category}
                            </h2>
                        </motion.div>

                        <div className="space-y-16">
                            {category.items.map((condition, condIdx) => (
                                <motion.div
                                    key={condIdx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: condIdx * 0.2 }}
                                    viewport={{ once: true }}
                                    className={`flex flex-col ${condIdx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center`}
                                >
                                    <div className="w-full md:w-1/2">
                                        <img
                                            src={condition.imagePath}
                                            alt={condition.title}
                                            className="w-full h-64 md:h-96 object-cover rounded-lg shadow-xl"
                                        />
                                    </div>
                                    <div className="w-full md:w-1/2 space-y-6">
                                        <h3 className={`text-2xl font-medium ${idx % 2 === 0 ? 'text-gray-900' : 'text-white'}`}>
                                            {condition.title}
                                        </h3>
                                        <p className={idx % 2 === 0 ? 'text-gray-600' : 'text-gray-300'}>
                                            {condition.description}
                                        </p>
                                        
                                        <div className="space-y-4">
                                            <div>
                                                <h4 className={`text-lg font-medium mb-2 ${idx % 2 === 0 ? 'text-gray-900' : 'text-white'}`}>
                                                    Common Symptoms
                                                </h4>
                                                <ul className="list-disc list-inside space-y-1">
                                                    {condition.symptoms.map((symptom, sympIdx) => (
                                                        <li key={sympIdx} className={idx % 2 === 0 ? 'text-gray-600' : 'text-gray-300'}>
                                                            {symptom}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                            
                                            <div>
                                                <h4 className={`text-lg font-medium mb-2 ${idx % 2 === 0 ? 'text-gray-900' : 'text-white'}`}>
                                                    Risk Factors
                                                </h4>
                                                <ul className="list-disc list-inside space-y-1">
                                                    {condition.riskFactors.map((factor, factIdx) => (
                                                        <li key={factIdx} className={idx % 2 === 0 ? 'text-gray-600' : 'text-gray-300'}>
                                                            {factor}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            ))}

            {/* Call to Action */}
            <section className="bg-amber-500 py-16">
                <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <h2 className="text-white text-3xl md:text-4xl font-light">Experiencing Spine-Related Symptoms?</h2>
                        <p className="text-white text-lg md:text-xl max-w-3xl mx-auto">
                            Don't let spine conditions affect your quality of life. Schedule a consultation for expert diagnosis and treatment.
                        </p>
                        <button className="bg-white text-amber-500 px-8 py-4 rounded-lg text-lg hover:bg-gray-100 transition duration-300">
                            Book Consultation
                        </button>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default ConditionsPage;