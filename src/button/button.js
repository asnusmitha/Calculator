import React from 'react';
import App from "../App.css"
import { useNavigate } from 'react-router-dom';
class Button extends React.Component {
    state = { 
        disabled1:true,
        disabled2:true,
     } 
    //  navigate=useNavigate();
     handleChange=(e)=>{
        if(e.target.value==="user1"){
            this.setState({
                disabled1:true,
                disabled2:false
            })
        }
        if(e.target.value==="user2"){
            this.setState({
                disabled1:true,
                disabled2:true
            })
        }
        if(e.target.value==="user3"){
            this.setState({
                disabled1:false,
                disabled2:false
            })
        }
     }
    //  show1(){
    //     this.navigate("/Products");
    //  }
    render() { 
        return (
            <div className='buttons'>
                <h5>Enable & Disable buttons depending on username</h5>
            <form>
                <input type="text" placeholder='username' onChange={this.handleChange}/>
                <br></br>
                <br></br>
                <button className='' disabled={this.state.disabled1} >Create</button>
                <button className='btn btn-primary' disabled={this.state.disabled2}>Submit</button>
            </form>
        </div>
        );
    }
}
 
export default Button;