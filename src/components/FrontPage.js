import React from "react";
import { Button, Fab, Portal } from "@material-ui/core";
import { WbSunny } from "@material-ui/icons";
import "./FrontPage.css";
import CardGrid from "./CardGrid";
import frontImg from "../assets/IMG_20190504_133109 (1).jpg";
import { useSpring, animated } from "react-spring";

const items = [
  {
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ",
    src: frontImg
  },
  {
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ",
    src: frontImg
  },
  {
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ",
    src: frontImg
  }
];

export default function FrontPage({ setSeason, season }) {
  const isDialogOpen = season !== null;

  console.log(isDialogOpen);

  const dialogAnimation = useSpring({ transform: isDialogOpen ? "translateX(0)" : "translateX(-100vw)" });

  const backdropA = useSpring({ opacity: isDialogOpen ? 1 : 0, visibility: isDialogOpen ? "visible" : "hidden" });

  return (
    <div className="FrontPage">
      <h1>Blomster og haveplanter</h1>
      <div className="flex">
        <Button color="secondary" variant="contained" onClick={() => setSeason("spring")}>
          Forår
        </Button>
        <Button color="secondary" onClick={() => setSeason("spring")} variant="contained">
          <WbSunny style={{ marginRight: 10 }} /> Sommer
        </Button>
        <Button color="secondary" variant="contained" onClick={() => setSeason("spring")}>
          Efterår
        </Button>
        <Fab variant="extended" color="secondary" onClick={() => setSeason("spring")}>
          Vinter
        </Fab>
      </div>
      <Portal>
        <animated.div className="dialog" onClick={() => setSeason(null)} style={backdropA}>
          <animated.div className="dialog-body" style={dialogAnimation}>
            <CardGrid items={items} />
          </animated.div>
        </animated.div>
      </Portal>
    </div>
  );
}
