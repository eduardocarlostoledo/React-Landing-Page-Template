import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import "../styles/Chatbot.css";
import { LazyElfsightWidget } from './LazyElfsightWidget';

export const Chatbot = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="chatbot-container">
      <motion.button
          className="chatbot-toggle"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ 
            scale: 1, 
            opacity: 1, 
            transition: { type: 'spring', stiffness: 300, damping: 20 } 
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsVisible(!isVisible)}
          aria-label="Toggle chatbot"
        >
          {isVisible ? '✖' : '💬'}
        </motion.button>
      
      <AnimatePresence>
        {isVisible && (
          <motion.div
            className="chatbot-widget"
            initial={{ y: 100, opacity: 0, scale: 0.8 }}
            animate={{ 
              y: 0, 
              opacity: 1, 
              scale: 1, 
              transition: { type: 'spring', stiffness: 200, damping: 20 } 
            }}
            exit={{ y: 100, opacity: 0, transition: { duration: 0.2 } }}
            >
            <LazyElfsightWidget appId="511f315b-e748-4328-a6cb-d6c95ab9cb97" className="chatbot-elfsight" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};