import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import HomePage from "./home/homePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
