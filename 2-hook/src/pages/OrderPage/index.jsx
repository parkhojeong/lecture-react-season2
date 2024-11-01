import Page from "../../components/Page";
import Title from "../../components/Title";
import Navbar from "../../components/Navbar";
import OrderStatusCard from "../../pages/OrderPage/OrderStatusCard";
import OrderPaymentCard from "../../pages/OrderPage/OrderPaymentCard";
import OrderDeliveryCard from "../../pages/OrderPage/OrderDeliveryCard";
import React from "react";
import OrderApi from "shared/api/OrderApi";
// import ErrorDialog from "../../components/ErrorDialog";


const OrderPage = () => {
  const [order, setOrder] = React.useState(null);

  const fetch = async () => {
    try {
      const order = await OrderApi.fetchMyOrder();
      setOrder( order );
    } catch (e) {
      // openDialog(<ErrorDialog />);
      return;
    }
  }

  React.useEffect(() => {
    fetch();
  }, [])

  return (
    <div className="OrderPage">
      <Page header={<Title>주문내역</Title>} footer={<Navbar />}>
        {order && (
          <>
            <OrderStatusCard order={order} />
            <OrderPaymentCard order={order} />
            <OrderDeliveryCard order={order} />
          </>
        )}
      </Page>
    </div>
  );
};

export default OrderPage;
