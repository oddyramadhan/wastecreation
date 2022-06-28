import React from "react";
import CardsExplore from "../components/card-explore";
import ExploreHome from "../components/explore";
import HeaderExplore from "../components/header-explore";

export default function Explore() {
  return (
    <div>
      <HeaderExplore />
      <ExploreHome />
      <CardsExplore />
    </div>
  );
}
