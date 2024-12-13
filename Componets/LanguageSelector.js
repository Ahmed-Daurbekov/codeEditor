const LanguageSelector = ({ language, setLanguage }) => (
  <select value={language} onChange={(e) => setLanguage(e.target.value)}>
    <option value="python">Python</option>
    <option value="go">Go</option>
  </select>
);

export default LanguageSelector;