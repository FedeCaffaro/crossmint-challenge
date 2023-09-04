'use client';

import React from 'react';
import { deleteMap, recreateGoalOnEmptyMap } from '@/services/planet.service';

const RedrawButton: React.FC = () => {
  const handleRedrawUniverse = async () => {
    await recreateGoalOnEmptyMap();
    alert("Universe drawn successfully!");
  }
  const handleDeleteUniverse = async () => {
    await deleteMap();
    alert("Universe deleted successfully!");
  }

  return (<><button onClick={handleRedrawUniverse} className='button'>Draw Universe</button>
  <button onClick={handleDeleteUniverse} className='button'>Delete Universe</button></>
  );
}

export default RedrawButton;