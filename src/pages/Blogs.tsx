import React from "react";
import { motion } from 'framer-motion';
import { BlogPost, blogs } from "../utilities/blogs";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const BlogCard: React.FC<{ blog: BlogPost }> = ({ blog }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-1"
    >
      <Link to={`/blog/${blog.slug}`}>
        <div className="relative h-48 w-full">
          <img
            src={blog.imagePath}
            alt={blog.title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2 line-clamp-2">{blog.title}</h3>
          <p className="text-gray-600 mb-4 line-clamp-3">{blog.summary}</p>
          <div className="flex flex-wrap gap-2">
            {blog.tags.slice(0, 3).map((tag, index) => (
              <span
                key={index}
                className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

const Blogs: React.FC = () => {
  return (
    <>
      <Helmet>
        {/* Primary Meta Tags */}
        <title>Latest Back & Spine Treatment Research | Expert Spine Doctor Resources</title>
        <meta name="description" content="Stay updated with the latest spine care innovations, back pain treatments, and expert medical research. Find resources from top back doctors and spine specialists." />

        {/* Keywords Meta Tag */}
        <meta name="keywords" content="spine research, back doctor blog, spine specialist articles, back pain treatment news, spine surgery updates, back specialist resources, spine care innovations, back pain management, spine health education" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Expert Spine Care & Back Treatment Research | Medical Resources" />
        <meta property="og:description" content="Access latest research on back pain treatments, spine care innovations, and expert medical resources from leading back doctors and spine specialists." />
        <meta property="og:image" content="/images/spine1.jpg" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Back & Spine Treatment Research | Medical Resources" />
        <meta name="twitter:description" content="Latest research on back pain treatments and spine care from expert back doctors. Access medical resources and treatment innovations." />

        {/* Schema Markup for Blog */}
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "Blog",
            "name": "Spine Care Research & Insights",
            "description": "Expert medical resources and research on back pain treatments and spine care innovations",
            "publisher": {
              "@type": "Organization",
              "name": "Advanced Spine Care Center",
              "logo": {
                "@type": "ImageObject",
                "url": "/images/logo.png"
              }
            },
            "blogPost": [
              {
                "@type": "BlogPosting",
                "headline": "Latest Spine Care Innovations",
                "keywords": "back pain, spine treatment, minimally invasive surgery",
                "articleSection": "Spine Treatment Research"
              }
            ]
          }
        `}
        </script>
      </Helmet>
      <div className="relative">
        <div className="relative min-h-[80vh]">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
            style={{
              backgroundImage: `url('/images/spine1.jpg')`,
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
                  RESEARCH & INSIGHTS
                </h2>
                <h1 className="text-white text-2xl md:text-4xl lg:text-5xl font-light leading-relaxed md:leading-tight px-2 md:px-0">
                  ADVANCING SPINE CARE
                  <br className="hidden md:block" />
                  <span className="block mt-2 md:mt-0 md:inline">THROUGH INNOVATION</span>
                </h1>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1 }}
                  className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-4 mt-10 md:mt-8"
                >
                  <button className="w-full md:w-auto bg-white text-black hover:bg-gray-200 px-4 py-2 md:px-8 md:py-4 text-lg">
                    Latest Publications
                  </button>
                  <button className="w-full md:w-auto text-white border border-white hover:bg-white hover:text-black px-4 py-2 md:px-8 md:py-4 text-lg mt-4 md:mt-0">
                    Medical Resources
                  </button>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog) => (
              <BlogCard key={blog.slug} blog={blog} />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Blogs; 