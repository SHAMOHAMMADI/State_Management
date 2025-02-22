import { useState } from "react";
import Home from "./pages/Home";
import { dataContext } from "./components/dataContext";

function App() {
  const [data, setData] = useState(0);

  return (
    <dataContext.Provider value={{ data, setData }}>
      <Home />
    </dataContext.Provider>
  );
}

export default App;
