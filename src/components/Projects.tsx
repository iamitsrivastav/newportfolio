"use client";
import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { projects } from "@/data/projects";
import AntiSpoofingDemo from "./AntiSpoofingDemo";
import { ExternalLink, X, ChevronRight } from "lucide-react";

const DISPLAY: React.CSSProperties = { fontFamily:"var(--font-display), system-ui, sans-serif" };
const MONO: React.CSSProperties    = { fontFamily:"var(--font-mono), monospace" };

const GH = ({ size=16 }:{ size?:number }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" style={{ width:size, height:size }}>
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"/>
  </svg>
);

function Modal({ project, onClose }: { project: typeof projects[0]; onClose: () => void }) {
  const sections = [
    { n:"01", t:"PROJECT",    b:`${project.title} — ${project.subtitle}` },
    { n:"02", t:"PROBLEM",    b:"Spoofing attacks pose a real threat to facial authentication. Traditional systems fail to distinguish real faces from photos or screen replays." },
    { n:"03", t:"TECHNOLOGY", b:project.technologies.join("  ·  ") },
    { n:"04", t:"APPROACH",   b:"YOLO algorithm for real-time detection combined with OpenCV video stream processing to classify genuine vs spoofed face presentations." },
    { n:"05", t:"INTERFACE",  b:"Desktop GUI built with Tkinter providing live camera feed with detection overlays, status indicators and result display." },
    { n:"06", t:"RESULT",     b:"Functional real-time anti-spoofing system capable of detecting and flagging spoofing attempts from a live camera feed." },
    { n:"07", t:"GITHUB",     b:project.githubUrl || "", isLink:true },
  ];

  return (
    <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} exit={{ opacity:0 }}
      style={{ position:"fixed", inset:0, zIndex:200, display:"flex", alignItems:"center", justifyContent:"center", padding:16, background:"rgba(4,8,16,0.92)", backdropFilter:"blur(20px)" }}
      onClick={onClose}
    >
      <motion.div initial={{ scale:.93, y:24 }} animate={{ scale:1, y:0 }} exit={{ scale:.93, y:24 }}
        onClick={e => e.stopPropagation()}
        style={{ position:"relative", width:"100%", maxWidth:580, maxHeight:"88vh", overflowY:"auto", borderRadius:20, padding:"32px 28px", background:"rgba(11,17,30,0.98)", border:"1px solid rgba(255,255,255,0.1)" }}
      >
        <button onClick={onClose} style={{ position:"absolute", top:16, right:16, width:28, height:28, display:"flex", alignItems:"center", justifyContent:"center", background:"rgba(255,255,255,0.06)", border:"1px solid rgba(255,255,255,0.1)", borderRadius:7, cursor:"pointer", color:"#718096" }}>
          <X size={13}/>
        </button>

        <p style={{ ...MONO, fontSize:10, fontWeight:700, letterSpacing:".3em", color:"#06B6D4", marginBottom:16 }}>CASE STUDY</p>
        <h2 style={{ ...DISPLAY, fontWeight:700, fontSize:22, color:"#F8FAFC", marginBottom:4 }}>{project.title}</h2>
        <p style={{ fontSize:13, color:"#06B6D4", fontWeight:500, marginBottom:24 }}>{project.subtitle}</p>

        <div style={{ display:"flex", flexDirection:"column", gap:14 }}>
          {sections.map(s => (
            <div key={s.n} style={{ display:"flex", gap:14, paddingBottom:14, borderBottom:"1px solid rgba(255,255,255,0.05)" }}>
              <span style={{ ...MONO, fontSize:10, color:"rgba(21,94,239,0.35)", marginTop:1, flexShrink:0, width:18 }}>{s.n}</span>
              <div>
                <div style={{ ...MONO, fontSize:10, color:"#475569", letterSpacing:".2em", marginBottom:5 }}>{s.t}</div>
                {s.isLink
                  ? <a href={s.b} target="_blank" rel="noopener noreferrer" style={{ color:"#06B6D4", fontSize:13, display:"flex", alignItems:"center", gap:4 }}>{s.b} <ExternalLink size={11}/></a>
                  : <p style={{ color:"#B8C4D6", fontSize:13, lineHeight:1.68, margin:0 }}>{s.b}</p>
                }
              </div>
            </div>
          ))}
        </div>

        {project.githubUrl && (
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
            className="btn btn-p" style={{ marginTop:20, justifyContent:"center", width:"100%", fontSize:12, letterSpacing:".1em" }}>
            <GH size={15}/> View on GitHub
          </a>
        )}
      </motion.div>
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once:true, margin:"-80px" });
  const [modal, setModal] = useState<typeof projects[0] | null>(null);

  const featured = projects.find(p => p.featured)!;
  const secondary = projects.filter(p => !p.featured);

  return (
    <>
      <section id="projects" className="section" ref={ref} style={{ background:"#070d18" }}>
        <div className="bg-dots" style={{ position:"absolute", inset:0, opacity:.2, pointerEvents:"none" }}/>
        <div style={{ position:"absolute", right:0, top:"20%", width:320, height:320, borderRadius:"50%", background:"rgba(21,94,239,0.04)", filter:"blur(72px)", pointerEvents:"none" }}/>

        <div className="wrap">
          <motion.div initial={{ opacity:0, y:22 }} animate={inView?{ opacity:1, y:0 }:{}} transition={{ duration:.56 }}>
            <p className="label">Project Lab</p>
            <h2 className="sh">Things I&apos;ve <span className="tg">Built</span></h2>
          </motion.div>

          {/* Featured */}
          <motion.div initial={{ opacity:0, y:32 }} animate={inView?{ opacity:1, y:0 }:{}} transition={{ duration:.65, delay:.16 }}
            className="card"
            style={{ padding:"28px 30px", marginBottom:20, position:"relative", overflow:"hidden", borderColor:"rgba(21,94,239,0.18)" }}
          >
            {/* Subtle top line */}
            <div style={{ position:"absolute", top:0, left:0, right:0, height:1, background:"linear-gradient(90deg,transparent,rgba(21,94,239,0.4),rgba(6,182,212,0.3),transparent)" }} />

            <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:20 }}>
              <span style={{ ...MONO, padding:"3px 10px", borderRadius:6, fontSize:9, fontWeight:700, letterSpacing:".2em", background:"rgba(21,94,239,0.14)", border:"1px solid rgba(21,94,239,0.3)", color:"#93c5fd" }}>★ FEATURED</span>
              <span style={{ ...MONO, fontSize:10, color:"#334155" }}>{featured.category}</span>
            </div>

            <div className="grid-2" style={{ alignItems:"start" }}>
              {/* Info */}
              <div>
                <h3 style={{ ...DISPLAY, fontWeight:700, fontSize:"clamp(1.4rem,2.5vw,1.9rem)", color:"#F8FAFC", marginBottom:6, lineHeight:1.15 }}>{featured.title}</h3>
                <p style={{ fontSize:13, color:"#06B6D4", fontWeight:500, marginBottom:14 }}>{featured.subtitle}</p>
                <p style={{ color:"#718096", fontSize:14, lineHeight:1.72, marginBottom:20, fontWeight:400 }}>{featured.description}</p>

                {/* Tech stack */}
                <div style={{ display:"flex", flexWrap:"wrap", gap:7, marginBottom:22 }}>
                  {featured.technologies.map(t => (
                    <span key={t} style={{ ...MONO, padding:"4px 10px", borderRadius:6, fontSize:11, fontWeight:500, background:"rgba(255,255,255,0.05)", border:"1px solid rgba(255,255,255,0.09)", color:"#B8C4D6" }}>{t}</span>
                  ))}
                </div>

                <div style={{ display:"flex", flexWrap:"wrap", gap:10 }}>
                  <button onClick={() => setModal(featured)} className="btn btn-p" style={{ fontSize:12, letterSpacing:".08em", padding:"11px 20px" }}>
                    View Project <ChevronRight size={14}/>
                  </button>
                  {featured.githubUrl && (
                    <a href={featured.githubUrl} target="_blank" rel="noopener noreferrer"
                      className="btn btn-s" style={{ fontSize:12, letterSpacing:".08em", padding:"11px 20px" }}>
                      <GH size={14}/> GitHub
                    </a>
                  )}
                </div>
              </div>

              {/* Demo */}
              <AntiSpoofingDemo/>
            </div>
          </motion.div>

          {/* Secondary */}
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(300px,1fr))", gap:16 }}>
            {secondary.map((proj, i) => (
              <motion.div key={proj.id}
                initial={{ opacity:0, y:22 }} animate={inView?{ opacity:1, y:0 }:{}}
                transition={{ duration:.55, delay:.34+i*.1 }}
                className="card card-hover"
                style={{ overflow:"hidden" }}
              >
                {/* Browser mockup */}
                <div style={{ background:"rgba(7,13,24,0.8)", borderBottom:"1px solid rgba(255,255,255,0.06)" }}>
                  <div style={{ display:"flex", alignItems:"center", gap:5, padding:"9px 14px" }}>
                    {["#ef4444","#eab308","#22c55e"].map((c,j) => <div key={j} style={{ width:8, height:8, borderRadius:"50%", background:c, opacity:.4 }}/>)}
                    <div style={{ flex:1, margin:"0 10px", background:"rgba(255,255,255,0.04)", borderRadius:4, padding:"2px 10px", ...MONO, fontSize:10, color:"#334155", textAlign:"center" }}>portfolio.github.io</div>
                  </div>
                  <div style={{ padding:"12px 16px", display:"flex", flexDirection:"column", gap:7, minHeight:80, justifyContent:"center" }}>
                    <div style={{ height:6, borderRadius:4, width:"30%", background:"rgba(21,94,239,0.25)" }}/>
                    <div style={{ height:4, borderRadius:4, width:"60%", background:"rgba(255,255,255,0.05)" }}/>
                    <div style={{ height:4, borderRadius:4, width:"45%", background:"rgba(255,255,255,0.05)" }}/>
                    <div style={{ display:"flex", gap:6, marginTop:3 }}>
                      <div style={{ height:20, width:50, borderRadius:5, background:"rgba(21,94,239,0.22)" }}/>
                      <div style={{ height:20, width:50, borderRadius:5, background:"rgba(255,255,255,0.04)" }}/>
                    </div>
                  </div>
                </div>
                <div style={{ padding:"16px 18px" }}>
                  <p style={{ ...MONO, fontSize:10, color:"#06B6D4", marginBottom:3, letterSpacing:".1em" }}>{proj.category}</p>
                  <h3 style={{ ...DISPLAY, fontWeight:600, fontSize:15, color:"#F8FAFC", marginBottom:6 }}>{proj.title}</h3>
                  <p style={{ color:"#718096", fontSize:12, lineHeight:1.65, marginBottom:12 }}>{proj.description}</p>
                  <div style={{ display:"flex", flexWrap:"wrap", gap:5, marginBottom:12 }}>
                    {proj.technologies.map(t => (
                      <span key={t} style={{ ...MONO, padding:"3px 8px", borderRadius:5, fontSize:10, color:"#475569", background:"rgba(255,255,255,0.035)", border:"1px solid rgba(255,255,255,0.06)" }}>{t}</span>
                    ))}
                  </div>
                  {proj.githubUrl && (
                    <a href={proj.githubUrl} target="_blank" rel="noopener noreferrer"
                      style={{ display:"flex", alignItems:"center", gap:5, ...MONO, fontSize:11, color:"#06B6D4", transition:"color .2s" }}
                      onMouseEnter={e => (e.currentTarget as HTMLElement).style.color="#F8FAFC"}
                      onMouseLeave={e => (e.currentTarget as HTMLElement).style.color="#06B6D4"}
                    ><GH size={12}/> View Project</a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {modal && <Modal project={modal} onClose={() => setModal(null)}/>}
      </AnimatePresence>
    </>
  );
}
