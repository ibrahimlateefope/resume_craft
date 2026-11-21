import { AchievementEntry } from "./AchievementEntry.jsx";

export const Achievements = ({ achievements, setAchievements }) => {
  const addAchievement = () => {
    setAchievements([
      ...achievements,
      {
        id: crypto.randomUUID(),
        title: "",
        organization: "",
        date: "",
        description: "",
      },
    ]);
  };

  const removeAchievement = (id) => {
    setAchievements(achievements.filter((ach) => ach.id !== id));
  };

  const updateAchievement = (id, key, value) => {
    setAchievements(
      achievements.map((ach) =>
        ach.id === id ? { ...ach, [key]: value } : ach
      )
    );
  };

  return (
    <section>
      {achievements.map((ach) => (
        <AchievementEntry
          key={ach.id}
          data={ach}
          updateAchievement={updateAchievement}
          removeAchievement={removeAchievement}
        />
      ))}
      <button onClick={addAchievement}>+ Add Achievement</button>
    </section>
  );
};
