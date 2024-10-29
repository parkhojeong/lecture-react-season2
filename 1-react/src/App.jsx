import CartPage from "./pages/CartPage";
import OrderPage from "./pages/OrderPage";
import ProductPage from "./pages/ProductPage";
import createEventEmitter from "shared/lib/EventEmitter";

const App = () => (
  <>
    {/* <ProductPage /> */}
    {/* <OrderPage /> */}
    <CartPage />
  </>
);

export default App;

const eventEmitter = createEventEmitter(0);
const logger = value => console.log(value);

eventEmitter.on(logger)
console.log(eventEmitter.get()); //0
eventEmitter.set(1) //1
eventEmitter.set(2) //2

setTimeout(() => eventEmitter.set(10), 3000);
