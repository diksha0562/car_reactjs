import React from 'react';
class Table_description extends React.Component{
    constructor(props){
        super(props);
    }
    table_description_function(){
        let single_car_data = this.props.car_data[this.props.dropdown_value0];
        let hide_data = ["price", "mileage"];
        if(single_car_data!=undefined){
        for(let j=0;j<hide_data.length;j++){
        Object.defineProperty(single_car_data,hide_data[j],{enumerable : false});
        }
        }
        let comp_table=[];
        for(let i in single_car_data){
        comp_table.push(<tr><td>{i}</td><td>{single_car_data[i]}</td></tr>);
        }
        return <table>{comp_table}</table>
        }
    render(){
        return(
            <div>
                  {this.table_description_function()}
            </div>
        )
    }
}
export default Table_description;