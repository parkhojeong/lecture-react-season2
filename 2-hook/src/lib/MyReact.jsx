import React from "react";

const MyReact = (function MyReact(){
  let memorizedState;
  let isInitialized = false;

  function useState(initialValue = "") {
    const {forceUpdate} = useForceUpdate();
    if(!isInitialized){
      memorizedState = initialValue;
      isInitialized = true;
    }

    const setState = value => {
      if(memorizedState === value) return;
      memorizedState = value;
      forceUpdate();
    }

    console.log(initialValue, memorizedState, isInitialized)

    return [memorizedState, setState]
  }

  function useForceUpdate() {
    const [value, setValue] = React.useState(1);
    const forceUpdate = () => setValue(value + 1);
    return {forceUpdate}
  }

  return {useState: useState}
})()


export default MyReact;
