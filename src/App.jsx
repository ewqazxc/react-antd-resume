
import React, { Component } from "react";
import ReactDOM from "react-dom";
import {
    Route,
    HashRouter,
    Link
} from 'react-router-dom'
import 'antd/dist/antd.css'; //引入样式 
import { RootRouter} from "./router"
import { LocaleProvider } from 'antd';
import zh_CN from 'antd/lib/locale-provider/zh_CN'; 
import createHistory from "history/createBrowserHistory";

import '../assets/css/style.scss'
import faviconImg from '../assets/img/favicon.ico';
let favicon = document.getElementById('favicon');
favicon.href = faviconImg;
const history = createHistory();
console.log(document.getElementById('canvas'))
let loading = document.getElementById('canvas');
if(loading!=null){
    setTimeout(()=>{
        loading.remove();
    },1000)
}
const App = () => {
    return (
        <LocaleProvider locale={zh_CN}>
            <RootRouter history={history} />
        </LocaleProvider>
    );
};
 
ReactDOM.render(<App />, document.getElementById("root")); 