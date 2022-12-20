import { Routes, Route } from "react-router-dom";


import Login from "./features/login/Login";
import Register from "./features/register/Register";

const App = () => {
  return (
    <Routes>
    <Route path="/" element={<Login />} />
    <Route path="/register" element={<Register />} />
  </Routes>
  );
}

export default App;
