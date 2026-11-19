export const Summary = ({ summary, setSummary }) => {
  return (
    <>
      <label>
        Summary
        <textarea
          value={summary}
          onChange={(e) => setSummary(e.target.value)}
          row={70}
          cols={30}
        />
      </label>
    </>
  );
};
