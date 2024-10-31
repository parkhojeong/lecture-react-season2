import * as MyLayout from "../lib/MyLayout";
import Dialog from "./Dialog";
import Button from "./Button";

const PaymentSuccessDialog = ({ closeDialog, onClickYes, onClickNo }) => {
  const handleClickYes = () => {
    closeDialog()
    onClickYes()
  }
  const handleClickNo = () => {
    closeDialog()
    onClickNo()
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

export default MyLayout.withLayout(PaymentSuccessDialog);
