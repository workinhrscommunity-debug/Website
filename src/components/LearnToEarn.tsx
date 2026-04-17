import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Wallet, Coins } from 'lucide-react';

export const LearnToEarn = () => {
  const [step, setStep] = useState(0); // 0: LEARN, 1: Animation, 2: JOBS, 3: Animation, 4: EARN

  useEffect(() => {
    const timer = setInterval(() => {
      setStep((prev) => (prev + 1) % 5);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (step === 1 || step === 3) {
      const wait = setTimeout(() => {
        setStep((prev) => (prev + 1) % 5);
      }, 1000);
      return () => clearTimeout(wait);
    }
  }, [step]);

  const colors = {
    black: "#0F172A",
    orange: "#F27D26",
    green: "#00FFA3",
    blue: "#0084C7"
  };

  return (
    <div className="inline-flex items-center justify-start relative h-[1.1em] min-w-[5.5em] sm:min-w-[6em] lg:min-w-[5.2em] overflow-visible whitespace-nowrap">
      <AnimatePresence mode="popLayout" initial={false}>
        {step === 0 && (
          <motion.span
            key="learn"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="uppercase italic flex items-center font-black"
            style={{ color: colors.black }}
          >
            Freelance
          </motion.span>
        )}

        {step === 2 && (
          <motion.span
            key="LEARN"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.2 }}
            className="uppercase italic flex items-center font-black"
            style={{ color: colors.black }}
          >
            <span style={{ color: colors.orange }}>L</span>EARN
          </motion.span>
        )}

        {step === 4 && (
          <motion.span
            key="earn"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="uppercase italic flex items-center font-black"
            style={{ color: colors.green }}
          >
            EARN
          </motion.span>
        )}

        {(step === 1 || step === 3) && (
          <div className="flex items-center justify-center relative w-full h-full">
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ 
                opacity: [0, 1, 1, 0],
                scale: [0.5, 1.2, 1, 0.5],
                rotate: [0, 180, 360]
              }}
              transition={{ duration: 1, ease: "easeInOut" }}
            >
              <Coins className="text-brand-orange" style={{ width: '1em', height: '1em' }} />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
