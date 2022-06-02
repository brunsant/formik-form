import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignInComponent from "./SignInComponent";
import SignUpComponent from "./SignUpComponent";
import CreateInvoiceComponent from "./CreateInvoiceComponent";

class RootComponent extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route exact path={"/signin"} element={<SignInComponent />} />
          <Route exact path={"/signup"} element={<SignUpComponent />} />
          <Route
            exact
            path={"/create_invoice"}
            element={<CreateInvoiceComponent />}
          />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default RootComponent;
