import React from "react";
import star from "../assets/Star_fill.svg";
import starEmpty from "../assets/Star.svg";
import Image from 'next/image';
import { DM_Sans } from "next/font/google";

const dmsans = DM_Sans({ subsets: ["latin"] });

export default function CoffeeCard({
  name,
  img,
  price,
  rating,
  votes,
  popular,
  available,
}) {
  return (
    <div className="coffeeCard">
      <img className="coffeeCard-photo" src={img} />
      <div className="coffeeCard-info">
        <h2 className="coffeeCard-name">{name}</h2>
        <p className="coffeeCard-price">{price}</p>
      </div>
      <div className="coffeeCard-ratingcard">
        <Image className="coffeeCard-star" src={rating ? star : starEmpty} />
        <p className={`${dmsans.className} coffeeCard-rating`}>{rating}</p>
        <p className={`${dmsans.className} coffeeCard-votes`}>
          {rating ? ` (${votes} votes)` : "No rating"}
        </p>
        {!available && <p className={`${dmsans.className} coffeeCard-soldOut`}>Sold out</p>}
      </div>
      <div className="coffeeCard-popHolder">
        {popular && <span className="coffeeCard-popular">Popular</span>}
      </div>
    </div>
  );
}
