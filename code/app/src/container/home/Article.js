import React, { Component } from 'react'
import {Icon,NavBar} from 'antd-mobile';
import {Link} from 'react-router-dom';
export default class Article extends Component {
    constructor(props){
        super(props);
        // this.handleClick = this.handleClick.bind(this);
        this.state={
            data:[]
        }
        
    }
    
    componentDidMount(){
        let page = this.props.location.state1;
        console.log(page);
        fetch('http://116.62.14.0:8402/article/'+page)
        .then((res)=>res.json())
        .then((res)=>{
            this.setState({data:res.data});
            console.log(res.data);
        })
    }
    render() {
        const item = [
            {title:'322',img:'shoucang'},
            {title:'322',img:'pinglun'},
            {title:'322',img:'zan'},
        ];
        return (
            <div>
                {this.state.data.map(data=>(
                    <div>
                <NavBar
                    icon={<Link to='/home'><Icon type="left" style={{color:'#000'}}/></Link>}
                    style={{backgroundColor:'#fff',color:'#000',position:'fixed',top:'0',width:'100%',zIndex:'999'}}
                    onLeftClick={() => console.log('onLeftClick')}
                    rightContent={
                        <input type='button' style={{backgroundColor:'#da4036',fontSize:'18px',color:'#fff',border:'1px solid #da4036'}} value='关注' class='concern'/>
                    }
    ><img src="/images/home/touxiang.png" style={{height:'80%',marginLeft:'2%',marginTop:'1%',marginRight:'1%'}} />{data.uname}</NavBar>
                
                <div style={{top:'40px',position:'absolute',zIndex:'99',width:'100%'}}>
                    
                        
                    <div style={{margin:'2% 2% auto',backgroundColor:'#f1edea'}}>
                        <h2 style={{textAlign:'center'}}>{data.atitle}</h2>
                        {data.acontent}<br/>
                        <br/><br/>{data.atag}<br/>
                    </div>
                    </div></div>
                    ))}
                    <div style={{margin:'2% 2% auto',marginBottom:'80px'}}>
                        <hr/>
                        <span style={{fontSize:'18px'}}>精彩评论</span>
                        <br/>
                        <img src={`/images/home/touxiang.png`} style={{width:'8%',marginTop:'10px'}}/><strong>一朵小花</strong><img src="/images/home/zan.png" style={{float:'right'}}/>
                        <br/>
                        <span style={{marginLeft:'4%'}}>人生如棋，我愿为卒，行动虽缓，可谁曾见我后退一步。</span>
                        <hr/>
                        <hr/>
                        <span style={{fontSize:'18px'}}>全部评论</span>
                        <br/>
                        <img src={`/images/home/touxiang.png`} style={{width:'8%',marginTop:'10px'}}/><strong>一朵小花</strong><img src="/images/home/zan.png" style={{float:'right'}}/>
                        <br/>
                        <span style={{marginLeft:'4%'}}>人生如棋，我愿为卒，行动虽缓，可谁曾见我后退一步。</span>
                        <hr/>
                    </div>
                    <footer style={{width:'100%',marginTop:'10px',backgroundColor:'#fff', bottom:'0px',position:'fixed'}}>
                            
                            <div style={{width:'8%',float:'left',margin:'0% 12%',color:'#000'}}><img src={`/images/home/${item[0].img}.png`} /></div>
                                <Link to='/home/comment'>
                                <div style={{width:'8%',float:'left',margin:'0% 12%',color:'#000'}}><img src={`/images/home/${item[1].img}.png`} /></div>
                                </Link>
                                <div style={{width:'8%',float:'left',margin:'0% 12%',color:'#000'}}><img src={`/images/home/${item[2].img}.png`} /></div>
                    </footer>
                    
                
            </div>
        )
    }
}
