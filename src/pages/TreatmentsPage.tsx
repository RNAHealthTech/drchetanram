import React from "react";
import { motion } from 'framer-motion';
import { Link } from "react-router-dom";
import { treatments } from '../utilities/data';

const TreatmentsPage: React.FC = () => {
  return (
    <div className="relative">
      {/* Hero Section */}
      <div className="relative min-h-[80vh]">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
          style={{
            backgroundImage: `url('/images/treatments.jpeg')`,
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
                ADVANCED PROCEDURES
              </h2>
              <h1 className="text-white text-2xl md:text-4xl lg:text-5xl font-light leading-relaxed md:leading-tight px-2 md:px-0">
                MINIMALLY INVASIVE
                <br className="hidden md:block" />
                <span className="block mt-2 md:mt-0 md:inline">SPINE SURGERY SOLUTIONS</span>
              </h1>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Treatments Sections */}
      {treatments.map((category, idx) => (
        <section key={idx} className={`py-16 md:py-24 ${idx % 2 === 0 ? 'bg-white' : 'bg-gray-900'}`}>
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

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.procedures.map((procedure, procIdx) => (
                <Link to={`/treatments/${procedure.slug}`} key={procIdx}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: procIdx * 0.2 }}
                    viewport={{ once: true }}
                    className={`group h-full rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-2 ${
                      idx % 2 === 0 ? 'bg-white' : 'bg-gray-800'
                    }`}
                  >
                    <div className="relative h-48">
                      <img
                        src={procedure.imagePath}
                        alt={procedure.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300" />
                    </div>
                    <div className="p-6">
                      <h3 className={`text-xl font-medium mb-4 ${idx % 2 === 0 ? 'text-gray-900' : 'text-white'}`}>
                        {procedure.title}
                      </h3>
                      <p className={`text-sm ${idx % 2 === 0 ? 'text-gray-600' : 'text-gray-300'}`}>
                        {procedure.description}
                      </p>
                      <div className="mt-4">
                        <span className={`text-amber-500 group-hover:text-amber-400 transition-colors duration-300`}>
                          Learn more →
                        </span>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Call to Action Section */}
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
            <button className="bg-white text-amber-500 px-8 py-4 rounded-lg text-lg hover:bg-gray-100 transition duration-300">
              Book Consultation
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default TreatmentsPage;