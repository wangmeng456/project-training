import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './launch.css';

export default class Start extends Component {
    render() {
        return (
            <div className='bg_start'>
                <div className='bg_title'>
                    <p className='title'>简眠</p>
                </div>
                <div className="btns">
                    <Link to='/login'><button className='btn'>登录</button></Link>
                    <Link to='/register'><button className='btn'>注册</button></Link>
                </div>
            </div>
        )
    }
}
