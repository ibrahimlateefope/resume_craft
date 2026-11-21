export const ProjectEntry = ({ project, updateProject, removeProject }) => {
  const fields = [
    { key: "name", type: "text", label: "Project Name", placeholder: "e.g., Portfolio Website" },
    { key: "description", type: "textarea", label: "Description", placeholder: "Describe the project and technologies used" },
    { key: "link", type: "url", label: "Project Link", placeholder: "https://example.com" },
    { key: "startDate", type: "date", label: "From", placeholder: "From" },
    { key: "endDate", type: "date", label: "To", placeholder: "To" },
  ];
  return (
    <div data-id={project.id}>
      {fields.map(({ key, type, label, placeholder }) => (
        <div key={project.id + key}>
          <label htmlFor={project.id + key}>{label}</label>
          {type === "textarea" ? (
            <textarea
              id={project.id + key}
              placeholder={placeholder}
              value={project[key]}
              onChange={(e) => updateProject(project.id, key, e.target.value)}
            />
          ) : (
            <input
              id={project.id + key}
              type={type}
              placeholder={placeholder}
              value={project[key]}
              onChange={(e) => updateProject(project.id, key, e.target.value)}
            />
          )}
        </div>
      ))}
      <button onClick={() => removeProject(project.id)}>🗑️ Delete Project</button>
    </div>
  );
};
