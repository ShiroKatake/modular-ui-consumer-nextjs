import React from "react";
import { NbButton } from "@/components/NB/Button/NbButton";
import { NbNavMenu } from "@/components/NB/NavMenu/NbNavMenu";

const NbComponents = () => {
  return (
    <div style={{
      fontFamily: "'Overpass', sans-serif"
    }}>
      <NbNavMenu />
      <NbButton>Get a guide</NbButton>
    </div>
  );
}

export default NbComponents;
