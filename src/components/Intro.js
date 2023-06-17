const Intro = () => {
  return (
    <div className="intro">
      <p className="intro-name-line" style={{ color: "#63fedb" }}>
        Hi, my name is
      </p>
      <div className="intro-name-designation">
        <h1 className="intro-name">Minesh Tandel.</h1>
        <h2 className="intro-designation">I develop things for the web.</h2>
      </div>
      <p className="intro-current-role">
        I am an Internet Programming student at TAV College, Montreal. Currently
        I'am focused towards learning Three.js.
      </p>
      <a
        className="intro-cv"
        href="https://drive.google.com/file/d/1-Bvn__1azoFwDSrFzrUmWxXLrvJpBt3w/view?usp=drive_link"
        target="_blank"
        rel="noreferrer"
      >
        Download CV
      </a>
    </div>
  );
};

export default Intro;
