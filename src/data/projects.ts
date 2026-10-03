export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  period: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  category: string;
}

export const projects: Project[] = [
  {
    id: "face-antispoofing",
    title: "Face Anti-Spoofing System",
    subtitle: "AI Computer Vision Security",
    description:
      "Created a face anti-spoofing system using the YOLO algorithm to detect and prevent spoofing attacks in real time. The system analyzes facial features to distinguish between genuine and spoofed attempts.",
    period: "2024",
    technologies: ["Python", "OpenCV", "Tkinter", "YOLO", "Machine Learning"],
    githubUrl: "https://github.com/iamitsrivastav/Face_AntiSpoofing_system",
    featured: true,
    category: "AI / Computer Vision",
  },
  {
    id: "portfolio-website",
    title: "Portfolio Website",
    subtitle: "Web Development",
    description:
      "Developed a portfolio website and various web pages using HTML, CSS and Bootstrap and deployed it on GitHub.",
    period: "March 2024 – May 2024",
    technologies: ["HTML", "CSS", "Bootstrap"],
    githubUrl: "https://github.com/iamitsrivastav",
    featured: false,
    category: "Web Development",
  },
];
