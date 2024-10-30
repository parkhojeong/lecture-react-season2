import * as MyRouter from "./lib/MyRouter";
import CartPage from "./pages/CartPage";
import OrderPage from "./pages/OrderPage";
import ProductPage from "./pages/ProductPage";

const App = () => (
  <MyRouter.Router>
    <MyRouter.Routes>
      <MyRouter.Route path="/cart" element={<CartPage />} />
      <MyRouter.Route path="/order" element={<OrderPage />} />
      <MyRouter.Route path="/" element={<ProductPage />} />
    </MyRouter.Routes>
  </MyRouter.Router>
);

export default App;

import React from "react";
import {getComponentName} from "./lib/utils";
class Header extends React.Component {
  render(){
    return <header>Header</header>
  }
}

class Button extends React.Component {
  handleClick = () => {
    this.props.log("click");
  }

  render(){
    return <button onClick={this.handleClick}>Button</button>
  }
}

const withLogging = WrappedComponent => {
  function log(message) {
    console.log(`[${getComponentName(WrappedComponent)}] ${message}`)
  }
  class WithLogging extends React.Component {
    componentDidMount() {
      log('mount')
    }
    render() {
      const enhancedProps = {
        log
      }
      return <WrappedComponent {...this.props} {...enhancedProps}/>
    }
  }

  return WithLogging;
}

const EnhancedHeader = withLogging(Header)
const EnhancedButton = withLogging(Button)

// export default () => (
//   <>
//     <EnhancedHeader />
//     <EnhancedButton />
//   </>
// )
