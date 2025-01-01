'use client'

import acmeLogo from "../assets/images/acme.png";
import quantumLogo from "../assets/images/quantum.png";
import echoLogo from "../assets/images/echo.png";
import celestialLogo from "../assets/images/celestial.png";
import pulseLogo from "../assets/images/pulse.png";
import apexLogo from "../assets/images/apex.png";
import gorilaLogo from "../assets/images/GORILA LOGO.png";
import Image from "next/image";
import { motion } from "framer-motion";


const images = [
  { id: 1, src: acmeLogo, alt: "Acme Logo" },
  { id: 2, src: quantumLogo, alt: "Quantum Logo" },
  { id: 3, src: echoLogo, alt: "Echo Logo" },
  { id: 4, src: celestialLogo, alt: "Celestial Logo" },
  { id: 5, src: pulseLogo, alt: "Pulse Logo" },
  { id: 6, src: apexLogo, alt: "Apex Logo" },
  { id: 7, src: gorilaLogo, alt: "Gorila Logo" },
];

export const LogoTicker = () => {
  return (
    <div className="bg-black text-white py-[72px] sm:py-24">
      <div className="container">
        <h2 className="text-xl text-center text-white/70 ">
        Trusted by the worlds most innovative teams
        </h2>
        <div className="flex overflow-hidden mt-9 before:content-[''] before:z-10 after:content-[''] before:absolute after:absolute before:h-full after:h-full before:w-8 after:w-10 relative after:right-0 before:left-0 before:top-0 after:top-0 before:bg-[linear-gradient(to_right,#000,rgb(0,0,0,0))] after:bg-[linear-gradient(to_left,#000,rgb(0,0,0,0))]">
          <motion.div
          transition={{
            duration: 20,
            ease: "linear",
            repeat: Infinity,
          }} 
          initial={{ translateX: 0 }}
          animate={{ translateX: "-50%" }}
          className="flex gap-16 flex-none pr-16">
            {images.map(({ id, src, alt }) => (
              <Image
              key={id}
              src={src}
              alt={alt}
              className="flex-none h-8 w-auto" />
            ))}
            {images.map(({ id, src, alt }) => (
              <Image
              key={id}
              src={src}
              alt={alt}
              className="flex-none h-8 w-auto" />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};
