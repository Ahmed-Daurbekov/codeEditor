import { useState } from "react";
import TaskDescription from "./Componets/TaskDescription";
import CodeEditor from "./Componets/CodeEditor";
import LanguageSelector from "./Componets/LanguageSelector";
import RunButton from "./Componets/RunButton";
import Output from "./Componets/Output";
import './App.scss'

const App = () => {
  const [language, setLanguage] = useState("python");
  const [code, setCode] = useState("");
  const [result, setResult] = useState("");

  const runCode = async () => {

    const response = await fetch("/api/execute", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ language, code }),
    });
    
    const data = await response.json();

    if (data.status === "success") {
      setResult(data.output);
    } else {
      setResult(`Error: ${data.error}`);
    }
  };

  return (
    <div>
      <TaskDescription />
      <LanguageSelector language={language} setLanguage={setLanguage} />
      <CodeEditor language={language} code={code} setCode={setCode} />
      <RunButton onRun={runCode} />
      <Output result={result} />
    </div>
  );
};

export default App;
