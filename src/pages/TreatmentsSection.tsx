import React from 'react';
import { motion } from 'framer-motion';
import { treatments } from '../utilities/data';
import { Link, useNavigate } from 'react-router-dom';

const TreatmentsSection: React.FC = () => {
  // Flatten all procedures into a single array
  const allProcedures = treatments.flatMap(category => category.procedures);
  const navigate = useNavigate();

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          {/* Section Header */}
          <div className="text-center space-y-4">
            <h3 className="text-gray-700 uppercase tracking-wider text-sm font-medium">
              Our Treatments
            </h3>
            <h2 className="text-4xl lg:text-5xl font-light text-gray-900">
              Advanced Spine
              <span className='text-amber-600'>
                {' '}Care Treatments
              </span>

            </h2>
          </div>

          {/* Cards Container */}
          <div
            className="overflow-x-auto scrollbar-hide flex gap-6 py-8 px-4"
            style={{
              scrollSnapType: 'x mandatory',
              msOverflowStyle: 'none',
              scrollbarWidth: 'none'
            }}
          >
            {allProcedures.map((procedure) => (
              <Link
                key={procedure.slug}
                to={`/treatments/${procedure.slug}`}
                className="no-underline"
              >
                <motion.div
                  className="relative flex-none w-[300px] h-[400px] rounded-xl overflow-hidden cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  style={{ scrollSnapAlign: 'center' }}
                >
                  {/* Background Image */}
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${procedure.imagePath})` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20" />
                  </div>

                  {/* Content */}
                  <div className="relative h-full flex flex-col justify-end p-6 text-white">
                    <h3 className="text-xl font-semibold mb-2">{procedure.title}</h3>
                    <p className="text-sm opacity-90 line-clamp-3">
                      {procedure.description}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {procedure.conditions.slice(0, 2).map((condition) => (
                        <span
                          key={condition}
                          className="text-xs px-3 py-1 bg-white/20 rounded-full"
                        >
                          {condition}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
      <div className="flex items-center justify-center">
        <button
          onClick={() => navigate("/treatments")}
          className="mt-8 bg-amber-500 text-white rounded-lg px-8 py-4 text-lg hover:bg-amber-600 transition duration-300"
        >
          Explore Treatments
        </button>
      </div>

    </section>
  );
};

export default TreatmentsSection;