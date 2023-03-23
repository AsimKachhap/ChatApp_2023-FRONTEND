import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ChatPage from "./pages/ChatPage";

function App() {
  return (
    <div className="App text-red-500">
      <Routes>
        <Route to="/" element={<HomePage />} />
        <Route to="/chats" element={<ChatPage />} />
      </Routes>
    </div>
  );
}

export default App;
