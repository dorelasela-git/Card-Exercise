import { BrowserRouter, Routes, Route } from "react-router-dom";
import Form from "./pages/Form";
import Details from "./pages/Details";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/payment" element={<Form />} />
        <Route path="/registration" element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
