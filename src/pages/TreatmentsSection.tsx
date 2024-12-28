// import React, { useRef } from 'react';
// import { motion } from 'framer-motion';
// import { treatments } from '../utilities/data';

// const TreatmentsSection = () => {
//   const scrollContainerRef = useRef<HTMLDivElement>(null);

//   // Flatten all procedures into a single array
//   const allProcedures = treatments.flatMap(category => category.procedures);

//   const handleScroll = (direction: 'left' | 'right') => {
//     if (scrollContainerRef.current) {
//       const scrollAmount = direction === 'left' ? -400 : 400;
//       scrollContainerRef.current.scrollBy({
//         left: scrollAmount,
//         behavior: 'smooth'
//       });
//     }
//   };

//   return (
//     <section className="py-24 bg-gray-50">
//       <div className="max-w-7xl mx-auto px-6">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="space-y-12"
//         >
//           {/* Section Header */}
//           <div className="text-center space-y-4">
//             <h3 className="text-gray-700 uppercase tracking-wider text-sm font-medium">
//               Our Treatments
//             </h3>
//             <h2 className="text-4xl lg:text-5xl font-light text-gray-900">
//               Advanced Spine Care Solutions
//             </h2>
//           </div>

//           {/* Scrollable Cards Container */}
//           <div className="relative">
//             {/* Scroll Buttons */}
//             <button
//               onClick={() => handleScroll('left')}
//               className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 p-4 rounded-full shadow-lg hover:bg-white"
//             >
//               ←
//             </button>
//             <button
//               onClick={() => handleScroll('right')}
//               className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 p-4 rounded-full shadow-lg hover:bg-white"
//             >
//               →
//             </button>

//             {/* Cards Container */}
//             <div
//               ref={scrollContainerRef}
//               className="overflow-x-auto scrollbar-hide flex gap-6 py-8 px-4"
//               style={{ scrollSnapType: 'x mandatory' }}
//             >
//               {allProcedures.map((procedure) => (
//                 <motion.div
//                   key={procedure.slug}
//                   className="relative flex-none w-[300px] h-[400px] rounded-xl overflow-hidden cursor-pointer"
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   style={{ scrollSnapAlign: 'center' }}
//                 >
//                   {/* Background Image */}
//                   <div
//                     className="absolute inset-0 bg-cover bg-center"
//                     style={{ backgroundImage: `url(${procedure.imagePath})` }}
//                   >
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20" />
//                   </div>

//                   {/* Content */}
//                   <div className="relative h-full flex flex-col justify-end p-6 text-white">
//                     <h3 className="text-xl font-semibold mb-2">{procedure.title}</h3>
//                     <p className="text-sm opacity-90 line-clamp-3">
//                       {procedure.description}
//                     </p>
//                     <div className="mt-4 flex flex-wrap gap-2">
//                       {procedure.conditions.slice(0, 2).map((condition) => (
//                         <span
//                           key={condition}
//                           className="text-xs px-3 py-1 bg-white/20 rounded-full"
//                         >
//                           {condition}
//                         </span>
//                       ))}
//                     </div>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default TreatmentsSection;

import React from 'react';
import { motion } from 'framer-motion';
import { treatments } from '../utilities/data';
import { Link } from 'react-router-dom';

const TreatmentsSection = () => {
  // Flatten all procedures into a single array
  const allProcedures = treatments.flatMap(category => category.procedures);

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
    </section>
  );
};

export default TreatmentsSection;