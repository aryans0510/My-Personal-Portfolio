import React, { useEffect, useRef } from "react";

const resumeLink = {
  href: "/resume.pdf", // Update this path to your actual resume file
  label: "Resume",
  icon: (
    <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <rect x="4" y="2" width="16" height="20" rx="2" strokeWidth="2" stroke="currentColor" fill="none"/>
      <path d="M8 6h8M8 10h8M8 14h4" strokeWidth="2" stroke="currentColor" strokeLinecap="round"/>
    </svg>
  )
};

const ResumeBar = () => {
  const barRef = useRef(null);

  useEffect(() => {
    if (barRef.current) {
      barRef.current.style.animation = "slideInRight 1s ease";
    }
  }, []);

  return (
    <>
      <style>{`
        @keyframes slideInRight {
          from { transform: translateX(80px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        .resume-bar-anim {
          animation: slideInRight 1s ease;
        }
        .resume-icon-anim {
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .resume-icon-anim:hover {
          transform: scale(1.2) rotate(8deg);
          box-shadow: 0 4px 16px rgba(0,0,0,0.15);
        }
        .glow-text {
          color: #fff;
          font-size: 1.1rem;
          font-weight: bold;
          margin-top: 8px;
          letter-spacing: 1px;
          text-shadow:
            0 0 8px #00e6ff,
            0 0 16px #00e6ff,
            0 0 24px #00e6ff;
          animation: glow 1.5s ease-in-out infinite alternate;
        }
        @keyframes glow {
          from {
            text-shadow:
              0 0 8px #00e6ff,
              0 0 16px #00e6ff,
              0 0 24px #00e6ff;
          }
          to {
            text-shadow:
              0 0 16px #00e6ff,
              0 0 32px #00e6ff,
              0 0 48px #00e6ff;
          }
        }
      `}</style>
      <div
        ref={barRef}
        className="resume-bar-anim"
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          height: "100vh",
          width: "64px",
          background: "transparent",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "32px",
          zIndex: 1000,
          opacity: 1
        }}
      >
        <a
          href={resumeLink.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={resumeLink.label}
          className="resume-icon-anim"
          style={{ color: "#fff", margin: "16px 0" }}
        >
          {resumeLink.icon}
        </a>
      </div>
    </>
  );
};

export default ResumeBar; 