import React, {Component} from 'react'

class UserIncomeAmount extends Component {  
  
  render() {  
    return (  
        <span style={{paddingRight:"10px",color:"green"}}>Income: {this.props.userIncomeAmt} Rs</span>  
    )  
  }  
}  
export default UserIncomeAmount  
