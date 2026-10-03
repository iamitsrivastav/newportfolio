export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  start: string;
  end: string;
  current: boolean;
  responsibilities: string[];
}

export const experiences: Experience[] = [
  {
    id: "techyguide",
    company: "TechyGuide Pvt Ltd",
    role: "Robotics & AI Trainer Intern",
    period: "Feb 2024 – Jun 2024",
    start: "Feb 2024",
    end: "Jun 2024",
    current: false,
    responsibilities: [
      "Trained and mentored 100+ students in robotics, AI and STEM education.",
      "Developed interactive learning modules with coding, IoT and AI.",
      "Conducted workshops and innovation camps.",
      "Guided students in hands-on project building.",
    ],
  },
  {
    id: "kurious",
    company: "Kurious Learning Labs Pvt Ltd",
    role: "Innovation Trainer",
    period: "Jun 2024 – Mar 2025",
    start: "Jun 2024",
    end: "Mar 2025",
    current: false,
    responsibilities: [
      "Conducted hands-on training sessions on robotics, AI and STEM education.",
      "Developed innovative learning modules integrating coding, IoT and hardware development.",
      "Guided students in real-world project development.",
      "Assisted in setting up robotics labs.",
      "Conducted workshops on coding and automation.",
    ],
  },
  {
    id: "carecubs",
    company: "CareCubs",
    role: "Robotics Trainer",
    period: "Apr 2025 – Present",
    start: "Apr 2025",
    end: "Present",
    current: true,
    responsibilities: [
      "Conduct robotics and STEM sessions integrating coding, electronics and engineering.",
      "Design and deliver curriculum modules with emerging technologies.",
      "Mentor students in hands-on projects, competitions and innovation camps.",
      "Provide constructive feedback to improve problem-solving and teamwork.",
    ],
  },
];
