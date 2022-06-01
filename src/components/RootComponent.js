import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignInComponent from "./SignInComponent";

class RootComponent extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route exact path={"/signin"} element={<SignInComponent />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default RootComponent;
