import * as MyLayout from "../lib/MyLayout";
import * as MyRouter from "../lib/MyRouter";
import Dialog from "./Dialog";
import Button from "./Button";

const PaymentSuccessDialog = ({ closeDialog, navigate}) => {
  const handleClickYes = () => {
    closeDialog()
    navigate("/order")
  }
  const handleClickNo = () => {
    closeDialog()
    navigate("/")
  }

  return <Dialog
    header={<>성공</>}
    footer={
      <>
        <Button onClick={handleClickYes}>네</Button>
        <Button onClick={handleClickNo}>아니오</Button>
      </>
    }
  >
    주문에 성공했습니다. 주문 내역을 보시겠습니까?
  </Dialog>
}

export default MyRouter.withRouter(MyLayout.withLayout(PaymentSuccessDialog));
