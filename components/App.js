import React,{Component} from 'react';

import ReactDOM from 'react-dom';
import Trow from './Trow';
class App extends Component{
    
    constructor(){
        super();
        this.state={
            selectValue : '',
            selectValue1 : '',
            selectValue2 : '', 
                       
            carData : [{car_type : "Audi A5",price :"54.02 lakh", fuel_type : "Diesel" , mileage : "19.2kmpl" , seating_capacity : "4", transmission_type : "Automatic",number_of_cylinders : "4",image:"<img src=./images/audi_a5.jpg alt=audi>"},
            {car_type : "Bmw 5 Series", price :"52.0 lakh", fuel_type : "Diesel" , mileage : "22.48kmpl" , seating_capacity: "5", transmission_type : "Automatic",number_of_cylinders : "4",image :"<img src=./images/bmw_5_series.jpg alt=bmw>"},
            {car_type : "Mercedes-Benz GLC Class" , price :"51.73 lakh", fuel_type : "Diesel" , mileage : "17.9kmpl" , seating_capacity: "5", transmission_type : "Automatic", number_of_cylinders : "4",image:"<img src=./images/mercedes.jpg alt=mercedes"}
            ]
           
    }
}
 
    handleChange(event){
this.setState({selectValue : event.target.value});
    }
    handleChange1(event){
        this.setState({selectValue1 : event.target.value});
            }
            handleChange2(event){
                this.setState({selectValue2 : event.target.value});
                    }

render(){
   
    return(
        <div>
        <h1 id="heading">Car Description</h1>
        <div className="dropdown">
        {/* <select id="myselect"  onChange={function(event){this.setState({selectValue : event.target.value})}.bind(this)}> */}
           <select id="myselect" onChange={(event)=>this.handleChange(event)}>
            <option selected="selected"> Select your car</option>
            <option value="0" > Audi A5 </option>
            <option value= "1"> BMW 5 Series</option>
            <option value= "2"> Mercedes-Benz GLC Class</option>
        </select>
        </div>
        <table>
            <tbody>
              {this.state.carData.map((single_car_data,index)=> index==this.state.selectValue ?<Trow key={index}  value={single_car_data}
              
              />:'')}
                </tbody>
                </table>
                <div style={{display:'inline-block'}}>
        {/* <select id="myselect"  onChange={function(event){this.setState({selectValue : event.target.value})}.bind(this)}> */}
           <select id="myselect1" onChange={(event)=>this.handleChange1(event)}>
            <option selected="selected"> Select your car</option>
            <option value="0" > Audi A5 </option>
            <option value= "1"> BMW 5 Series</option>
            <option value= "2"> Mercedes-Benz GLC Class</option>
        </select>
    
        
                <select id="myselect1" onChange={(event)=>this.handleChange2(event)}>
            <option selected="selected"> Select your car</option>
            <option value="0" > Audi A5 </option>
            <option value= "1"> BMW 5 Series</option>
            <option value= "2"> Mercedes-Benz GLC Class</option>
        </select>
        </div>
        <table>
            <tbody>
              {this.state.carData.map((single_car_data,index)=> index==this.state.selectValue1 ?( key1= index , value1=single_car_data):'')}
              {this.state.carData.map((single_car_data,index)=> index==this.state.selectValue2 ?( key2= index , value2=single_car_data):'')}
               {console.log(key1)}
                </tbody>
                </table>
       

        </div>
    );
}
}

export default App;