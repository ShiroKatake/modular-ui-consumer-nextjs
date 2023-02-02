import React from "react";
import { IoMdPlay } from "react-icons/io";
import { FmButton } from "@/components/FM/Button/FmButton";
import { FmNavMenu } from "@/components/FM/NavMenu/FmNavMenu";

const NbComponents = () => {
  return (
    <div style={{
      fontFamily: "'Overpass', sans-serif"
    }}>
      <FmNavMenu />
      <FmButton><IoMdPlay />Watch Episode 1</FmButton>
      <FmButton primary={false}>Take episode 1 quiz</FmButton>
    </div>
  );
}

export default NbComponents;
