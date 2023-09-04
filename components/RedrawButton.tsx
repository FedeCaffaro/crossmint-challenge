'use client';

import React from 'react';
import { recreateGoalOnEmptyMap } from '@/services/planet.service';

const RedrawButton: React.FC = () => {
  const handleRedrawUniverse = async () => {
    await recreateGoalOnEmptyMap();
    alert("Universe drawn successfully!");
  }

  return <button onClick={handleRedrawUniverse} className='button'>Draw Universe</button>;
}

export default RedrawButton;