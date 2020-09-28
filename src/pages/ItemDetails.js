import React, { useState, useEffect } from "react";

const ItemDetails = ({ match }) => {
  const [item, setItem] = useState({
    images: {},
  });
  const itemId = match.params.id;
  const fetchItem = async () => {
    const data = await fetch(
      `https://fortnite-api.theapinetwork.com/item/get?id=${itemId}`
    );
    const result = await data.json();
    console.log("result: " + JSON.stringify(result.data));
    setItem(result.data.item);
  };
  useEffect(() => {
    fetchItem();
  }, []);
  return (
    <div style={{ display: "flex", justifyContent: "space-evenly", alignItems: "center" }}>
      <div>
        <img src={item.images.background} />
      </div>
      <div>
        <div style={{fontSize: "3rem"}}>{item["name"]}</div>
        <div style={{fontSize: "2rem"}}>{item["description"]}</div>
        <div style={{fontSize: "2rem"}}>Cost: {item["cost"]}</div>
      </div>
    </div>
  );
};

export default ItemDetails;
