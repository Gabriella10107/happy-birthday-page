import React from "react";
import "./BirthdayWish.css";

export default function App() {
  return (
    <div className="birthday-app">
      {/* Confetti background effect */}
      <div className="confetti"></div>
      <div className="confetti"></div>
      <div className="confetti"></div>

      <div className="birthday-container">
        {/* Image on the left side */}
        <div className="birthday-image-container">
          <img
            src="./image/sweet.gif"
            alt="Pyae Sone"
            className="birthday-person-image"
          />
        </div>

        {/* Birthday card on the right side */}
        <div className="birthday-content slide-in">
          <div className="birthday-card">
            <h1 className="birthday-title animate-pop">
              🎉 Happy Birthday ပါပြည့်စုံ! 🎉
              <span className="floating-hearts">💖💖💖</span>
            </h1>

            <div className="birthday-message-box">
              <p className="birthday-message">
                <span className="emoji-decor">🎈</span> Wishing you a day filled
                with joy, laughter, and sweet surprises!{" "}
                <span className="emoji-decor">🍰</span>
              </p>
              <p className="birthday-message">
                <span className="emoji-decor">✨</span> May your smile shine
                brighter than ever and your heart feel as warm as the sun!{" "}
                <span className="emoji-decor">🌞</span>
              </p>
              <p className="birthday-message">
                <span className="emoji-decor">🥳</span> May this year bring you
                endless happiness, success, and wonderful memories!{" "}
                <span className="emoji-decor">🎁</span>
              </p>
            </div>

            <div className="birthday-extras">
              <div className="polaroid-frame">
                <img
                  src="./image/pyae_sone.png"
                  alt="Birthday Celebration"
                  className="birthday-image"
                  style={{
                    maxWidth: "100%",
                    maxHeight: "400px",
                    width: "auto",
                    height: "auto",
                    objectFit: "contain",
                  }}
                />
                <div className="polaroid-caption">🌟 5/5/2025! 🌟</div>
              </div>
              <div className="floating-balloons">🎈🎈🎈</div>
            </div>

            <p className="birthday-footer animate-bounce">
              With lots of love and best wishes,
              <br />
              From someone who cares about you deeply 💝🎊🌸
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
