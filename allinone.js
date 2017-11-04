import React from 'react';
class App extends React.Component{
    constructor(props){
        super(props);
        this.state={
                   car_data: [{id:"0", car_type : "Audi A5",price :"54.02 lakh", fuel_type : "Diesel" , mileage : "19.2kmpl" , seating_capacity : "4", transmission_type : "Automatic",number_of_cylinders : "4",image:"<img src=./images/audi_a5.jpg alt=audi>"},
                              {id:"0", car_type : "Bmw 5 Series", price :"52.0 lakh", fuel_type : "Diesel" , mileage : "22.48kmpl" , seating_capacity: "5", transmission_type : "Automatic",number_of_cylinders : "4",image :"<img src=./images/bmw_5_series.jpg alt=bmw>"},
                              {id:"0", car_type : "Mercedes-Benz GLC Class" , price :"51.73 lakh", fuel_type : "Diesel" , mileage : "17.9kmpl" , seating_capacity: "5", transmission_type : "Automatic", number_of_cylinders : "4",image:"<img src=./images/mercedes.jpg alt=mercedes"}
                   ]
        }
    }


    render(){
        return(
            <div>
                <h1>Car Description</h1>
                <Dropdown car_data={this.state.car_data}/>
                <Table_Description dropdown_value0={this.props.dropdown_value0} car_data={this.state.car_data}/>
                <h2>Car Comparision</h2>
                <div style={{display:'inline-block'}}>
                  <Dropdown/>
                  <Dropdown/>
                </div>
                <Table_Comparison dropdown_value0={this.props.dropdown_value0} car_data={this.state.car_data}/>     
            </div>
        )
    }
}

class Dropdown extends React.Component{
    constructor(props){
        super(props);
        this.state={
            dropdown_value0: "0", dropdown_value1: '', dropdown_value2: ''
        }
    }
    dropdown_select(event){
       this.setState({dropdown_value0:event.target.value});
       this.setState({dropdown_value1:event.target.value});
       this.setState({dropdown_value2:event.target.value});
    }
    dropdown_data_0(){
        console.log(this.props.car_data);
       
        let arr = this.props.car_data[0];
        console.log(arr);
        console.log(arr.car_type);
        let b= arr.car_type;
        console.log(b);
        return b; 
        // let arr = this.props.car_data.filter((i)=> i.id==0);
        // console.log(arr);
    }
    dropdown_data_1(){
        // let arr = this.props.car_data.filter((i)=> i.id==1);
        // return arr[0].car_type;
        let arr = this.props.car_data[1];
        return arr.car_type;
    }
    dropdown_data_2(){
        // let arr = this.props.car_data.filter((i)=> i.id==2);
        // return arr[0].car_type;
        let arr = this.props.car_data[2];
        return arr.car_type;
    }

    render(){
        return(
            <div>
               <select onChange={(event)=>this.dropdown_select(event)}>
                 {/* <option value="0">{this.dropdown_data_0()}</option>
                 <option value="1">{this.dropdown_data_1()}</option>
                 <option value="2">{this.dropdown_data_2()}</option> */}
                 <option value="0">Audi A5</option>
                 <option value="1">BMW</option>
                 <option value="2">Mercedes</option>
        
               </select> 
            </div>
        )
    }
}

class Table_Description extends React.Component{
    constructor(props){
        super(props);

    }
    car_description(){
        console.log(this.props.car_data);
         let single_cardata= this.props.car_data[this.props.dropdown_value0];
         let table_row;
         let complete_table = [];
         for(let i in single_cardata){
            table_row = <tr><td>{i}</td><td>{single_cardata[i]}</td></tr>
            complete_table.push(table_row);
            console.log(complete_table);
         }
         return complete_table;
    }
    render(){
        return(
            <div>
             {this.car_description()}
            </div>
        )
    }
}

class Table_Comparison extends React.Component{
    constructor(props){
        super(props);

    }

    compare_func(){
        let table_row;
        let complete_table = [];
        let single_cardata1 = this.props.car_data[this.props.dropdown_value1];
        let single_cardata2 = this.props.car_data[this.props.dropdown_value2];
        console.log(single_cardata1);
        console.log(single_cardata2);
        for(let i in single_cardata1){
            for(let j in single_cardata2){   
                if(i==j){ 
            table_row = <tr><td>{i}</td><td>{single_cardata1[i]}</td><td>{single_cardata2[i]}</td></tr> 
            complete_table.push(table_row);
                }
            }
        }
        console.log(complete_table);
        return complete_table;
    }

    render(){
        return(
            <div>
                {this.compare_func()}  
            </div>
        )
    }
}
export default App;

// state.car_data.map((value,key)=>{
//     if(key==0)
//     console.log(value.car_type)
//     })
