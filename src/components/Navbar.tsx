"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const DF: React.CSSProperties = { fontFamily:"var(--font-display), system-ui, sans-serif" };
const MO: React.CSSProperties = { fontFamily:"var(--font-mono), monospace" };

const LINKS = ["Home","About","Expertise","Experience","Projects","Impact","Education","Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open,     setOpen]     = useState(false);
  const [active,   setActive]   = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (label: string) => {
    document.getElementById(label.toLowerCase())?.scrollIntoView({ behavior:"smooth" });
    setActive(label.toLowerCase());
    setOpen(false);
  };

  return (
    <>
      <motion.nav
        role="navigation"
        aria-label="Main navigation"
        initial={{ y:-80, opacity:0 }}
        animate={{ y:0,  opacity:1 }}
        transition={{ delay:3.1, duration:.58, ease:"easeOut" }}
        style={{
          position:"fixed", top:14, left:"50%",
          transform:"translateX(-50%)",
          zIndex:100,
          /* Never wider than viewport minus safe margins */
          width:"min(1060px, calc(100vw - 24px))",
          borderRadius:14, padding:"10px 14px",
          display:"flex", alignItems:"center",
          justifyContent:"space-between", gap:6,
          background: scrolled ? "rgba(7,13,24,0.92)" : "rgba(17,25,40,0.55)",
          border:`1px solid ${scrolled ? "rgba(255,255,255,0.10)" : "rgba(255,255,255,0.06)"}`,
          backdropFilter:"blur(20px)", WebkitBackdropFilter:"blur(20px)",
          boxShadow: scrolled ? "0 4px 24px rgba(0,0,0,0.40)" : "none",
          transition:"all .4s ease",
        }}
      >
        {/* ── Logo ── */}
        <button
          onClick={() => go("Home")}
          aria-label="Go to top"
          style={{ display:"flex", alignItems:"center", gap:7, background:"none", border:"none",
                   cursor:"pointer", flexShrink:0, outline:"none" }}
        >
          <div style={{ width:28, height:28, borderRadius:7,
                        background:"linear-gradient(135deg,#155EEF,#06B6D4)",
                        display:"flex", alignItems:"center", justifyContent:"center",
                        fontWeight:800, fontSize:12, color:"#fff", ...DF }}>A</div>
          <span style={{ ...DF, fontWeight:700, fontSize:13, letterSpacing:"-.01em", color:"#F8FAFC" }}>
            Amit<span style={{ color:"#155EEF" }}>.</span>
          </span>
        </button>

        {/* ── Desktop links (hidden below 1000px) ── */}
        <div className="nav-links"
          style={{ display:"flex", alignItems:"center", gap:0, flex:1,
                   justifyContent:"center", overflow:"hidden" }}>
          {LINKS.map(l => {
            const isA = active === l.toLowerCase();
            return (
              <button
                key={l}
                onClick={() => go(l)}
                aria-current={isA ? "page" : undefined}
                style={{
                  position:"relative", padding:"7px 8px",
                  ...DF, fontSize:11.5, fontWeight:500,
                  background:"none", border:"none", cursor:"pointer",
                  color: isA ? "#F8FAFC" : "#718096",
                  borderRadius:8, transition:"color .2s", whiteSpace:"nowrap",
                  outline:"none",
                }}
                onFocus={e  => { (e.currentTarget as HTMLElement).style.color="#B8C4D6"; }}
                onBlur={e   => { (e.currentTarget as HTMLElement).style.color= isA ? "#F8FAFC" : "#718096"; }}
                onMouseEnter={e => { if (!isA) (e.currentTarget as HTMLElement).style.color="#B8C4D6"; }}
                onMouseLeave={e => { if (!isA) (e.currentTarget as HTMLElement).style.color="#718096"; }}
              >
                {isA && (
                  <motion.div layoutId="nav-pill"
                    style={{ position:"absolute", inset:0, borderRadius:8,
                             background:"rgba(21,94,239,0.13)",
                             border:"1px solid rgba(21,94,239,0.24)" }}
                    transition={{ type:"spring", bounce:.12, duration:.38 }}
                  />
                )}
                <span style={{ position:"relative", zIndex:1 }}>{l}</span>
              </button>
            );
          })}
        </div>

        {/* ── Resume button + hamburger ── */}
        <div style={{ display:"flex", alignItems:"center", gap:8, flexShrink:0 }}>
          <a
            href="mailto:iamitsrivastav7@gmail.com"
            className="nav-resume btn btn-p"
            style={{ padding:"7px 14px", fontSize:11, letterSpacing:".08em",
                     borderRadius:9, textDecoration:"none" }}
            aria-label="Contact me by email"
          >
            Contact
          </a>
          <button
            onClick={() => setOpen(o => !o)}
            className="nav-burger"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            style={{ background:"none", border:"none", cursor:"pointer",
                     display:"flex", flexDirection:"column", gap:4.5, padding:4,
                     outline:"none" }}
          >
            {[0,1,2].map(i => (
              <span key={i} style={{
                display:"block", width:18, height:1.5, background:"#94a3b8", borderRadius:2,
                transform: open
                  ? (i===0 ? "rotate(45deg) translate(4px,4px)"
                  : i===1 ? "scaleX(0)"
                  : "rotate(-45deg) translate(4px,-4px)")
                  : "none",
                opacity: i===1 && open ? 0 : 1,
                transition:"transform .24s, opacity .24s",
              }} />
            ))}
          </button>
        </div>
      </motion.nav>

      {/* ── Mobile / tablet drawer ── */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-label="Navigation menu"
            initial={{ opacity:0, y:-12, scale:.97 }}
            animate={{ opacity:1, y:0,   scale:1 }}
            exit={{    opacity:0, y:-12, scale:.97 }}
            transition={{ duration:.18 }}
            style={{
              position:"fixed", top:70, left:12, right:12, zIndex:99,
              borderRadius:14, padding:14,
              background:"rgba(7,13,24,0.97)",
              border:"1px solid rgba(255,255,255,0.09)",
              backdropFilter:"blur(24px)", WebkitBackdropFilter:"blur(24px)",
            }}
          >
            <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:5, marginBottom:10 }}>
              {LINKS.map(l => (
                <button
                  key={l}
                  onClick={() => go(l)}
                  aria-current={active===l.toLowerCase() ? "page" : undefined}
                  style={{
                    textAlign:"left", padding:"11px 12px",
                    ...DF, fontSize:13, fontWeight:500,
                    color: active===l.toLowerCase() ? "#F8FAFC" : "#718096",
                    background: active===l.toLowerCase()
                      ? "rgba(21,94,239,0.12)" : "none",
                    border:"none", cursor:"pointer", borderRadius:9,
                    transition:"all .15s", outline:"none",
                  }}
                  onMouseEnter={e => { const el=e.currentTarget as HTMLElement; el.style.background="rgba(21,94,239,0.09)"; el.style.color="#F8FAFC"; }}
                  onMouseLeave={e => { const el=e.currentTarget as HTMLElement;
                    el.style.background = active===l.toLowerCase() ? "rgba(21,94,239,0.12)" : "none";
                    el.style.color      = active===l.toLowerCase() ? "#F8FAFC" : "#718096";
                  }}
                >{l}</button>
              ))}
            </div>
            <div style={{ borderTop:"1px solid rgba(255,255,255,0.07)", paddingTop:10 }}>
              <a
                href="mailto:iamitsrivastav7@gmail.com"
                className="btn btn-p"
                style={{ width:"100%", display:"flex", justifyContent:"center",
                         padding:"11px 0", fontSize:12, textDecoration:"none" }}
                onClick={() => setOpen(false)}
              >
                Get in Touch
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Responsive breakpoints ── */}
      <style>{`
        /* Show hamburger + hide desktop links below 1000px */
        @media (min-width: 1000px) { .nav-burger  { display: none !important; } }
        @media (max-width:  999px) { .nav-links   { display: none !important; }
                                     .nav-resume  { display: none !important; } }

        /* Focus-visible ring for keyboard navigation */
        nav button:focus-visible,
        nav a:focus-visible {
          outline: 2px solid #155EEF;
          outline-offset: 2px;
          border-radius: 6px;
        }
      `}</style>
    </>
  );
}
