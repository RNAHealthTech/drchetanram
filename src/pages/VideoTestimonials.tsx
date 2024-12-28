import React from 'react';
import { motion } from 'framer-motion';

const VideoTestimonials: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      videoUrl: 'https://player.vimeo.com/video/1042602353',
      patientName: "Raman Malik",
      condition: "Spine Surgery",
      date: "2024"
    }
  ];

  return (
    <section className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h3 className="text-amber-500 uppercase tracking-wider text-sm font-medium mb-4">
            PATIENT TESTIMONIALS
          </h3>
          <h2 className="text-4xl lg:text-5xl font-light text-white">
            Real Stories from
            <span className="block">Real Patients</span>
          </h2>
        </motion.div>

        <div className="space-y-16">
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="w-full"
            >
              <div className="aspect-[9/16] md:aspect-video w-full max-w-5xl mx-auto relative">
                <iframe
                  src={testimonial.videoUrl}
                  allow="autoplay; fullscreen; picture-in-picture"
                  className="absolute top-0 left-0 w-full h-full rounded-lg"
                  frameBorder="0"
                  title={`Patient Testimonial - ${testimonial.patientName}`}
                />
              </div>
              <div className="text-center mt-8">
                <h4 className="text-2xl font-medium text-white mb-2">
                  {testimonial.patientName}
                </h4>
                <p className="text-gray-400 text-lg">
                  {testimonial.condition} • {testimonial.date}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {testimonials.length > 1 && (
          <div className="text-center mt-16">
            <button className="bg-amber-500 text-white rounded-lg px-8 py-4 text-lg hover:bg-amber-600 transition duration-300">
              View More Stories
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default VideoTestimonials;