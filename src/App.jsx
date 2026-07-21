import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import HomePage from "./home/homePage";
import TeamPage from "./team/teamPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Site-formula-1" element={<HomePage />} />
          <Route path="/teams/:teamId" element={<TeamPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
