//import logo from './logo.svg';
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "conteners/Home";
import Login from "conteners/Login";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/s" element={<Home />}></Route>
      <Route path="/a" element={<Home />}></Route>
      <Route path="/q" element={<Home />}></Route>
      <Route path="/v" element={<Home />}></Route>
      <Route path="/b" element={<Home />}></Route>
      <Route path="/k" element={<Home />}></Route>
      <Route path="/l" element={<Home />}></Route>
    </Routes>
  );
}

export default App;
