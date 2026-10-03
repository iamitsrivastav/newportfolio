"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const DISPLAY: React.CSSProperties = { fontFamily:"var(--font-display), system-ui, sans-serif" };
const MONO: React.CSSProperties    = { fontFamily:"var(--font-mono), monospace" };

const cards = [
  { num:"01", icon:"⚙️", color:"#155EEF",
    label:"Engineer",
    title:"B.Tech Information Technology",
    sub:"Rajkiya Engineering College, Bijnor",
    detail:"2021 – 2024  ·  CGPA 7.4" },
  { num:"02", icon:"⚡", color:"#06B6D4",
    label:"Electronics",
    title:"Diploma in Electronics Engineering",
    sub:"IERT, Prayagraj",
    detail:"2018 – 2021  ·  78.28%" },
  { num:"03", icon:"🎓", color:"#38BDF8",
    label:"Educator",
    title:"1000+ Students Mentored",
    sub:"Robotics · AI · STEM · Innovation",
    detail:"Across 3 organizations" },
];

const skills = [
  "Robotics","AI","IoT","OpenCV","YOLO",
  "Python","Arduino","Circuit Design",
  "STEM Workshops","Curriculum Design",
  "Innovation Camps","Hardware Assembly",
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once:true, margin:"-80px" });
  const a = (d=0) => ({ initial:{ opacity:0, y:24 }, animate:inView?{ opacity:1, y:0 }:{}, transition:{ duration:.58, delay:d } });

  return (
    <section id="about" className="section" style={{ background:"#070d18" }} ref={ref}>
      <div style={{ position:"absolute", top:0, right:0, width:320, height:320, borderRadius:"50%", background:"rgba(21,94,239,0.035)", filter:"blur(80px)", pointerEvents:"none" }} />
      <div style={{ position:"absolute", bottom:0, left:0, width:240, height:240, borderRadius:"50%", background:"rgba(6,182,212,0.03)", filter:"blur(64px)", pointerEvents:"none" }} />
      <div className="bg-dots" style={{ position:"absolute", inset:0, opacity:.22, pointerEvents:"none" }} />

      <div className="wrap">
        <div className="grid-2" style={{ alignItems:"start" }}>

          {/* LEFT */}
          <div>
            <motion.p {...a(0)} className="label">About Me</motion.p>

            <motion.h2 {...a(.08)} style={{ ...DISPLAY, fontWeight:700, fontSize:"clamp(2rem,3.8vw,3.2rem)", lineHeight:1.1, marginBottom:24, letterSpacing:"-.02em" }}>
              <span style={{ display:"block", color:"#F8FAFC" }}>I build technology.</span>
              <span className="tg" style={{ display:"block" }}>I teach technology.</span>
              <span style={{ display:"block", color:"#F8FAFC" }}>I inspire innovation.</span>
            </motion.h2>

            <motion.p {...a(.18)} style={{ color:"#B8C4D6", fontSize:"clamp(.95rem,1.2vw,1.05rem)", lineHeight:1.78, fontWeight:400, marginBottom:28, maxWidth:500 }}>
              Robotics &amp; STEM professional with hands-on experience across electronics, IoT,
              artificial intelligence, and coding education. I design curriculum, build real-world
              projects, and mentor students through innovation camps and robotics competitions.
            </motion.p>

            {/* Skill tags — muted, interactive */}
            <motion.div {...a(.28)} style={{ display:"flex", flexWrap:"wrap", gap:7 }}>
              {skills.map((s, i) => (
                <motion.span key={s}
                  initial={{ opacity:0 }} animate={inView?{ opacity:1 }:{}}
                  transition={{ delay:.3+i*.04 }}
                  style={{
                    ...MONO, padding:"5px 12px", borderRadius:7,
                    fontSize:11, letterSpacing:".08em", color:"#718096",
                    background:"rgba(255,255,255,0.04)", border:"1px solid rgba(255,255,255,0.07)",
                    cursor:"default", transition:"all .2s",
                  }}
                  onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.color="#06B6D4"; el.style.borderColor="rgba(6,182,212,0.35)"; }}
                  onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.color="#718096"; el.style.borderColor="rgba(255,255,255,0.07)"; }}
                >{s}</motion.span>
              ))}
            </motion.div>
          </div>

          {/* RIGHT — identity cards */}
          <div style={{ display:"flex", flexDirection:"column", gap:12 }}>
            {cards.map((c, i) => (
              <motion.div key={c.num}
                initial={{ opacity:0, x:32 }} animate={inView?{ opacity:1, x:0 }:{}}
                transition={{ duration:.56, delay:.14+i*.14 }}
                className="card card-hover"
                style={{ padding:"18px 20px" }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.borderColor=`${c.color}28`}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.borderColor="rgba(255,255,255,0.08)"}
              >
                <div style={{ display:"flex", alignItems:"center", gap:14 }}>
                  {/* Icon */}
                  <div style={{
                    width:42, height:42, borderRadius:11, flexShrink:0,
                    display:"flex", alignItems:"center", justifyContent:"center", fontSize:18,
                    background:`${c.color}12`, border:`1px solid ${c.color}22`,
                  }}>{c.icon}</div>

                  {/* Content */}
                  <div style={{ flex:1, minWidth:0 }}>
                    <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", gap:8, marginBottom:5 }}>
                      <span style={{ ...MONO, fontSize:10, fontWeight:600, letterSpacing:".2em", color:c.color, textTransform:"uppercase" }}>{c.label}</span>
                      <span style={{ ...MONO, fontSize:10, color:"#2d3748" }}>{c.num}</span>
                    </div>
                    <p style={{ ...DISPLAY, fontWeight:600, fontSize:14, color:"#F8FAFC", lineHeight:1.3, marginBottom:2 }}>{c.title}</p>
                    <p style={{ fontSize:12, color:"#718096", marginBottom:4, lineHeight:1.4 }}>{c.sub}</p>
                    <p style={{ ...MONO, fontSize:11, color:`${c.color}bb` }}>{c.detail}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
