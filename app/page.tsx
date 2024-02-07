import React from "react";
import "./styles.css";
import { DM_Sans } from "next/font/google";
import { Tabs } from "./components/tabs";
import "./tabs.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "simple coffee page listing",
  description: "...",
};

/*
//
// to do: format
//
*/
const dmsans = DM_Sans({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="biggest">
      <div id="main">
        <div className="bigCon">
          <header>
            <h1 className={`${dmsans.className} ourCollection`}>
              Our Collection
            </h1>
            <p className={`${dmsans.className} headerText`}>
              Introducing our Coffee Collection, a selection of unique coffees
              from different roast types and origins, expertly roasted in small
              batches and shipped fresh weekly.
            </p>
          </header>
          <Tabs />
        </div>
      </div>
    </div>
  );
}
