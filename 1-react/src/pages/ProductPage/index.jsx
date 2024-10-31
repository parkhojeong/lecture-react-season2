import React from "react";
import ProductApi from "shared/api/ProductApi";
import Page from "../../components/Page";
import Title from "../../components/Title";
import Navbar from "../../components/Navbar";
import OrderableProductItem from "./OrderableProductItem";
import * as MyLayout from '../../lib/MyLayout';

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
    const {startLoading, finishLoading} =this.props;
    startLoading("메뉴 목록 로딩중..");
    try {
      const productList = await ProductApi.fetchProductList();
      this.setState({ productList });
      finishLoading();
    } catch (e) {
      console.error(e);
    }
  }

  render() {
    return (
      <div className="ProductPage">
        <Page header={<Title>메뉴목록</Title>} footer={<Navbar />}>
          <ul>
            {this.state.productList.map((product) => (
              <li key={product.id}>
                <OrderableProductItem product={product} />
              </li>
            ))}
          </ul>
        </Page>
      </div>
    );
  }
}

export default MyLayout.withLayout(ProductPage);
