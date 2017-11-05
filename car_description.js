import React from 'react';
class App extends React.Component{
    constructor(props){
       super(props);
       this.state={
        car_data: [{id:"0", car_type : "Audi A5",price :"54.02 lakh", fuel_type : "Diesel" , mileage : "19.2kmpl" , seating_capacity : "4", transmission_type : "Automatic",number_of_cylinders : "4",image:"<img src=./images/audi_a5.jpg alt=audi>"},
                   {id:"1", car_type : "Bmw 5 Series", price :"52.0 lakh", fuel_type : "Diesel" , mileage : "22.48kmpl" , seating_capacity: "5", transmission_type : "Automatic",number_of_cylinders : "4",image :"<img src=./images/bmw_5_series.jpg alt=bmw>"},
                   {id:"2", car_type : "Mercedes-Benz GLC Class" , price :"51.73 lakh", fuel_type : "Diesel" , mileage : "17.9kmpl" , seating_capacity: "5", transmission_type : "Automatic", number_of_cylinders : "4",image:"<img src=./images/mercedes.jpg alt=mercedes"}
                  ]
        }
    }
    
    render(){
        return(
            <div>
                <h1>Car Description</h1>
                <Dropdown car_data={this.state.car_data}/>
            </div>
        )
    }

}

class Dropdown extends React.Component{
    constructor(props){
        super(props);
        this.state={
            dropdown_value0: ''
        }
    }
render(){
    return(
        <div>
            <select onChange={(event)=>{this.setState({dropdown_value0:event.target.value});
            console.log(this.state.dropdown_value0);
            }}>
                <option value="0">{this.props.car_data[0].car_type}</option>
                <option value="1">{this.props.car_data[1].car_type}</option>
                <option value="2">{this.props.car_data[2].car_type}</option>
            </select>
            <Table_description car_data={this.props.car_data} dropdown_value0={this.state.dropdown_value0}/>
        </div>
    )
}

}

class Table_description extends React.Component{
    constructor(props){
        super(props);
    }
    table_description_function(){
        let single_car_data = this.props.car_data[this.props.dropdown_value0];
        let comp_table=[];
        for(let i in single_car_data){
        let table_row= <tr><td>{i}</td><td>{single_car_data[i]}</td></tr>
        comp_table.push(table_row);
        }
        return comp_table
    }
    render(){
        return(
            <div>
                {this.table_description_function()}
            </div>
        )
    }
}
export default App
