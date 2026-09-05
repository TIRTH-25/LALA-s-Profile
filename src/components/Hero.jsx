import React, { useState, useEffect } from "react";
import bg from "../assets/bg.png";
import { motion, useMotionValue, useSpring } from "framer-motion";
import {
  RiInstagramLine,
  RiDiscordLine,
  RiTrophyFill,
  RiMapPinLine,
  RiFileCopyLine,
  RiSmartphoneLine,
  RiArrowDownLine,
} from "@remixicon/react";

const Hero = () => {
  // ================= STATE MANAGEMENT =================
  const [discordCopied, setDiscordCopied] = useState(false);
  const [uidCopied, setUidCopied] = useState(false);
  const [sensiCopied, setSensiCopied] = useState(false);
  const [controlCopied, setControlCopied] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isTargetLocked, setIsTargetLocked] = useState(false);

  // ================= FRAMER MOTION MOUSE PHYSICS =================
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 28, stiffness: 220, mass: 0.4 };
  const cursorXSpring = useSpring(mouseX, springConfig);
  const cursorYSpring = useSpring(mouseY, springConfig);

  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  // ================= CLIPBOARD HANDLERS =================
  const handleCopyDiscord = () => {
    navigator.clipboard.writeText("ig_lala");
    setDiscordCopied(true);
    setTimeout(() => setDiscordCopied(false), 2000);
  };
  const handleCopyUid = () => {
    navigator.clipboard.writeText("5249208899");
    setUidCopied(true);
    setTimeout(() => setUidCopied(false), 2000);
  };
  const handleCopySensi = () => {
    navigator.clipboard.writeText("1-7666-7377-6466-7231-157");
    setSensiCopied(true);
    setTimeout(() => setSensiCopied(false), 2000);
  };
  const handleCopyControl = () => {
    navigator.clipboard.writeText("1-7662-6148-4807-7824-531");
    setControlCopied(true);
    setTimeout(() => setControlCopied(false), 2000);
  };

  // ================= FRAMER MOTION ANIMATION VARIANTS =================
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { type: "spring", stiffness: 300, damping: 24 } 
    },
  };

  return (
    <div 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative w-full bg-black font-sans text-white overflow-hidden cursor-default"
    >
      
      {/* ================= COMPONENT: TACTICAL AIM CURSOR & SPOTLIGHT ================= */}
      <div 
        className={`pointer-events-none fixed inset-0 z-50 transition-opacity duration-300 hidden md:block ${isHovered ? "opacity-100" : "opacity-0"}`}
        style={{ background: `radial-gradient(400px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(220, 38, 38, 0.12), transparent 70%)` }}
      />
      
      {/* Smaller, sleeker FPS Aim Crosshair */}
      <motion.div 
        className="pointer-events-none fixed z-50 flex items-center justify-center hidden md:block"
        style={{ x: cursorXSpring, y: cursorYSpring, translateX: "-50%", translateY: "-50%" }}
        animate={{ scale: isTargetLocked ? 0.85 : 1, rotate: isTargetLocked ? 45 : 0 }}
        transition={{ duration: 0.15 }}
      >
        <div className={`relative w-6 h-6 flex items-center justify-center transition-colors duration-150 ${isTargetLocked ? "text-red-400" : "text-red-600"}`}>
          {/* Outer Ring */}
          <div className="absolute inset-0.5 rounded-full border border-current opacity-80" />
          
          {/* Top Line */}
          <div className="absolute top-0 w-px h-2 bg-current" />
          {/* Bottom Line */}
          <div className="absolute bottom-0 w-px h-2 bg-current" />
          {/* Left Line */}
          <div className="absolute left-0 h-px w-2 bg-current" />
          {/* Right Line */}
          <div className="absolute right-0 h-px w-2 bg-current" />

          {/* Center Aim Dot */}
          <div className="w-[3px] h-[3px] bg-white rounded-full shadow-[0_0_6px_rgba(220,38,38,1)] z-10" />
        </div>
      </motion.div>
      {/* =========================================================================== */}

      {/* ================= COMPONENT: FIXED BACKGROUND ================= */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <motion.img 
          initial={{ scale: 1.05, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          src={bg} 
          alt="Background" 
          className="absolute inset-0 h-full w-full object-cover object-[75%_center] md:object-center" 
        />
        <div className="md:hidden absolute top-0 left-0 w-[280px] h-[250px] bg-[radial-gradient(circle_at_top_left,rgba(0,0,0,0.95)_0%,transparent_70%)]"></div>
        <div className="hidden md:block absolute top-0 left-0 w-[600px] h-[400px] bg-[radial-gradient(circle_at_top_left,rgba(0,0,0,0.85)_0%,transparent_70%)]"></div>
        <div className="hidden md:block absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-black/80 via-black/30 to-transparent"></div>
        <div className="absolute inset-x-0 bottom-0 h-[55%] md:h-[35%] bg-gradient-to-t from-black via-black/60 to-transparent"></div>
      </div>

      {/* ================= COMPONENT: DESKTOP SERVER BADGE ================= */}
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5 }}
        className="hidden md:flex absolute top-8 right-12 z-20"
      >
        <div className="flex items-center border border-gray-700/70 border-t-white/10 bg-black/40 backdrop-blur-md shadow-[0_0_30px_rgba(0,0,0,0.5)]">
          <div className="flex items-center gap-3 px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-red-600 shadow-[0_0_10px_rgba(220,38,38,0.8)] animate-pulse"></span>
            <div className="flex flex-col leading-none">
              <span className="text-[12px] tracking-[0.25em] text-gray-500">SERVER</span>
            </div>
          </div>
          <div className="h-8 w-px bg-gray-700"></div>
          <div className="px-4 py-2">
            <span className="mt-1 text-sm font-semibold tracking-[0.2em] text-white">INDIA</span>
          </div>
        </div>
      </motion.div>

      {/* ================= COMPONENT: MOBILE COVER VIEWPORT ================= */}
      <div className="relative z-10 flex flex-col justify-between h-[100dvh] w-full md:hidden px-5 py-6">
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="flex justify-between items-start mt-2">
          <div className="flex flex-col gap-1">
            <span className="text-red-600 text-[9px] font-bold tracking-[0.3em]">PLAYER IDENTIFICATION</span>
            <span className="text-white text-lg font-black tracking-wide whitespace-nowrap">F4 \ LALA</span>
            <span className="text-gray-400 text-[10px] tracking-widest mt-0.5">UID: 5249208899</span>
            <div className="flex items-center gap-2 mt-1">
              <span className="h-1.5 w-1.5 rounded-full bg-red-600 animate-pulse shadow-[0_0_8px_rgba(220,38,38,0.8)]"></span>
              <span className="text-gray-300 text-[10px] font-bold tracking-widest">INDIA</span>
            </div>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="relative flex flex-col pb-8">
          <span className="text-red-500 text-[10px] font-bold tracking-[0.25em] mb-1">OFFICIAL PLAYER PROFILE</span>
          <h1 className="text-white font-black text-6xl tracking-[0em] leading-none whitespace-nowrap flex items-center">
            F4<span className="text-red-600 mx-2 drop-shadow-[0_0_12px_rgba(220,38,38,0.5)]">\</span>LALA
          </h1>
          <p className="text-gray-400 mt-3 text-[10px] tracking-[0.2em]">BGMI PLAYER / GRINDING SINCE 2018</p>

          <div className="flex items-center gap-5 mt-6">
            <button onClick={handleCopyUid} className="flex items-center gap-2 border border-gray-600/70 rounded-lg px-4 py-2 bg-black/40 backdrop-blur-md active:scale-95 active:border-red-500">
              <RiFileCopyLine size={14} className={`${uidCopied ? "text-red-500" : "text-gray-300"}`} />
              <span className={`text-[10px] font-bold tracking-[0.2em] mt-0.5 ${uidCopied ? "text-red-500" : "text-gray-200"}`}>{uidCopied ? "COPIED" : "COPY UID"}</span>
            </button>
          </div>

          <div className="absolute right-0 bottom-12 flex flex-col items-center gap-3 text-gray-500/70">
            <span className="text-[9px] tracking-[0.3em] font-bold uppercase [writing-mode:vertical-rl]">Scroll to explore</span>
            <RiArrowDownLine size={16} className="animate-bounce" />
          </div>
        </motion.div>
      </div>

      {/* ================= COMPONENT: MAIN INTERACTIVE CONTENT CONTAINER ================= */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="relative z-10 flex flex-col md:min-h-screen md:justify-center w-full md:w-1/2 lg:w-[38%] px-5 md:pl-12 pb-16 md:py-16 gap-3"
      >
        {/* Desktop Header Info */}
        <motion.div variants={itemVariants} className="hidden md:block">
          <div className="flex items-center gap-2 mb-2">
            <h4 className="text-red-600 text-xs font-semibold tracking-[0.3em]">PLAYER PROFILE</h4>
            <div className="h-[2px] w-12 bg-red-600"></div>
          </div>
          <h1 className="text-white font-black text-7xl md:text-9xl tracking-[0em] leading-none whitespace-nowrap flex items-center">
            F4<span className="text-red-600 mx-3 drop-shadow-[0_0_12px_rgba(220,38,38,0.5)]">\</span>LALA
          </h1>
          <p className="text-gray-400 mt-2 text-xs md:text-sm tracking-widest">BGMI PLAYER / GRINDING SINCE 2018</p>
        </motion.div>

        {/* Desktop Side-by-Side Panels */}
        <motion.div variants={itemVariants} className="hidden md:flex w-full max-w-sm gap-2 mt-3">
          <motion.div 
            onMouseEnter={() => setIsTargetLocked(true)}
            onMouseLeave={() => setIsTargetLocked(false)}
            whileHover={{ scale: 1.02 }} 
            whileTap={{ scale: 0.98 }} 
            onClick={handleCopyUid} 
            className="group relative flex-1 cursor-pointer flex flex-col border border-gray-800/80 bg-black/40 px-3.5 py-2.5 backdrop-blur-md hover:border-red-600 transition-colors"
          >
            <div className="flex w-full items-center justify-between mb-1">
              <span className="text-red-500 text-[9px] font-bold tracking-[0.2em]">UID</span>
              <RiFileCopyLine size={12} className="text-gray-500 group-hover:text-red-400" />
            </div>
            <span className="font-mono text-[12px] tracking-wider text-gray-200 group-hover:text-white">5249208899</span>
            {uidCopied && <div className="absolute inset-0 flex items-center justify-center bg-black/95"><span className="text-[11px] text-gray-200 tracking-widest font-bold">COPIED!</span></div>}
          </motion.div>

          <motion.div 
            onMouseEnter={() => setIsTargetLocked(true)}
            onMouseLeave={() => setIsTargetLocked(false)}
            whileHover={{ scale: 1.02 }} 
            className="flex-1 flex flex-col border border-gray-800/80 bg-black/40 px-3.5 py-2.5 backdrop-blur-md hover:border-gray-600 transition-colors cursor-default"
          >
            <div className="flex w-full items-center justify-between mb-1">
              <span className="text-gray-500 text-[9px] font-bold tracking-[0.2em]">GEAR</span>
              <RiSmartphoneLine size={12} className="text-gray-500" />
            </div>
            <span className="font-mono text-[11px] tracking-wider text-gray-300">IPHONE 14 <span className="text-red-600 mx-0.5">|</span> 60FPS</span>
          </motion.div>
        </motion.div>

        {/* Sensi Block */}
        <motion.div 
          onMouseEnter={() => setIsTargetLocked(true)}
          onMouseLeave={() => setIsTargetLocked(false)}
          variants={itemVariants} 
          whileHover={{ scale: 1.01 }} 
          whileTap={{ scale: 0.98 }} 
          onClick={handleCopySensi} 
          className="group relative w-full max-w-sm cursor-pointer flex items-center justify-between border border-gray-800/80 bg-black/40 px-4 py-3 backdrop-blur-md hover:border-red-600"
        >
          <div className="flex items-center gap-3">
            <span className="text-gray-400 group-hover:text-red-500 text-[10px] font-bold tracking-[0.2em]">SENSI</span>
            <div className="h-4 w-[1px] bg-gray-700"></div>
            <span className="font-mono text-[12px] md:text-[13px] tracking-wider text-gray-200 group-hover:text-white">1-7666-7377-6466-7231-157</span>
          </div>
          <RiFileCopyLine size={15} className="text-gray-500 group-hover:text-red-400" />
          {sensiCopied && <div className="absolute inset-0 flex items-center justify-center bg-black/95"><span className="text-[11px] md:text-[12px] text-gray-200 tracking-widest font-bold">COPIED TO CLIPBOARD</span></div>}
        </motion.div>

        {/* Control Block */}
        <motion.div 
          onMouseEnter={() => setIsTargetLocked(true)}
          onMouseLeave={() => setIsTargetLocked(false)}
          variants={itemVariants} 
          whileHover={{ scale: 1.01 }} 
          whileTap={{ scale: 0.98 }} 
          onClick={handleCopyControl} 
          className="group relative w-full max-w-sm cursor-pointer flex items-center justify-between border border-gray-800/80 bg-black/40 px-4 py-3 backdrop-blur-md hover:border-red-600"
        >
          <div className="flex items-center gap-3">
            <span className="text-gray-400 group-hover:text-red-500 text-[10px] font-bold tracking-[0.2em]">CTRL</span>
            <div className="h-4 w-[1px] bg-gray-700"></div>
            <span className="font-mono text-[12px] md:text-[13px] tracking-wider text-gray-200 group-hover:text-white">1-7662-6148-4807-7824-531</span>
          </div>
          <RiFileCopyLine size={15} className="text-gray-500 group-hover:text-red-400" />
          {controlCopied && <div className="absolute inset-0 flex items-center justify-center bg-black/95"><span className="text-[11px] md:text-[12px] text-gray-200 tracking-widest font-bold">COPIED TO CLIPBOARD</span></div>}
        </motion.div>

        {/* Esport Role */}
        <motion.div 
          onMouseEnter={() => setIsTargetLocked(true)}
          onMouseLeave={() => setIsTargetLocked(false)}
          variants={itemVariants} 
          whileHover={{ scale: 1.01, borderColor: "rgba(220, 38, 38, 0.5)" }} 
          className="group relative overflow-hidden border border-gray-800/80 bg-black/40 px-5 py-3.5 backdrop-blur-md w-full max-w-sm mt-0.5 cursor-default"
        >
          <div className="absolute left-0 top-0 h-full w-[2px] bg-red-600"></div>
          <div className="flex items-center justify-between">
            <p className="text-red-500 text-[10px] md:text-xs tracking-[0.25em] font-semibold">ESPORT ROLE</p>
            <span className="font-mono text-[9px] tracking-widest text-red-400 bg-red-950/40 border border-red-800/50 px-2 py-0.5 rounded shadow-[0_0_8px_rgba(220,38,38,0.2)]">5+ YRS EXP</span>
          </div>
          <h6 className="text-white text-base md:text-lg mt-1 font-medium tracking-wide">ASSAULTER / ENTRY FRAGGER</h6>
        </motion.div>

        {/* Achievement Block */}
        <motion.div 
          onMouseEnter={() => setIsTargetLocked(true)}
          onMouseLeave={() => setIsTargetLocked(false)}
          variants={itemVariants} 
          whileHover={{ scale: 1.01, borderColor: "rgba(234, 179, 8, 0.5)" }} 
          className="group relative overflow-hidden border border-gray-800/80 bg-black/40 px-5 py-3.5 backdrop-blur-md w-full max-w-sm flex items-center gap-4 md:gap-5 mt-0.5 cursor-default"
        >
          <div className="absolute left-0 top-0 h-full w-[2px] bg-yellow-500"></div>
          <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 md:h-11 md:w-11 rounded bg-yellow-950/30 border border-yellow-700/50 shadow-[0_0_15px_rgba(234,179,8,0.15)]">
            <RiTrophyFill className="text-yellow-400 drop-shadow-[0_0_8px_rgba(234,179,8,0.8)] h-5 w-5" />
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-yellow-500 text-[9px] md:text-[10px] tracking-[0.25em] font-bold">#1 WINNER</p>
            <h6 className="text-white text-[14px] md:text-[15px] mt-0.5 font-bold tracking-wide">METAL CUP - 2025</h6>
            <p className="text-gray-400 text-[10px] md:text-[11px] mt-0.5 tracking-wider flex items-center gap-1">
              <RiMapPinLine size={12} className="text-gray-400" /> MSU-BARODA
            </p>
          </div>
        </motion.div>

        {/* Social Links */}
        <motion.div variants={itemVariants} className="flex w-full max-w-sm flex-col gap-2 mt-0.5">
          <motion.a 
            onMouseEnter={() => setIsTargetLocked(true)}
            onMouseLeave={() => setIsTargetLocked(false)}
            whileHover={{ scale: 1.02 }} 
            whileTap={{ scale: 0.98 }} 
            href="https://instagram.com/ig_la1a" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="group flex cursor-pointer items-center gap-3 border border-gray-800/80 bg-black/40 px-5 py-2.5 text-white backdrop-blur-md hover:border-red-600 transition-colors"
          >
            <RiInstagramLine className="text-red-500" />
            <span className="text-xs md:text-sm">Instagram / @ig_la1a</span>
          </motion.a>
          
          <motion.div 
            onMouseEnter={() => setIsTargetLocked(true)}
            onMouseLeave={() => setIsTargetLocked(false)}
            whileHover={{ scale: 1.02 }} 
            whileTap={{ scale: 0.98 }} 
            onClick={handleCopyDiscord} 
            className="group flex cursor-pointer items-center gap-3 border border-gray-800/80 bg-black/40 px-5 py-2.5 text-white backdrop-blur-md hover:border-red-600 transition-colors"
          >
            <RiDiscordLine className="text-red-500" />
            <span className="text-xs md:text-sm w-full">{discordCopied ? "Copied to clipboard!" : "Discord / @ig_lala"}</span>
          </motion.div>
        </motion.div>

        {/* ================= COMPONENT: MOBILE FOOTER (Restored & Centered) ================= */}
        <div className="flex md:hidden w-full max-w-sm items-center justify-center mt-6 mb-4 opacity-60">
          <span className="font-mono text-[9px] text-gray-500 tracking-widest uppercase flex items-center gap-2">
            LAST UPDATED : 5 SEP 2026 <span className="text-gray-700">|</span> MADE BY TIRTH-25 <span className="text-white opacity-80">🤍</span>
          </span>
        </div>
      </motion.div>

      {/* ================= COMPONENT: CORNER UI & FOOTERS ================= */}
      <div className="pointer-events-none absolute left-5 top-7 h-12 w-12 hidden md:block z-30"><span className="absolute left-0 top-0 h-[1px] w-5 bg-red-600"/><span className="absolute left-0 top-0 h-8 w-[1px] bg-red-600"/><span className="absolute left-7 top-0 h-[1px] w-12 bg-gray-600 opacity-70"/></div>
      <div className="pointer-events-none absolute right-5 top-7 h-12 w-12 hidden md:block z-30"><span className="absolute right-0 top-0 h-[1px] w-5 bg-red-600"/><span className="absolute right-0 top-0 h-8 w-[1px] bg-red-600"/></div>
      <div className="pointer-events-none absolute bottom-7 left-5 h-12 w-12 hidden md:block z-30"><span className="absolute bottom-0 left-0 h-[1px] w-5 bg-red-600"/><span className="absolute bottom-0 left-0 h-8 w-[1px] bg-red-600"/><span className="absolute bottom-0 left-7 h-[1px] w-12 bg-gray-600 opacity-70"/></div>
      <div className="pointer-events-none absolute bottom-7 right-5 h-12 w-12 hidden md:block z-30"><span className="absolute bottom-0 right-0 h-[1px] w-5 bg-red-600"/><span className="absolute bottom-0 right-0 h-8 w-[1px] bg-gray-600 opacity-70"/><span className="absolute bottom-0 right-7 h-[1px] w-12 bg-gray-600 opacity-70"/></div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }} className="absolute bottom-7 left-0 right-0 hidden md:flex justify-center z-30 pointer-events-none">
        <span className="font-mono text-[10px] text-gray-500/70 hover:text-gray-300 transition-colors tracking-widest uppercase cursor-default pointer-events-auto flex items-center gap-2">
          LAST UPDATED : 5 SEP 2026 <span className="text-gray-700">|</span> MADE BY TIRTH-25 <span className="text-white opacity-80">🤍</span>
        </span>
      </motion.div>
    </div>
  );
};

export default Hero;