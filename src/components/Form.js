import React, { Component } from 'react'

export default class Form extends Component {
  render() {
    return (
      <form className="input-group col-6 my-2" onSubmit={this.props.getWeather}>
        <input type="text" name='city' className="form-control" id="city" placeholder="City" />
        <input type="text" name='country' className="form-control" id="country" placeholder="Country" />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-info">Get weather!</button>
        </span>
      </form>
    )
  }
}
