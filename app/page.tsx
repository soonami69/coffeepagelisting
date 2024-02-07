import React from "react";
import "./styles.css";
import { DM_Sans } from "next/font/google";
import { Tabs } from "./components/tabs";
import "./tabs.css";

/*
//
// to do: format
//
*/
const dmsans = DM_Sans({ subsets: ["latin"] });

export default function Home() {
  return (
    <main id="main">
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
    </main>
  );
}
