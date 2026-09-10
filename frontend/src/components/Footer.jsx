

import "../styles/footer.css";

function Footer() {

  return (

    <footer className="footer">

      <div className="footer-container">


        {/* TOP */}

        <div className="footer-top">

          <div className="footer-logo">

            <div className="footer-icon">

              <img src="/logo.png" alt="VoiceGuard AI" className="footer-logo-img" />

            </div>

            <span>
              VoiceGuard AI
            </span>

          </div>


          <div className="footer-links">

            <a href="#privacy">
              Privacy Policy
            </a>

            <a href="#terms">
              Terms of Service
            </a>

            <a href="#documentation">
              Documentation
            </a>

            <a href="#contact">
              Contact
            </a>

          </div>

        </div>


        {/* BOTTOM */}

        <div className="footer-bottom">

          <span>
            © 2026 VoiceGuard AI. University Capstone Project.
          </span>

          <span>
            Designed & Built with React, FastAPI & TensorFlow
          </span>

        </div>

      </div>

    </footer>
  );
}

export default Footer;