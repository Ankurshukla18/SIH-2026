import { Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Landing from "./pages/Landing";
import Home from "./pages/Home";
import Detect from "./pages/Detect";
import LiveDetection from "./pages/LiveDetection";
import Results from "./pages/Results";
import About from "./pages/About";


function App() {

    const location = useLocation();

    // Landing page has no navbar/footer
    const isLanding = location.pathname === "/";

    return (

        <div className="app">

            {!isLanding && <Navbar />}

            <main className={isLanding ? "" : "main-content"}>

                <Routes>

                    <Route path="/" element={<Landing />} />

                    <Route path="/home" element={<Home />} />

                    <Route path="/detect" element={<Detect />} />

                    <Route
                        path="/live-detection"
                        element={<LiveDetection />}
                    />

                    <Route
                        path="/results"
                        element={<Results />}
                    />

                    <Route path="/about" element={<About />} />

                </Routes>

            </main>

            {!isLanding && <Footer />}

        </div>
    );
}

export default App;
