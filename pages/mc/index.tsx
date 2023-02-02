import React from "react";
import { MoCoButton } from "@/components/MC/Button/MoCoButton";
import { McNavMenu } from "@/components/MC/NavMenu/McNavMenu";

const NbComponents = () => {
  return (
    <div style={{
      fontFamily: "'Overpass', sans-serif"
    }}>
      <McNavMenu />
      <MoCoButton>Start a practice conversation</MoCoButton>
      <MoCoButton primary={false}>View More Articles & Resources</MoCoButton>
    </div>
  );
}

export default NbComponents;
