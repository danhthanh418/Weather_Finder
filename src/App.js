import React, { Component } from 'react' 
import Tile from './components/Tile';
import Form from './components/Form';
import Weather from './components/Weather';
const API_KEY = 'b2ce96198146517d4eb6812f55a802ab';
const UNIT = 'metric'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id:undefined,
      weather:{},
      main:{},
      wind:{},
      sys:{},
      name:undefined,
      cod:'',
      message:''
    };
    
  }
  
  chuanHoaTV = (input)=>{
    let str = input;
    str = str.toLowerCase();
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
    str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
    str = str.replace(/đ/g, "d");
    str = str.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g, " ");
    str = str.replace(/ + /g, " ");
    str = str.trim();
    return str;
  }
  
  getWeather =async (e)=>{
    e.preventDefault();
    const city = this.chuanHoaTV(e.target.city.value)
    const country = this.chuanHoaTV(e.target.country.value)
    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather/?q=${city},${country}&appid=${API_KEY}&units=${UNIT}`)
    const data = await api_call.json()
    console.log(data)
    if(data.cod===200){
      this.setState({
        id:data.id,
        weather:data.weather[0],
        main:data.main,
        wind:data.wind,
        sys:data.sys,
        name:data.name,
        cod:data.cod,
        message:data.message
      })
    }else{
      this.setState({
        id: undefined,
        weather: undefined,
        main: undefined,
        wind: undefined,
        sys: undefined,
        name: undefined,
        cod: data.cod,
        message: data.message
      })
    }
    
  }
  render() {
    const {id,weather,wind,sys,name,main,cod,message} = this.state
    return (
      <div className='container'>
        <Tile></Tile>
        <Form getWeather = {this.getWeather}></Form>
        <button class="pure-button pure-button-primary">Get my location</button>
        <Weather id={id} name={name} weather={weather} main ={main} sys={sys} wind={wind} cod={cod} message={message}></Weather>
      </div>
    )
  }
}
