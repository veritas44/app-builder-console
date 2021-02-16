import {useState} from 'react';

export default function useDrawerToggle() {
  const [leftDrawerToggleState, setLeftDrawerToggleState] = useState(false);
  return [leftDrawerToggleState, setLeftDrawerToggleState];
}

// export  function getLeftDrawerToggle{
// 	return leftDrawerToggleState
// 	}

// export  function setLeftDrawerToggle(value: boolean){
// 	setLeftDrawerToggleState(value)
// 	}
