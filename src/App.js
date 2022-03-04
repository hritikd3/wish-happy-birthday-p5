import React from "react";
import "./App.css";
import sketch from "./sketch";
import p5 from "p5";

const TEXT = "Happy Birthday Bittoo";

const App = () => {
  const canvasRef = React.useRef(null);

  React.useEffect(() => {
    const canvasDivElement = canvasRef.current;

    // NOTE: If you change TEXT value to something else, you'll need to make changes in sketch.js as well to make it work

    new p5(sketch(canvasDivElement, TEXT), canvasDivElement);
  });
  const alertHandler = () => {
    alert(
      "ʕ•́ᴥ•̀ʔ Hritik is currently Smashing his keyboard until something good happens... 😄"
    );
  };
  return (
    <>
      <div className="main">
        <div ref={canvasRef} />
      </div>
      <footer className="footer">
        <h2>
          Made with ❤️ by <span onClick={alertHandler}>Hritik</span>{" "}
        </h2>
      </footer>
    </>
  );
};

export default App;
