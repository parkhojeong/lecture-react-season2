const App = () => <>2-hook</>;

export default App;

class Contract {
  constructor(name) {
    this.name = name;
  }

  sign() {
    const capturedName = this.name;
    setTimeout(() => console.log('서명인: ', capturedName) , 3000)
  }
}

// const contract = new Contract('사용자 1');
// contract.sign();
// contract.name = '사용자 2'

function createContract(name) {
  const sign = () => {
    setTimeout(() => console.log('서명인: ', name) , 3000)
  }

  return {sign}
}
const contract = createContract('사용자 3')
contract.sign()
