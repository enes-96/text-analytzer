import { useState } from "react";
import Header from "./components/Header";
import Counters from "./components/Counters";
import Analyzer from "./components/Analyzer";
import Textarea from "./components/Textarea";

const App = () => {
  const [text, setText] = useState("");
  const handleTextChange = (e) => setText(e.target.value);

  return (
    <div className="bg-gray-200 h-screen">
      <Header />
      <Counters characters={text} />
      <Textarea changeFunction={handleTextChange} text={text} />
      <Analyzer text={text} />
    </div>
  );
};

export default App;
