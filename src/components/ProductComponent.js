
import React, { Component } from 'react'

export default class ProductComponent extends Component {
  render() {
    return (
      <div className="card">
        <img src="https://cdn.pixabay.com/photo/2017/09/25/13/12/puppy-2785074__340.jpg"></img>
        <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Sample Text</p>
    <a href="#" className="btn btn-primary">Do Something</a>
    </div>
</div>
    )
  }
}
