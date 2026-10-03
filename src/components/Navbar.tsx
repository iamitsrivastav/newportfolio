"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const DISPLAY: React.CSSProperties = { fontFamily:"var(--font-display), system-ui, sans-serif" };
const MONO: React.CSSProperties    = { fontFamily:"var(--font-mono), monospace" };

const LINKS = ["Home","About","Expertise","Experience","Projects","Impact","Education","Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const go = (label: string) => {
    document.getElementById(label.toLowerCase())?.scrollIntoView({ behavior:"smooth" });
    setActive(label.toLowerCase());
    setOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y:-80, opacity:0 }}
        animate={{ y:0, opacity:1 }}
        transition={{ delay:3.1, duration:.58, ease:"easeOut" }}
        style={{
          position:"fixed", top:14, left:"50%", transform:"translateX(-50%)",
          zIndex:100,
          width:"min(1080px, calc(100vw - 28px))",
          borderRadius:14, padding:"10px 16px",
          display:"flex", alignItems:"center", justifyContent:"space-between", gap:10,
          background: scrolled ? "rgba(7,13,24,0.9)" : "rgba(255,255,255,0.025)",
          border:`1px solid ${scrolled ? "rgba(255,255,255,0.1)" : "rgba(255,255,255,0.06)"}`,
          backdropFilter:"blur(20px)", WebkitBackdropFilter:"blur(20px)",
          boxShadow: scrolled ? "0 4px 24px rgba(0,0,0,0.35)" : "none",
          transition:"all .4s ease",
        }}
      >
        {/* Logo */}
        <button onClick={() => go("Home")}
          style={{ display:"flex", alignItems:"center", gap:8, background:"none", border:"none", cursor:"pointer", flexShrink:0 }}>
          <div style={{ width:28, height:28, borderRadius:7, background:"linear-gradient(135deg,#155EEF,#06B6D4)", display:"flex", alignItems:"center", justifyContent:"center", fontWeight:800, fontSize:12, color:"#fff", ...DISPLAY }}>A</div>
          <span style={{ ...DISPLAY, fontWeight:700, fontSize:13, letterSpacing:"-.01em", color:"#F8FAFC" }}>
            Amit<span style={{ color:"#155EEF" }}>.</span>
          </span>
        </button>

        {/* Desktop links */}
        <div className="nav-links" style={{ display:"flex", alignItems:"center", gap:1, flex:1, justifyContent:"center" }}>
          {LINKS.map(l => {
            const isA = active === l.toLowerCase();
            return (
              <button key={l} onClick={() => go(l)}
                style={{
                  position:"relative", padding:"7px 10px",
                  ...DISPLAY, fontSize:12, fontWeight:500,
                  background:"none", border:"none", cursor:"pointer",
                  color: isA ? "#F8FAFC" : "#718096",
                  borderRadius:8, transition:"color .2s", whiteSpace:"nowrap",
                }}
                onMouseEnter={e => { if (!isA) (e.currentTarget as HTMLElement).style.color="#B8C4D6"; }}
                onMouseLeave={e => { if (!isA) (e.currentTarget as HTMLElement).style.color="#718096"; }}
              >
                {isA && (
                  <motion.div layoutId="nav-pill"
                    style={{ position:"absolute", inset:0, borderRadius:8, background:"rgba(21,94,239,0.13)", border:"1px solid rgba(21,94,239,0.24)" }}
                    transition={{ type:"spring", bounce:.12, duration:.38 }}
                  />
                )}
                <span style={{ position:"relative", zIndex:1 }}>{l}</span>
              </button>
            );
          })}
        </div>

        {/* Resume + hamburger */}
        <div style={{ display:"flex", alignItems:"center", gap:8, flexShrink:0 }}>
          <button onClick={() => go("Contact")} className="nav-resume btn btn-p"
            style={{ padding:"7px 14px", fontSize:11, letterSpacing:".08em", borderRadius:9 }}>
            Resume
          </button>
          <button onClick={() => setOpen(!open)} className="nav-burger"
            style={{ background:"none", border:"none", cursor:"pointer", display:"flex", flexDirection:"column", gap:4, padding:4 }}
            aria-label="Menu">
            {[0,1,2].map(i => (
              <span key={i} style={{
                display:"block", width:17, height:1.5, background:"#718096", borderRadius:2,
                transform: open ? (i===0?"rotate(45deg) translate(4px,4px)":i===1?"scaleX(0)":"rotate(-45deg) translate(4px,-4px)") : "none",
                opacity: i===1 && open ? 0 : 1,
                transition:"transform .24s, opacity .24s",
              }}/>
            ))}
          </button>
        </div>
      </motion.nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity:0, y:-10, scale:.97 }}
            animate={{ opacity:1, y:0, scale:1 }}
            exit={{ opacity:0, y:-10, scale:.97 }}
            transition={{ duration:.18 }}
            style={{
              position:"fixed", top:68, left:14, right:14, zIndex:99,
              borderRadius:14, padding:14,
              background:"rgba(7,13,24,0.97)", border:"1px solid rgba(255,255,255,0.09)",
              backdropFilter:"blur(24px)", WebkitBackdropFilter:"blur(24px)",
            }}
          >
            <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:5, marginBottom:10 }}>
              {LINKS.map(l => (
                <button key={l} onClick={() => go(l)}
                  style={{ textAlign:"left", padding:"10px 12px", ...DISPLAY, fontSize:13, fontWeight:500, color:"#718096", background:"none", border:"none", cursor:"pointer", borderRadius:9, transition:"all .15s" }}
                  onMouseEnter={e => { const el=e.currentTarget as HTMLElement; el.style.background="rgba(21,94,239,0.09)"; el.style.color="#F8FAFC"; }}
                  onMouseLeave={e => { const el=e.currentTarget as HTMLElement; el.style.background="none"; el.style.color="#718096"; }}
                >{l}</button>
              ))}
            </div>
            <div style={{ borderTop:"1px solid rgba(255,255,255,0.06)", paddingTop:10 }}>
              <button onClick={() => go("Contact")} className="btn btn-p" style={{ width:"100%", justifyContent:"center", padding:"11px 0", fontSize:12 }}>
                Download Resume
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (min-width: 860px) { .nav-burger { display: none !important; } }
        @media (max-width: 859px) { .nav-links { display: none !important; } .nav-resume { display: none !important; } }
      `}</style>
    </>
  );
}
