import Header from "./components/Header";
import Counters from "./components/Counters";
import Textfield from "./components/Textfield";
import Analyzer from "./components/Analyzer";

const App = () => {

  return (
    <div className="bg-gray-200 h-screen">
      <Header />
      <Counters />
      <Textfield />
      <Analyzer />
    </div>
  );
};

export default App;
