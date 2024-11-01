import React from "react";

const MyReact = (function MyReact(){
  let memorizedStates = [];
  let isInitialized = [];
  let cursor = 0;

  function useState(initialValue = "") {

    const {forceUpdate} = useForceUpdate();
    if(!isInitialized[cursor]){
      memorizedStates[cursor] = initialValue;
      isInitialized[cursor] = true;
    }

    const state = memorizedStates[cursor];

    const setStateAt = (_cursor) => nextState => {
      if(state === nextState) return;
      memorizedStates[_cursor] = nextState;
      forceUpdate();
    }
    const setState = setStateAt(cursor);

    console.log(initialValue, state, isInitialized[state])

    console.log(cursor, memorizedStates[cursor])
    cursor += 1;
    return [state, setState]
  }

  function useForceUpdate() {
    const [value, setValue] = React.useState(1);
    const forceUpdate = () => {
      setValue(value + 1);
      cursor = 0;
    }
    return {forceUpdate}
  }

  return {useState: useState}
})()


export default MyReact;
