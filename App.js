import React, {Component} from 'react'

//below depended component
import UserBalanceAmount from "./User-Expenses/component/UserBalanceAmount"
import UserTransectionDetails from "./User-Expenses/component/UserTransectionDetails"
import UserIncomeAmount from "./User-Expenses/component/UserIncomeAmount"
import UserPendingAmount from "./User-Expenses/component/UserPendingAmount"

class App extends Component {  
  constructor(props){
    super(props) 
    this.state= {
      userBalanceAmt:0,
      userIncomeAmt:0,
      userSpendingAmt:0,
      userIncome_Spending_list:[]
    }
  }
  addUserIncome = () =>{
    var getUserIncomeAmt = prompt("Please enter your Income amount");
    if(getUserIncomeAmt!=null){
      if(!getUserIncomeAmt.match(/\d/g)){
        alert("Please add only integer Amount")
        return;
      }
      getUserIncomeAmt = parseInt(getUserIncomeAmt);
      console.log(getUserIncomeAmt)
      var getUserList = this.state.userIncome_Spending_list;
      var getNewUserList = [...getUserList];
      getNewUserList.push(getUserIncomeAmt+"_income");
      this.setState((prevState)=>{
        return {
          userIncomeAmt: prevState.userIncomeAmt+getUserIncomeAmt,
          userBalanceAmt: prevState.userBalanceAmt+getUserIncomeAmt,
          userIncome_Spending_list:getNewUserList
        }
      })
    }  
  }
  addUserPending = () =>{
    var getUserPendingAmt = prompt("Please enter your pending amount");
    if(getUserPendingAmt!=null){
      if(!getUserPendingAmt.match(/\d/g)){
        alert("Please add only integer Amount")
        return;
      }
      console.log(getUserPendingAmt)
      getUserPendingAmt = parseInt(getUserPendingAmt);
      console.log(getUserPendingAmt)
      var getUserList = this.state.userIncome_Spending_list;
      var getNewUserList = [...getUserList];
      getNewUserList.push(getUserPendingAmt+"_spending");
      this.setState((prevState)=>{
        return {
          userSpendingAmt: prevState.userSpendingAmt+getUserPendingAmt,
          userBalanceAmt: prevState.userBalanceAmt-getUserPendingAmt,
          userIncome_Spending_list:getNewUserList
        }
      })
    }  
  }
  deleteUser_Income_Spending_list = (id,amount) =>{
    if(amount){
      var getUserList = this.state.userIncome_Spending_list;
      var getNewUserList = [...getUserList];
      console.log(getNewUserList)
      getNewUserList.splice(id,1)
      console.log(getNewUserList)
      var getOnlyAmt = amount.split("_");
      var getOnlyAmtWithPareInt = parseInt(getOnlyAmt[0]);
      
      if(getOnlyAmt[1]==="spending"){
        this.setState((prevState)=>{
          return {
            
            userSpendingAmt: prevState.userSpendingAmt-getOnlyAmtWithPareInt,
            userBalanceAmt: prevState.userBalanceAmt+getOnlyAmtWithPareInt,
            userIncome_Spending_list:getNewUserList
          }
        })
      }else{
        this.setState((prevState)=>{
          return {
            userIncomeAmt: prevState.userIncomeAmt-getOnlyAmtWithPareInt,
           
            userBalanceAmt: prevState.userBalanceAmt-getOnlyAmtWithPareInt,
            userIncome_Spending_list:getNewUserList
          }
        })
      }
     
    }
  }
  render() {  
    var container = {
     width:"450px",
     margin:"auto",
     border:"solid 4px lightslategrey"
    }
    return (  
        <div style={container}>
          <div style={{padding:"30px"}}>  
          <div style={{backgroundColor:"lightgrey",paddingLeft:"10px"}}>
            <h2 style={{color:"darkblue"}}>User Expenses</h2>
            <UserBalanceAmount userBalanceAmt={this.state.userBalanceAmt}/>
            <UserIncomeAmount userIncomeAmt={this.state.userIncomeAmt}/>
            <UserPendingAmount userSpendingAmt={this.state.userSpendingAmt} />
          </div>
          <div style={{paddingTop:"30px",paddingBottom:"10px"}}>
            <UserTransectionDetails userIncome_Spending_list={this.state.userIncome_Spending_list} deleteUserList={this.deleteUser_Income_Spending_list} />
          </div>
            
          <button style={{backgroundColor:"green", color:"white",marginLeft:"66px"}} onClick={this.addUserIncome}>Add Income</button>  
          <button style={{backgroundColor:"red",color:"white",marginLeft:"71px"}} onClick={this.addUserPending}>Add Spending</button> 
           
          </div>
       </div>  
    )  
  }  
}  
export default App  
