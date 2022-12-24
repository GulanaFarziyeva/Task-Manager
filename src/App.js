import { Routes, Route } from "react-router-dom";
import { Box } from "@mui/system";

import Navbar from "./layout/Navbar";
import Login from "./features/auth/login/Login";
import Register from "./features/auth/register/Register";
import TaskList from "./features/task/TaskList";

const App = () => {
  return (
    <Box>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/tasklist" element={<TaskList />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Box>
  );
};

export default App;
