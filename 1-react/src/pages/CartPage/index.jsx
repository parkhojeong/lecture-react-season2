import React from "react";
import Page from "../../components/Page";
import ProductItem from "../../components/ProductItem";
import Title from "../../components/Title";
import OrderForm from "./OrderForm";
import PaymentButton from "./PaymentButton";
import ProductApi from "shared/api/ProductApi";

const fakeProduct = {
  id: "CACDA420",
  name: "해물 계란 라면",
  price: 6000,
  thumbnail: "./images/menu-해물계란라면.jpg",
};

class CartPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      product: null
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  async fetch(id) {
    try {
      const product = await ProductApi.fetchProduct(id);
      this.setState({product})
    }catch (e) {
      console.error(e)
    }
  }

  componentDidMount() {
    this.fetch("CACDA421");
  }

  handleSubmit(values) {
    console.log("[CartPage]", values);
  }

  render(){
    const {product} = this.state;
    return (
      <div className="CartPage">
        <Page
          header={<Title backUrl="/">장바구니</Title>}
          footer={<PaymentButton />}
        >
          {product && <ProductItem product={product} />}
          <OrderForm onSubmit={this.handleSubmit}/>
        </Page>
      </div>
    );
  }
}

export default CartPage;
