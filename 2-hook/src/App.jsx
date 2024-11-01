import React from "react";

// const App = () => <>2-hook</>;

// export default App;

class Contract extends React.Component {
  render() {
    const props = this.props;
    const sign = () => {
      setTimeout(() => console.log('서명인: ', props, this.props) , 3000);
    }
    return <button onClick={sign}>sign</button>
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '사용자1'
    }
  }

  handleChange(e) {
    this.setState({name: e.target.value})
  }

  render() {
    return <>
      <select value={this.state.name} onChange={this.handleChange.bind(this)}>
        <option value={"사용자1"}>사용자1</option>
        <option value={"사용자2"}>사용자2</option>
      </select>
      <Contract name={this.state.name}/>
    </>
  }
}

export default App;
