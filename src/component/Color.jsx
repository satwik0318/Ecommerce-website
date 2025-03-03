import { useState } from "react";

export default function Color() {
  const [typecolor, settypecolor] = useState("hex");
  const [color, setcolor] = useState("#000000");

  function randomcolor(length) {
    return Math.floor(Math.random() * length);
  }

  function handlehex() {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexcolor = "#";
    for (let i = 0; i < 6; i++) {
      hexcolor += hex[randomcolor(hex.length)];
    }
    setcolor(hexcolor);
  }

  function handlergb() {
    const r = randomcolor(256);
    const g = randomcolor(256);
    const b = randomcolor(256);
    const rgbColor = `rgb(${r},${g},${b})`;
    setcolor(rgbColor);
  }

  return (
    <div style={{ backgroundColor: color, height: "100vh" }}>
      <button onClick={() => { settypecolor("hex"); handlehex(); }}>Hex Color</button>
      <button onClick={() => { settypecolor("rgb"); handlergb(); }}>RGB Color</button>
      <button onClick={typecolor === "hex" ? handlehex : handlergb}>
        Random Color
      </button>
    </div>
  );
}
