import React from 'react';
import { motion } from 'framer-motion';

const VideoSection = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-amber-500 uppercase tracking-wider text-sm font-medium mb-4">
            Media & Videos
          </h3>
          <h2 className="text-4xl lg:text-5xl font-light text-gray-900">
            Educational Resources
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* YouTube Video */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="aspect-video w-full rounded-xl overflow-hidden shadow-lg">
              <iframe 
                className="w-full h-full"
                src="https://www.youtube.com/embed/1CsZT4vFdOk?si=AOjqHRSFb1jNoXbD" 
                title="Understanding Spine Health"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen
              />
            </div>
            <h3 className="text-xl text-gray-900 font-medium">Understanding Spine Health</h3>
            <p className="text-gray-600">Learn about common spine conditions and their impact on daily life.</p>
          </motion.div>

          {/* Vimeo Video */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="aspect-video w-full rounded-xl overflow-hidden shadow-lg">
              <iframe 
                className="w-full h-full"
                src="https://player.vimeo.com/video/1052565921?h=3a31c86353" 
                title="Advanced Surgical Techniques"
                allow="autoplay; fullscreen; picture-in-picture" 
                allowFullScreen
              />
            </div>
            <h3 className="text-xl text-gray-900 font-medium">Advanced Surgical Techniques</h3>
            <p className="text-gray-600">Discover the latest innovations in minimally invasive spine surgery.</p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 max-w-3xl mx-auto">
            Explore our educational videos to better understand spine health, treatment options, and the latest surgical advancements in spine care.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoSection;