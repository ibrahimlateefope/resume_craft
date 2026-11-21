export const ExperienceEntry = ({
  data,
  updateExperience,
  removeExperience,
}) => {
  const fields = [
    { key: "role", type: "text", label: "Role", placeholder: "e.g, Team lead" },
    { key: "company", type: "text", label: "Company", placeholder: "Company Name" },
    { key: "location", type: "text", label: "Location", placeholder: "Job location" },
    { key: "description", type: "textarea", label: "Description", placeholder: "Job description and achievements" },
    { key: "startDate", type: "date", label: "From", placeholder: "From" },
    { key: "endDate", type: "date", label: "To", placeholder: "To" },
  ];
  return (
    <div data-id={data.id}>
      {fields.map(({ key, type, label, placeholder }) => (
        <div key={data.id + key}>
          <label htmlFor={data.id + key}>{label}</label>
          {type === "textarea" ? (
            <textarea
              id={data.id + key}
              placeholder={placeholder}
              value={data[key]}
              onChange={(e) => updateExperience(data.id, key, e.target.value)}
            />
          ) : (
            <input
              id={data.id + key}
              type={type}
              placeholder={placeholder}
              value={data[key]}
              onChange={(e) => updateExperience(data.id, key, e.target.value)}
            />
          )}
        </div>
      ))}
      <button onClick={() => removeExperience(data.id)}>🗑️ Delete Experience</button>
    </div>
  );
};