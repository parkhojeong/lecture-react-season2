import Card from "../../components/Card";
import Button from "../../components/Button";

const OrderStatusCard = ({status, name, orderDate, id}) => {
  return <Card
    header={status + '\n' + name}
    data={[
      {term: "주문일시", description: orderDate},
      {term: "주문번호", description: id}
    ]}
    footer={<>
      <Button>전화</Button>
      <Button>가게보기</Button>
    </>}
  />
}

export default OrderStatusCard
