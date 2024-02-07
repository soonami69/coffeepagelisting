"use client";
import React from "react";
import { useState, useEffect } from "react";
import { TABS } from "../const.js";
import CoffeeCard from "./coffeecard.jsx";

export function Tabs() {
  const [selectedTab, setSelectedTab] = useState(TABS.ALL);
  const [clicked, setClicked] = useState(false);
  const [coffeeData, setCoffeeData] = useState(Array(0));

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json"
    )
      .then((res) => res.json())
      .then((data) => setCoffeeData(data));
  }, []);

  return (
    <>
      <nav>
        <div className="tabs">
          <button
            className={`tabs-all${selectedTab === TABS.ALL ? " selected" : ""}`}
            onClick={() => {
              setSelectedTab(TABS.ALL);
              setClicked(false);
            }}
            style={{ backgroundColor: clicked ? "transparent" : "#6F757C" }}
          >
            {TABS.ALL}
          </button>
          <button
            className={`tabs-avail${
              selectedTab === TABS.AVAILABLE ? " selected" : ""
            }`}
            onClick={() => {
              setSelectedTab(TABS.AVAILABLE);
              setClicked(true);
            }}
            style={{ backgroundColor: clicked ? "#6F757C" : "transparent" }}
          >
            {TABS.AVAILABLE}
          </button>
        </div>
      </nav>
      <div className="griddy">
        {coffeeData.map(
          (coffee, index) =>
            (selectedTab === TABS.ALL || coffee.available) && (
              <CoffeeCard
                key={index}
                name={coffee.name}
                img={coffee.image}
                price={coffee.price}
                rating={coffee.rating}
                votes={coffee.votes}
                popular={coffee.popular}
                available={coffee.available}
              />
            )
        )}
      </div>
    </>
  );
}
