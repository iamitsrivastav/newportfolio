"use client";

interface Props { mouseX: number; mouseY: number }

export default function HeroVisual({ mouseX, mouseY }: Props) {
  const tiltX = (mouseY - 0.5) * 10;
  const tiltY = (mouseX - 0.5) * -10;

  const particles = [
    { x:12, y:18, s:2, d:0    }, { x:82, y:12, s:1.5, d:1   },
    { x:90, y:68, s:2,   d:2  }, { x:8,  y:80, s:1.5, d:.5  },
    { x:50, y:4,  s:1,   d:1.5}, { x:4,  y:44, s:2,   d:3   },
    { x:95, y:38, s:1,   d:2.5}, { x:68, y:92, s:1.5, d:1.8 },
    { x:24, y:94, s:1,   d:.8 }, { x:60, y:6,  s:2,   d:3.5 },
  ];

  return (
    <div style={{ position:"relative", width:"100%", height:"100%", display:"flex", alignItems:"center", justifyContent:"center", perspective:900 }}>

      {/* Ambient glow */}
      <div style={{ position:"absolute", inset:0, display:"flex", alignItems:"center", justifyContent:"center", pointerEvents:"none" }}>
        <div className="a-glow" style={{ width:280, height:280, borderRadius:"50%", background:"rgba(21,94,239,0.09)", filter:"blur(48px)" }}/>
      </div>
      <div style={{ position:"absolute", inset:0, display:"flex", alignItems:"center", justifyContent:"center", pointerEvents:"none" }}>
        <div className="a-glow" style={{ width:180, height:180, borderRadius:"50%", background:"rgba(6,182,212,0.12)", filter:"blur(32px)", animationDelay:"1.2s" }}/>
      </div>

      {/* Orbit rings */}
      <div style={{ position:"absolute", inset:0, display:"flex", alignItems:"center", justifyContent:"center", pointerEvents:"none" }}>
        {/* Ring 1 */}
        <div className="a-cw" style={{ position:"absolute", width:300, height:300, borderRadius:"50%", border:"1px solid rgba(21,94,239,0.18)" }}>
          <div style={{ position:"absolute", top:-6, left:"50%", transform:"translateX(-50%)", width:12, height:12, borderRadius:"50%", background:"#155EEF", boxShadow:"0 0 12px #155EEF" }}/>
          <div style={{ position:"absolute", bottom:-4, left:"50%", transform:"translateX(-50%)", width:7, height:7, borderRadius:"50%", background:"rgba(6,182,212,0.5)" }}/>
        </div>
        {/* Ring 2 */}
        <div className="a-ccw" style={{ position:"absolute", width:220, height:220, borderRadius:"50%", border:"1px solid rgba(6,182,212,0.14)" }}>
          <div style={{ position:"absolute", top:"50%", right:-5, transform:"translateY(-50%)", width:9, height:9, borderRadius:"50%", background:"rgba(56,189,248,0.65)", boxShadow:"0 0 8px rgba(56,189,248,0.5)" }}/>
        </div>
        {/* Ring 3 */}
        <div className="a-cw" style={{ position:"absolute", width:370, height:370, borderRadius:"50%", border:"1px solid rgba(21,94,239,0.08)", animationDuration:"28s" }}>
          <div style={{ position:"absolute", top:"25%", right:-4, width:7, height:7, borderRadius:"50%", background:"rgba(6,182,212,0.4)" }}/>
        </div>
      </div>

      {/* Main hex core — mouse tilt */}
      <div style={{ position:"relative", zIndex:10, transition:"transform .2s ease-out", transform:`rotateX(${tiltX}deg) rotateY(${tiltY}deg)` }}>
        <div style={{ position:"relative", width:210, height:210 }}>
          {/* Outer glow */}
          <div style={{
            position:"absolute", inset:0, opacity:.28,
            clipPath:"polygon(50% 0%,93% 25%,93% 75%,50% 100%,7% 75%,7% 25%)",
            background:"radial-gradient(ellipse at center,#155EEF,transparent 70%)",
            filter:"blur(8px)",
          }}/>
          {/* Hex face */}
          <div style={{
            position:"absolute", inset:3,
            clipPath:"polygon(50% 0%,93% 25%,93% 75%,50% 100%,7% 75%,7% 25%)",
            background:"linear-gradient(135deg,#0d1829,#070d18)",
            border:"1px solid rgba(21,94,239,0.3)",
          }}/>
          {/* Hex outer border gradient */}
          <div style={{
            position:"absolute", inset:0,
            clipPath:"polygon(50% 0%,93% 25%,93% 75%,50% 100%,7% 75%,7% 25%)",
            background:"linear-gradient(135deg,rgba(21,94,239,0.5),rgba(6,182,212,0.28),rgba(21,94,239,0.18))",
          }}/>
          {/* Inner hex ring */}
          <div style={{
            position:"absolute", inset:28,
            clipPath:"polygon(50% 0%,93% 25%,93% 75%,50% 100%,7% 75%,7% 25%)",
            border:"1px solid rgba(6,182,212,0.22)",
          }}/>

          {/* Center AI eye */}
          <div style={{ position:"absolute", inset:0, display:"flex", alignItems:"center", justifyContent:"center" }}>
            <div style={{ position:"relative" }}>
              {/* Ripple rings */}
              <div className="a-ripple" style={{ position:"absolute", inset:0, borderRadius:"50%", border:"1px solid rgba(21,94,239,0.22)", width:76, height:76 }}/>
              <div className="a-ripple" style={{ position:"absolute", inset:0, borderRadius:"50%", border:"1px solid rgba(21,94,239,0.18)", width:76, height:76, animationDelay:"1.1s" }}/>
              {/* Outer ring */}
              <div className="a-glow" style={{ width:76, height:76, borderRadius:"50%", border:"2px solid rgba(21,94,239,0.5)", display:"flex", alignItems:"center", justifyContent:"center", position:"relative", overflow:"hidden" }}>
                {/* Scan beam */}
                <div style={{ position:"absolute", left:0, right:0, height:1, background:"linear-gradient(90deg,transparent,#38BDF8,transparent)", animation:"scanline 2s ease-in-out infinite", top:"50%" }}/>
                {/* Inner iris */}
                <div style={{ width:46, height:46, borderRadius:"50%", border:"1px solid rgba(6,182,212,0.6)", display:"flex", alignItems:"center", justifyContent:"center", background:"rgba(13,24,41,0.8)" }}>
                  <div style={{ width:18, height:18, borderRadius:"50%", background:"linear-gradient(135deg,#155EEF,#06B6D4)", boxShadow:"0 0 14px rgba(21,94,239,0.8)" }}/>
                </div>
              </div>
              {/* Corner dots */}
              {[{t:"-7px",l:"50%",mt:"-3.5px"},{b:"-7px",l:"50%",mb:"-3.5px"},{l:"-7px",t:"50%",ml:"-3.5px"},{r:"-7px",t:"50%",mr:"-3.5px"}].map((s,i) => (
                <div key={i} style={{ position:"absolute", width:7, height:7, borderRadius:"50%", background:"#06B6D4", boxShadow:"0 0 6px #06B6D4", ...s as React.CSSProperties }}/>
              ))}
            </div>
          </div>

          {/* Hex corner accent dots */}
          {[
            { top:"8%",  left:"26%" }, { top:"8%",  right:"26%" },
            { top:"50%", right:"3%", transform:"translateY(-50%)" },
            { bottom:"8%", right:"26%" }, { bottom:"8%", left:"26%" },
            { top:"50%", left:"3%", transform:"translateY(-50%)" },
          ].map((pos,i) => (
            <div key={i} style={{
              position:"absolute", width:6, height:6, borderRadius:"50%",
              background: i%2===0 ? "#155EEF" : "#06B6D4",
              boxShadow:`0 0 6px ${i%2===0 ? "#155EEF" : "#06B6D4"}`,
              ...pos as React.CSSProperties,
            }}/>
          ))}
        </div>

        {/* Right HUD */}
        <div style={{ position:"absolute", right:-90, top:"50%", transform:"translateY(-50%)", display:"flex", flexDirection:"column", gap:10, fontFamily:"monospace", fontSize:10 }}>
          {[["VISION","ACTIVE","#06B6D4"],["YOLO","v8.0","#38BDF8"],["CV","LIVE","#06B6D4"],["AI","READY","#38BDF8"]].map(([l,v,c]) => (
            <div key={l} style={{ display:"flex", alignItems:"center", gap:7 }}>
              <div style={{ width:18, height:1, background:`linear-gradient(90deg,transparent,${c})` }}/>
              <span style={{ color:c }}><span style={{ color:"#334155" }}>{l}: </span>{v}</span>
            </div>
          ))}
        </div>

        {/* Left labels */}
        <div style={{ position:"absolute", left:-80, top:"50%", transform:"translateY(-50%)", display:"flex", flexDirection:"column", gap:10, fontFamily:"monospace", fontSize:10, textAlign:"right" }}>
          {["PYTHON","OPENCV","ROBOTICS","STEM"].map(t => (
            <div key={t} style={{ display:"flex", alignItems:"center", justifyContent:"flex-end", gap:7 }}>
              <span style={{ color:"#334155" }}>{t}</span>
              <div style={{ width:18, height:1, background:"linear-gradient(90deg,rgba(21,94,239,0.4),transparent)" }}/>
            </div>
          ))}
        </div>
      </div>

      {/* Particles */}
      <div style={{ position:"absolute", inset:0, overflow:"hidden", pointerEvents:"none" }}>
        {particles.map((p,i) => (
          <div key={i} style={{
            position:"absolute", left:`${p.x}%`, top:`${p.y}%`,
            width:p.s, height:p.s, borderRadius:"50%",
            background: i%2===0 ? "#155EEF" : "#06B6D4",
            opacity:.5, boxShadow:`0 0 ${p.s*3}px ${i%2===0?"#155EEF":"#06B6D4"}`,
            animation:`floatUD ${3.5+(i%3)}s ease-in-out ${p.d}s infinite`,
          }}/>
        ))}
      </div>

      {/* Status bar */}
      <div style={{ position:"absolute", bottom:0, left:"50%", transform:"translateX(-50%)", whiteSpace:"nowrap" }}>
        <div style={{ display:"flex", alignItems:"center", gap:8, fontFamily:"monospace", fontSize:10, color:"#334155", border:"1px solid rgba(21,94,239,0.14)", borderRadius:999, padding:"5px 14px", background:"rgba(7,13,24,0.8)", backdropFilter:"blur(8px)" }}>
          <span style={{ width:6, height:6, borderRadius:"50%", background:"#06B6D4", display:"inline-block", animation:"pulseGlow 1.5s ease-in-out infinite" }}/>
          SYSTEM ONLINE — ROBOTICS CORE ACTIVE
        </div>
      </div>
    </div>
  );
}
