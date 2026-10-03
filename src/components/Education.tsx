"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { educations } from "@/data/education";

const DISPLAY: React.CSSProperties = { fontFamily:"var(--font-display), system-ui, sans-serif" };
const MONO: React.CSSProperties    = { fontFamily:"var(--font-mono), monospace" };

const meta = [
  { color:"#06B6D4", icon:"⚡", era:"2018 – 2021", tagline:"Electronics Era" },
  { color:"#155EEF", icon:"💻", era:"2021 – 2024", tagline:"Technology Era"  },
];

export default function Education() {
  const ref = useRef(null);
  const inView = useInView(ref, { once:true, margin:"-80px" });

  return (
    <section id="education" className="section" style={{ background:"#06090f" }} ref={ref}>
      <div className="bg-grid" style={{ position:"absolute", inset:0, opacity:.15, pointerEvents:"none" }} />
      <div style={{ position:"absolute", left:"50%", bottom:0, transform:"translateX(-50%)", width:400, height:200, borderRadius:"50%", background:"rgba(21,94,239,0.04)", filter:"blur(64px)", pointerEvents:"none" }} />

      <div className="wrap">
        <motion.div initial={{ opacity:0, y:22 }} animate={inView?{ opacity:1, y:0 }:{}} transition={{ duration:.56 }}>
          <p className="label">Education</p>
          <h2 className="sh">Academic <span className="tg">Foundation</span></h2>
        </motion.div>

        {/* ── Two education cards side-by-side ── */}
        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(280px, 1fr))", gap:20, marginBottom:20 }}>
          {educations.map((edu, i) => {
            const m = meta[i];
            return (
              <motion.div key={edu.id}
                initial={{ opacity:0, y:28 }} animate={inView?{ opacity:1, y:0 }:{}}
                transition={{ duration:.6, delay:.14+i*.18 }}
                className="card card-hover"
                style={{ padding:"26px 28px", position:"relative", overflow:"hidden" }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.borderColor=`${m.color}28`}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.borderColor="rgba(255,255,255,0.08)"}
              >
                {/* Top accent line */}
                <div style={{ position:"absolute", top:0, left:0, right:0, height:2, background:`linear-gradient(90deg,transparent,${m.color}60,transparent)` }} />

                {/* Era label + date */}
                <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:18 }}>
                  <div style={{ display:"flex", alignItems:"center", gap:8 }}>
                    <span style={{ fontSize:20 }}>{m.icon}</span>
                    <span style={{ ...MONO, fontSize:10, fontWeight:700, letterSpacing:".22em", color:m.color, textTransform:"uppercase" }}>{m.tagline}</span>
                  </div>
                  <span style={{ ...MONO, fontSize:10, color:"#2d3748" }}>{m.era}</span>
                </div>

                {/* Degree */}
                <h3 style={{ ...DISPLAY, fontWeight:700, fontSize:"clamp(1.1rem,1.6vw,1.3rem)", color:"#F8FAFC", marginBottom:6, lineHeight:1.2 }}>
                  {edu.degree}
                </h3>
                <p style={{ ...DISPLAY, fontWeight:600, fontSize:14, color:m.color, marginBottom:4 }}>{edu.field}</p>
                <p style={{ fontSize:13, color:"#718096", marginBottom:2, lineHeight:1.5 }}>{edu.institution}</p>
                <p style={{ ...MONO, fontSize:11, color:"#334155", marginBottom:18 }}>{edu.location}</p>

                {/* Score badge */}
                <div style={{
                  display:"inline-flex", alignItems:"center", gap:8,
                  padding:"6px 14px", borderRadius:8,
                  ...MONO, fontSize:12, fontWeight:700,
                  background:`${m.color}12`, border:`1px solid ${m.color}25`,
                }}>
                  <span style={{ color:"#475569" }}>{edu.scoreType === "CGPA" ? "CGPA" : "Score"}</span>
                  <span style={{ color:"#F8FAFC", fontSize:14 }}>{edu.score}</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ── Journey progression arrow ── */}
        <motion.div
          initial={{ opacity:0 }} animate={inView?{ opacity:1 }:{}} transition={{ delay:.52 }}
          style={{ display:"flex", alignItems:"center", justifyContent:"center", gap:16, margin:"8px 0", flexWrap:"wrap" }}
        >
          {["Electronics","Information Technology","Robotics + AI + STEM"].map((step, i) => (
            <div key={step} style={{ display:"flex", alignItems:"center", gap:16 }}>
              <span style={{
                ...MONO, fontSize:11, fontWeight:600, letterSpacing:".1em",
                color: i===2 ? "#06B6D4" : "#334155",
                padding:"4px 12px", borderRadius:6,
                background: i===2 ? "rgba(6,182,212,0.08)" : "transparent",
                border: i===2 ? "1px solid rgba(6,182,212,0.22)" : "none",
              }}>{step}</span>
              {i < 2 && (
                <svg width={16} height={16} fill="none" stroke="#334155" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              )}
            </div>
          ))}
        </motion.div>

        {/* ── NOW card — full width ── */}
        <motion.div
          initial={{ opacity:0, y:22 }} animate={inView?{ opacity:1, y:0 }:{}}
          transition={{ duration:.6, delay:.48 }}
          className="card"
          style={{ padding:"22px 28px", marginTop:20, borderColor:"rgba(21,94,239,0.22)", position:"relative", overflow:"hidden" }}
        >
          <div style={{ position:"absolute", top:0, left:0, right:0, height:1, background:"linear-gradient(90deg,transparent,rgba(21,94,239,0.5),transparent)" }} />
          <div style={{ display:"flex", alignItems:"center", gap:"clamp(24px,4vw,60px)", flexWrap:"wrap" }}>
            {/* Left — label */}
            <div style={{ display:"flex", alignItems:"center", gap:10, flexShrink:0 }}>
              <div style={{ width:10, height:10, borderRadius:"50%", background:"#06B6D4", boxShadow:"0 0 10px rgba(6,182,212,0.6)", animation:"pulseGlow 1.5s ease-in-out infinite" }} />
              <span style={{ ...MONO, fontSize:11, fontWeight:700, letterSpacing:".22em", color:"#06B6D4" }}>NOW — ACTIVE</span>
            </div>
            {/* Middle — title */}
            <div style={{ flex:1, minWidth:200 }}>
              <h3 style={{ ...DISPLAY, fontWeight:700, fontSize:18, color:"#F8FAFC", marginBottom:4 }}>
                Robotics · AI · STEM
              </h3>
              <p style={{ fontSize:13, color:"#718096", lineHeight:1.65 }}>
                Applying electronics and IT foundations in real-world robotics, AI and STEM education — building, teaching and inspiring at the intersection of technology.
              </p>
            </div>
            {/* Right — domain tags */}
            <div style={{ display:"flex", flexDirection:"column", gap:6, flexShrink:0 }}>
              {["Robotics","AI / Computer Vision","STEM Education"].map(t => (
                <span key={t} style={{ ...MONO, fontSize:10, color:"#475569", letterSpacing:".1em", padding:"3px 10px", borderRadius:5, border:"1px solid rgba(255,255,255,0.06)", background:"rgba(255,255,255,0.03)" }}>{t}</span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
