import React from "react";
import { FmButton } from "@/components/FM/Button/FmButton";
import { IoMdPlay } from "react-icons/io";
import { FmNavMenu } from "@/components/FM/NavMenu/FmNavMenu";

const NbComponents = () => {
  return (
    <div style={{
      fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"
    }}>
      <FmNavMenu />
      <FmButton><IoMdPlay />Watch Episode 1</FmButton>
      <FmButton primary={false}>Take episode 1 quiz</FmButton>
    </div>
  )
}

export default NbComponents;
