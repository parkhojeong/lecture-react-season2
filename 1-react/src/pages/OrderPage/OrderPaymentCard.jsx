import Card from "../../components/Card";

const OrderPaymentCard = ({totalPrice, paymentMethod, productPrice, deliveryPrice, discountPrice}) => {
  return <Card
    header={totalPrice + '\n' + paymentMethod}
    data={[
      {term: "메뉴가격", description: productPrice},
      {term: "배달료", description: deliveryPrice},
      {term: "할인금액", description: discountPrice}
    ]}
  />
}

export default OrderPaymentCard
