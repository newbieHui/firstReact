import React, {Component} from 'react';

import style from './Page1.css';

import image from './images/brickpsert.jpg';

export default class Page1 extends Component {
    render() {
        return (
            <div className={style.box}>
                这里是首页
                <img src={image}/>
            </div>
        )
    }
}