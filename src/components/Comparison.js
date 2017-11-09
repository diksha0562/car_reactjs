import React from 'react';
import Table_Comparison from './Table_Comparison';
class Comparison extends React.Component{
    constructor(props){
        super(props);
        this.state={
            dropdown1_value:'',
            dropdown2_value:'',
                    
        }
    }
    
    render(){
        return(
            <div>
                <hr/>
                <h1>Car Comparison</h1>
                <select className="dropdown_css" onChange={(event)=>{this.setState({dropdown1_value:event.target.value})}} >
                <option defaultValue>--Select your car--</option>
                {
                    this.props.car_data.map((item, index)=>{
                        return <option key={index} value={index}>{item.car_type}</option>
                    })
                }
            </select>
            <select className="dropdown_css" onChange={(event)=>{this.setState({dropdown2_value:event.target.value})}}>
                <option defaultValue> Select your car</option>
               {this.props.car_data.map((item,index)=><option key={index} value={index}>{item.car_type}</option>)}
            </select>
            
            <Table_Comparison car_data={this.props.car_data} dropdown1_value={this.state.dropdown1_value} dropdown2_value={this.state.dropdown2_value}/>        
            </div>
        )
    }
}
export default Comparison;