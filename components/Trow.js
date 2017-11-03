import React from 'react';
class Trow extends React.Component{
    constructor(){
        super();
this.state={
    description : []
}
    }

func_car_desc(){
var myObj= this.props.value;
console.log(myObj);
var notes= this.state.description;
for(const i in myObj){
    var desc =   <tr><td>{i}</td><td>{myObj[i]}</td></tr>
    notes.push(desc) ;
}
return(
    notes
   )
}

    render(){
        return(
            <div>
{this.func_car_desc()}
</div>
        )
    }
}
export default Trow;