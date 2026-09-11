import {
  Upload,
  Mic,
  AudioLines
} from "lucide-react";

import { useNavigate } from "react-router-dom";

import "../styles/home.css";

function Home() {

  const navigate = useNavigate();

  return (

    <div className="home-page">


      {/* HERO SECTION */}

      <section className="hero-section">

        <div className="hero-content">


          {/* LEFT */}

          <div className="hero-left">

            <h1>
              Is This Voice Human or AI?
            </h1>


            <p>
              Analyze spoken audio instantly with our lightweight
              classifier. Upload voice clips or record in real-time
              to detect synthetic speech, deepfakes, and
              computer-generated modulation.
            </p>


            <div className="hero-buttons">

              <button
                className="primary-btn"
                onClick={() => navigate("/detect")}
              >

                <Upload size={19} />

                Upload Audio

              </button>


              <button
                className="secondary-btn"
                onClick={() =>
                  navigate("/live-detection")
                }
              >

                <Mic size={19} />

                Start Live Detection

              </button>

            </div>

          </div>


          {/* RIGHT */}

          <div className="hero-right">

            <div className="wave-card">

              <div className="wave-icon">

                <AudioLines size={38} />

              </div>


              <div className="waveform">

                {/* Bars बाद में बनाएँगे */}

                {Array.from(
                  { length: 40 },
                  (_, index) => (

                    <span
                      key={index}
                      className="wave-bar"
                    />

                  )
                )}

              </div>


              <h3>
                Spectral Waveform Analyzer
              </h3>


              <p>
                Extracting micro-variations
                & pause metrics
              </p>

            </div>

          </div>

        </div>

      </section>



      {/* STATISTICS */}

      <section className="stats-section">

        <div className="stat">

          <h2>
            10,000+
          </h2>

          <p>
            Audio Files Analyzed
          </p>

        </div>


        <div className="stat">

          <h2>
            98.5%
          </h2>

          <p>
            Detection Accuracy
          </p>

        </div>


        <div className="stat">

          <h2>
            &lt; 2s
          </h2>

          <p>
            Real-Time Detection
          </p>

        </div>

      </section>



      {/* ARCHITECTURE */}

      <section className="architecture">

        <h2>
          Simple, Practical Architecture
        </h2>


        <p>
          How our lightweight neural classifier
          processes spoken audio
        </p>


        <div className="architecture-cards">

          <div className="architecture-card">

            <h3>
              1. Audio Input
            </h3>

            <p>
              Upload or record spoken audio.
            </p>

          </div>


          <div className="architecture-card">

            <h3>
              2. Feature Extraction
            </h3>

            <p>
              Analyze spectral and temporal features.
            </p>

          </div>


          <div className="architecture-card">

            <h3>
              3. AI Classification
            </h3>

            <p>
              Determine Human or AI generated voice.
            </p>

          </div>

        </div>

      </section>


    </div>
  );
}

export default Home;