import { useState } from "react";

import { UploadCloud } from "lucide-react";

import { useNavigate } from "react-router-dom";

import "../styles/detect.css";


function Detect() {

  const [selectedFile, setSelectedFile] =
    useState(null);

  const [isAnalyzing, setIsAnalyzing] =
    useState(false);

  const navigate = useNavigate();


  const handleFileChange = (event) => {

    const file =
      event.target.files[0];

    if (file) {

      setSelectedFile(file);

    }

  };


  const handleAnalyze = () => {

    if (!selectedFile) {

      alert("Please select an audio file");

      return;
    }

    setIsAnalyzing(true);

    setTimeout(() => {
      navigate("/results");
    }, 3000);

  };


  return (

    <div className="detect-page">


      <div className="page-container">


        {/* HEADING */}

        <div className="page-heading">

          <h1>
            AI Voice Detection
          </h1>

          <p>
            Upload a vocal recording to evaluate
            probability of machine synthesis.
          </p>

        </div>


        <div className="detect-grid">


          {/* UPLOAD */}

          <div className="upload-card">

            {isAnalyzing ? (

              <div className="analyzing-overlay">

                <video
                  className="analyzing-video"
                  src="/logo-animation.mp4"
                  autoPlay
                  muted
                  playsInline
                  loop
                />

                <h3>Analyzing Audio...</h3>

                <p>Processing voice patterns and features</p>

              </div>

            ) : (
              <>

                <label
                  className="upload-area"
                >

                  <input
                    type="file"
                    accept=".mp3,.wav,.flac"
                    onChange={handleFileChange}
                  />


                  <div className="upload-icon">

                    <UploadCloud size={30} />

                  </div>


                  <h3>

                    {selectedFile
                      ? selectedFile.name
                      : "Drag & drop your audio file here or click to browse"}

                  </h3>


                  <p>
                    Supported formats:
                    MP3, WAV, FLAC — Max 10MB
                  </p>

                </label>


                <button
                  className="upload-btn"
                  onClick={handleAnalyze}
                >

                  {selectedFile
                    ? "Analyze Audio"
                    : "Upload a file to begin analysis"}

                </button>

              </>
            )}

          </div>



          {/* RECENT ANALYSES */}

          <div className="recent-card">

            <h2>
              Recent Analyses
            </h2>


            <div className="analysis-list">


              <AnalysisItem
                name="interview_clip_02.wav"
                date="Today, 2:40 PM"
                result="Human"
                type="human"
              />


              <AnalysisItem
                name="generated_podcast_voice.mp3"
                date="Yesterday, 4:15 PM"
                result="AI Voice"
                type="ai"
              />


              <AnalysisItem
                name="class_lecture_recording.wav"
                date="Oct 24, 11:30 AM"
                result="Human"
                type="human"
              />


              <AnalysisItem
                name="tts_sample_en.mp3"
                date="Oct 22, 9:05 AM"
                result="AI Voice"
                type="ai"
              />

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}



function AnalysisItem({
  name,
  date,
  result,
  type
}) {

  return (

    <div className="analysis-item">

      <div>

        <h3>
          {name}
        </h3>

        <p>
          {date}
        </p>

      </div>


      <span
        className={`result-badge ${type}`}
      >

        {result}

      </span>

    </div>

  );
}


export default Detect;