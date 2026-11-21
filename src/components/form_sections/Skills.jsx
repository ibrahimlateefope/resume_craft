import { SkillsEntry } from "./SkillsEntry.jsx";
export const Skills = ({ skills, setSkills }) => {
  const addSkill = () => {
    setSkills([
      ...skills,
      {
        id: crypto.randomUUID(),
        skillName: "",
        skillProficiency: "",
      },
    ]);
  };
  const removeSkill = (id) => {
    setSkills(skills.filter((s) => s.id !== id));
  };
  const updateSkill = (id, key, value) => {
    setSkills(skills.map((s) => (s.id === id ? { ...p, [key]: value } : s)));
  };
  return (
    <section>
      <h2>Skills</h2>
      {skills?.map((skill) => (
        <SkillsEntry
          key={skill.id}
          skill={skill}
          updateSkill={updateSkill}
          removeSkill={removeSkill}
        />
      ))}
      <button onClick={addSkill}>+Add Skill</button>
    </section>
  );
};
