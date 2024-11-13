import React from "react";

const routerContext = React.createContext({})
routerContext.displayName = 'RouterContext';

export const Router = () => {
  const [path, setPath] = React.useState(window.location.pathname)

  const changePath = (path) => {
    setPath(path)
    window.history.pushState({ path }, "", path);
  }

  const handlePopstate = (event)  => {
    const nextPath = event.state && event.state.path;
    if (!nextPath) return;
    setPath(nextPath);
  }

  React.useEffect(() => {
    window.addEventListener("popstate", handlePopstate);
    window.history.replaceState({ path }, "");

    return () => {
      window.removeEventListener("popstate", handlePopstate);
    }
  }, [path]);

  const contextValue = {
    path,
    changePath,
  };

  return (
    <routerContext.Provider value={contextValue}>
      {this.props.children}
    </routerContext.Provider>
  );
}
