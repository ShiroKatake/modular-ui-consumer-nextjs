import React from 'react';
import { FmButton } from '@/components/FM/Button/FmButton';
import { IoMdPlay } from 'react-icons/io';

const NbComponents = () => {
  return (
    <div>
      <FmButton><IoMdPlay />Watch Episode 1</FmButton>
      <FmButton primary={false}>Take episode 1 quiz</FmButton>
    </div>
  )
}

export default NbComponents;
