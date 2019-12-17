import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import {Icon,NavBar} from 'antd-mobile';
export default class Csearch extends Component {
    constructor(props){
        super(props);
        // this.handleClick = this.handleClick.bind(this);
        this.state={
            data:[]
        }
        
    }
    fetchSousuo = (e)=>{
        let data = {
            search:document.getElementsByClassName('sousuo')[0].value
        }
        console.log(data);
        fetch('http://116.62.14.0:8402/search/material', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            switch (data.status) {
                case "0":{
                    console.log(data.data[0]);
                    this.setState({
                        data:data.data
                    })
                    break;
                }
                default:{
                    //错误，服务器
                    console.log(data.data);
                    break;
                }
            }
        })
    }
    render() {
        return (
            <div>
                <NavBar
                    icon={<Link to={{pathname:'/composition/composition',state:this.props.location.state}}><Icon type="left" style={{color:'#000'}}/></Link>}
                    style={{backgroundColor:'#fff',color:'#000'}}
                    onLeftClick={() => console.log('onLeftClick')}></NavBar>  
                <input className='sousuo' type='text' placeholder="输入关键字搜索"/>
                <input onClick={(e)=>{this.fetchSousuo(e)}} type='button' value='搜索'/>
                {this.state.data.map(data=>(
                    <div><Link to={{pathname:'/composition/search/sucai/sdetails/'+data.mid,mtab2:data.mid,state:this.props.location.state}}>{data.mtitle}</Link></div>
                ))}
            </div>
        )
    }
}
