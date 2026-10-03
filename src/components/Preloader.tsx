"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const DISPLAY: React.CSSProperties = { fontFamily:"var(--font-display), system-ui, sans-serif" };
const MONO: React.CSSProperties    = { fontFamily:"var(--font-mono), monospace" };

const BOOT = ["ROBOTICS MODULE","AI MODULE","IoT MODULE","ENGINEERING CORE"];

export default function Preloader({ onComplete }: { onComplete: () => void }) {
  const [visible, setVisible] = useState(0);
  const [phase, setPhase] = useState<"boot"|"name"|"exit">("boot");

  useEffect(() => {
    const ts: ReturnType<typeof setTimeout>[] = [];
    BOOT.forEach((_, i) => ts.push(setTimeout(() => setVisible(i+1), 260+i*340)));
    ts.push(setTimeout(() => setPhase("name"), 1720));
    ts.push(setTimeout(() => { setPhase("exit"); onComplete(); }, 2720));
    return () => ts.forEach(clearTimeout);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {phase !== "exit" && (
        <motion.div key="pre"
          initial={{ opacity:1 }} exit={{ opacity:0 }} transition={{ duration:.48 }}
          style={{ position:"fixed", inset:0, zIndex:9999, display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", background:"#070d18" }}
        >
          {/* Corner brackets — minimal */}
          {[{ top:18,left:18,borderTop:"1.5px solid",borderLeft:"1.5px solid" },
            { top:18,right:18,borderTop:"1.5px solid",borderRight:"1.5px solid" },
            { bottom:18,left:18,borderBottom:"1.5px solid",borderLeft:"1.5px solid" },
            { bottom:18,right:18,borderBottom:"1.5px solid",borderRight:"1.5px solid" }
          ].map((s,i) => (
            <div key={i} style={{ position:"absolute", width:22, height:22, borderColor:"rgba(21,94,239,0.35)", ...s as React.CSSProperties }} />
          ))}

          {/* Subtle glow */}
          <div style={{ position:"absolute", inset:0, display:"flex", alignItems:"center", justifyContent:"center", pointerEvents:"none" }}>
            <div style={{ width:240, height:240, borderRadius:"50%", background:"radial-gradient(circle,rgba(21,94,239,0.1),transparent 70%)", filter:"blur(20px)" }} />
          </div>

          <div style={{ position:"relative", width:"100%", maxWidth:400, padding:"0 28px" }}>
            {phase === "boot" && (
              <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} style={{ display:"flex", flexDirection:"column", gap:10 }}>
                <p style={{ ...MONO, fontSize:10, color:"#334155", letterSpacing:".32em", marginBottom:10 }}>SYSTEM INITIALIZING</p>
                {BOOT.slice(0,visible).map((line,i) => (
                  <motion.div key={line}
                    initial={{ opacity:0, x:-12 }} animate={{ opacity:1, x:0 }} transition={{ duration:.26 }}
                    style={{ display:"flex", justifyContent:"space-between", gap:12, alignItems:"center" }}
                  >
                    <span style={{ ...MONO, fontSize:12, color:"#334155" }}>[ {line}</span>
                    <span style={{ ...MONO, fontSize:12, color: i<visible-1 ? "#06B6D4" : "#38BDF8" }}>
                      {i < visible-1 ? "READY ]" : <span style={{ animation:"pulseGlow 1s ease-in-out infinite" }}>... ]</span>}
                    </span>
                  </motion.div>
                ))}
                {visible===BOOT.length && (
                  <motion.p initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:.28 }}
                    style={{ ...MONO, fontSize:12, color:"#06B6D4", marginTop:6, letterSpacing:".16em" }}>
                    STATUS: <span style={{ color:"#38BDF8" }}>ONLINE</span>
                  </motion.p>
                )}
              </motion.div>
            )}

            {phase === "name" && (
              <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} style={{ textAlign:"center" }}>
                <motion.p initial={{ opacity:0, y:6 }} animate={{ opacity:1, y:0 }} transition={{ delay:.04 }}
                  style={{ ...MONO, fontSize:9, letterSpacing:".45em", color:"#334155", marginBottom:16 }}>PORTFOLIO</motion.p>

                <motion.h1
                  initial={{ opacity:0, scale:.9, filter:"blur(10px)" }}
                  animate={{ opacity:1, scale:1, filter:"blur(0px)" }}
                  transition={{ duration:.6, ease:"easeOut" }}
                  style={{ ...DISPLAY, fontWeight:700, letterSpacing:"-.02em", color:"#F8FAFC", margin:"0 0 12px", fontSize:"clamp(2rem,5vw,3rem)" }}
                >AMIT SRIVASTAV</motion.h1>

                <motion.div initial={{ scaleX:0 }} animate={{ scaleX:1 }} transition={{ delay:.4, duration:.45 }}
                  style={{ height:1, margin:"0 auto 12px", width:120, background:"linear-gradient(90deg,transparent,#155EEF,#06B6D4,transparent)" }} />

                <motion.p initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:.6 }}
                  style={{ ...MONO, fontSize:10, letterSpacing:".26em", color:"#334155" }}>
                  ROBOTICS · AI · IoT · STEM
                </motion.p>
              </motion.div>
            )}
          </div>

          {/* Progress bar */}
          <div style={{ position:"absolute", bottom:32, width:140, height:1, background:"rgba(255,255,255,0.06)" }}>
            <motion.div style={{ height:"100%", background:"linear-gradient(90deg,#155EEF,#06B6D4)", transformOrigin:"left" }}
              initial={{ scaleX:0 }} animate={{ scaleX:1 }} transition={{ duration:2.6, ease:"linear" }} />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
