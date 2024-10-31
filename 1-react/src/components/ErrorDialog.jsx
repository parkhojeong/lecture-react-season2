import Dialog from "./Dialog";
import Button from "./Button";
import * as MyLayout from '../lib/MyLayout'

const ErrorDialog = ({closeDialog}) => {
  return <Dialog
    header={<>오류</>}
    footer={<Button onClick={closeDialog}>네 알겠습니다</Button>}
  >
    잠시 후 다시 시도해 주세요.
  </Dialog>
}

export default MyLayout.withLayout(ErrorDialog)
