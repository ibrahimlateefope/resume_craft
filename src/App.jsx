import React, { useState } from 'react';
import { GeneralInfo } from "./components/GeneralInfo.jsx";
import { Summary } from "./components/Summary.jsx";
import { Experiences } from "./components/Experiences.jsx";
import { Education } from "./components/Education.jsx";

function App() {
  const [generalInfo, setGeneralInfo] = useState({
    firstName: "Daniel",
    lastName: "Baker",
    address: "",
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
  return (
    <>
      <GeneralInfo generalInfo={generalInfo} setGeneralInfo={setGeneralInfo} />
      <Summary summary={summary} setSummary={setSummary} />
      <Experiences experiences={experiences} setExperiences={setExperiences} />
      <Education education={education} setEducation={setEducation} />
    </>
  );
}

export default App;
