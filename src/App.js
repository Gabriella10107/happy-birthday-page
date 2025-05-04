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
                <span className="emoji-decor">🎈</span> ပျော်ရွှင်စရာမွေးနေ့မှစ၍ ရှေ့ဆက်ရမယ့်ခရီးအဖြာဖြာမှာ လုပ်သမျှအရာရာဆင်ပြေပါစေ တောသူမလေးရေ{" "}
                <span className="emoji-decor">🍰</span>
              </p>
              <p className="birthday-message">
                <span className="emoji-decor">✨</span> ပျော်ရွှင်တဲ့အပြုံး နွေးထွေးတဲ့မေတ္တာတွေနဲ့ထိုက်တန်သူများနဲ့ တွေ့ဆုံရပါစေလို့ဆုတောင်းပေးပါတယ် ပြည့်စုံရေ.{" "}
                <span className="emoji-decor">🌞</span>
              </p>
              <p className="birthday-message">
                <span className="emoji-decor">🥳</span> ရှေ့ဆက်မယ့်ဘဝခရီးအဖြာဖြာမှာလည်း ကံကောင်းခြင်းတွေနဲ့အတူ ချစ်ရတဲ့သူတွေနဲ့သာ ဘဝကိုပျော်ပျော်ကြီးဖြတ်သန်းနိုင်ပါစေဗျာ!{" "}
                <span className="emoji-decor">🎁</span>
              </p>
            </div>

            <div className="birthday-extras">
              <div className="polaroid-frame">
                <img
                  src="./image/pyae_sone_1.jpg"
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
