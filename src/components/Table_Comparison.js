import React from 'react';

class Table_Comparison extends React.Component{
    constructor(props){
        super(props);
        this.state={
            cardata1 : {},
            cardata2 : {},
            radio_value:''
        }
    }
    check(radiovalue,car1_data,car2_data){
        this.setState({radio_value : radiovalue})
        let cardata1={};
        let cardata2={};
        let hide_data = ["price", "mileage"];
        if((car1_data!= undefined)&&(car2_data!= undefined)){
            for(let j=0;j<hide_data.length;j++){
                Object.defineProperty(car1_data,hide_data[j],{enumerable : false, writable : true});
                Object.defineProperty(car2_data,hide_data[j],{enumerable : false, writable : true});
                }
          switch(radiovalue){
            case "0" : { 
               for(let i in car1_data){
                     cardata1[i] = car1_data[i] 
                     cardata2[i] = car2_data[i]   
               }
                   this.setState({cardata1: car1_data})
                   this.setState({cardata2 :car2_data})
                   break;
            }
             case "1" :{
                cardata1.car_type = car1_data.car_type 
                cardata2.car_type = car2_data.car_type  
                  for(let i in car1_data){
                    if(car1_data[i]==car2_data[i]){
                       cardata1[i] = car1_data[i] 
                       cardata2[i] = car2_data[i] 
                    }
                 }  
                cardata1.image = car1_data.image
                cardata2.image = car2_data.image  
                this.setState({cardata1: cardata1})
                this.setState({cardata2 :cardata2})
                break;
            }
            case "2" :{
                for(let i in car1_data){
                   if(car1_data[i]!=car2_data[i]){
                      cardata1[i] = car1_data[i] 
                      cardata2[i] = car2_data[i] 
                   }
                }
                this.setState({cardata1:cardata1})
                this.setState({cardata2 :cardata2})
                if(Object.keys(cardata1).length === 0)
                alert("choose different cars")
                break;
            }       
          }
        }
    }
        table_compare_func(){
        const car1_data = this.state.cardata1;
        const car2_data = this.state.cardata2;
        let table_compare = [];
        if((car1_data!= undefined)&&(car2_data!= undefined)){
          for(let i in car1_data){
            table_compare.push( <tr><td>{i}</td><td>{car1_data[i]}</td><td>{car2_data[i]}</td></tr>);
          }
        }
        return <table>{table_compare}</table>
    }
  
    render(){
        return(
            <div>
                <form onChange={(event)=>{
                    this.check(event.target.value,this.props.car_data[this.props.dropdown1_value],this.props.car_data[this.props.dropdown2_value])
                    }}>
                   <input type="radio" value="0" name = "properties" className="radio_css" />All
                   <input type="radio" value="1" name = "properties" className="radio_css"/>Similar
                   <input type="radio" value="2" name = "properties" className="radio_css"/>Different
                </form>
                   {this.table_compare_func()}
            </div>
        )
    }
}
export default Table_Comparison;