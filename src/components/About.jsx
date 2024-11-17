// src/components/AboutUsPage.jsx
import React from 'react';
import { motion } from 'framer-motion';

// Reusable Section Component
const Section = ({ title, children, delay }) => (
  <motion.div
    className="mt-8 text-lg text-gray-700"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay }}
  >
    <motion.h2
      className="text-2xl font-semibold text-teal-600 mb-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay }}
    >
      {title}
    </motion.h2>
    {children}
  </motion.div>
);

const AboutUsPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-0">
      <motion.div
        className="max-w-full mx-auto bg-white p-8 rounded-lg shadow-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          className="text-4xl font-bold mb-6 text-center text-teal-500"
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About Us
        </motion.h1>

        {/* Our Mission Section */}
        <Section title="Our Mission" delay={0.2}>
          <p>
            At Employee Management, our mission is to provide innovative solutions that help businesses streamline their workforce management processes. We are committed to empowering organizations by offering tools that improve employee engagement, productivity, and overall organizational success.
          </p>
        </Section>

        {/* Our Vision Section */}
        <Section title="Our Vision" delay={0.4}>
          <p>
            Our vision is to become a global leader in employee management solutions, delivering cutting-edge technologies that drive positive change in how businesses manage their human resources. We strive to create a more efficient, collaborative, and happier workforce.
          </p>
        </Section>

        {/* Core Values Section */}
        <Section title="Core Values" delay={0.6}>
          <ul className="list-disc pl-8 space-y-2">
            <li>Integrity: We uphold the highest ethical standards in everything we do.</li>
            <li>Innovation: We continually evolve and embrace new technologies.</li>
            <li>Collaboration: We believe in the power of teamwork and partnership.</li>
            <li>Excellence: We are committed to delivering quality in every aspect of our business.</li>
            <li>Customer-Centric: We prioritize our clients' needs and success above all else.</li>
          </ul>
        </Section>

        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <p className="text-xl font-semibold text-teal-600">Thank you for visiting us!</p>
          <p>We look forward to working with you to transform your workforce management.</p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AboutUsPage;
