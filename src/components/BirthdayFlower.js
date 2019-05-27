import React, { useState } from "react";
import { Select, FormControl, InputLabel, Card, CardMedia, CardContent } from "@material-ui/core";
import "./BirthdayFlower.css";
import { useSpring, animated } from "react-spring";

const months = ["Januar", "Februar", "Marts", "Maj", "April", "Juni", "Juli", "August", "September", "Oktober", "November", "December"];

export default function BirthdayFlower() {
  const [month, setMonth] = useState("");

  function handleChange(e) {
    setMonth(e.target.value);
  }

  const monthChosen = month !== "";

  const monthFlowerSpring = useSpring({
    transform: monthChosen ? "scale(1)" : "scale(0.5)"
  });

  return (
    <div className="BirthdayFlower-wrapper">
      <div className="BirthdayFlower">
        <p>Find ud af hvilken blomst der er din fødselsdagsblomst</p>
        <FormControl>
          <InputLabel>Vælg en måned</InputLabel>
          <Select native onChange={handleChange}>
            {months.map(month => (
              <option>{month}</option>
            ))}
          </Select>
        </FormControl>
      </div>
      {monthChosen && (
        <animated.div style={monthFlowerSpring}>
          <Card className="Card" style={{ marginTop: 20 }}>
            <CardMedia
              component="img"
              src="https://cdn2.stylecraze.com/wp-content/uploads/2013/07/366_Top-25-Most-Beautiful-Yellow-Flowers_147529007.jpg_1.jpg"
              style={{ height: 300 }}
            />
            <CardContent>
              <h2>4 kr.</h2>
              <p>A flower</p>
            </CardContent>
          </Card>
        </animated.div>
      )}
    </div>
  );
}
