import React,{Component} from 'react';

import {Form, FormControl,Button} from 'react-bootstrap';
import Note from './Note';
class App extends Component{
    
    constructor(){
        super();
        this.state={
            selectValue : ''
           
    }
}
 carData = [{car_type : "Audi A5",price :"54.02 lakh", fuel_type : "Diesel" , mileage : "19.2kmpl" , seating_capacity : "4", transmission_type : "Automatic",number_of_cylinders : "4",image:"<img src=./images/audi_a5.jpg alt=audi>"},
{car_type : "Bmw 5 Series", price :"52.0 lakh", fuel_type : "Diesel" , mileage : "22.48kmpl" , seating_capacity: "5", transmission_type : "Automatic",number_of_cylinders : "4",image :"<img src=./images/bmw_5_series.jpg alt=bmw>"},
{car_type : "Mercedes-Benz GLC Class" , price :"51.73 lakh", fuel_type : "Diesel" , mileage : "17.9kmpl" , seating_capacity: "5", transmission_type : "Automatic", number_of_cylinders : "4",image:"<img src=./images/mercedes.jpg alt=mercedes"}
];
 
    handleChange(event){
        const val1= event.target.value;
        console.log(val1);


this.setState({selectValue : event.target.value});
    }
render(){
    var message='you selected ' + this.state.selectValue;
    return(
        <div>
        <h1 id="heading">Car Description</h1>
        <div className="dropdown">
        {/* <select id="myselect"  onChange={function(event){this.setState({selectValue : event.target.value})}.bind(this)}> */}
           <select id="myselect" onChange={(event)=>this.handleChange(event)}>
            {/* <option selected="selected"> Select your car</option> */}
            <option value="0" > Audi A5 </option>
            <option value= "1"> BMW 5 Series</option>
            <option value= "2"> Mercedes-Benz GLC Class</option>
        </select>
        </div>
        { carData.map(car =>{return(
            // <Note key={index} note={note}/>
            <li>{car}</li>
        )})} 

        {/* <p>{message}</p> */}

        </div>
    )
}
}

export default App;