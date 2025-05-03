import React, { useState, useEffect } from "react";
import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';
import { blogs } from '../utilities/blogs';
import { marked } from "marked";

export const BlogTemplate: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const blog = blogs.find(b => b.slug === slug);
  const [parsedContent, setParsedContent] = useState('');

  useEffect(() => {
    const parseContent = async () => {
      if (blog) {
        try {
          const parsed = await marked(blog.content);
          setParsedContent(parsed);
        } catch (error) {
          console.error('Error parsing markdown:', error);
          setParsedContent('Error loading content');
        }
      }
    };

    parseContent();
  }, [blog]);

  if (!blog) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h1 className="text-2xl font-semibold mb-4">Blog Post Not Found</h1>
          <Link to="/blog" className="text-blue-600 hover:underline">
            Return to Blog List
          </Link>
        </div>
      </div>
    );
  }

  return (
    
    <article className="max-w-4xl mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="relative h-64 md:h-96 mb-8 rounded-lg overflow-hidden">
          <img
            src={blog.imagePath}
            alt={blog.title}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="prose prose-lg max-w-none">
          <h1 className="text-3xl md:text-4xl font-semibold mb-4">{blog.title}</h1>
          
          <div className="flex flex-wrap gap-2 mb-8">
            {blog.tags.map((tag, index) => (
              <span
                key={index}
                className="text-sm bg-gray-100 text-gray-600 px-3 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="text-gray-600 mb-8">{blog.summary}</div>
          
          <div 
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: parsedContent }}
          />
        </div>
      </motion.div>
    </article>
  );
};