import { GeneralInfo } from "./form_sections/GeneralInfo.jsx";
import { Summary } from "./form_sections/Summary.jsx";
import { Experiences } from "./form_sections/Experiences.jsx";
import { Education } from "./form_sections/Education.jsx";
import { Projects } from "./form_sections/Projects.jsx";
import { Skills } from "./form_sections/Skills.jsx";
import { Certifications } from "./form_sections/Certifications.jsx";
import { Languages } from "./form_sections/Languages.jsx";
import { Achievements } from "./form_sections/Achievements.jsx";
export const FormInput = ({
  generalInfo,
  setGeneralInfo,
  summary,
  setSummary,
  experiences,
  setExperiences,
  education,
  setEducation,
  projects,
  setProjects,
  skills,
  setSkills,
  certifications,
  setCertifications,
  languages,
  setLanguages,
  achievements,
  setAchievements,
}) => {
  return (
    <>
      <GeneralInfo generalInfo={generalInfo} setGeneralInfo={setGeneralInfo} />
      <Summary summary={summary} setSummary={setSummary} />
      <Experiences experiences={experiences} setExperiences={setExperiences} />
      <Education education={education} setEducation={setEducation} />
      <Projects projects={projects} setProjects={setProjects} />
      <Skills skills={skills} setSkills={setSkills} />
      <Certifications
        certifications={certifications}
        setCertifications={setCertifications}
      />
      <Languages languages={languages} setLanguages={setLanguages} />
      <Achievements
        achievements={achievements}
        setAchievements={setAchievements}
      />
    </>
  );
};
