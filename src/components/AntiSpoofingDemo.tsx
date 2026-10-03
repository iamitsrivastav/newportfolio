"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const STEPS = [
  { id: "cam",     label: "CAMERA INIT",      status: "OK"      },
  { id: "face",    label: "FACE DETECTED",     status: "OK"      },
  { id: "scan",    label: "SCANNING",          status: "..."     },
  { id: "analyze", label: "ANALYZING",         status: "..."     },
  { id: "check",   label: "ANTI-SPOOF CHECK",  status: "..."     },
  { id: "result",  label: "RESULT",            status: "GENUINE" },
];

export default function AntiSpoofingDemo() {
  const [step, setStep] = useState(0);
  const [running, setRunning] = useState(false);

  const run = () => {
    if (running) return;
    setRunning(true);
    setStep(0);
    let cur = 0;
    const go = () => {
      if (cur < STEPS.length - 1) {
        cur++;
        setStep(cur);
        setTimeout(go, 520 + Math.random() * 320);
      } else setRunning(false);
    };
    setTimeout(go, 360);
  };

  useEffect(() => { const t = setTimeout(run, 700); return () => clearTimeout(t); }, []); // eslint-disable-line

  const done = step === STEPS.length - 1;

  return (
    <div style={{ borderRadius: 20, overflow: "hidden", fontFamily: "monospace", fontSize: 12, userSelect: "none", background: "#030608", border: "1px solid rgba(21,94,239,0.22)" }}>
      {/* Camera viewport */}
      <div style={{ position: "relative", aspectRatio: "16/9", background: "linear-gradient(135deg,#0a1628,#030608)", overflow: "hidden" }}>
        {/* Grid */}
        <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(21,94,239,0.12) 1px,transparent 1px),linear-gradient(90deg,rgba(21,94,239,0.12) 1px,transparent 1px)", backgroundSize: "20px 20px", opacity: .4 }} />

        {/* Face box */}
        {step >= 1 && (
          <motion.div initial={{ opacity: 0, scale: 1.1 }} animate={{ opacity: 1, scale: 1 }}
            style={{ position: "absolute", top: "12%", left: "28%", width: "44%", height: "70%" }}>
            {/* Corner brackets */}
            {["tl","tr","bl","br"].map(c => (
              <div key={c} style={{
                position: "absolute", width: 14, height: 14,
                ...(c[0]==="t" ? { top: 0 } : { bottom: 0 }),
                ...(c[1]==="l" ? { left: 0 } : { right: 0 }),
                borderTop: c[0]==="t" ? `2px solid ${done ? "#06B6D4" : "#155EEF"}` : "none",
                borderBottom: c[0]==="b" ? `2px solid ${done ? "#06B6D4" : "#155EEF"}` : "none",
                borderLeft: c[1]==="l" ? `2px solid ${done ? "#06B6D4" : "#155EEF"}` : "none",
                borderRight: c[1]==="r" ? `2px solid ${done ? "#06B6D4" : "#155EEF"}` : "none",
              }}/>
            ))}

            {/* Face area */}
            <div style={{ position: "absolute", inset: 10, display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(21,94,239,0.05)", borderRadius: 4, overflow: "hidden" }}>
              <svg viewBox="0 0 60 70" fill="none" style={{ width: 48, height: 56, opacity: .22 }}>
                <ellipse cx="30" cy="28" rx="22" ry="26" stroke="#06B6D4" strokeWidth="1.5"/>
                <ellipse cx="22" cy="24" rx="4" ry="4" stroke="#06B6D4" strokeWidth="1.2"/>
                <ellipse cx="38" cy="24" rx="4" ry="4" stroke="#06B6D4" strokeWidth="1.2"/>
                <path d="M20 38 Q30 46 40 38" stroke="#06B6D4" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
              {/* Scan beam */}
              {step >= 2 && !done && (
                <motion.div style={{ position: "absolute", left: 0, right: 0, height: 1, background: "linear-gradient(90deg,transparent,#38BDF8,transparent)" }}
                  animate={{ top: ["0%","100%","0%"] }} transition={{ duration: 1.8, repeat: Infinity, ease: "linear" }}/>
              )}
            </div>

            {/* Genuine badge */}
            <AnimatePresence>
              {done && (
                <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }}
                  style={{ position: "absolute", bottom: -28, left: "50%", transform: "translateX(-50%)", whiteSpace: "nowrap", padding: "3px 12px", borderRadius: 999, fontSize: 10, fontWeight: 800, letterSpacing: ".18em", background: "rgba(6,182,212,0.18)", border: "1px solid rgba(6,182,212,0.45)", color: "#38BDF8" }}>
                  ✓ GENUINE
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}

        {/* Result overlay */}
        <AnimatePresence>
          {done && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(6,182,212,0.04)" }}>
              <motion.div initial={{ scale: .5 }} animate={{ scale: 1 }} transition={{ type: "spring", bounce: .5 }} style={{ textAlign: "center" }}>
                <div style={{ fontSize: 36, color: "#06B6D4", marginBottom: 4 }}>✓</div>
                <div style={{ fontWeight: 800, letterSpacing: ".2em", color: "#38BDF8", fontSize: 12 }}>GENUINE FACE</div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* HUD labels */}
        <div style={{ position: "absolute", top: 10, left: 10 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 6, color: "#06B6D4", fontSize: 10, marginBottom: 4 }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#06B6D4", display: "inline-block", animation: "pulseGlow 1.5s ease-in-out infinite" }}/>
            YOLO v8 · ACTIVE
          </div>
          <div style={{ color: "#334155", fontSize: 10 }}>OpenCV · LIVE</div>
        </div>
        <div style={{ position: "absolute", top: 10, right: 10, color: "#334155", fontSize: 10 }}>Python</div>
      </div>

      {/* Log panel */}
      <div style={{ padding: "14px 16px", background: "#030608", borderTop: "1px solid rgba(21,94,239,0.12)", display: "flex", flexDirection: "column", gap: 7 }}>
        {STEPS.slice(0, step + 1).map((s, i) => (
          <motion.div key={s.id} initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }}
            style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ color: "#334155" }}>[ {s.label}</span>
            <span style={{ color: i < step ? "#06B6D4" : "#38BDF8", animation: i === step && !done ? "pulseGlow 1s ease-in-out infinite" : "none" }}>
              {i < step ? (s.status === "..." ? "DONE" : s.status) : (done && i === step ? s.status : "...")} ]
            </span>
          </motion.div>
        ))}
      </div>

      {/* Run button */}
      <div style={{ padding: "0 16px 14px" }}>
        <button onClick={run} disabled={running}
          className="btn btn-s" style={{ width: "100%", justifyContent: "center", padding: "9px 0", fontSize: 11, letterSpacing: ".14em", opacity: running ? .45 : 1, cursor: running ? "not-allowed" : "pointer" }}>
          {running ? "⏳ SCANNING..." : "▶  RUN DEMO"}
        </button>
      </div>
    </div>
  );
}
