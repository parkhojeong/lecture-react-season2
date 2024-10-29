import * as MyRouter from "./lib/MyRouter";
import CartPage from "1-react/src/pages/CartPage";
import ProductPage from "1-react/src/pages/ProductPage";
import OrderPage from "1-react/src/pages/OrderPage";

const App = () => (
  <MyRouter.Router>
    <MyRouter.Routes >
      <MyRouter.Route path={"/cart"} element={<CartPage />}/>
      <MyRouter.Route path={"/order"} element={<OrderPage />}/>
      <MyRouter.Route path={"/"} element={<ProductPage />}/>
    </MyRouter.Routes>
  </MyRouter.Router>
);

export default App;
