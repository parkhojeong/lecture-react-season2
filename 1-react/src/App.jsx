import CartPage from "./pages/CartPage";
import OrderPage from "./pages/OrderPage";
import ProductPage from "./pages/ProductPage";

const App = () => (
  <>
    {/* <ProductPage /> */}
    {/* <OrderPage /> */}
    <CartPage />
  </>
);

export default App;

class Foo extends React.Component {
  render(){
    return <>Foo</>
  }
}

class MyComponent extends React.Component {
  divRef = React.createRef();
  fooRef = React.createRef();


  constructor(props) {
    super(props);
    console.log("constructor", this.divRef)
  }

  render() {
    console.log("render", this.divRef)
    return <>
      <div ref={this.divRef} />
      <Foo ref={this.fooRef} />
    </>
  }

  componentDidMount() {
    console.log("componentDidMount divRef", this.divRef)
    console.log("componentDidMount fooRef", this.fooRef)
  }

}

// export default MyComponent
