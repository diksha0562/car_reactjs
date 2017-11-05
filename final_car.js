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
                <Comparison car_data={this.state.car_data}/>
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

class Comparison extends React.Component{
    constructor(props){
        super(props);
        this.state={
            dropdown1_value:'',
            dropdown2_value:''             
        }
    }
    render(){
        return(
            <div>
                <h2>Car Comparison</h2>
                <select onChange={(event)=>{this.setState({dropdown1_value:event.target.value});
            console.log(this.state.dropdown1_value);
            }}>
                <option value="0">{this.props.car_data[0].car_type}</option>
                <option value="1">{this.props.car_data[1].car_type}</option>
                <option value="2">{this.props.car_data[2].car_type}</option>
            </select>

            <select onChange={(event)=>{this.setState({dropdown2_value:event.target.value});
            console.log(this.state.dropdown2_value);
            }}>
                <option value="0">{this.props.car_data[0].car_type}</option>
                <option value="1">{this.props.car_data[1].car_type}</option>
                <option value="2">{this.props.car_data[2].car_type}</option>
            </select>
            <Table_Comparison car_data={this.props.car_data} dropdown1_value={this.state.dropdown1_value} dropdown2_value={this.state.dropdown2_value}/>        
            </div>
        )
    }
}
class Table_Comparison extends React.Component{
    constructor(props){
        super(props);
    }
    table_compare_func(){
        let car1_data = this.props.car_data[this.props.dropdown1_value];
        let car2_data = this.props.car_data[this.props.dropdown2_value];
        let table_compare = [];
        let table_comp_row;
        if((car1_data!= undefined)&&(car2_data!= undefined)){
          for(let i in car1_data){
            table_comp_row = <tr><td>{i}</td><td>{car1_data[i]}</td><td>{car2_data[i]}</td></tr>
            table_compare.push(table_comp_row);
          }
        }
        return table_compare
    }
    render(){
        return(
            <div>
            {this.table_compare_func()}
            </div>
        )
    }
}
export default App
