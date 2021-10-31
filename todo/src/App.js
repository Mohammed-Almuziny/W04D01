import React, { Component } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Todo from "./components/Todo";

export default class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Todo />
        <Footer />
      </>
    );
  }
}
