"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { careerJourney } from "@/data/skills";

const DISPLAY: React.CSSProperties = { fontFamily:"var(--font-display), system-ui, sans-serif" };
const MONO: React.CSSProperties    = { fontFamily:"var(--font-mono), monospace" };

// Each step has a state: done | active | upcoming
// last item = active (current), others = done
export default function CareerJourney() {
  const ref = useRef(null);
  const inView = useInView(ref, { once:true, margin:"-80px" });
  const lastIdx = careerJourney.length - 1;

  return (
    <section className="section" ref={ref} style={{ background:"#070d18", paddingTop:56, paddingBottom:56 }}>
      <div className="bg-grid" style={{ position:"absolute", inset:0, opacity:.14, pointerEvents:"none" }} />

      <div className="wrap">
        <motion.div initial={{ opacity:0, y:18 }} animate={inView?{ opacity:1, y:0 }:{}} transition={{ duration:.52 }}>
          <p className="label">Career Journey</p>
          <h2 className="sh" style={{ marginBottom:40 }}>The path that led <span className="tg">here</span></h2>
        </motion.div>

        {/* Desktop: horizontal stepper. Mobile: vertical */}
        <div className="cj-wrap">
          {careerJourney.map((step, i) => {
            const isActive  = i === lastIdx;
            const isDone    = i < lastIdx;
            const dotColor  = isActive ? "#06B6D4" : isDone ? "#155EEF" : "#1e293b";
            const textColor = isActive ? "#F8FAFC" : isDone ? "#718096" : "#334155";

            return (
              <div key={step} className="cj-step">
                {/* Connecting line before (desktop: left of dot) */}
                {i > 0 && (
                  <div className="cj-line" style={{
                    background: isDone || isActive
                      ? "linear-gradient(90deg,#155EEF,#06B6D4)"
                      : "rgba(255,255,255,0.06)",
                  }} />
                )}

                <motion.div
                  initial={{ opacity:0, scale:.8 }} animate={inView?{ opacity:1, scale:1 }:{}}
                  transition={{ duration:.42, delay:i*.08 }}
                  style={{ display:"flex", flexDirection:"column", alignItems:"center", gap:10, position:"relative", zIndex:1 }}
                >
                  {/* Step dot */}
                  <div style={{
                    width:36, height:36, borderRadius:"50%",
                    display:"flex", alignItems:"center", justifyContent:"center",
                    ...MONO, fontSize:11, fontWeight:700,
                    background: isActive ? "linear-gradient(135deg,#155EEF,#06B6D4)" : `${dotColor}18`,
                    border:`2px solid ${dotColor}`,
                    color: isActive ? "#fff" : isDone ? "#155EEF" : "#334155",
                    boxShadow: isActive ? "0 0 16px rgba(6,182,212,0.45)" : "none",
                    transition:"all .25s",
                    flexShrink:0,
                    position:"relative",
                  }}>
                    {isActive && <div className="a-ripple" style={{ position:"absolute", inset:0, borderRadius:"50%", border:"1px solid rgba(6,182,212,0.38)" }} />}
                    {String(i+1).padStart(2,"0")}
                  </div>

                  {/* Label */}
                  <span style={{
                    ...DISPLAY, fontWeight: isActive ? 600 : 500,
                    fontSize: isActive ? 12 : 11,
                    color: textColor,
                    textAlign:"center", lineHeight:1.3,
                    maxWidth:90,
                    transition:"color .25s",
                  }}>{step}</span>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .cj-wrap {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 0;
          position: relative;
        }
        .cj-step {
          display: flex;
          align-items: center;
          flex: 1;
          position: relative;
        }
        .cj-line {
          flex: 1;
          height: 1px;
          margin: 0 -1px;
          margin-top: -32px; /* align with dot center */
          position: relative;
          z-index: 0;
        }
        @media (max-width: 768px) {
          .cj-wrap { flex-direction: column; align-items: flex-start; gap: 0; padding-left: 18px; }
          .cj-step { flex-direction: column; align-items: flex-start; flex: none; padding: 0 0 20px 0; width: 100%; }
          .cj-line { width: 1px; height: 20px; margin: 0; margin-top: 0; background: linear-gradient(180deg,#155EEF,#06B6D4) !important; position: absolute; left: 17px; top: -20px; }
          .cj-step > div:last-child { flex-direction: row !important; align-items: center !important; gap: 14px !important; }
          .cj-step > div:last-child > span { max-width: none !important; text-align: left !important; }
        }
      `}</style>
    </section>
  );
}
