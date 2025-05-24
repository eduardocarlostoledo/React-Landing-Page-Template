// import React, { useEffect } from 'react';
// import "../styles/WhatsAppChat.css';

// export const WhatsAppChat = () => {
//   useEffect(() => {
//     const loadWidget = () => {
//       if (!window.Elsight) {
//         const script = document.createElement('script');
//         script.src = 'https://static.elfsight.com/platform/platform.js';
//         script.async = true;
//         document.body.appendChild(script);
//       }
//     };

//     // Carga diferida para mejor performance
//     const timer = setTimeout(loadWidget, 2000);
    
//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <div className="whatsapp-widget">
//       <div 
//         className="elfsight-app-3158645b-a925-4d63-bacf-f5dc9173825d"
//         data-elfsight-app-lazy
//       />
//     </div>
//   );
// };

