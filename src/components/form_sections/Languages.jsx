import { LanguageEntry } from "./LanguageEntry.jsx";

export const Languages = ({ languages, setLanguages }) => {
  const addLanguage = () => {
    setLanguages([
      ...languages,
      {
        id: crypto.randomUUID(),
        name: "",
        proficiency: "Basic",
      },
    ]);
  };

  const removeLanguage = (id) => {
    setLanguages(languages.filter((lang) => lang.id !== id));
  };

  const updateLanguage = (id, key, value) => {
    setLanguages(
      languages.map((lang) =>
        lang.id === id ? { ...lang, [key]: value } : lang
      )
    );
  };

  return (
    <section>
      {languages.map((lang) => (
        <LanguageEntry
          key={lang.id}
          data={lang}
          updateLanguage={updateLanguage}
          removeLanguage={removeLanguage}
        />
      ))}
      <button onClick={addLanguage}>+ Add Language</button>
    </section>
  );
};
