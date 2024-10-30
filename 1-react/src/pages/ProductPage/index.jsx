import React from "react";
import ProductApi from "shared/api/ProductApi";
import Page from "../../components/Page";
import Title from "../../components/Title";
import Navbar from "../../components/Navbar";
import OrderableProductItem from "./OrderableProductItem";
import {routerContext} from '../../lib/MyRouter';

class ProductPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productList: [],
    };
  }

  componentDidMount() {
    this.fetch();
  }

  async fetch() {
    try {
      const productList = await ProductApi.fetchProductList();
      this.setState({ productList });
    } catch (e) {
      console.error(e);
    }
  }

  render() {
    return (
      <routerContext.Consumer>
        {({changePath}) => {
          return (
            <div className="ProductPage">
              <Page header={<Title>메뉴목록</Title>} footer={<Navbar/>}>
                <ul>
                  {this.state.productList.map((product) => (
                    <li key={product.id}>
                      <OrderableProductItem product={product} changePath={changePath}/>
                    </li>
                  ))}
                </ul>
              </Page>
            </div>
          )
        }}

      </routerContext.Consumer>
    );
  }
}

export default ProductPage;
