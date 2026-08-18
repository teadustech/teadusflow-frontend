import { Navigate, Route, Routes } from "react-router-dom";
import RegistrationForm from "./components/RegistrationForm.jsx";
import Login from "./components/Login.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/register" />} />

      <Route path="/register" element={<RegistrationForm />} />

      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;