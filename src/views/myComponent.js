import React from 'react';
import MyComponent1 from './ChildComponent';

class MyComponent extends React.Component{
    state={
        firstname:"John",
        lastname:"Doe",
        arrayJob:[
            {id:"job1",name:"developer",salary:"500$"},
            {id:"job2",name:"tester",salary:"400$"},
            {id:"job3",name:"PA",salary:"1000$"}
        ]
            
    } 
    handleFirstName=(event)=>{
        this.setState({
            firstname:event.target.value
        })
    }
    handleLastName=(event)=>{
        this.setState({
            lastname:event.target.value
        })
    }
    hanldeSubmit=(event)=>{
        event.preventDefault()
        console.log(">>>>>>>>>",this.state)
    }
    render(){       
        return(
            <div>
                <form>
                    <label htmlFor="fname">First name</label><br />
                    <input type="text" value={this.state.firstname} onChange={(event)=>{this.handleFirstName(event)}}/><br />
                    <label htmlFor="lname">Last name</label><br />
                    <input type="text" value={this.state.lastname} onChange={(event)=>{this.handleLastName(event)}}/><br />
                    <input type="submit" value="Submit" onClick={(event)=> this.hanldeSubmit(event)}/>
                </form>
                <MyComponent1 name={this.state}/>
            </div>
        )
    }
}
export default MyComponent;