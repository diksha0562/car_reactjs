import React from 'react';

class Table_Comparison extends React.Component{
    constructor(props){
        super(props);
        this.state={
            cardata1 : {},
            cardata2 : {}
        }
    }
    componentWillUpdate(nextProps, nextState) {
        if (nextState.open == true && this.state.open == false) {
          this.props.onWillOpen();
        }
      }
    all_props(){
        let car1_data = this.props.car_data[this.props.dropdown1_value];
        let car2_data = this.props.car_data[this.props.dropdown2_value];
        this.setState({cardata1: car1_data})
        this.setState({cardata2 : car2_data})
    }
      similar_props(){
        let car1_data = this.props.car_data[this.props.dropdown1_value];
        let car2_data = this.props.car_data[this.props.dropdown2_value];
        let cardata1={};
        let cardata2={};
        if((car1_data!= undefined)&&(car2_data!= undefined)){
            for(let i in car1_data){
               if(car1_data[i]==car2_data[i]){
                  cardata1[i] = car1_data[i] 
                  cardata2[i] = car2_data[i] 
               }
            }
       } 
            this.setState({cardata1:cardata1})
            this.setState({cardata2 :cardata2})
        }

    different_props(){
        let car1_data = this.props.car_data[this.props.dropdown1_value];
        let car2_data = this.props.car_data[this.props.dropdown2_value];
        let cardata1={};
        let cardata2={};
        if((car1_data!= undefined)&&(car2_data!= undefined)){
            for(let i in car1_data){
               if(car1_data[i]!=car2_data[i]){
                  cardata1[i] = car1_data[i] 
                  cardata2[i] = car2_data[i] 
               }
            }
       } 
            this.setState({cardata1:cardata1})
            this.setState({cardata2 :cardata2})
        }
    
    table_compare_func(){
        let car1_data = this.state.cardata1;
        let car2_data = this.state.cardata2;
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
                <form>
            <input type="radio" name="properties" onClick={()=>this.all_props()} />All
            {' '}
            <input type="radio" name="properties" onClick={()=>this.similar_props()}/>Similar
            {' '}
            <input type="radio" name="properties" onClick={(event)=>this.different_props()}/>Different
                </form>
                <table>
            {this.table_compare_func()}
            </table>
            </div>
        )
    }
}
export default Table_Comparison;