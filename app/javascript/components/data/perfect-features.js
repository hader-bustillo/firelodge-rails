import React from "react";

import {
  MapPinIcon,
  HomeModernIcon,
  CubeTransparentIcon,
  TvIcon,
} from "@heroicons/react/24/outline";

export const title = "What if perfect was possible?";
export const subtitle = () => {
  return (
    <>
      Connection is the key to everything. Your family will connect with{" "}
      <br />
      each other and the outdoors of Snoqualmie Pass.;
    </>
  );
};

export const perfectFeatures = [
  {
    name: "Tranquil setting",
    description:
      "Buried in snow all winter, this scenic mountain property is the perfect basecamp for outdoor adventures.",
    icon: MapPinIcon,
  },
  {
    name: "Set in the mountains",
    description:
      "Cozy home nestled in a beautiful Cascades mountain community.",
    icon: HomeModernIcon,
  },
  {
    name: "Beds for everyone",
    description:
      "Fire Lodge truly has everything you need for a comfortable getaway. Just book, and show up. ",
    icon: CubeTransparentIcon,
  },
  {
    name: "Adventure awaits",
    description:
      "It's a great time to break out the snowshoes and sleds provided. Luckily the lifts are just a 2-minute walk away, so you won’t hear too much complaining! ",
    icon: TvIcon,
  },
];
