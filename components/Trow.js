import React,{Component} from 'react';
class Trow extends Component{

    render(){
        return(
            <div>
            <tr>
                <td>Car-Type</td>
                <td>{this.props.value.car_type}</td>
            </tr>
            <tr>
            <td>Price</td>
            <td>{this.props.value.price}</td>
        </tr>
        <tr>
        <td>Fuel Type</td>
        <td>{this.props.value.fuel_type}</td>
    </tr>
    <tr>
    <td>Mileage</td>
    <td>{this.props.value.mileage}</td>
</tr>
<tr>
                <td>Seating Capacity</td>
                <td>{this.props.value.seating_capacity}</td>
            </tr>
            <tr>
            <td>Transmission Type</td>
            <td>{this.props.value.transmission_type}</td>
        </tr>
         <tr>
         <td>Number of cylinders</td>
         <td>{this.props.value.number_of_cylinders}</td>
     </tr>
      <tr>
      <td>Image</td>
      <td>{this.props.value.image}</td>
  </tr>
  </div>
        )
    }
}
//[{car_type : "Audi A5",price :"54.02 lakh", fuel_type : "Diesel" , mileage : "19.2kmpl" , seating_capacity : "4", transmission_type : "Automatic",number_of_cylinders : "4",image:"<img src=./images/audi_a5.jpg alt=audi>"},

export default Trow;