import React, { useState } from "react";
import { FormInput } from "./components/FormInput";

function App() {
  const [generalInfo, setGeneralInfo] = useState({
    firstName: "Daniel",
    lastName: "Baker",
    city: "",
    country: "",
    tel: "",
    email: "",
  });
  const [summary, setSummary] = useState("");
  const [experiences, setExperiences] = useState([
    {
      id: crypto.randomUUID(),
      role: "",
      company: "",
      location: "",
      responsibilities: "",
      startDate: "",
      endDate: "",
    },
  ]);
  const [education, setEducation] = useState([
    {
      id: crypto.randomUUID(),
      qualification: "",
      institution: "",
      location: "",
      achievement: "",
      startDate: "",
      endDate: "",
    },
  ]);
  const [projects, setProjects] = useState([
    {
      id: crypto.randomUUID(),
      name: "",
      description: "",
      link: "",
      startDate: "",
      endDate: "",
    },
  ]);
  const [skills, setSkills] = useState([
    {
      id: crypto.randomUUID(),
      skillName: "",
      skillProficiency: "",
    },
  ]);
  const [certifications, setCertifications] = useState([
    {
      id: crypto.randomUUID(),
      name: "",
      organization: "",
      issueDate: "",
      expiryDate: "",
      url: "",
    },
  ]);
  const [languages, setLanguages] = useState([
    {
      id: crypto.randomUUID(),
      name: "",
      proficiency: "Basic",
    },
  ]);
  const [achievements, setAchievements] = useState([
    {
      id: crypto.randomUUID(),
      title: "",
      organization: "",
      date: "",
      description: "",
    },
  ]);
  return (
    <FormInput
      generalInfo={generalInfo}
      setGeneralInfo={setGeneralInfo}
      summary={summary}
      setSummary={setSummary}
      experiences={experiences}
      setExperiences={setExperiences}
      education={education}
      setEducation={setEducation}
      projects={projects}
      setProjects={setProjects}
      skills={skills}
      setSkills={setSkills}
      certifications={certifications}
      setCertifications={setCertifications}
      languages={languages}
      setLanguages={setLanguages}
      achievements={achievements}
      setAchievements={setAchievements}
    />
  );
}

export default App;
