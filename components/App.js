import React,{Component} from 'react';
//component is not actual defaul for react library

//create class app which extends component from react
import {Form, FormControl,Button} from 'react-bootstrap';
class App extends Component{
    car_desc(){
    //   const car = {props.car_desc};
      console.log(this.props.value);
    }
render(){
    return(
        <div>
        <h1 id="heading">Car Description</h1>
        <div className="dropdown">
        <select id="myselect" value="asd" onChange={(e) => this.car_desc(e)}>
            {/* <option selected="selected"> Select your car</option> */}
            <option value="audi"> Audi A5 </option>
            <option value= "bmw"> BMW 5 Series</option>
            <option value= "mercedes"> Mercedes-Benz GLC Class</option>
        </select>
        </div>
        </div>
    )
}
}
export const color='blue';
export const number = 26;
//to be imported by other files
export default App;