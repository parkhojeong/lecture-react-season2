import ProductItem from "../..//components/ProductItem";

const OrderableProductItem = () => {
  const handleClick = () => {
    console.log("todo: 장바구니 화면으로 이동")
  }

    return <ProductItem product={product} onClick={handleClick}/>
}

export default OrderableProductItem;
