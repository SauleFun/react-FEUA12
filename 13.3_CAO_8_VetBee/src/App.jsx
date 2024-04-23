import {Routes, Route} from "react-router-dom";
import Home from "./pages/Home/Home";
import Medication from "./pages/Medication/Medication";
import Pets from "./pages/Pets/Pets";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} exact />
      <Route path="/medication" element={<Medication />} exact />
      <Route path="/pets" element={<Pets />} exact />
    </Routes>
  );
};

export default App;
