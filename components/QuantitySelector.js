import React, { useState, useEffect } from "react";

const QuantitySelector = ({ initialQty = 1, onChange }) => {
  const [qty, setQty] = useState(initialQty);

  useEffect(() => {
    setQty(initialQty);
  }, [initialQty]);

  const handleIncrement = () => {
    setQty(prev => {
      const newQty = prev + 1;
      if (onChange) onChange(newQty);
      return newQty;
    });
  };

  const handleDecrement = () => {
    setQty(prev => {
      if (prev > 1) {
        const newQty = prev - 1;
        if (onChange) onChange(newQty);
        return newQty;
      }
      return prev;
    });
  };

  return (
    <div className="quantity-selector">
      <button
        className="myNewC"
        type="button"
        onClick={handleDecrement}
        style={{
          width: "20px",
          backgroundColor: "initial",
          marginRight: "5px",
          fontWeight: "900",
        }}
      >
        -
      </button>
      <input
        type="number"
        value={qty}
        readOnly
        style={{ width: "30px", color: "initial", textAlign: "center" }}
      />
      <button
        className="myNewC"
        type="button"
        onClick={handleIncrement}
        style={{
          width: "20px",
          backgroundColor: "initial",
          marginLeft: "5px",
          fontWeight: "900",
        }}
      >
        +
      </button>
    </div>
  );
};

export default QuantitySelector;
