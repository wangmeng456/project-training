import React, { Component } from 'react'
import {NavBar,Icon,TextareaItem,List} from 'antd-mobile';
import {Link} from 'react-router-dom';
var date = new Date();
var Y = date.getFullYear() + '-';
var M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
var D = date.getDate()+' ';
var h = date.getHours() + ':';
var m = date.getMinutes();
export default class Lcomment extends Component {
    fetchComment=(e)=>{
        let data = {
            mccontent:document.getElementsByClassName('pinglun')[0].value,
            uid:this.props.location.state,
            mid:this.props.location.mtab2,
            mctime:Y+M+D+h+m
        }
        console.log(data);
        fetch('http://116.62.14.0:8402/comment/addmaterial', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
          }).then(res=>res.json()).then(data=>{
              console.log(data);
          })
    }
    render() {
        return (
            <div>
                <NavBar
                    icon={<Link to={{pathname:'/composition/sdetails/'+this.props.location.mtab2,state:this.props.location.state,mtab2:this.props.location.mtab2}}><Icon type="left" style={{color:'#000'}}/></Link>}
                    style={{backgroundColor:'#fff',color:'#000',position:'fixed',top:'0',width:'100%',zIndex:'999'}}
                    onLeftClick={() => console.log('onLeftClick')}
                    rightContent={<Link to={{pathname:'/composition/sdetails/'+this.props.location.mtab2,state:this.props.location.state,mtab2:this.props.location.mtab2}}>
                        <input type='button' onClick={(e)=>{this.fetchComment(e)}} style={{color:'#000'}} value='发布'/>
                    </Link>}
                >写评论</NavBar>
                <div>
                    <List style={{top:'40px',position:'absolute',zIndex:'99',margin:'2% 2% auto',backgroundColor:'#fff',height:'100px',width:'96%'}}>
                        <textarea
                            placeholder="在此输入评论"
                            data-seed="logId"
                            ref={el => this.autoFocusInst = el}
                            autoHeight
                            style={{backgroundColor:'none'}}
                            className='pinglun'
                        />
                    </List>
                </div>
            </div>
        )
    }
}
