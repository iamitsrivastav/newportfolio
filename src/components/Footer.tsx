"use client";
import { personal } from "@/data/personal";

const DISPLAY: React.CSSProperties = { fontFamily:"var(--font-display), system-ui, sans-serif" };
const MONO: React.CSSProperties    = { fontFamily:"var(--font-mono), monospace" };

const LI = () => <svg viewBox="0 0 24 24" fill="currentColor" style={{width:14,height:14}}><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>;
const GH = () => <svg viewBox="0 0 24 24" fill="currentColor" style={{width:14,height:14}}><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"/></svg>;
const ML = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} style={{width:14,height:14}}><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>;

const iconBtn: React.CSSProperties = {
  width:32, height:32, borderRadius:8,
  border:"1px solid rgba(255,255,255,0.08)",
  background:"rgba(255,255,255,0.03)",
  color:"#475569", display:"flex", alignItems:"center", justifyContent:"center",
  transition:"all .2s", cursor:"pointer", textDecoration:"none",
  flexShrink:0,
};

export default function Footer() {
  return (
    <footer style={{ position:"relative", background:"#040810", borderTop:"1px solid rgba(255,255,255,0.06)", overflow:"hidden" }}>
      {/* Top accent line */}
      <div style={{ position:"absolute", top:0, left:"50%", transform:"translateX(-50%)", width:180, height:1, background:"linear-gradient(90deg,transparent,rgba(21,94,239,0.4),transparent)" }} />

      <div className="wrap" style={{ paddingTop:32, paddingBottom:32 }}>
        <div style={{ display:"flex", flexWrap:"wrap", alignItems:"center", justifyContent:"space-between", gap:20 }}>

          {/* Brand */}
          <div>
            <div style={{ display:"flex", alignItems:"center", gap:9, marginBottom:5 }}>
              <div style={{ width:26, height:26, borderRadius:7, background:"linear-gradient(135deg,#155EEF,#06B6D4)", display:"flex", alignItems:"center", justifyContent:"center", fontWeight:800, fontSize:11, color:"#fff", ...DISPLAY }}>A</div>
              <span style={{ ...DISPLAY, fontWeight:700, fontSize:14, letterSpacing:"-.01em", color:"#F8FAFC" }}>Amit Srivastav</span>
            </div>
            <p style={{ ...MONO, fontSize:10, color:"#334155", letterSpacing:".16em" }}>
              Robotics · AI · IoT · STEM
            </p>
          </div>

          {/* Social icons */}
          <div style={{ display:"flex", gap:7 }}>
            {[
              { href:`mailto:${personal.email}`,   icon:<ML/>, label:"Email"    },
              { href:"https://www.linkedin.com/in/amitshravastav", icon:<LI/>, label:"LinkedIn" },
              { href:personal.github,               icon:<GH/>, label:"GitHub"  },
            ].map(l => (
              <a key={l.label} href={l.href}
                target={l.href.startsWith("mailto")?"_self":"_blank"}
                rel="noopener noreferrer" aria-label={l.label} style={iconBtn}
                onMouseEnter={e => { const el=e.currentTarget as HTMLElement; el.style.color="#06B6D4"; el.style.borderColor="rgba(6,182,212,0.3)"; }}
                onMouseLeave={e => { const el=e.currentTarget as HTMLElement; el.style.color="#475569"; el.style.borderColor="rgba(255,255,255,0.08)"; }}
              >{l.icon}</a>
            ))}
          </div>

          {/* Copyright + top */}
          <div style={{ display:"flex", alignItems:"center", gap:14 }}>
            <p style={{ ...MONO, fontSize:10, color:"#1e293b" }}>© 2026 Amit Srivastav</p>
            <button
              onClick={() => window.scrollTo({ top:0, behavior:"smooth" })}
              aria-label="Back to top" style={{ ...iconBtn, cursor:"pointer" } as React.CSSProperties}
              onMouseEnter={e => { const el=e.currentTarget as HTMLElement; el.style.color="#06B6D4"; el.style.borderColor="rgba(6,182,212,0.3)"; el.style.transform="translateY(-2px)"; }}
              onMouseLeave={e => { const el=e.currentTarget as HTMLElement; el.style.color="#475569"; el.style.borderColor="rgba(255,255,255,0.08)"; el.style.transform="none"; }}
            >
              <svg fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" style={{width:12,height:12}}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
