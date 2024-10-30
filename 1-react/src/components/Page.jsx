import * as MyLayout from "../lib/MyLayout";
import Dialog from "../components/Dialog";

const Page = ({ header, children, footer }) => (
  <div className="Page">
    <header>{header}</header>
    <main>{children}</main>
    <footer>{footer}</footer>
    <MyLayout.DialogContainer />
    <MyLayout.layoutContext.Consumer>
      {({setDialog}) => <button onClick={() =>{
        setDialog(<Dialog />)
        setTimeout(()=>{setDialog(null)},5000)
      }}>open dialog</button>}
    </MyLayout.layoutContext.Consumer>
  </div>
);

export default Page;
