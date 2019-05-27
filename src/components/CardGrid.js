import React from "react";
import { Card, CardMedia, CardContent } from "@material-ui/core";
import "./CardGrid.css";

export default function CardGrid({ items }) {
  return (
    <div className="CardGrid">
      {items.map(item => (
        <Card className="Card">
          <CardMedia component="img" src={item.src} style={{ height: 300 }} />
          <CardContent>
            <h2>4 kr.</h2>
            <p>{item.title}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
