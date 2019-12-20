import React, { Component } from 'react'

export default class Zuowencomment extends Component {
    constructor(){
        super();
        this.state={
            comments:[]
        }
    }
    componentDidMount(){
        fetch('http://116.62.14.0:8402/comment/article')
        .then((res)=>res.json())
        .then((res)=>{
            // console.log(res.data)
            this.setState({
                comments:res.data
            })
        })
    }
    deleteItem = (e)=>{
        let item = e.target.parentNode.parentNode;
        let obj = {acid:item.children[0].innerHTML};
        fetch('http://116.62.14.0:8402/comment/delarticle',{
            method:'post',
            headers:{
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(obj)
        }).then((res)=>res.json())
        .then((data)=>{
            // console.log(data);
            switch(data.status){
                case '0':
                    fetch('http://116.62.14.0:8402/comment/article')
                    .then((res)=>res.json())
                    .then((res)=>{
                        this.setState({
                            comments:res.data
                        })
                    })
                    alert('删除成功！');
                    break;
                case '-1':
                    alert('删除失败！');
                    break;
                default:
                    break;
            }
        })
    }
    render() {
        return (
            <div>
                <div style={{width:'150px',height:'28px',fontSize:'15px',color:'black',margin:'15px 0 0 20px',lineHeight:'20px'}}>
                <a href='#/home/comment'  style={{color:'black'}}>
                    <img src='images/return.png' alt='' style={{float:'left',width:'20px',height:'20px'}}/>
                    返回上一页
                </a>
                </div>
                <ul className='comments_title' style={{width:'950px',height:'200px',margin:'0 30px'}}>
                    <li style={{fontWeight:'bold'}}>评论ID</li>
                    <li style={{fontWeight:'bold'}}>评论内容</li>
                    <li style={{fontWeight:'bold'}}>所属作文ID</li>
                    <li style={{width:'160px',fontWeight:'bold'}}>作文标题</li>
                    <li style={{fontWeight:'bold'}}>用户ID</li>
                    <li style={{width:'160px',fontWeight:'bold'}}>发布时间</li>
                    <li style={{fontWeight:'bold'}}>操作</li>
                {
                    this.state.comments.map((item,index)=>(
                        <ul className='comments_title' key={index}>
                            <li>{item.acid}</li>
                            <li style={{overflow:'hidden'}}>{item.accontent}</li>
                            <li>{item.aid}</li>
                            <li style={{width:'160px'}}>{item.atitle}</li>
                            <li>{item.uid}</li>
                            <li style={{width:'160px'}}>{item.actime}</li>
                            <li><button onClick={(e)=>{this.deleteItem(e)}}>删除</button></li>
                        </ul>
                    ))
                }
                </ul>
            </div>
        )
    }
}
