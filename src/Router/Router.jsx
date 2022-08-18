import { Route,Routes } from "react-router-dom";
import SignupCard from "../Components/Register/Register";
import LoginCard from "../Components/Login/Login";
export const Router = () => {
  return (
    <Routes>
        <Route path="/register" element={<SignupCard />} />
        <Route path="/login" element={<LoginCard/>} />
    </Routes>
  )
}

