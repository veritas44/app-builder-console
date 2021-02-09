import React, {useState} from 'react';

export default function useDrawerToggle(value: boolean) {
  const [leftDrawerToggleState, setLeftDrawerToggleState] = useState(true);
  return [leftDrawerToggleState, setLeftDrawerToggleState];
}

// export  function getLeftDrawerToggle{
// 	return leftDrawerToggleState
// 	}

// export  function setLeftDrawerToggle(value: boolean){
// 	setLeftDrawerToggleState(value)
// 	}
