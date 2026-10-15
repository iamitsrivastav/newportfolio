"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const DF: React.CSSProperties = { fontFamily:"var(--font-display), system-ui, sans-serif" };
const MO: React.CSSProperties = { fontFamily:"var(--font-mono), monospace" };

const cards = [
  { num:"01", icon:"⚙️", color:"#155EEF",
    label:"Engineer",
    title:"B.Tech — Information Technology",
    sub:"Rajkiya Engineering College, Bijnor",
    detail:"2021 – 2024  ·  CGPA 7.4" },
  { num:"02", icon:"⚡", color:"#06B6D4",
    label:"Electronics",
    title:"Diploma — Electronics Engineering",
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
  const a = (d=0) => ({
    initial:{ opacity:0, y:24 },
    animate: inView ? { opacity:1, y:0 } : {},
    transition:{ duration:.58, delay:d },
  });

  return (
    <section id="about" className="section" style={{ background:"#070d18" }} ref={ref}>
      {/* Ambient glows */}
      <div style={{ position:"absolute", top:0, right:0, width:320, height:320, borderRadius:"50%",
                    background:"rgba(21,94,239,0.035)", filter:"blur(80px)", pointerEvents:"none" }} />
      <div style={{ position:"absolute", bottom:0, left:0, width:240, height:240, borderRadius:"50%",
                    background:"rgba(6,182,212,0.03)", filter:"blur(64px)", pointerEvents:"none" }} />
      <div className="bg-dots" style={{ position:"absolute", inset:0, opacity:.22, pointerEvents:"none" }} />

      <div className="wrap">

        {/* ── Top row: portrait + text ── */}
        <div style={{
          display:"grid",
          gridTemplateColumns:"auto 1fr",
          gap:"clamp(28px,4vw,56px)",
          alignItems:"start",
          marginBottom:40,
        }} className="about-top">

          {/* Portrait */}
          <motion.div
            initial={{ opacity:0, scale:.92 }}
            animate={inView ? { opacity:1, scale:1 } : {}}
            transition={{ duration:.7, delay:.06 }}
            style={{ flexShrink:0, width:"clamp(140px,18vw,220px)" }}
          >
            <div style={{
              position:"relative",
              borderRadius:20,
              overflow:"hidden",
              background:"rgba(17,25,40,0.8)",
              border:"1px solid rgba(21,94,239,0.22)",
              boxShadow:"0 8px 40px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.06)",
              aspectRatio:"3/4",
            }}>
              {/* Blue accent top bar */}
              <div style={{
                position:"absolute", top:0, left:0, right:0, height:2, zIndex:2,
                background:"linear-gradient(90deg, #155EEF, #06B6D4, transparent)",
              }} />

              <Image
                src="/images/amit-portrait.jpg"
                alt="Amit Srivastav — Robotics and STEM Trainer"
                fill
                sizes="(max-width: 768px) 140px, (max-width: 1024px) 180px, 220px"
                style={{ objectFit:"cover", objectPosition:"center top" }}
                priority
              />

              {/* Subtle blue vignette overlay */}
              <div style={{
                position:"absolute", inset:0,
                background:"linear-gradient(to top, rgba(7,13,24,0.35) 0%, transparent 50%)",
                pointerEvents:"none",
              }} />

              {/* Availability dot */}
              <div style={{
                position:"absolute", bottom:10, left:"50%", transform:"translateX(-50%)",
                display:"flex", alignItems:"center", gap:6,
                padding:"4px 10px", borderRadius:999,
                background:"rgba(7,13,24,0.85)",
                border:"1px solid rgba(6,182,212,0.3)",
                backdropFilter:"blur(8px)",
                whiteSpace:"nowrap",
              }}>
                <span style={{ position:"relative", display:"flex", width:6, height:6 }}>
                  <span className="a-ping" style={{ position:"absolute", inset:0, borderRadius:"50%",
                                                     background:"#06B6D4", opacity:.65 }} />
                  <span style={{ position:"relative", width:6, height:6, borderRadius:"50%",
                                 background:"#06B6D4" }} />
                </span>
                <span style={{ ...MO, fontSize:9, color:"#06B6D4", letterSpacing:".18em" }}>
                  OPEN TO WORK
                </span>
              </div>
            </div>

            {/* Social links below portrait */}
            <div style={{ display:"flex", gap:8, marginTop:10, justifyContent:"center" }}>
              {[
                { href:"https://github.com/iamitsrivastav",        label:"GitHub",    icon:"GH" },
                { href:"https://www.linkedin.com/in/amitshravastav", label:"LinkedIn", icon:"LI" },
              ].map(s => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                  aria-label={s.label}
                  style={{
                    ...MO, fontSize:10, color:"#475569", letterSpacing:".08em",
                    padding:"5px 10px", borderRadius:7,
                    background:"rgba(255,255,255,0.04)",
                    border:"1px solid rgba(255,255,255,0.07)",
                    transition:"all .2s", flex:1, textAlign:"center",
                  }}
                  onMouseEnter={e => { const el=e.currentTarget as HTMLElement; el.style.color="#06B6D4"; el.style.borderColor="rgba(6,182,212,0.3)"; }}
                  onMouseLeave={e => { const el=e.currentTarget as HTMLElement; el.style.color="#475569"; el.style.borderColor="rgba(255,255,255,0.07)"; }}
                >{s.icon}</a>
              ))}
            </div>
          </motion.div>

          {/* Text content */}
          <div>
            <motion.p {...a(0)} className="label">About Me</motion.p>

            <motion.h2 {...a(.08)} style={{
              ...DF, fontWeight:700,
              fontSize:"clamp(1.9rem,3.5vw,3rem)",
              lineHeight:1.1, marginBottom:20, letterSpacing:"-.02em",
            }}>
              <span style={{ display:"block", color:"#F8FAFC" }}>I build technology.</span>
              <span className="tg" style={{ display:"block" }}>I teach technology.</span>
              <span style={{ display:"block", color:"#F8FAFC" }}>I inspire innovation.</span>
            </motion.h2>

            <motion.p {...a(.18)} style={{
              color:"#B8C4D6", fontSize:"clamp(.93rem,1.1vw,1.02rem)",
              lineHeight:1.78, fontWeight:400, marginBottom:24, maxWidth:520,
            }}>
              Robotics &amp; STEM professional with hands-on experience across electronics, IoT,
              artificial intelligence, and coding education. I design curriculum, build real-world
              projects, and mentor students through innovation camps and robotics competitions.
            </motion.p>

            {/* Skill tags */}
            <motion.div {...a(.28)} style={{ display:"flex", flexWrap:"wrap", gap:7 }}>
              {skills.map((s, i) => (
                <motion.span key={s}
                  initial={{ opacity:0 }} animate={inView ? { opacity:1 } : {}}
                  transition={{ delay:.3+i*.04 }}
                  style={{
                    ...MO, padding:"5px 12px", borderRadius:7,
                    fontSize:11, letterSpacing:".08em", color:"#718096",
                    background:"rgba(255,255,255,0.04)", border:"1px solid rgba(255,255,255,0.07)",
                    cursor:"default", transition:"all .2s",
                  }}
                  onMouseEnter={e => { const el=e.currentTarget as HTMLElement; el.style.color="#06B6D4"; el.style.borderColor="rgba(6,182,212,0.35)"; }}
                  onMouseLeave={e => { const el=e.currentTarget as HTMLElement; el.style.color="#718096"; el.style.borderColor="rgba(255,255,255,0.07)"; }}
                >{s}</motion.span>
              ))}
            </motion.div>
          </div>
        </div>

        {/* ── Bottom row: identity cards ── */}
        <div style={{
          display:"grid",
          gridTemplateColumns:"repeat(auto-fit, minmax(240px,1fr))",
          gap:14,
        }}>
          {cards.map((c, i) => (
            <motion.div key={c.num}
              initial={{ opacity:0, y:24 }} animate={inView ? { opacity:1, y:0 } : {}}
              transition={{ duration:.55, delay:.36+i*.12 }}
              className="card card-hover"
              style={{ padding:"18px 20px" }}
              onMouseEnter={e => (e.currentTarget as HTMLElement).style.borderColor=`${c.color}28`}
              onMouseLeave={e => (e.currentTarget as HTMLElement).style.borderColor="rgba(255,255,255,0.08)"}
            >
              <div style={{ display:"flex", alignItems:"center", gap:14 }}>
                <div style={{
                  width:42, height:42, borderRadius:11, flexShrink:0,
                  display:"flex", alignItems:"center", justifyContent:"center", fontSize:18,
                  background:`${c.color}12`, border:`1px solid ${c.color}22`,
                }}>{c.icon}</div>
                <div style={{ flex:1, minWidth:0 }}>
                  <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", gap:8, marginBottom:5 }}>
                    <span style={{ ...MO, fontSize:10, fontWeight:600, letterSpacing:".2em", color:c.color, textTransform:"uppercase" }}>{c.label}</span>
                    <span style={{ ...MO, fontSize:10, color:"#2d3748" }}>{c.num}</span>
                  </div>
                  <p style={{ ...DF, fontWeight:600, fontSize:14, color:"#F8FAFC", lineHeight:1.3, marginBottom:2 }}>{c.title}</p>
                  <p style={{ fontSize:12, color:"#718096", marginBottom:4, lineHeight:1.4 }}>{c.sub}</p>
                  <p style={{ ...MO, fontSize:11, color:`${c.color}bb` }}>{c.detail}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Responsive: stack portrait above text on small screens */}
      <style>{`
        @media (max-width: 640px) {
          .about-top {
            grid-template-columns: 1fr !important;
          }
          .about-top > div:first-child {
            width: 160px !important;
            margin: 0 auto;
          }
        }
      `}</style>
    </section>
  );
}
