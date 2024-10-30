import * as MyRouter from "./lib/MyRouter";
import CartPage from "./pages/CartPage";
import OrderPage from "./pages/OrderPage";
import ProductPage from "./pages/ProductPage";
import Dialog from "./components/Dialog";
import Backdrop from "./components/Backdrop";

const App = () => (
  <MyRouter.Router>
    <MyRouter.Routes>
      <MyRouter.Route path="/cart" element={<CartPage />} />
      <MyRouter.Route path="/order" element={<OrderPage />} />
      <MyRouter.Route path="/" element={<ProductPage />} />
    </MyRouter.Routes>
    <Backdrop>
      <Dialog />
    </Backdrop>
  </MyRouter.Router>
);

export default App;
