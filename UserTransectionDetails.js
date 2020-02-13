import React, { Component } from 'react'


class UserTransectionDetails extends Component {

  render() {

    const myLists = this.props.userIncome_Spending_list;
    const listItems = myLists.map((myList, index) => {
      var getDate = new Date();
      var date = getDate.getDate();
      var month = getDate.getMonth();
      var year = getDate.getFullYear();
      var setFormateDate = `${date}.${month}.${year}`;
      if (myList) {
        var getFullVal = myList;
        myList = myList.split("_")
        if (myList[1] == "spending") {
          var addColorToList = {
            color: "red",
            width:"30%"
          }
          var getTxt = "Spending...";
        } else {
          var addColorToList = {
            color: "green",
            width:"30%"
          }
          var getTxt = "Income..."
        }
      }
      return <div style={{ borderBottom: "solid 1px" }} key={index}>
        <div style={{ fontSize: "7px" }}>{setFormateDate}</div>
        <table style={{width:"100%"}}>
          <td style={addColorToList}>{myList[0]} Rs</td>
          <td style={{width:"30%"}}>{getTxt}</td>
          <td  onClick={this.props.deleteUserList.bind(this, index, getFullVal)}><button>delete</button></td>
        </table>
      </div>
    }
    );
    return (
      <div style={{ padding: "20px" }}>
        {listItems}
      </div>
    )
  }
}
export default UserTransectionDetails  
