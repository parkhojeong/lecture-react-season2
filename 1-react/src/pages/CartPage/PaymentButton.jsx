import Button from "../../components/Button";

const PaymentButton = ({changePath}) => {
  const handleClick = () => {
    changePath("/order")
  }
  return (
    <div className="PaymentButton">
      <Button
        styleType="brand-solid"
        block
        style={{ padding: "12px 0" }}
        form={"order-form"}
        onClick={handleClick}
      >
        결제하기
      </Button>
    </div>
  )
}

export default PaymentButton;
