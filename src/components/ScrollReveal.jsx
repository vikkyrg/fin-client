import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

/**
 * Premium Reusable ScrollReveal Component
 * Supports: 'fade-up', 'fade-down', 'fade-left', 'fade-right', 'zoom-in', 'fade'
 * Triggers once when ~15-20% enters the viewport, respects reduced-motion.
 */
export const ScrollReveal = ({
  children,
  type = 'fade-up',
  delay = 0,
  duration = 0.6,
  className = '',
  viewport = { once: true, amount: 0.15 },
  style = {},
  ...props
}) => {
  const shouldReduceMotion = useReducedMotion();

  // If user prefers reduced motion, render immediately without translation/scale
  if (shouldReduceMotion) {
    return (
      <div className={className} style={style} {...props}>
        {children}
      </div>
    );
  }

  const variants = {
    hidden: {
      opacity: 0,
      y: type === 'fade-up' ? 28 : type === 'fade-down' ? -28 : 0,
      x: type === 'fade-left' ? 32 : type === 'fade-right' ? -32 : 0,
      scale: type === 'zoom-in' ? 0.95 : 1,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      transition: {
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1], // Smooth professional cubic-bezier easing
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={variants}
      className={className}
      style={style}
      {...props}
    >
      {children}
    </motion.div>
  );
};

/**
 * Stagger Container for list of cards or milestones
 */
export const StaggerContainer = ({
  children,
  staggerDelay = 0.1,
  delayChildren = 0.05,
  className = '',
  viewport = { once: true, amount: 0.15 },
  style = {},
  ...props
}) => {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return (
      <div className={className} style={style} {...props}>
        {children}
      </div>
    );
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren,
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={containerVariants}
      className={className}
      style={style}
      {...props}
    >
      {children}
    </motion.div>
  );
};

/**
 * Stagger Item to be placed inside StaggerContainer
 */
export const StaggerItem = ({
  children,
  type = 'fade-up',
  duration = 0.55,
  className = '',
  style = {},
  ...props
}) => {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return (
      <div className={className} style={style} {...props}>
        {children}
      </div>
    );
  }

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: type === 'fade-up' ? 24 : type === 'fade-down' ? -24 : 0,
      x: type === 'fade-left' ? 24 : type === 'fade-right' ? -24 : 0,
      scale: type === 'zoom-in' ? 0.95 : 1,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      transition: {
        duration,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <motion.div
      variants={itemVariants}
      className={className}
      style={style}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
