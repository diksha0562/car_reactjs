import React from 'react';
import Table_description from './Table_description';
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
            <select className="drpdown_css" onChange={(event)=>{this.setState({dropdown_value0:event.target.value})}} style={{margin: 10}}>
                <option defaultValue>--Select your car--</option>
                {this.props.car_data.map((item,index)=><option key={index} value={index}>{item.car_type}</option>)}
            </select>
            <Table_description car_data={this.props.car_data} dropdown_value0={this.state.dropdown_value0}/>
        </div>
    )
}
}
export default Dropdown;