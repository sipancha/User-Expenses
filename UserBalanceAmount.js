import React, {Component} from 'react'


class UserBalanceAmount extends Component {  
  
  render() {  
    return (  
        <div>  
          Balance<div><b>{this.props.userBalanceAmt} Rs</b></div>
        </div>  
    )  
  }  
}  
export default UserBalanceAmount  
