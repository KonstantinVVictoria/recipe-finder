import React, { useState, useEffect } from "react";
import ItemsCarousel from "react-items-carousel";
import Theme from "../styles/Theme";

const ItemCarousel = () => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const [cards, populateCards] = useState(null);
  const chevronWidth = 40;
  useEffect(() => {
    if (!cards) {
      const recommendations = JSON.parse(window.sessionStorage.getItem("data"))
        .data;
      const list = recommendations.data.map(([foodName, pictureLink]) => {
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
              overflow: "hidden",
              borderRadius: "25px",
              backgroundColor: "#4B5454",
              boxShadow: "0px 0px 20px 1px rgba(0,0,0,0.5)",
              margin: "20px 0px",
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

      populateCards(list);
    }
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
              backgroundColor: "#FD8664",
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
