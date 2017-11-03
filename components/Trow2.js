import React from 'react';
class Trow2 extends React.Component{
    constructor(){
        super();
this.state={
    description : []
}
    }
car_comparison(){
var myObj1= this.props.value1;
var myObj2= this.props.value2;
console.log("jfhjs");
console.log(myObj1);
console.log(myObj2);
var note= this.state.description;
for(var k in myObj1){
    console.log(k);
    for(var j in myObj2){
        console.log(k);
        console.log(j);
        if(k==j){
        var comparison= <tr><td>{k}</td><td>{myObj1[k]}</td><td>{myObj2[k]}</td></tr> 
        note.push(comparison);
        console.log(note);
    }
    }
}
return (note)
}

render(){
    return(
        <div>
{this.car_comparison()}
<h1>trow2</h1>
</div>
    )
}
}
export default Trow2;