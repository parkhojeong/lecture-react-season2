import Button from "./components/Button";
import ProductItem from "./components/ProductItem";
import {Component} from "react";
import Title from "./components/Title";

const fakeProduct = {
  id: "CACD111",
  name: "해물 계란 라면",
  price: 5000,
  thumbnail: "./images/menu-해물계란라면.jpg"
}


const App = () => (
  <div className="ProductPage">
    <div className="Page">
      <Title>메뉴 목록</Title>
      <main>
        <ul>
          <li>
            <ProductItem product={fakeProduct}/>
          </li>
        </ul>
      </main>
      <footer>
        <nav className="Navbar">
          <a className="active" href="#">
            메뉴목록
          </a>
          <a href="#">주문내역</a>
        </nav>
      </footer>
    </div>
  </div>
);

export default App;
