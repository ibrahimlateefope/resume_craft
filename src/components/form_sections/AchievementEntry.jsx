export const AchievementEntry = ({
  data,
  updateAchievement,
  removeAchievement,
}) => {
  const fields = [
    { key: "title", type: "text", label: "Achievement Title", placeholder: "e.g. Employee of the Year" },
    { key: "organization", type: "text", label: "Issuing Organization (optional)", placeholder: "Organization Name" },
    { key: "date", type: "date", label: "Date", placeholder: "Date" },
    { key: "description", type: "textarea", label: "Description", placeholder: "Details about the achievement" },
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
              onChange={(e) => updateAchievement(data.id, key, e.target.value)}
            />
          ) : (
            <input
              id={data.id + key}
              type={type}
              placeholder={placeholder}
              value={data[key]}
              onChange={(e) => updateAchievement(data.id, key, e.target.value)}
            />
          )}
        </div>
      ))}
      <button onClick={() => removeAchievement(data.id)}>🗑️ Delete</button>
    </div>
  );
};
