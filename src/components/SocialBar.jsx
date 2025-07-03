import React, { useEffect, useRef } from "react";

const socialLinks = [
  {
    href: "https://github.com/aryans0510",
    label: "GitHub",
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.867 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.604-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.529 2.341 1.088 2.91.832.091-.647.35-1.088.636-1.339-2.22-.253-4.555-1.112-4.555-4.951 0-1.093.39-1.987 1.029-2.686-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.699 1.028 1.593 1.028 2.686 0 3.848-2.338 4.695-4.566 4.944.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.749 0 .267.18.577.688.48C19.135 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z" /></svg>
    )
  },
  {
    href: "https://linkedin.com/in/yourusername",
    label: "LinkedIn",
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8a6 6 0 016 6v6h-4v-6a2 2 0 00-4 0v6h-4v-6a6 6 0 016-6z" /><rect width="4" height="12" x="2" y="9" rx="2" /><circle cx="4" cy="4" r="2" /></svg>
    )
  },
  {
    href: "https://x.com/yourusername",
    label: "X",
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.53 6.47a.75.75 0 00-1.06 0L12 10.94 7.53 6.47a.75.75 0 10-1.06 1.06L10.94 12l-4.47 4.47a.75.75 0 101.06 1.06L12 13.06l4.47 4.47a.75.75 0 101.06-1.06L13.06 12l4.47-4.47a.75.75 0 000-1.06z" /></svg>
    )
  },
  {
    href: "https://www.instagram.com/_.aryann05/",
    label: "Instagram",
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor"><rect width="20" height="20" x="2" y="2" rx="5" /><circle cx="12" cy="12" r="5" /><circle cx="17.5" cy="6.5" r="1.5" /></svg>
    )
  }
];

const SocialBar = () => {
  const barRef = useRef(null);

  useEffect(() => {
    if (barRef.current) {
      barRef.current.style.animation = "slideInLeft 1s ease";
    }
  }, []);

  return (
    <>
      <style>{`
        @keyframes slideInLeft {
          from { transform: translateX(-80px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        .social-bar-anim {
          animation: slideInLeft 1s ease;
        }
        .social-icon-anim {
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .social-icon-anim:hover {
          transform: scale(1.2) rotate(-8deg);
          box-shadow: 0 4px 16px rgba(0,0,0,0.15);
        }
      `}</style>
      <div
        ref={barRef}
        className="social-bar-anim"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
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
        {socialLinks.map(({ href, label, icon }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="social-icon-anim"
            style={{ color: "#fff", margin: "16px 0" }}
          >
            {icon}
          </a>
        ))}
      </div>
    </>
  );
};

export default SocialBar; 