import React from 'react';
import ProductApi from "shared/api/ProductApi";
import Page from "../../components/Page";
import Title from "../../components/Title";
import Navbar from "../../components/Navbar";
import ProductItem from "../../components/ProductItem";


const fakeProduct = {
  id: "CACDA421",
  name: "해물 계란 라면",
  price: "6000",
  thumbnail: "./images/menu-해물계란라면.jpg",
};

class ProductPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productList: []
    }
  }

  componentDidMount() {
    this.fetch();
  }

  async fetch() {
    try{
      const productList = await ProductApi.fetchProductList();
      this.setState({productList});
    }catch (e){
      console.error(e);
    }
  }

  render(){
    return (
    <div className="ProductPage">
      <Page header={<Title>메뉴목록</Title>} footer={<Navbar/>}>
        <ul>
          {this.state.productList.map(product => (
            <li key={product.id}>
            <ProductItem product={product}/>
            </li>
        ))}

      </ul>
    </Page>
    </div>
  )}
}

export default ProductPage;
