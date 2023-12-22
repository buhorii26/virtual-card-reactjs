import React from "react";
import ReactDOM from "react-dom/client";
import data from "./data";
import "./index.css";

const socialMedia = [
  {
    icon: "fa-facebook",
    link: "https://www.facebook.com/buhorii26",
  },
  {
    icon: "fa-instagram",
    link: "https://www.instagram.com/buhorii26/",
  },
  {
    icon: "fa-linkedin",
    link: "https://www.linkedin.com/in/buhori-067235126",
  },
  {
    icon: "fa-github",
    link: "https://github.com/buhorii26",
  },
];
function App() {
  return (
    <body>
      <div className="card">
        <div className="top">
          <Header />
          <Indentitas />
        </div>
        <div className="bottom">
          <Biodata />
          <Highlight />
        </div>
      </div>
    </body>
  );
}

function SocialButton({ icon, link }) {
  return (
    <button onClick={() => window.open(link, "_blank")}>
      <i className={`fa ${icon}`}></i>
    </button>
  );
}
function Header() {
  const middleIndex = Math.floor(socialMedia.length / 2);
  const socialLeft = socialMedia.slice(0, middleIndex);
  const socialRight = socialMedia.slice(middleIndex);

  return (
    <>
      <div className="social-buttons">
        {socialLeft.map((data, index) => (
          <SocialButton icon={data.icon} link={data.link} />
        ))}
      </div>
      <div className="social-buttons right">
      {socialRight.map((data, index) => (
          <SocialButton icon={data.icon} link={data.link} />
        ))}
      </div>
    </>
  );
}

function Indentitas() {
  return (
    <div className="text">
      <div className="name-wrapper">
        <div className="name">Buhori</div>
      </div>
      <div className="title">Web Developer</div>
    </div>
  );
}
function Biodata() {
  return (
    <div className="desc">
      <p>
        My name is <b>Buhori</b> & Web Developer
      </p>
    </div>
  );
}

function Badge({ text }) {
  return (
    <button>
      <div className="height">{text}</div>
    </button>
  );
}
function Highlight() {
  return (
    <div className="buttons">
      <Badge text="Front End" />
      <Badge text="Back End" />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
