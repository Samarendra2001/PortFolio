import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { HERO_CONTENT } from "../constants";

const getCelestialData = () => {
  const now = new Date();
  const hours = now.getHours();
  const isNight = hours >= 18 || hours < 6;
  const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  const dateString = now.toLocaleDateString([], { weekday: 'long', month: 'long', day: 'numeric' });
  
  return {
    hours,
    isNight,
    timeString,
    dateString,
    sunPosition: ((hours - 6 + 24) % 24) / 24 * 100,
    moonPosition: ((hours + 6) % 24) / 24 * 100
  };
};

const Hero = () => {
  const [celestialData, setCelestialData] = useState(getCelestialData());
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCelestialData(getCelestialData());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Text animation variants
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.8,
        ease: "easeOut"
      }
    })
  };
  

  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-center px-8 py-16 gap-8">
      {/* Left Content */}
      <motion.div 
        className="w-full md:w-1/2 space-y-6"
        initial="hidden"
        animate="visible"
      >
        {/* Greeting */}
        <motion.div
          className="overflow-hidden"
          variants={textVariants}
          custom={0}
        >
          <h1 className="text-4xl md:text-5xl font-bold">
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              {HERO_CONTENT.greeting}
            </span>
            <motion.span
              className="ml-2 inline-block animate-wave"
              animate={{
                rotate: [0, 20, -20, 0],
                scale: [1, 1.2, 1]
              }}
              transition={{
                duration: 1,
                repeat: Infinity
              }}
            >
              👋
            </motion.span>
          </h1>
        </motion.div>

        {/* Introduction */}
        <motion.p 
          className="text-xl md:text-2xl text-gray-200 leading-relaxed"
          variants={textVariants}
          custom={1}
        >
          <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent font-medium">
            {HERO_CONTENT.introduction}
          </span>
        </motion.p>

        {/* Description */}
        <motion.p 
          className="text-xl md:text-2xl text-gray-300"
          variants={textVariants}
          custom={2}
        >
          {HERO_CONTENT.description.split(" ").map((word, i) => (
            <motion.span
              key={i}
              className="inline-block mr-2"
              variants={{
                visible: { 
                  opacity: 1, 
                  x: 0,
                  transition: {
                    delay: i * 0.1,
                    duration: 0.5
                  }
                },
                hidden: { opacity: 0, x: 20 }
              }}
            >
              {word}
            </motion.span>
          ))}
        </motion.p>

        {/* Resume Download Button */}
        <motion.a
          href={HERO_CONTENT.resumeLink}
          download="Samrendra_onePage_resume.pdf" // Set your desired filename
          className="inline-block px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-purple-500 to-blue-500 rounded-full hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl relative overflow-hidden"
          variants={textVariants}
          custom={3}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="relative z-10">{HERO_CONTENT.resumeLinkText}</span>
          <motion.div
            className="absolute inset-0 bg-white/10"
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </motion.a>
      </motion.div>

      <div className="w-full md:w-1/2 flex justify-center items-center p-8">
        <motion.div 
          className="relative w-[400px] h-[400px] rounded-full overflow-hidden shadow-2xl border-2 border-white/10"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Dynamic Background */}
          <motion.div
            className="absolute inset-0"
            animate={{
              background: celestialData.isNight 
                ? "linear-gradient(to bottom, #0a0f2b 0%, #1a1f3d 50%, #2d2a4d 100%)"
                : "linear-gradient(to bottom, #87CEEB 0%, #98d8ff 50%, #b3e0ff 100%)"
            }}
            transition={{ duration: 1.5 }}
          />

          {/* Earth Visualization */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          >
            <div className="relative w-64 h-64">
              <div className="earth-core">
                <motion.div
                  className="cloud-layer w-full h-full"
                  animate={{ x: [0, 20, 0] }}
                  transition={{ duration: 25, repeat: Infinity }}
                />
                <div className="absolute inset-0 bg-[url('./assets/earth-map.png')] bg-contain opacity-50 mix-blend-soft-light" />
              </div>
              <div className="atmosphere-glow animate-pulse-glow" />
            </div>
          </motion.div>

          {/* Sun/Moon Container */}
          <motion.div
            className={`absolute top-1/4 ${
              celestialData.isNight ? "bg-gray-200" : "bg-yellow-400"
            } rounded-full shadow-xl`}
            style={{
              width: celestialData.isNight ? "80px" : "100px",
              height: celestialData.isNight ? "80px" : "100px",
              left: `${celestialData.isNight ? celestialData.moonPosition : celestialData.sunPosition}%`,
              filter: celestialData.isNight 
                ? "drop-shadow(0 0 20px rgba(255,255,255,0.3))" 
                : "drop-shadow(0 0 40px rgba(255,200,0,0.5))"
            }}
            animate={{
              y: [0, -20, 0],
              scale: [1, 1.05, 1]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            {/* Moon Craters */}
            {celestialData.isNight && (
              <div className="absolute inset-0 flex flex-wrap justify-center items-center p-2">
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className="w-3 h-3 m-1 bg-gray-300/40 rounded-full"
                    style={{
                      transform: `translate(${Math.random() * 20 - 10}px, ${Math.random() * 20 - 10}px)`
                    }}
                  />
                ))}
              </div>
            )}
          </motion.div>

          {/* Stars */}
          {celestialData.isNight && [...Array(100)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-white rounded-full animate-twinkle"
              style={{
                width: `${Math.random() * 3}px`,
                height: `${Math.random() * 3}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`
              }}
            />
          ))}

          {/* Time/Date Display */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 backdrop-blur-lg bg-black/30 p-4 rounded-2xl text-center shadow-xl space-y-1 w-[200px]">
            <div className="text-2xl font-medium">{celestialData.timeString}</div>
            <div className="text-sm text-gray-300">{celestialData.dateString}</div>
            <div className="text-sm text-gray-300">Bengaluru, India • 28°C</div>
          </div>

          {/* Ambient Particles */}
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className={`absolute rounded-full ${
                celestialData.isNight ? "bg-white/10" : "bg-yellow-200/20"
              }`}
              style={{
                width: `${Math.random() * 4}px`,
                height: `${Math.random() * 4}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -40, 0],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 5 + Math.random() * 10,
                repeat: Infinity,
                delay: Math.random() * 5,
              }}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;