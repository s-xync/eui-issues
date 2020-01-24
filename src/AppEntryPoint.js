import React, { Component } from "react";
import { EuiGlobalToastList, EuiIcon } from "@elastic/eui";

class AppEntryPoint extends Component {
  state = {
    toasts1: [
      { id: "1", title: "This is title", text: "This is toast text. Cross icon not visible" },
      { id: 2, title: "This is title", text: "This is toast text. Cross icon not visible" }
    ]
  };

  render() {
    const { toasts1, toasts2 } = this.state;
    return (
      <>
        <h1>Please see toasts and console logs and here is a icon for lock</h1>
        <EuiIcon type="lock" size="xl" />
        <h1>Lock Icon is not visible</h1>
        <EuiGlobalToastList
          toasts={toasts1}
          dismissToast={() => console.log("toast dismissal event")}
          toastLifeTimeMs={15000}
        />
      </>
    );
  }
}

export default AppEntryPoint;
