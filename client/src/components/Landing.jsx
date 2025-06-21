import { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

const LandingPage = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <div className="min-h-screen bg-gradient-to-br bg-white text-white overflow-hidden">
      <div className="container mx-auto px-6 py-12 flex flex-col md:flex-row items-center">
        {/* Text Content - Left Side */}
        <motion.div 
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, x: -100 },
            visible: { 
              opacity: 1, 
              x: 0,
              transition: { duration: 0.8, ease: "easeOut" }
            }
          }}
          className="md:w-1/2 mb-12 md:mb-0 md:pr-10"
        >
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { 
                opacity: 1, 
                y: 0,
                transition: { delay: 0.2, duration: 0.6 }
              }
            }}
          >
            Never Miss Nearby Events <br />
            <span className="text-indigo-700">With FlashCrowd</span>
          </motion.h1>

          <motion.p 
            className="text-lg md:text-xl text-gray-700 mb-6"
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { 
                opacity: 1, 
                x: 0,
                transition: { delay: 0.4, duration: 0.6 }
              }
            }}
          >
            Get instant notifications when exciting events happen near you.
          </motion.p>

          <motion.p 
            className="text-lg md:text-xl text-gray-700 mb-8"
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { 
                opacity: 1, 
                x: 0,
                transition: { delay: 0.6, duration: 0.6 }
              }
            }}
          >
            From concerts to tech meetups - be the first to know and join the crowd.
          </motion.p>

          <motion.div
            variants={{
              hidden: { opacity: 0 },
              visible: { 
                opacity: 1,
                transition: { delay: 0.8, duration: 0.6 }
              }
            }}
          >
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
              Get Started
            </button>
          </motion.div>
        </motion.div>

        {/* Image - Right Side */}
        <motion.div 
          className="md:w-1/2"
          initial={{ opacity: 0, x: 100 }}
          animate={{ 
            opacity: 1, 
            x: 0,
            transition: { delay: 0.4, duration: 0.8, ease: "easeOut" }
          }}
        >
          <img 
            src="landing.jpg" 
            alt="People at an event"
            className="rounded-xl shadow-2xl border-4 border-indigo-500/20 transform hover:scale-[1.02] transition-transform duration-500"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default LandingPage;