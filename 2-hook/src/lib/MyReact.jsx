import React from "react";

const MyReact = (function MyReact(){
  let firstname;
  let isInitialized = false;

  function useName(initialValue = "") {
    const {forceUpdate} = useForceUpdate();
    if(!isInitialized){
      firstname = initialValue;
      isInitialized = true;
    }

    const setFirstname = value => {
      if(firstname === value) return;
      firstname = value;
      forceUpdate();
    }

    return [firstname, setFirstname]
  }

  function useForceUpdate() {
    const [value, setValue] = React.useState(1);
    const forceUpdate = () => setValue(value + 1);
    return {forceUpdate}
  }

  return {useName}
})()


export default MyReact;
