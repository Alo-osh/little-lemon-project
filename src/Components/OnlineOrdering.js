import { useState } from "react";
import { useItems } from "./ItemsContext";
import Cart from "./Cart";
const OnlineOrdering = () => {
  const { objects } = useItems();

  const [counts, setCounts] = useState({});

  const increment = (id) => {
    setCounts((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1,
    }));
  };

  const decrement = (id) => {
    setCounts((prev) => ({
      ...prev,
      [id]: prev[id] > 0 ? prev[id] - 1 : 0,
    }));
  };

  return (
    <div className="items">
      {objects.map((object) => (
        <div className="onlineOrdering" key={object.id}>
          <img alt="dish" src={object.getImgSrc()} />

          <div className="foodInfo">
            <h4>
              {object.dish}
              <span className="price">{object.price}</span>
            </h4>
            <p className="addToCart">Add to cart</p>
          </div>

          <div className="quantityBox">
            <button className="button1" onClick={() => decrement(object.id)}>-</button>
            <span>{counts[object.id] || 0}</span>
            <button className="button2" onClick={() => increment(object.id)}>+</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OnlineOrdering;