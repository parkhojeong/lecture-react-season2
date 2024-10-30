import ProductItem from "../../components/ProductItem";
import {routerContext} from '../../lib/MyRouter';

const OrderableProductItem = ({ product }) => {
  return <routerContext.Consumer>
    {({changePath}) => {
      const handleClick = () => {
        changePath("/cart")
      }
      return (
        <ProductItem product={product} onClick={handleClick} />
      )
    }}
  </routerContext.Consumer>

};

export default OrderableProductItem;
