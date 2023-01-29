import React from "react";
import { MoCoButton } from "@/components/MC/Button/MoCoButton";

const NbComponents = () => {
  return (
    <div>
      <MoCoButton>Start a practice conversation</MoCoButton>
      <MoCoButton primary={false}>View More Articles & Resources</MoCoButton>
    </div>
  )
}

export default NbComponents;
