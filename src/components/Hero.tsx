"use client";
import { useEffect, useState } from "react";
import { motion, type Variants } from "framer-motion";
import HeroVisual from "./HeroVisual";
import { personal } from "@/data/personal";

const cv: Variants = { hidden:{}, show:{ transition:{ staggerChildren:.11, delayChildren:.05 } } };
const iv: Variants = { hidden:{ opacity:0, y:28 }, show:{ opacity:1, y:0, transition:{ duration:.68, ease:"easeOut" } } };

const MONO: React.CSSProperties = { fontFamily:"var(--font-mono), monospace" };
const DISPLAY: React.CSSProperties = { fontFamily:"var(--font-display), system-ui, sans-serif" };

export default function Hero({ ready }: { ready: boolean }) {
  const [mouse, setMouse] = useState({ x:.5, y:.5 });
  useEffect(() => {
    const fn = (e: MouseEvent) => setMouse({ x:e.clientX/window.innerWidth, y:e.clientY/window.innerHeight });
    window.addEventListener("mousemove", fn);
    return () => window.removeEventListener("mousemove", fn);
  }, []);

  return (
    <section id="home" style={{ position:"relative", minHeight:"100vh", display:"flex", alignItems:"center", overflow:"hidden", background:"#070d18" }}>

      {/* Backgrounds */}
      <div className="bg-dots" style={{ position:"absolute", inset:0, opacity:.38, pointerEvents:"none" }} />
      <div style={{ position:"absolute", inset:0, pointerEvents:"none", background:"radial-gradient(ellipse 55% 50% at 62% 44%, rgba(21,94,239,0.07) 0%, transparent 70%)" }} />
      <div style={{ position:"absolute", bottom:0, left:0, right:0, height:140, pointerEvents:"none", background:"linear-gradient(to top,#070d18,transparent)" }} />
      {/* Scan line — kept subtle */}
      <div style={{ position:"absolute", inset:0, overflow:"hidden", pointerEvents:"none" }}>
        <div className="a-scan" style={{ position:"absolute", left:0, right:0, top:0, height:1, background:"linear-gradient(90deg,transparent,rgba(21,94,239,0.08),transparent)" }} />
      </div>

      <div className="wrap" style={{ position:"relative", zIndex:1, paddingTop:"clamp(96px,11vw,136px)", paddingBottom:72 }}>
        <div className="grid-hero">

          {/* LEFT */}
          {ready && (
            <motion.div variants={cv} initial="hidden" animate="show" style={{ display:"flex", flexDirection:"column", gap:22 }}>

              {/* Availability badge — single, clean */}
              <motion.div variants={iv}>
                <span style={{
                  ...MONO, display:"inline-flex", alignItems:"center", gap:8,
                  padding:"7px 14px", borderRadius:999,
                  background:"rgba(21,94,239,0.06)", border:"1px solid rgba(21,94,239,0.22)",
                  fontSize:10, fontWeight:600, letterSpacing:".22em", color:"#06B6D4",
                }}>
                  <span style={{ position:"relative", display:"flex", width:7, height:7 }}>
                    <span className="a-ping" style={{ position:"absolute", inset:0, borderRadius:"50%", background:"#06B6D4", opacity:.65 }} />
                    <span style={{ position:"relative", width:7, height:7, borderRadius:"50%", background:"#06B6D4" }} />
                  </span>
                  AVAILABLE FOR OPPORTUNITIES
                </span>
              </motion.div>

              {/* Name — primary display element */}
              <motion.div variants={iv}>
                <h1 style={{
                  ...DISPLAY, fontWeight:700, lineHeight:.9, letterSpacing:"-.03em",
                  fontSize:"clamp(3.2rem,7vw,6rem)", margin:0,
                }}>
                  <span style={{ display:"block", color:"#F8FAFC" }}>AMIT</span>
                  <span className="tg" style={{ display:"block" }}>SRIVASTAV</span>
                </h1>
              </motion.div>

              {/* Role — mono subtitle */}
              <motion.div variants={iv}>
                <p style={{ ...MONO, textTransform:"uppercase", letterSpacing:".16em", fontSize:12, color:"rgba(6,182,212,0.8)", margin:0, fontWeight:500 }}>
                  Robotics &amp; STEM Trainer · AI · IoT · Python
                </p>
              </motion.div>

              {/* Bio — clear, readable */}
              <motion.p variants={iv} style={{ color:"#B8C4D6", lineHeight:1.76, fontWeight:400, fontSize:"clamp(.95rem,1.2vw,1.05rem)", maxWidth:520, margin:0 }}>
                {personal.shortBio}
              </motion.p>

              {/* 3 key domain tags — reduced from 5 */}
              <motion.div variants={iv} style={{ display:"flex", flexWrap:"wrap", gap:8 }}>
                {[
                  { t:"Robotics & AI",  c:"#155EEF" },
                  { t:"IoT & Hardware", c:"#06B6D4" },
                  { t:"STEM Education", c:"#155EEF" },
                ].map(({ t, c }) => (
                  <span key={t} style={{
                    padding:"5px 14px", borderRadius:8,
                    fontFamily:"var(--font-body), sans-serif",
                    fontSize:12, fontWeight:500,
                    background:`${c}0f`, border:`1px solid ${c}30`, color:`${c}cc`,
                  }}>{t}</span>
                ))}
              </motion.div>

              {/* CTAs */}
              <motion.div variants={iv} style={{ display:"flex", flexWrap:"wrap", gap:12, paddingTop:4 }}>
                <button className="btn btn-p" onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior:"smooth" })}>
                  Explore My Work
                  <svg width={14} height={14} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
                <button className="btn btn-s" onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior:"smooth" })}>
                  Get in Touch
                </button>
              </motion.div>

              {/* Location — minimal */}
              <motion.div variants={iv} style={{ display:"flex", alignItems:"center", gap:14, flexWrap:"wrap" }}>
                <span style={{ display:"flex", alignItems:"center", gap:5 }}>
                  <svg width={12} height={12} fill="none" stroke="#475569" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span style={{ ...MONO, fontSize:11, color:"#475569" }}>{personal.location}</span>
                </span>
                <span style={{ width:1, height:10, background:"#1e293b" }} />
                {[{ h:personal.github, l:"GitHub" },{ h:"https://www.linkedin.com/in/amitshravastav", l:"LinkedIn" }].map(s => (
                  <a key={s.l} href={s.h} target="_blank" rel="noopener noreferrer"
                    style={{ ...MONO, fontSize:11, color:"#475569", letterSpacing:".06em", transition:"color .2s" }}
                    onMouseEnter={e => (e.currentTarget.style.color="#06B6D4")}
                    onMouseLeave={e => (e.currentTarget.style.color="#475569")}
                  >{s.l}</a>
                ))}
              </motion.div>
            </motion.div>
          )}

          {/* RIGHT — visual */}
          {ready && (
            <motion.div
              initial={{ opacity:0, scale:.84, x:44 }}
              animate={{ opacity:1, scale:1, x:0 }}
              transition={{ delay:.38, duration:.95, ease:"easeOut" }}
              style={{ position:"relative", height:"clamp(280px,42vw,540px)" }}
            >
              <HeroVisual mouseX={mouse.x} mouseY={mouse.y} />
            </motion.div>
          )}
        </div>
      </div>

      {/* Scroll cue */}
      {ready && (
        <motion.button
          initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:3.2 }}
          onClick={() => document.getElementById("about")?.scrollIntoView({ behavior:"smooth" })}
          style={{ position:"absolute", bottom:24, left:"50%", transform:"translateX(-50%)", display:"flex", flexDirection:"column", alignItems:"center", gap:5, background:"none", border:"none", cursor:"pointer" }}
        >
          <span style={{ ...MONO, fontSize:9, letterSpacing:".4em", color:"#2d3748" }}>SCROLL</span>
          <div style={{ width:1, height:26, background:"linear-gradient(to bottom,rgba(21,94,239,0.4),transparent)" }} />
          <svg className="a-bounce" width={12} height={12} fill="none" stroke="rgba(21,94,239,0.35)" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </motion.button>
      )}
    </section>
  );
}
