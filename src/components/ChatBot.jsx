import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Chatbot.css';

export const Chatbot = () => {
  const [isChatbotLoaded, setIsChatbotLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const scriptSrc = 'https://static.elfsight.com/platform/platform.js';

    if (!document.querySelector(`script[src="${scriptSrc}"]`)) {
      const script = document.createElement('script');
      script.src = scriptSrc;
      script.async = true;
      script.onload = () => {
        setIsChatbotLoaded(true);
        initElfsightWidget();
      };
      document.body.appendChild(script);
    } else {
      setIsChatbotLoaded(true);
      initElfsightWidget();
    }
  }, []);

  const initElfsightWidget = () => {
    if (window.ElfsightApp) {
      window.ElfsightApp.init();
    } else {
      setTimeout(initElfsightWidget, 500);
    }
  };

  return (
    <div className="chatbot-container">
      {isChatbotLoaded && (
        <motion.button
          className="chatbot-toggle"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1, transition: { type: 'spring', stiffness: 300, damping: 20 } }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsVisible(!isVisible)}
        >
          {isVisible ? '✖' : '💬'}
        </motion.button>
      )}

      <AnimatePresence>
        {isVisible && (
          <motion.div
            className="chatbot-widget"
            initial={{ y: 100, opacity: 0, scale: 0.8 }}
            animate={{ y: 0, opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 200, damping: 20 } }}
            exit={{ y: 100, opacity: 0, transition: { duration: 0.2 } }}
          >
            <div className="elfsight-app-511f315b-e748-4328-a6cb-d6c95ab9cb97" data-elfsight-app-lazy />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
