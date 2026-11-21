export const EducationEntry = ({ edu, updateEducation, removeEducation }) => {
  const fields = [
    { key: "qualification", type: "text", label: "Qualification", placeholder: "e.g, Bsc. Computer Science" },
    { key: "institution", type: "text", label: "Institution", placeholder: "Institution Name" },
    { key: "location", type: "text", label: "Institution Location", placeholder: "Institution location" },
    { key: "achievement", type: "textarea", label: "Achievement", placeholder: "Your achievements" },
    { key: "startDate", type: "date", label: "From", placeholder: "From" },
    { key: "endDate", type: "date", label: "To", placeholder: "To" },
  ];
  return (
    <div data-id={edu.id}>
      {fields.map(({ key, type, label, placeholder }) => (
        <div key={edu.id + key}>
          <label htmlFor={edu.id + key}>{label}</label>
          {type === "textarea" ? (
            <textarea
              id={edu.id + key}
              placeholder={placeholder}
              value={edu[key]}
              onChange={(e) => updateEducation(edu.id, key, e.target.value)}
            />
          ) : (
            <input
              id={edu.id + key}
              type={type}
              placeholder={placeholder}
              value={edu[key]}
              onChange={(e) => updateEducation(edu.id, key, e.target.value)}
            />
          )}
        </div>
      ))}
      <button onClick={() => removeEducation(edu.id)}>🗑️ Delete</button>
    </div>
  );
};