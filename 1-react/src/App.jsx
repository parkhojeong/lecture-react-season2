import CartPage from "./pages/CartPage";
import OrderPage from "./pages/OrderPage";
import ProductPage from "./pages/ProductPage";

const App = () => {
  const {pathname} = window.location;

  return <>
    {pathname === '/order' && <OrderPage />}
    {pathname === '/cart' && <CartPage/>}
    {!['/order', '/cart'].includes(pathname) && <ProductPage />}
  </>
};

export default App;
