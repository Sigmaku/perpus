import { useState } from "react";

export const Stocks = () => {
  const [stock, setStock] = useState(0);

  const mulai = () => {
    setStock(
      Math.floor(Math.random() * 100) + 1
    );
  };

  return { stock, mulai };
};