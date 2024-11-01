import Page from "../../components/Page";
import Title from "../../components/Title";
import PaymentButton from "../../pages/CartPage/PaymentButton";
import ProductItem from "../../components/ProductItem";
import OrderForm from "../../pages/CartPage/OrderForm";
import React from "react";
import ProductApi from "shared/api/ProductApi";
import ErrorDialog from "../../components/ErrorDialog";
import OrderApi from "shared/api/OrderApi";

const CartPage = () => {
  const [product, setProduct] = React.useState(null);

   const fetch = async () => {
     try {
       const product = await ProductApi.fetchProduct("CACDA421");
       setProduct(product);
     } catch (e) {
       // openDialog(<ErrorDialog />);
       return;
     }
  }

  const handleSubmit = async (values) => {
    try {
      await OrderApi.createOrder(values);
    } catch (e) {
      // openDialog(<ErrorDialog />);
      return;
    }
  }

  React.useEffect(() => {
    fetch()
  }, [])

  return (
    <div className="CartPage">
      <Page
        header={<Title backUrl="/">장바구니</Title>}
        footer={<PaymentButton />}
      >
        {product && <ProductItem product={product} />}
        <OrderForm onSubmit={handleSubmit} />
      </Page>
    </div>
  );
};

export default CartPage;
