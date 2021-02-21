import React, { useState } from "react";
import ItemsCarousel from "react-items-carousel";
import Theme from "../styles/Theme";

const ItemCarousel = () => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 40;
  const recommendations = JSON.parse(window.sessionStorage.getItem("data"))
    .data;
  console.log(recommendations);
  const cards = recommendations.data.map(([foodName, pictureLink]) => {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "flex-end",
          height: 400,
          background: `url(${pictureLink})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <h2
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: 75,
            backgroundColor: "#4B5454",
            color: "white",
            fontFamily: "Raleway",
            borderRadius: "10px",
            width: "100%",
            marginBottom: "0px",
          }}
        >
          {foodName}
        </h2>
      </div>
    );
  });
  return (
    <div style={{ padding: `0 ${chevronWidth}px` }}>
      <ItemsCarousel
        requestToChangeActive={setActiveItemIndex}
        activeItemIndex={activeItemIndex}
        numberOfCards={3}
        gutter={20}
        leftChevron={
          <button
            style={{
              backgroundColor: Theme.beige,
              borderRadius: "6px",
              padding: "5px 10px",
              border: "2px solid",
              cursor: "pointer",
            }}
          >
            {"<"}
          </button>
        }
        rightChevron={
          <button
            style={{
              backgroundColor: "#FD8664",
              borderRadius: "6px",
              padding: "5px 10px",
              border: "2px solid",
              cursor: "pointer",
            }}
          >
            {">"}
          </button>
        }
        outsideChevron
        chevronWidth={chevronWidth}
      >
        {cards}
      </ItemsCarousel>
    </div>
  );
};
export default ItemCarousel;
