import FormControl from "1-react/src/components/FormControl";

const OrderForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("handleSubmit")
  }

  return (
    <form className={"OrderForm"} id={"order-form"} onSubmit={handleSubmit}>
      <FormControl label={"주소"} htmlFor={"deliveryAddress"} required>
        <input
          type={"text"}
          id={"deliveryAddress"}
          name={"deliveryAddress"}
          placeholder={"배달받을 주소를 입력하세요"}
          required
          autoFocus
        />

      </FormControl>
      <FormControl label={"연락처"} htmlFor={"deliveryContact"} required>
        <input
          type={"text"}
          id={"deliveryContact"}
          name={"deliveryContact"}
          placeholder={"연락처를 입력하세요"}
          required
          pattern={"^\d{2,3}-\d{3,4}-\d{4}$"}
        />
      </FormControl>
      <FormControl label={"결제수단"} htmlFor={"paymentMethod"} required>
        <select name={"paymentMethod"} id={"paymentMethod"} value={""}>
          <option value={"마이페이"}>마이페이</option>
          <option value={"만나서 결제"}>만나서 결제</option>
        </select>
      </FormControl>
      <FormControl label={"가게 사장님께"} htmlFor={"messageToShop"}>
        <textarea
          id={"messageToShop"}
          name={"messageToShop"}
        />
      </FormControl>
      <FormControl label={"라이더님께"} htmlFor={"messageToRider"}>
        <textarea
          id={"messageToRider"}
          name={"messageToRider"}
        />
      </FormControl>
    </form>
  )
}

export default OrderForm;
