import React, { Component } from 'react'
import { Router, Route, Link, Switch } from "react-router-dom";
import {
    Layout, Menu, Breadcrumb, Icon,
} from 'antd';

import SiderMenu from './SiderMenu';
import HeaderMenu from './HeaderMenu';
import MyHeader from './MyHeader';

import NotFound from '../pages/NotFound';


import { MenuList } from 'Options/config';
import { unStr, treeToList, listToObj } from 'Tools/utils';
import { RouterConfig } from '../router/index.jsx';

import './Main.scss';
const {
    Header, Content, Footer, Sider,
} = Layout;
let menuListDir = treeToList(MenuList);
let menuObj = listToObj(menuListDir, 'url', 'name');
class Main extends Component {
    constructor(props) {
        super(props)
    }
    state = {
        cutHeight:0,
        collapsed: false,
        menuObj: menuObj,
        clientWidth: document.body.clientWidth,
        clientHeight: document.body.clientHeight,
    }
    componentWillMount() {
        console.log('componentWillMount', this.props)
    }
    breadCrumb = (list) => {
        let url = this.props.location.pathname;
        let urlArr = url.split('/');
        let urlLevl = urlArr.length - 1;
        let str = '';
        //  if(url=='/'){
        //     str = this.state.menuObj[url];
        //  }
        //  else if(urlLevl==1){
        //     str += this.state.menuObj['/'];
        //     str += this.state.menuObj[url];
        //  }
        //  else{ 
        let bread = [];
        let keyStr = ''
        urlArr.map((i, d) => {
            keyStr += i + '/';
            if (d == 0) {
                str += this.state.menuObj['/'];
                bread.push(<Breadcrumb.Item key={d}>
                    <Link to='/'>
                        {this.state.menuObj['/']}
                    </Link>
                </Breadcrumb.Item>)
            } else {
                if (keyStr != '//') {
                    str += this.state.menuObj[keyStr.substring(0, keyStr.length - 1)];
                    bread.push(<Breadcrumb.Item key={d}>{this.state.menuObj[keyStr.substring(0, keyStr.length - 1)]}</Breadcrumb.Item>)
                }
            }
        })
        console.log(bread, 'strstr', str)
        //  }
        return bread;
    }
    componentDidMount() {
        this.countSize();
        window.onresize = () => {
            this.countSize();
        }
    }
    countSize=()=>{
        let cutList = document.getElementsByClassName('countHeight');
        let cutHeight = 0;
        for(let i=0;i<cutList.length;i++){
            cutHeight += cutList[i].clientHeight;
            this.setState({
                cutHeight: cutHeight,
                clientWidth: document.body.clientWidth
            })
        }
    }
    render() {
        const { location } = this.props;
        let component = RouterConfig.map(item => {
            if (location.pathname === item.path) {
                return item.component;
            }
        }).filter(item => item)[0];
        if (typeof (component) == 'undefined') {
            component = NotFound;
        }
        return (
            <Layout>
                {
                    this.state.clientWidth < 768 ? null : <SiderMenu {...this.props} />
                }

                <Layout>
                    {
                        this.state.clientWidth < 768 ? <HeaderMenu className='countHeight' {...this.props} /> : <MyHeader className='main-header' />
                    } 
                    <Content style={{ margin: '0 16px' }}>
                        <Breadcrumb className='main-breadcrumb countHeight'>
                            {this.breadCrumb()}
                            {/* <Breadcrumb.Item>User</Breadcrumb.Item>
                            <Breadcrumb.Item>Bill</Breadcrumb.Item> */}
                        </Breadcrumb>
                        <div
                            ref='myRouterDiv' className='main-content'
                            style={{ height: document.body.clientHeight - (this.state.clientWidth < 768 ?this.state.cutHeight:130) }}>

                            <Route
                                ref='myRouter'
                                style={{ position: "static" }}
                                location={location}
                                key={location.pathname}
                                // path="/:url"
                                component={component}
                            />
                        </div>
                    </Content>
                    <Footer className='main-footer countHeight'>
                        &copy;XC
                    </Footer>
                </Layout>
            </Layout>
        )
    }
}
export default Main;