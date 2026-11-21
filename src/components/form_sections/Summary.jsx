export const Summary = ({ summary, setSummary }) => {
  return (
    <>
      <label>
        Summary
        <textarea
          value={summary}
          onChange={(e) => setSummary(e.target.value)}
          rows={15}
          cols={20}
        />
      </label>
    </>
  );
};
