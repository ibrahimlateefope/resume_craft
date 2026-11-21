export const LanguageEntry = ({
  data,
  updateLanguage,
  removeLanguage,
}) => {
  return (
    <div data-id={data.id}>
      <div>
        <label htmlFor={data.id + "name"}>Language</label>
        <input
          id={data.id + "name"}
          type="text"
          placeholder="e.g. English"
          value={data.name}
          onChange={(e) => updateLanguage(data.id, "name", e.target.value)}
        />
      </div>
      <div>
        <label htmlFor={data.id + "proficiency"}>Proficiency</label>
        <select
          id={data.id + "proficiency"}
          value={data.proficiency}
          onChange={(e) => updateLanguage(data.id, "proficiency", e.target.value)}
        >
          <option value="Basic">Basic</option>
          <option value="Conversational">Conversational</option>
          <option value="Fluent">Fluent</option>
          <option value="Native">Native</option>
        </select>
      </div>
      <button onClick={() => removeLanguage(data.id)}>🗑️ Delete</button>
    </div>
  );
};
