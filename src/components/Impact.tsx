"use client";
import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";

const DISPLAY: React.CSSProperties = { fontFamily:"var(--font-display), system-ui, sans-serif" };
const MONO: React.CSSProperties    = { fontFamily:"var(--font-mono), monospace" };

function useCounter(target: number, duration: number, active: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start = 0;
    const steps = 80;
    const inc = target / steps;
    const iv = (duration * 1000) / steps;
    const t = setInterval(() => {
      start += inc;
      if (start >= target) { setCount(target); clearInterval(t); }
      else setCount(Math.floor(start));
    }, iv);
    return () => clearInterval(t);
  }, [active, target, duration]);
  return count;
}

export default function Impact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once:true, margin:"-120px" });
  const count = useCounter(1000, 2.4, inView);

  return (
    <section id="impact" className="section" ref={ref} style={{ background:"#06090f" }}>
      <div style={{ position:"absolute", inset:0, pointerEvents:"none", background:"radial-gradient(ellipse 70% 50% at 50% 40%, rgba(21,94,239,0.055) 0%, transparent 68%)" }} />
      <div className="bg-dots" style={{ position:"absolute", inset:0, opacity:.14, pointerEvents:"none" }} />
      {/* Subtle orbit rings — reduced opacity vs before */}
      <div className="a-cw"  style={{ position:"absolute", top:"50%", left:"50%", transform:"translate(-50%,-50%)", width:520, height:520, borderRadius:"50%", border:"1px solid rgba(21,94,239,0.05)", pointerEvents:"none" }} />
      <div className="a-ccw" style={{ position:"absolute", top:"50%", left:"50%", transform:"translate(-50%,-50%)", width:360, height:360, borderRadius:"50%", border:"1px solid rgba(6,182,212,0.05)", pointerEvents:"none" }} />

      <div className="wrap" style={{ textAlign:"center", position:"relative", zIndex:1 }}>

        {/* Section label */}
        <motion.p className="label" style={{ justifyContent:"center" }}
          initial={{ opacity:0, y:16 }} animate={inView?{ opacity:1, y:0 }:{}} transition={{ duration:.5 }}>
          Impact
        </motion.p>

        {/* Counter */}
        <motion.div
          initial={{ opacity:0, scale:.75 }} animate={inView?{ opacity:1, scale:1 }:{}}
          transition={{ duration:.85, delay:.12, type:"spring", bounce:.25 }}
          style={{ position:"relative", display:"inline-block", marginBottom:8 }}
        >
          <div style={{ position:"absolute", inset:-32, borderRadius:"50%", background:"radial-gradient(ellipse at center, rgba(21,94,239,0.14), transparent 70%)", filter:"blur(16px)", pointerEvents:"none" }} />
          <span style={{
            ...DISPLAY, display:"block", fontWeight:800, lineHeight:.88,
            fontSize:"clamp(6rem,18vw,13rem)",
            background:"linear-gradient(135deg,#155EEF 0%,#06B6D4 50%,#38BDF8 100%)",
            WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text",
          } as React.CSSProperties}>
            {count}<span style={{ fontSize:".5em" }}>+</span>
          </span>
        </motion.div>

        <motion.div initial={{ opacity:0, y:16 }} animate={inView?{ opacity:1, y:0 }:{}} transition={{ duration:.55, delay:.6 }}>
          <p style={{ ...DISPLAY, fontSize:"clamp(1rem,2vw,1.5rem)", fontWeight:600, letterSpacing:".2em", color:"#F8FAFC", marginBottom:20, textTransform:"uppercase" }}>
            Students Mentored
          </p>
          <div style={{ display:"flex", flexWrap:"wrap", gap:10, justifyContent:"center" }}>
            {["Robotics","AI","STEM"].map((tag, i) => (
              <motion.span key={tag}
                initial={{ opacity:0, y:8 }} animate={inView?{ opacity:1, y:0 }:{}}
                transition={{ delay:.78+i*.1 }}
                style={{
                  ...MONO, padding:"7px 20px", borderRadius:8,
                  fontSize:11, fontWeight:600, letterSpacing:".16em",
                  background:"rgba(255,255,255,0.04)", border:"1px solid rgba(255,255,255,0.09)", color:"#718096",
                }}
              >{tag}</motion.span>
            ))}
          </div>
        </motion.div>

        {/* Achievement cards */}
        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(260px,1fr))", gap:16, marginTop:56, textAlign:"left" }}>
          {[
            { num:"01", color:"#155EEF", title:"Training & Mentorship", desc:"1000+ students trained and mentored in robotics, AI and STEM education across multiple institutions and innovation camps." },
            { num:"02", color:"#06B6D4", title:"Curriculum Innovation",  desc:"Developed innovative learning modules integrating coding, IoT and AI to enhance technical skills and problem-solving abilities." },
          ].map((a, i) => (
            <motion.div key={a.num}
              initial={{ opacity:0, y:24 }} animate={inView?{ opacity:1, y:0 }:{}}
              transition={{ duration:.55, delay:1.0+i*.14 }}
              className="card card-hover"
              style={{ padding:"22px 24px" }}
            >
              <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:10 }}>
                <div style={{ width:28, height:28, borderRadius:7, display:"flex", alignItems:"center", justifyContent:"center", ...MONO, fontSize:10, fontWeight:700, background:`${a.color}14`, color:a.color, border:`1px solid ${a.color}28`, flexShrink:0 }}>{a.num}</div>
                <h3 style={{ ...DISPLAY, fontWeight:600, fontSize:14, color:"#F8FAFC", margin:0 }}>{a.title}</h3>
              </div>
              <p style={{ fontSize:13, color:"#718096", lineHeight:1.68, margin:0 }}>{a.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
