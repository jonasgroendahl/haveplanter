import React, { useState } from "react";
import { AppBar, Toolbar, Button, CssBaseline } from "@material-ui/core";
import frontImg from "./assets/IMG_20190504_133109 (1).jpg";
import FrontPage from "./components/FrontPage";
import { useSpring, animated, useTransition } from "react-spring";
import BirthdayFlower from "./components/BirthdayFlower";
import About from "./components/About";

function App() {
  const [season, setSeason] = useState(null);
  const [page, setPage] = useState(0);

  const transitions = useTransition(page, null, {
    from: { opacity: 0, position: "absolute", transform: page !== 0 ? "translate3d(0, 500px, 0)" : "translate3d(-100vw, 0, 0)" },
    enter: { opacity: 1, transform: "translate3d(0, 0, 0)" },
    leave: { opacity: 0, transform: "translate3d(0, 500px, 0)" }
  });

  const imgProps = useSpring({
    filter: page !== 0 ? "sepia(0.5)" : "sepia(0)"
  });

  const renderedPage = transitions.map(({ item, key, props }) => {
    console.log("page", item);
    let p = null;
    switch (item) {
      case 0:
        p = <FrontPage setSeason={setSeason} season={season} />;
        break;
      case 2:
        p = <About />;
        break;
      default:
        p = <BirthdayFlower />;
        break;
    }
    return (
      <animated.div style={props} key={key}>
        {p}
      </animated.div>
    );
  });

  return (
    <div className="App">
      <CssBaseline />
      <AppBar className="NavBar">
        <Toolbar>
          <Button onClick={() => setPage(0)}>Hjem</Button>
          <Button onClick={() => setPage(1)}>Din fødselsdags blomst</Button>
          <Button onClick={() => setPage(2)}>Om</Button>
        </Toolbar>
      </AppBar>
      <main>
        <animated.img src={frontImg} alt="" style={imgProps} />
        <div className="main-body">{renderedPage}</div>
      </main>
    </div>
  );
}

export default App;
