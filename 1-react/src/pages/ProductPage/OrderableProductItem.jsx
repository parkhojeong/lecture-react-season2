import ProductItem from "../../components/ProductItem";

const OrderableProductItem = ({ product, changePath }) => {
  const handleClick = () => {
    changePath("/cart")
  }
  return (
    <ProductItem product={product} onClick={handleClick} />
  )
};

export default OrderableProductItem;
