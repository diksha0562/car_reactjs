import React,{Component} from 'react';
//component is not actual defaul for react library

//create class app which extends component from react
import {Form, FormControl,Button} from 'react-bootstrap';
class App extends Component{
    // car_desc(){
    // //   const car = {props.car_desc};
    //   console.log(this.props.value);
    // }
    constructor(){
        super();
        this.state={
            selectValue : 'audi'
        }
    }
    // handleChange: function(e){
    //     this.setState({selectValue : e.target.value});
    // }
render(){
    var message='you selected ' + this.state.selectValue;
    return(
        <div>
        <h1 id="heading">Car Description</h1>
        <div className="dropdown">
        <select id="myselect"  onChange={function(event){this.setState({selectValue : event.target.value})}.bind(this)}>
            {/* <option selected="selected"> Select your car</option> */}
            <option value="audi"> Audi A5 </option>
            <option value= "bmw"> BMW 5 Series</option>
            <option value= "mercedes"> Mercedes-Benz GLC Class</option>
        </select>
        </div>
        <p>{message}</p>
        </div>
    )
}
}
export const color='blue';
export const number = 26;
//to be imported by other files
export default App;