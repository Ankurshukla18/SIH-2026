import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

import "../styles/landing.css";


function Landing() {

    const navigate = useNavigate();
    const pageRef = useRef(null);
    const videoRef = useRef(null);

    useEffect(() => {
        // Fade out after 2s, navigate after 2.5s
        const fadeTimer = setTimeout(() => {
            if (pageRef.current) {
                pageRef.current.classList.add("landing-fade-out");
            }
        }, 1800);

        const navTimer = setTimeout(() => {
            navigate("/home");
        }, 2200);

        return () => {
            clearTimeout(fadeTimer);
            clearTimeout(navTimer);
        };
    }, [navigate]);

    const handleClick = () => {
        if (pageRef.current) {
            pageRef.current.classList.add("landing-fade-out");
        }
        setTimeout(() => navigate("/home"), 500);
    };

    return (
        <div className="landing-page" ref={pageRef} onClick={handleClick}>

            {/* ANIMATED LOGO VIDEO */}
            <div className="landing-logo-video-wrapper">
                <video
                    ref={videoRef}
                    className="landing-logo-video"
                    src="/logo-animation.mp4"
                    autoPlay
                    muted
                    playsInline
                    loop={false}
                />
            </div>

        </div>
    );
}

export default Landing;

