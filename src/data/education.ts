export interface Education {
  id: string;
  degree: string;
  field: string;
  institution: string;
  location: string;
  startYear: string;
  endYear: string;
  score: string;
  scoreType: "CGPA" | "Percentage";
}

export const educations: Education[] = [
  {
    id: "diploma",
    degree: "Diploma",
    field: "Electronics Engineering",
    institution: "Institute of Engineering and Rural Technology",
    location: "Prayagraj, Uttar Pradesh",
    startYear: "2018",
    endYear: "2021",
    score: "78.28%",
    scoreType: "Percentage",
  },
  {
    id: "btech",
    degree: "Bachelor of Technology",
    field: "Information Technology",
    institution: "Rajkiya Engineering College Bijnor",
    location: "Uttar Pradesh",
    startYear: "2021",
    endYear: "2024",
    score: "7.4",
    scoreType: "CGPA",
  },
];
