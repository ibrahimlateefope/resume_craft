export const SkillsEntry = ({ skill, updateSkill, removeSkill }) => {
  const fields = [
    {
      key: "skillName",
      type: "text",
      label: "Skill Name",
      placeholder: "e.g., Time management",
    },
    {
      key: "skillProficiency",
      type: "text",
      label: "Skill Proficiency",
      placeholder: "Describe the skills",
    },
  ];
  return (
    <div data-id={skill.id}>
      {fields.map(({ key, type, label, placeholder }) => (
        <div key={skill.id + key}>
          <label htmlFor={skill.id + key}>{label}</label>

          <input
            id={skill.id + key}
            type={type}
            placeholder={placeholder}
            value={skill[key]}
            onChange={(e) => updateSkill(skill.id, key, e.target.value)}
          />
        </div>
      ))}
      <button onClick={() => removeSkill(skill.id)}>🗑️ Delete Skill</button>
    </div>
  );
};
