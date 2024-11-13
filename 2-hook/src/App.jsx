import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import OrderPage from "./pages/OrderPage";
import MyReact from "2-hook/src/lib/MyReact";
import React from "react";

const App = () => (
  <>
    {/* <ProductPage /> */}
    {/* <CartPage /> */}
    <OrderPage />
  </>
);

// export default App;


const countContext = MyReact.createContext({})

const CountProvider = ({children}) => {
  const [count, setCount] = React.useState(0)
  const value = {count, setCount};

  return <countContext.Provider value={value}>{children}</countContext.Provider>
}

const Count = () => {
  const {count} = MyReact.useContext(countContext)
  return <div>{count}</div>
}

const PlusButton = () => {
  const {count, setCount} = MyReact.useContext(countContext);
  const handleClick = () => setCount(count + 1);
  return <button onClick={handleClick}>카운트 증가</button>
}

export default () => <CountProvider>
  <Count />
  <PlusButton />
</CountProvider>
