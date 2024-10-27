import Page from "../..//components/Page";
import Title from "../..//components/Title";
import Navbar from "../..//components/Navbar";

const OrderPage = () => {
  return (
    <div className={"OrderPage"}>
      <Page header={<Title>주문내역</Title>} footer={<Navbar />} >
       컨텐츠
      </Page>

    </div>
  )

}

export default OrderPage
