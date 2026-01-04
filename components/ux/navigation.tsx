"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { navItems } from "@/routes";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const easeOutExpo: [number, number, number, number] = [0.22, 1, 0.36, 1];

  const containerVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: easeOutExpo,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: easeOutExpo,
        staggerChildren: 0.1,
      },
    },
  };

  const mobileMenuVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3,
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.6,
        ease: easeOutExpo,
        staggerChildren: 0.1,
      },
    },
  };

  const mobileItemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: easeOutExpo,
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <>
      {/* Desktop Navigation */}
      <motion.nav
        className="hidden md:block fixed bottom-0 left-0 right-0 z-50  "
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="max-w-3xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div
              className="flex items-center gap-2"
              variants={itemVariants}
            >
              {navItems.map((item) => (
                <motion.div key={item.name} variants={itemVariants}>
                  <Button
                    variant="outline"
                    className=" font-bold leading-tight text-sm rounded-none px-6 py-5 hover:bg-black hover:text-white transition-colors border-black"
                    asChild
                  >
                    <a href={item.href}>{item.name}</a>
                  </Button>
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={itemVariants}>
              <Button
                variant="default"
                className="font-bold rounded-none text-sm px-6 py-5 border-white"
                asChild
              >
                <a href="/contact">CONTACT</a>
              </Button>
            </motion.div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Navigation */}
      <motion.nav
        className="md:hidden fixed bottom-0 left-0 right-0 z-50"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="px-6 py-4 flex justify-center items-center">
          <Button
            variant="outline"
            className=" bg-black text-white hover:bg-white hover:text-black rounded-none font-bold text-sm py-5"
            onClick={() => setIsMenuOpen(true)}
          >
            MENU
          </Button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="md:hidden fixed inset-0 z-[100] bg-neutral-950 flex flex-col items-center justify-center py-24"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={mobileMenuVariants}
          >
            <div className="flex flex-col items-center gap-8 mb-12">
              {navItems.map((item) => (
                <motion.div key={item.name} variants={mobileItemVariants}>
                  <a
                    href={item.href}
                    className="text-white font-imbue text-6xl  tracking-tight hover:opacity-70 transition-opacity"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                </motion.div>
              ))}
              <motion.div variants={mobileItemVariants}>
                <a
                  href="/contact"
                  className="text-white font-imbue text-6xl  tracking-tight hover:opacity-70 transition-opacity"
                  onClick={() => setIsMenuOpen(false)}
                >
                  CONTACT
                </a>
              </motion.div>
            </div>

            <motion.div variants={mobileItemVariants} className="mt-auto mb-12">
              <Button
                variant="outline"
                className="bg-white rounded-none text-black font-bold px-12 py-6 text-sm hover:bg-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                CLOSE
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
