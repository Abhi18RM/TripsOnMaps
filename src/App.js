import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import MainPage from "./pages/MainPage/MainPage";
import LandingPage from "./pages/LandingPage/LandingPage";
import DealsPage from "./pages/DealsPage/DealsPage";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/home" element={<MainPage />} />
                <Route path="/" element={<LandingPage />} />
                <Route path="/deals" element={<DealsPage />} />
            </Routes>
        </Router>
    );
}

export default App;
