import React from "react";
import CartPage from "../pages/CartPage";
import OrderPage from "../pages/OrderPage";
import ProductPage from "../pages/ProductPage";

export const routerContext = React.createContext({});
routerContext.displayName = "RouterContext";

export class Router extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      path: window.location.pathname,
    };
    this.handleChangePath = this.handleChangePath.bind(this);
  }

  handleChangePath(path) {
    this.setState({ path });
  }

  render() {
    const contextValue = {
      path: this.state.path,
      changePath: this.handleChangePath,
    };

    return (
      <routerContext.Provider value={contextValue}>
        {this.props.children}
      </routerContext.Provider>
    );
  }
}

export const Route = () => null;

export const Routes = ({children}) => (
      <routerContext.Consumer>
        {({path}) => {
          let selectedRoute = null;
          React.Children.forEach(children, (child) => {
            // 리액트 엘리먼트인지 검사
            if(!React.isValidElement(child)) return;

            // 프래그먼트 검사
            if(child.type === React.Fragment) return;

            // Route 컴포넌트인지 검사
            if(!child.props.path || !child.props.element) return;

            // 요청 경로를 검사
            if(child.props.path !== path.replace(/\?.*$/, "")) return;

            selectedRoute = child.props.element;
          })

          return selectedRoute;
        }}
      </routerContext.Consumer>
);


export const Link = ({ to, ...rest }) => (
  <routerContext.Consumer>
    {({ path, changePath }) => {
      const handleClick = (e) => {
        e.preventDefault();
        if (to !== path) changePath(to);
      };

      return <a {...rest} href={to} onClick={handleClick} />;
    }}
  </routerContext.Consumer>
);
