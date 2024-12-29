import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { treatments, type Procedure } from '../utilities/data';
import { motion } from 'framer-motion';
import AppointmentModal from '../utilities/AppointmentModal';

const TreatmentTemplatePage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [procedure, setProcedure] = useState<Procedure | null>(null);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    // Find the procedure across all treatment categories
    const foundProcedure = treatments.reduce((found, category) => {
      const procedure = category.procedures.find(p => p.slug === slug);
      return procedure || found;
    }, null as Procedure | null);

    if (foundProcedure) {
      setProcedure(foundProcedure);
    } else {
      // Redirect to 404 or home page if procedure not found
      navigate('/');
    }
  }, [slug, navigate]);

  if (!procedure) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-amber-500" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[30vh] sm:h-[40vh] md:h-[50vh]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${procedure.imagePath})` }}
        >
          <div className="absolute inset-0 bg-gray-900/60" />
        </div>
        <div className="relative h-full flex items-center justify-center px-4">
          <div className="text-center max-w-4xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl text-white font-light tracking-wide">
              {procedure.title}
            </h1>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="prose max-w-none">
            <h2 className="text-2xl sm:text-3xl font-light text-gray-900 mb-4">
              Overview
            </h2>
            <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
              {procedure.description}
            </p>
            {procedure.details && (
              <div className="mt-6 sm:mt-8">
                <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
                  {procedure.details}
                </p>
              </div>
            )}
          </div>

          <div className="mt-8 sm:mt-12">
            <h3 className="text-xl sm:text-2xl font-light text-gray-900 mb-4">
              Conditions Treated
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {procedure.conditions.map((condition, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="p-4 bg-gray-50 rounded-lg border border-gray-200 hover:border-amber-500 transition-colors duration-300"
                >
                  <p className="text-gray-600 text-sm sm:text-base">{condition}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-12 sm:mt-16 bg-amber-500 p-6 sm:p-8 rounded-lg text-center"
          >
            <h3 className="text-xl sm:text-2xl text-white mb-3 sm:mb-4">
              Ready to Learn More?
            </h3>
            <p className="text-white text-sm sm:text-base mb-4 sm:mb-6">
              Schedule a consultation to discuss if this treatment is right for you.
            </p>
            <button onClick={openModal} className="bg-white text-amber-500 px-6 sm:px-8 py-2 sm:py-3 rounded-lg hover:bg-gray-100 transition duration-300 text-sm sm:text-base font-medium">
              Book Consultation
            </button>
          </motion.div>
          <AppointmentModal isOpen={isModalOpen} onClose={closeModal} />
        </motion.div>
      </div>
    </div>
  );
};

export default TreatmentTemplatePage;