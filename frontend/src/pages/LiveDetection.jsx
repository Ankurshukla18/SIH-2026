import {
  Square,
  Mic
} from "lucide-react";

import { useEffect, useState, useRef } from "react";

import { useNavigate } from "react-router-dom";

import "../styles/liveDetection.css";


function LiveDetection() {

  const [isRecording, setIsRecording] =
    useState(false);

  const [duration, setDuration] =
    useState(0);

  const navigate = useNavigate();

  useEffect(() => {

    if (!isRecording) {
      return undefined;
    }

    const timer = setInterval(() => {
      setDuration((currentDuration) => currentDuration + 1);
    }, 1000);

    return () => clearInterval(timer);

  }, [isRecording]);


  const formatDuration = (totalSeconds) => {

    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    return [hours, minutes, seconds]
      .map((unit) => String(unit).padStart(2, "0"))
      .join(":");

  };


  const handleRecording = () => {

    setIsRecording((recording) => {

      if (!recording) {
        setDuration(0);
      }

      return !recording;

    });

  };


  const stopAndReport = () => {

    setIsRecording(false);

    navigate("/results");

  };


  return (

    <div className="live-page">

      <div className="live-container">


        {/* HEADING */}

        <div className="page-heading">

          <h1>
            Live Voice Detection
          </h1>

          <p>
            Perform continuous evaluation of
            spoken audio stream via WebSockets.
          </p>

        </div>



        <div className="live-grid">


          {/* RECORDING */}

          <div className="record-card">


            {/* Unified Logo Button */}
            <button
              className={`record-logo-button ${isRecording ? "recording" : ""}`}
              onClick={handleRecording}
              aria-label={isRecording ? "Stop Recording" : "Start Recording"}
            >
              {isRecording ? (
                <video
                  className="record-logo-video"
                  src="/logo-animation.mp4"
                  autoPlay
                  muted
                  playsInline
                  loop
                />
              ) : (
                <img src="/logo.png" alt="Start VoiceGuard AI" className="record-logo-img" />
              )}
            </button>


            <h3>

              {isRecording
                ? "Recording Active..."
                : "Ready to Record"}

            </h3>


            <p className="connection">

              {isRecording
                ? "Live Stream Connected"
                : "Click microphone to start"}

            </p>


            <div className="mini-waveform">

              {Array.from(
                { length: 25 },
                (_, index) => (

                  <span
                    key={index}
                    className="mini-wave-bar"
                  />

                )
              )}

            </div>


            <button
              className="report-btn"
              onClick={stopAndReport}
            >

              Stop & Get Full Report

            </button>

          </div>



          {/* MONITOR */}

          <div className="monitor-card">

            <h2>
              Real-Time Monitor
            </h2>


            <div className="monitor-stats">

              <div>

                <span>
                  DURATION
                </span>

                <h3>
                  {formatDuration(duration)}
                </h3>

              </div>


              <div>

                <span>
                  SAMPLE RATE
                </span>

                <h3>
                  16 kHz
                </h3>

              </div>

            </div>


            <hr />


            <h4>
              LIVE PROBABILITY
            </h4>


            <div className="probability-labels">

              <span className="human-text">
                Human: 87%
              </span>

              <span className="ai-text">
                AI: 13%
              </span>

            </div>


            <div className="probability-bar">

              <div className="human-bar" />

              <div className="ai-bar" />

            </div>


            <hr />


            <div className="system-log">

              <h4>
                SYSTEM LOG
              </h4>

              <p>
                [14:42:01] WebSocket handshake verified
              </p>

              <p>
                [14:42:02] Streaming audio frames initialized
              </p>

              <p>
                [14:42:08] Feature arrays matching human pattern
              </p>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default LiveDetection;