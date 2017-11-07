import React from 'react';
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
               <table>
                  {this.table_description_function()}
               </table>
            </div>
        )
    }
}
export default Table_description;