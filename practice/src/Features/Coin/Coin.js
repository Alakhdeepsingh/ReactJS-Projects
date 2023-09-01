import React from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";

const Coin = () => {
  const count = useSelector((state) => state.counter.count);
  const themeTextColor = useSelector((state) => state.theme.color);
  console.log(count);
  return (
    <div>
      <span className="value" style={{ color: themeTextColor }}>
        Coin:{count}
      </span>
    </div>
  );
};

export default Coin;
