import React from "react";
import Backdrop from "../components/Backdrop";
import {getComponentName} from "1-react/src/lib/utils";
import Dialog from "..//components/Dialog";

export const layoutContext = React.createContext({});
layoutContext.displayName = "LayoutContext";

export class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dialog: <DialogContainer />,
    };
    this.setDialog = this.setDialog.bind(this);
  }

  setDialog(dialog) {
    this.setState({ dialog });
  }

  render() {
    const value = {
      dialog: this.state.dialog,
      setDialog: this.setDialog,
    };
    return (
      <layoutContext.Provider value={value}>
        {this.props.children}
      </layoutContext.Provider>
    );
  }
}

export const DialogContainer = () => (
  <layoutContext.Consumer>
    {({ dialog }) => dialog && <Backdrop>{dialog}</Backdrop>}
  </layoutContext.Consumer>
);

export const withLayout = (WrappedComponent) => {
  const WithLayout = (props) => (
    <layoutContext.Consumer>
      {({ dialog, setDialog }) => {
        const openDialog = () => setDialog(dialog);
        const closeDialog = () => setDialog(null);

        const enhancedProps = {
          openDialog,
          closeDialog,
        };
        return <WrappedComponent {...props} {...enhancedProps} />;
      }}
    </layoutContext.Consumer>
  );
  WithLayout.displayName = `WithLayout(${getComponentName(WrappedComponent)})`;
  return WithLayout;
};
