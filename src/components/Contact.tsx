"use client";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { personal } from "@/data/personal";

const DISPLAY: React.CSSProperties = { fontFamily:"var(--font-display), system-ui, sans-serif" };
const MONO: React.CSSProperties    = { fontFamily:"var(--font-mono), monospace" };

const LI = () => <svg viewBox="0 0 24 24" fill="currentColor" style={{ width:17,height:17 }}><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>;
const GH = () => <svg viewBox="0 0 24 24" fill="currentColor" style={{ width:17,height:17 }}><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"/></svg>;

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once:true, margin:"-80px" });
  const [copied, setCopied] = useState<string|null>(null);

  const copy = (val:string, key:string) => { navigator.clipboard.writeText(val); setCopied(key); setTimeout(()=>setCopied(null),2000); };

  const items = [
    { key:"email",    label:"Email",    val:personal.email,    act:() => window.open(`mailto:${personal.email}`),
      icon:<svg style={{width:16,height:16}} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg> },
    { key:"phone",    label:"Phone",    val:personal.phone,    act:() => copy(personal.phone,"phone"),
      icon:<svg style={{width:16,height:16}} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg> },
    { key:"location", label:"Location", val:personal.location, act:()=>{},
      icon:<svg style={{width:16,height:16}} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg> },
  ];

  return (
    <section id="contact" className="section" ref={ref} style={{ background:"#06090f" }}>
      <div className="bg-dots" style={{ position:"absolute", inset:0, opacity:.15, pointerEvents:"none" }} />
      <div style={{ position:"absolute", bottom:0, left:"50%", transform:"translateX(-50%)", width:500, height:240, borderRadius:"50%", background:"rgba(21,94,239,0.05)", filter:"blur(64px)", pointerEvents:"none" }} />

      <div className="wrap" style={{ position:"relative", zIndex:1 }}>

        {/* Headline — proportionate */}
        <motion.div
          initial={{ opacity:0, y:28 }} animate={inView?{ opacity:1, y:0 }:{}} transition={{ duration:.7 }}
          style={{ textAlign:"center", marginBottom:56 }}
        >
          <p className="label" style={{ justifyContent:"center" }}>Get in Touch</p>
          <h2 style={{
            ...DISPLAY, fontWeight:700, letterSpacing:"-.02em",
            fontSize:"clamp(2.4rem,5vw,4.2rem)",
            lineHeight:.95, margin:"0 0 14px",
          }}>
            <span style={{ display:"block", color:"#F8FAFC" }}>Let&apos;s Build</span>
            <span className="tg" style={{ display:"block" }}>Something.</span>
          </h2>
          <p style={{ color:"#718096", fontSize:15, fontWeight:400, maxWidth:380, margin:"0 auto", lineHeight:1.65 }}>
            Have an idea, opportunity or collaboration in mind?
          </p>
        </motion.div>

        <div className="grid-2" style={{ alignItems:"start", gap:"clamp(24px,4vw,56px)" }}>

          {/* Left — contact details */}
          <motion.div
            initial={{ opacity:0, x:-28 }} animate={inView?{ opacity:1, x:0 }:{}} transition={{ duration:.65, delay:.18 }}
            style={{ display:"flex", flexDirection:"column", gap:10 }}
          >
            {items.map(item => (
              <button key={item.key} onClick={item.act}
                className="card card-hover"
                style={{ display:"flex", alignItems:"center", gap:14, padding:"14px 18px", textAlign:"left", cursor:item.key==="location"?"default":"pointer", width:"100%" }}
              >
                <div style={{ width:38, height:38, borderRadius:10, flexShrink:0, display:"flex", alignItems:"center", justifyContent:"center", background:"rgba(21,94,239,0.08)", border:"1px solid rgba(21,94,239,0.16)", color:"#155EEF" }}>{item.icon}</div>
                <div style={{ flex:1, minWidth:0 }}>
                  <p style={{ ...MONO, fontSize:10, color:"#475569", marginBottom:2, letterSpacing:".12em" }}>{item.label}</p>
                  <p style={{ fontWeight:500, fontSize:13, color:"#B8C4D6", overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap" }}>{item.val}</p>
                </div>
                {item.key!=="location" && (
                  <span style={{ ...MONO, fontSize:10, color:"#2d3748", flexShrink:0 }}>
                    {copied===item.key ? <span style={{ color:"#06B6D4" }}>COPIED</span> : "→"}
                  </span>
                )}
              </button>
            ))}
          </motion.div>

          {/* Right — CTAs */}
          <motion.div
            initial={{ opacity:0, x:28 }} animate={inView?{ opacity:1, x:0 }:{}} transition={{ duration:.65, delay:.26 }}
            style={{ display:"flex", flexDirection:"column", gap:12 }}
          >
            <a href={`mailto:${personal.email}`} className="btn btn-p"
              style={{ justifyContent:"center", padding:"15px 28px", fontSize:13, letterSpacing:".08em" }}>
              <svg style={{ width:16,height:16 }} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
              Email Me
            </a>

            <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:10 }}>
              <a href="https://www.linkedin.com/in/amitshravastav" target="_blank" rel="noopener noreferrer"
                className="btn btn-s" style={{ justifyContent:"center", fontSize:12, letterSpacing:".07em" }}>
                <LI/> LinkedIn
              </a>
              <a href={personal.github} target="_blank" rel="noopener noreferrer"
                className="btn btn-s" style={{ justifyContent:"center", fontSize:12, letterSpacing:".07em" }}>
                <GH/> GitHub
              </a>
            </div>

            {/* Status */}
            <div className="card" style={{ padding:"16px 18px" }}>
              <div style={{ display:"flex", alignItems:"center", gap:8, marginBottom:7 }}>
                <span style={{ position:"relative", display:"flex", width:8,height:8 }}>
                  <span className="a-ping" style={{ position:"absolute", inset:0, borderRadius:"50%", background:"#06B6D4", opacity:.6 }}/>
                  <span style={{ position:"relative", width:8,height:8, borderRadius:"50%", background:"#06B6D4", display:"inline-block" }}/>
                </span>
                <span style={{ ...MONO, fontSize:10, fontWeight:700, letterSpacing:".2em", color:"#06B6D4" }}>AVAILABLE NOW</span>
              </div>
              <p style={{ fontSize:13, color:"#718096", lineHeight:1.68, margin:0 }}>
                Open to Robotics, AI, STEM Education and technology training opportunities. Based in Prayagraj, India.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
