"use client";
import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { skillNodes } from "@/data/skills";

const DISPLAY: React.CSSProperties = { fontFamily:"var(--font-display), system-ui, sans-serif" };
const MONO: React.CSSProperties    = { fontFamily:"var(--font-mono), monospace" };

const positions = [
  { x:50, y:8  }, { x:87, y:30 }, { x:87, y:68 },
  { x:50, y:90 }, { x:13, y:68 }, { x:13, y:30 },
];

export default function Expertise() {
  const [active, setActive] = useState<string | null>("robotics");
  const ref = useRef(null);
  const inView = useInView(ref, { once:true, margin:"-80px" });
  const activeNode = skillNodes.find(n => n.id === active);

  return (
    <section id="expertise" className="section" style={{ background:"#06090f" }} ref={ref}>
      <div className="bg-dots" style={{ position:"absolute", inset:0, opacity:.18, pointerEvents:"none" }} />
      <div style={{ position:"absolute", right:0, top:"35%", width:280, height:280, borderRadius:"50%", background:"rgba(6,182,212,0.04)", filter:"blur(72px)", pointerEvents:"none" }} />

      <div className="wrap">
        <motion.div initial={{ opacity:0, y:22 }} animate={inView?{ opacity:1, y:0 }:{}} transition={{ duration:.56 }}>
          <p className="label">Expertise</p>
          <h2 className="sh">Technology <span className="tg">Ecosystem</span></h2>
        </motion.div>

        <div className="grid-2" style={{ alignItems:"start", gap:"clamp(32px,5vw,72px)" }}>

          {/* LEFT — network diagram */}
          <motion.div
            initial={{ opacity:0, scale:.88 }} animate={inView?{ opacity:1, scale:1 }:{}}
            transition={{ duration:.75, delay:.18 }}
            style={{ position:"relative", width:"min(320px,100%)", height:"min(320px,100%)", margin:"0 auto", aspectRatio:"1" }}
          >
            {/* Connection SVG lines */}
            <svg style={{ position:"absolute", inset:0, width:"100%", height:"100%" }} viewBox="0 0 100 100" preserveAspectRatio="none">
              {positions.map((pos, i) => (
                <line key={i} x1="50" y1="50" x2={pos.x} y2={pos.y}
                  stroke={active===skillNodes[i]?.id ? skillNodes[i].color : "rgba(255,255,255,0.06)"}
                  strokeWidth={active===skillNodes[i]?.id ? ".8" : ".3"}
                  style={{ transition:"all .3s" }}
                />
              ))}
            </svg>

            {/* Center node */}
            <div style={{ position:"absolute", top:"50%", left:"50%", transform:"translate(-50%,-50%)", zIndex:10 }}>
              <div style={{
                width:68, height:68, borderRadius:"50%", position:"relative",
                display:"flex", alignItems:"center", justifyContent:"center",
                background:"linear-gradient(135deg,#155EEF,#0d4bc8)",
                boxShadow:"0 0 32px rgba(21,94,239,0.4)",
              }}>
                <div className="a-ripple" style={{ position:"absolute", inset:0, borderRadius:"50%", border:"1px solid rgba(21,94,239,0.35)" }} />
                <span style={{ ...MONO, fontWeight:700, fontSize:10, color:"#fff", letterSpacing:".12em" }}>AMIT</span>
              </div>
            </div>

            {/* Skill nodes */}
            {skillNodes.map((node, i) => {
              const pos = positions[i];
              const isA = active === node.id;
              return (
                <button key={node.id}
                  onMouseEnter={() => setActive(node.id)}
                  onClick={() => setActive(isA ? null : node.id)}
                  style={{
                    position:"absolute", left:`${pos.x}%`, top:`${pos.y}%`,
                    transform:"translate(-50%,-50%)", zIndex: isA ? 20 : 10,
                    background:"none", border:"none", cursor:"pointer", padding:0,
                  }}
                >
                  <div style={{
                    padding:"6px 13px", borderRadius:8,
                    ...MONO, fontSize:11, fontWeight:600, letterSpacing:".1em",
                    background: isA ? `${node.color}1a` : "rgba(17,25,40,0.9)",
                    border:`1px solid ${isA ? `${node.color}55` : "rgba(255,255,255,0.08)"}`,
                    color: isA ? node.color : "#718096",
                    boxShadow: isA ? `0 0 14px ${node.color}28` : "none",
                    backdropFilter:"blur(8px)",
                    transform: isA ? "scale(1.08)" : "scale(1)",
                    transition:"all .24s",
                  }}>{node.label}</div>
                </button>
              );
            })}
          </motion.div>

          {/* RIGHT — unified info panel */}
          <motion.div
            initial={{ opacity:0, x:28 }} animate={inView?{ opacity:1, x:0 }:{}}
            transition={{ duration:.58, delay:.3 }}
            style={{ display:"flex", flexDirection:"column", gap:16 }}
          >
            {/* Active skill detail — prominent */}
            <div>
              {activeNode ? (
                <motion.div key={activeNode.id}
                  initial={{ opacity:0, y:12 }} animate={{ opacity:1, y:0 }} transition={{ duration:.22 }}
                  className="card"
                  style={{ padding:"24px 26px", borderColor:`${activeNode.color}22` }}
                >
                  <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:16 }}>
                    <div style={{ width:8, height:8, borderRadius:"50%", background:activeNode.color, boxShadow:`0 0 8px ${activeNode.color}` }} />
                    <span style={{ ...MONO, fontSize:11, fontWeight:700, letterSpacing:".24em", color:activeNode.color, textTransform:"uppercase" }}>{activeNode.label}</span>
                    <span style={{ ...MONO, fontSize:10, color:"#2d3748", marginLeft:"auto" }}>SKILLS</span>
                  </div>
                  <div style={{ display:"flex", flexWrap:"wrap", gap:8 }}>
                    {activeNode.skills.map(skill => (
                      <span key={skill} style={{
                        padding:"6px 14px", borderRadius:8,
                        fontFamily:"var(--font-body), sans-serif",
                        fontSize:13, fontWeight:500, color:"#B8C4D6",
                        background:"rgba(255,255,255,0.06)", border:"1px solid rgba(255,255,255,0.09)",
                      }}>{skill}</span>
                    ))}
                  </div>
                </motion.div>
              ) : (
                <div className="card" style={{ padding:"24px 26px", minHeight:160, display:"flex", alignItems:"center", justifyContent:"center" }}>
                  <p style={{ ...MONO, fontSize:12, color:"#334155" }}>← Select a node to explore skills</p>
                </div>
              )}
            </div>

            {/* Compact all-skills list — 3 col */}
            <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr 1fr", gap:8 }}>
              {skillNodes.map((node, i) => (
                <motion.button key={node.id}
                  initial={{ opacity:0 }} animate={inView?{ opacity:1 }:{}}
                  transition={{ delay:.4+i*.06 }}
                  onMouseEnter={() => setActive(node.id)}
                  style={{
                    textAlign:"left", padding:"10px 12px", borderRadius:10, cursor:"pointer",
                    background: active===node.id ? `${node.color}12` : "rgba(255,255,255,0.025)",
                    border:`1px solid ${active===node.id ? `${node.color}30` : "rgba(255,255,255,0.06)"}`,
                    transition:"all .2s", fontFamily:"inherit",
                  }}
                >
                  <div style={{ ...MONO, fontSize:9, fontWeight:700, letterSpacing:".18em", color:node.color, marginBottom:3, textTransform:"uppercase" }}>{node.label}</div>
                  <div style={{ fontSize:10, color:"#475569", lineHeight:1.45, whiteSpace:"nowrap", overflow:"hidden", textOverflow:"ellipsis" }}>
                    {node.skills.slice(0,2).join(", ")}
                  </div>
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
