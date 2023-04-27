
import React, { Component } from 'react'
import ProductComponent from './ProductComponent'
import React, { Children } from "react";
export default class ShelfComponent extends Component {
  render() {
    return (
      <div class =  "row">
        <div class = "col-md-1"></div>
        <div class="col-md-2"><ProductComponent></ProductComponent></div>
        <div class="col-md-2"><ProductComponent></ProductComponent></div>
      </div>
    )
  }
}
