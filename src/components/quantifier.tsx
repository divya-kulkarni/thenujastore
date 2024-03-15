import { useState } from "react";
import "../styling/quantifier.css";

export type Operation = "decrease" | "increase";

export const Quantifier = () => {
  const [value, setValue] = useState<number>(1);

  return (
    <div className="quantifier">
      <input type="button" value="-" className="buttonMinus" />
      <input
        type="number"
        step="1"
        max=""
        value={value}
        onChange={(e) => setValue(parseInt(e.target.value))}
        className="quantityField"
      />
      <input type="button" value="+" className="buttonPlus" />
    </div>
  );
};
