import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Shop = () => {
  const [items, setItems] = useState([
    {
      item: {
        images: {},
      },
    },
  ]);
  const fetchItems = async () => {
    const data = await fetch(
      "https://fortnite-api.theapinetwork.com/store/get"
    );
    const result = await data.json();
    console.log("result: " + JSON.stringify(result.data));
    setItems(result.data);
  };
  useEffect(() => {
    fetchItems();
  }, []);
  return (
    <div style={{ margin: "1%" }}>
      <div style={{ fontSize: "3rem", textAlign: "center", margin: "1%" }}>
        Shop
      </div>
      {items.map((item) => {
        return (
          <div
            key={item.itemId}
            style={{
              cursor: "pointer",
              margin: "1%",
              fontSize: "1.5rem",
              width: "30%",
            }}
          >
            <Link
              to={`/shop/` + item.itemId}
              style={{
                textDecoration: "none",
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
                color: "black",
              }}
            >
              <div>
                <img src={item.item.images.icon} width="25px" height="25px" />
              </div>
              <div style={{ margin: "0% 1%" }}>{item.item.name}</div>
              <div style={{ fontSize: "1rem", color: "grey" }}>
                {item.item.description}
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Shop;
