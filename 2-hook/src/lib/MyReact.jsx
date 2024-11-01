import React from "react";

const MyReact = (function MyReact(){
  let memorizedStates = [];
  let isInitialized = [];

  function useState(cursor, initialValue = "") {
    const {forceUpdate} = useForceUpdate();
    if(!isInitialized[cursor]){
      memorizedStates[cursor] = initialValue;
      isInitialized[cursor] = true;
    }

    const state = memorizedStates[cursor];

    const setState = nextState => {
      if(state === nextState) return;
      memorizedStates[cursor] = nextState;
      forceUpdate();
    }

    console.log(initialValue, state, isInitialized[state])

    return [state, setState]
  }

  function useForceUpdate() {
    const [value, setValue] = React.useState(1);
    const forceUpdate = () => setValue(value + 1);
    return {forceUpdate}
  }

  return {useState: useState}
})()


export default MyReact;
