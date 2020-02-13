import React, {Component} from 'react'


class UserPendingAmount extends Component {  
  
  render() {  
    return (  
        <span style={{color:"red"}}>Pending: {this.props.userSpendingAmt} Rs</span>  
    )  
  }  
}  
export default UserPendingAmount  
