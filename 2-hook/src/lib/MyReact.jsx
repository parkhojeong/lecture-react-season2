import React from "react";

const MyReact = (function MyReact() {
  const memorizedStates = [];
  let dep;
  const isInitialized = [];
  let cursor = 0;


  function useState(initialValue = "") {
    const { forceUpdate } = useForceUpdate();

    if (!isInitialized[cursor]) {
      memorizedStates[cursor] = initialValue;
      isInitialized[cursor] = true;
    }

    const state = memorizedStates[cursor];

    const setStateAt = (_cursor) => (nextState) => {
      if (state === nextState) return;
      memorizedStates[_cursor] = nextState;
      forceUpdate();
    };
    const setState = setStateAt(cursor);
    cursor = cursor + 1;

    return [state, setState];
  }

  // 구현을 위해 이곳만 리액트 훅을 사용한다.
  function useForceUpdate() {
    const [value, setValue] = React.useState(1);
    const forceUpdate = () => {
      setValue(value + 1);
      cursor = 0;
    };
    return {
      forceUpdate,
    };
  }

  function useEffect(effect, nextDep) {

    function runDeferedEffect() {
      const ENOUGH_TIME_TO_RENDER = 1
      setTimeout(effect, ENOUGH_TIME_TO_RENDER)
    }

    if(!isInitialized[cursor]){
      isInitialized[cursor] = true;
      dep = nextDep;
      runDeferedEffect();
      return;
    }

    if(dep === nextDep) return;
    dep = nextDep;
    runDeferedEffect();
  }

  return { useState, useEffect };
})();

export default MyReact;
