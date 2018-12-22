import React, { Component } from 'react'


export default class Weather extends Component {

  
  render() {
    const { id, weather, wind, sys, name, main, cod, message } = this.props
    if(cod===200){
      return (
        <div className='container'>
          <p>ID: {id}</p>
          <p>City : {name} {sys.country}</p>
          <p>Desciption : {weather.description}</p>
          <p>Sunrise: {sys.sunrise}, Sunset: {sys.sunset}</p>
          <p>Avg Temp :{main.temp}</p>
          <p>Min Temp : {main.temp_min}</p>
          <p>Max Temp :{main.temp_max}</p>
          <p>Humidity: {main.humidity}</p>
          <p>Wind speed: {wind.speed}</p>
        </div>
      )
    }else{
      return (
        <div className='container'>
          <p> {cod} { message}</p>
        </div>
      )
    }
  }
}
