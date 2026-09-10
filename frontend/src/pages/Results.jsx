import {
  CheckCircle
} from "lucide-react";

import { useNavigate } from "react-router-dom";

import "../styles/results.css";


function Results() {

  const navigate = useNavigate();


  return (

    <div className="results-page">

      <div className="results-container">


        {/* HEADING */}

        <div className="page-heading">

          <h1>
            Detection Results
          </h1>

          <p>
            Report generated successfully.
            Below is the computed confidence breakdown.
          </p>

        </div>


        <div className="results-grid">


          {/* RESULT */}

          <div className="result-card">

            <div className="result-header">

              <div className="success-icon">

                <CheckCircle size={30} />

              </div>


              <div>

                <h2>
                  Human Voice Detected
                </h2>

                <p>
                  Analyzed 12s of voice input
                </p>

              </div>

            </div>


            <div className="confidence-section">

              <div className="confidence-circle">

                <span>
                  94.7%
                </span>

              </div>


              <div>

                <h3>
                  Human Confidence Score
                </h3>

                <p>
                  Very high confidence. The signal
                  presents organic micro-modulations
                  and natural structural pauses typical
                  of biological vocal tracts.
                </p>

              </div>

            </div>


            <h4 className="wave-title">

              INPUT SIGNAL WAVEFORM (SEGMENT)

            </h4>


            <div className="result-waveform">

              {Array.from(
                { length: 40 },
                (_, index) => (

                  <span
                    key={index}
                    className="result-wave-bar"
                  />

                )
              )}

            </div>


            <div className="result-buttons">

              <button
                className="primary-result-btn"
                onClick={() =>
                  navigate("/detect")
                }
              >

                Analyze Another

              </button>


              <button className="download-btn">

                Download Report

              </button>

            </div>

          </div>



          {/* FEATURE ANALYSIS */}

          <div className="feature-card">

            <h2>
              Feature Variance Analysis
            </h2>


            <Feature
              name="Pitch Consistency"
              value="92%"
            />

            <Feature
              name="Natural Pauses"
              value="88%"
            />

            <Feature
              name="Spectral Pattern"
              value="96%"
            />

            <Feature
              name="Micro-Variations"
              value="93%"
            />


            <hr />


            <h4>
              CLASSIFIER NOTE
            </h4>


            <p className="classifier-note">

              Features extracted from Mel-Frequency
              Cepstral Coefficients (MFCC) and spectral
              centroid distribution. Temporal pauses
              verified using root-mean-square energy
              thresholds.

            </p>

          </div>

        </div>

      </div>

    </div>
  );
}


function Feature({
  name,
  value
}) {

  return (

    <div className="feature">

      <div className="feature-label">

        <span>
          {name}
        </span>

        <strong>
          {value}
        </strong>

      </div>


      <div className="feature-progress">

        <div
          className="feature-progress-fill"
          style={{
            width: value
          }}
        />

      </div>

    </div>

  );
}


export default Results;