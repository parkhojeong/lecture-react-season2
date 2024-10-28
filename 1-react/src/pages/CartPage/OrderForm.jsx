import React from "react";
import FormControl from "../../components/FormControl";

class OrderForm extends React.Component {
  deliveryAddressRef = React.createRef()
  deliveryContactRef = React.createRef()
  paymentMethodRef = React.createRef()
  messageToShopRef = React.createRef()
  messageToRiderRef = React.createRef()

  handleSubmit (e) {
    e.preventDefault();
    console.log("submit");
    console.log(this.deliveryAddressRef.current.value)
    console.log(this.deliveryContactRef.current.value)
    console.log(this.paymentMethodRef.current.value)
    console.log(this.messageToShopRef.current.value)
    console.log(this.messageToRiderRef.current.value)
  };

  render(){
    return (
      <form className="OrderForm" id="order-form" onSubmit={(e) =>this.handleSubmit(e)} ref={this.orderFormRef}>
        <FormControl label="주소" htmlFor="deliveryAddress" required>
          <input
            type="text"
            name="deliveryAddress"
            id="deliveryAddress"
            placeholder="배달받을 주소를 입력하세요"
            required
            autoFocus
            ref={this.deliveryAddressRef}
          />
        </FormControl>
        <FormControl label="연락처" htmlFor="deliveryContact" required>
          <input
            type="text"
            name="deliveryContact"
            id="deliveryContact"
            placeholder="연락처를 입력하세요"
            pattern="^\d{2,3}-\d{3,4}-\d{4}$"
            required
            ref={this.deliveryContactRef}
          />
        </FormControl>
        <FormControl label="결재수단" htmlFor="paymentMethod" required>
          <select name="paymentMethod" id="paymentMethod" ref={this.paymentMethodRef}>
            <option value="마이페이">마이페이</option>
            <option value="만나서 결제">만나서 결제</option>
          </select>
        </FormControl>
        <FormControl label="가게 사장님께" htmlFor="messageToShop">
          <textarea name="messageToShop" id="messageToShop" ref={this.messageToShopRef}></textarea>
        </FormControl>
        <FormControl label="라이더님께" htmlFor="messageToRider">
          <textarea name="messageToRider" id="messageToRider" ref={this.messageToRiderRef}></textarea>
        </FormControl>
      </form>
    );
  }


};

export default OrderForm;
