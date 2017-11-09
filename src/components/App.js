import React from 'react';
import Table_Comparison from './Table_Comparison';
import Comparison from './Comparison';
import Table_description from './Table_description';
import Dropdown from './Dropdown';
class App extends React.Component{
    constructor(props){
       super(props);
       this.state={
            car_data:[
                {id:"0", car_type : "Audi A5",price :"54.02 lakh", fuel_type : "Diesel" , mileage : "19.2kmpl" , seating_capacity : "4", transmission_type : "Automatic",number_of_cylinders : "4",image:<img src={'./images/audi_a5.jpg'} alt="audi"/>},
                {id:"1", car_type : "Bmw 5 Series", price :"52.0 lakh", fuel_type : "Diesel" , mileage : "22.48kmpl" , seating_capacity: "5", transmission_type : "Automatic",number_of_cylinders : "4",image :<img src={'./images/bmw_5_series.jpg'} alt="bmw"/>},
                {id:"2", car_type : "Mercedes-Benz GLC Class" , price :"51.73 lakh", fuel_type : "Diesel" , mileage : "17.9kmpl" , seating_capacity: "5", transmission_type : "Automatic", number_of_cylinders : "4",image:<img src={'./images/mercedes.jpg'} alt='mercedes'/>}
            ]
        }
    }
    
    render(){
        return(
            <div>
                <h1>Car Description</h1>
                <Dropdown car_data={this.state.car_data}/>
                <Comparison car_data={this.state.car_data}/>
            </div>
        )
    }

}
export default App