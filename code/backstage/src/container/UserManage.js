import React, { Component } from 'react'  

export default class UserManage extends Component {
  constructor(){
    super();
    this.state={
      users:[]
    }
  }
  componentDidMount(){
    fetch('http://116.62.14.0:8402/login')
    .then((res)=>res.json())
    .then((res)=>{
      console.log(res.data)
      this.setState({
        users:res.data
      })
    })
  }
    render() {
        return (
            <div>
              <ul className='user_title' style={{width:'700px',height:'200px',margin:'50px 0 0 100px'}}>
                <li style={{fontWeight:'bold'}}>用户名</li>
                <li style={{fontWeight:'bold'}}>邮箱</li>
                <li style={{fontWeight:'bold'}}>操作</li>
                {
                  this.state.users.map((item,index)=>(
                    <ul className='user_title' key={index}>
                      <li>{item.uname}</li>
                      <li>{item.uemail}</li>
                      <li><button>删除</button></li>
                    </ul>
                  ))
                }
              </ul>
            </div>
        )
    }
}
