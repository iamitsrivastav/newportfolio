"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { experiences } from "@/data/experience";

const DISPLAY: React.CSSProperties = { fontFamily:"var(--font-display), system-ui, sans-serif" };
const MONO: React.CSSProperties    = { fontFamily:"var(--font-mono), monospace" };

const clr: Record<string,string> = { techyguide:"#155EEF", kurious:"#06B6D4", carecubs:"#38BDF8" };

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once:true, margin:"-80px" });

  return (
    <section id="experience" className="section" style={{ background:"#070d18" }} ref={ref}>
      <div className="bg-grid" style={{ position:"absolute", inset:0, opacity:.18, pointerEvents:"none" }} />
      <div style={{ position:"absolute", left:0, top:"30%", width:260, height:260, borderRadius:"50%", background:"rgba(21,94,239,0.035)", filter:"blur(72px)", pointerEvents:"none" }} />

      <div className="wrap">
        <motion.div initial={{ opacity:0, y:22 }} animate={inView?{ opacity:1, y:0 }:{}} transition={{ duration:.56 }}>
          <p className="label">Experience</p>
          <h2 className="sh">Professional <span className="tg">Timeline</span></h2>
        </motion.div>

        <div style={{ position:"relative", maxWidth:800, margin:"0 auto" }}>
          {/* Timeline line */}
          <div style={{ position:"absolute", left:8, top:20, bottom:20, width:1, background:"linear-gradient(180deg,#155EEF 0%,#06B6D4 60%,transparent 100%)" }} className="exp-line" />

          <div style={{ display:"flex", flexDirection:"column", gap:20, paddingLeft:40 }}>
            {experiences.map((exp, i) => {
              const color = clr[exp.id] || "#155EEF";
              return (
                <motion.div key={exp.id}
                  initial={{ opacity:0, x:-28 }} animate={inView?{ opacity:1, x:0 }:{}}
                  transition={{ duration:.6, delay:.16+i*.16 }}
                  style={{ position:"relative" }}
                >
                  {/* Timeline dot */}
                  <div style={{
                    position:"absolute", left:-40, top:20, transform:"translateX(-50%)",
                    width:16, height:16, borderRadius:"50%",
                    border:`2px solid ${color}`,
                    background: exp.current ? color : "#070d18",
                    boxShadow: exp.current ? `0 0 12px ${color}70` : "none",
                    display:"flex", alignItems:"center", justifyContent:"center", zIndex:2,
                  }}>
                    {exp.current && <div style={{ width:6, height:6, borderRadius:"50%", background:"#fff", animation:"pulseGlow 1.5s ease-in-out infinite" }} />}
                  </div>

                  <div className="card card-hover" style={{ padding:"20px 22px", position:"relative", overflow:"hidden" }}
                    onMouseEnter={e => (e.currentTarget as HTMLElement).style.borderColor=`${color}28`}
                    onMouseLeave={e => (e.currentTarget as HTMLElement).style.borderColor="rgba(255,255,255,0.08)"}
                  >
                    {/* Watermark number */}
                    <div style={{ ...MONO, position:"absolute", top:10, right:14, fontWeight:900, fontSize:64, lineHeight:1, color:"rgba(255,255,255,0.018)", userSelect:"none" }}>
                      {String(i+1).padStart(2,"0")}
                    </div>

                    <div style={{ position:"relative" }}>
                      {/* Header */}
                      <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", gap:12, flexWrap:"wrap", marginBottom:12 }}>
                        <div>
                          <div style={{ display:"flex", alignItems:"center", gap:8, flexWrap:"wrap", marginBottom:3 }}>
                            <h3 style={{ ...DISPLAY, fontWeight:600, fontSize:16, color:"#F8FAFC", margin:0 }}>{exp.role}</h3>
                            {exp.current && (
                              <span style={{ ...MONO, padding:"2px 9px", borderRadius:999, fontSize:9, fontWeight:700, background:`${color}18`, color, border:`1px solid ${color}35`, letterSpacing:".18em" }}>NOW</span>
                            )}
                          </div>
                          <p style={{ ...DISPLAY, fontWeight:600, fontSize:13, color, margin:0 }}>{exp.company}</p>
                        </div>
                        <span style={{ ...MONO, fontSize:11, color:"#475569", border:"1px solid #1e293b", borderRadius:7, padding:"5px 11px", whiteSpace:"nowrap", flexShrink:0 }}>{exp.period}</span>
                      </div>

                      {/* Responsibilities — tighter */}
                      <ul style={{ listStyle:"none", padding:0, margin:0, display:"flex", flexDirection:"column", gap:7 }}>
                        {exp.responsibilities.slice(0,3).map((r, j) => (
                          <li key={j} style={{ display:"flex", alignItems:"flex-start", gap:9, color:"#718096", fontSize:13, lineHeight:1.6 }}>
                            <span style={{ marginTop:8, flexShrink:0, width:4, height:4, borderRadius:"50%", background:`${color}88` }} />
                            {r}
                          </li>
                        ))}
                        {exp.responsibilities.length > 3 && (
                          <li style={{ ...MONO, fontSize:10, color:"#334155", marginLeft:13 }}>+{exp.responsibilities.length-3} more</li>
                        )}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) { .exp-line { display: none !important; } }
        .card-hover:hover .card-glow-overlay { opacity: 1 !important; }
      `}</style>
    </section>
  );
}
