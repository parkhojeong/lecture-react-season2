import Page from "../../components/Page";
import Title from "../../components/Title";
import Button from "../../components/Button";
import ProductItem from "1-react/src/components/ProductItem";

const fakeProduct = {
  "id": "CACDA421",
  "name": "해물 계란 라면",
  "price": 6000,
  "thumbnail": "./images/menu-해물계란라면.jpg"
}

const CartPage = () => {
  return (
    <div className={"CartPage"}>
      <Page
        header={<Title>장바구니</Title>}
        footer={
        <Button styleType={"brand-solid"} block>
              결제하기
        </Button>}
      >
        <ProductItem product={fakeProduct}/>
      </Page>
    </div>
  )
}

export default CartPage
