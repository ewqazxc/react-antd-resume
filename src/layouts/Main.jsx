import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {
    Layout, Menu, Breadcrumb, Icon,
} from 'antd';

import SiderMenu from './SiderMenu'

import LANGUAGE from 'Options/language';
import { MenuList } from 'Options/config';
import { unStr, treeToList, listToObj } from 'Tools/utils'

import './Main.scss';
const {
    Header, Content, Footer, Sider,
} = Layout;
let menuListDir = treeToList(MenuList);
let menuObj = listToObj(menuListDir, 'url', 'name');
class componentName extends Component {
    constructor(props) {
        super(props)
    }
    state = {
        collapsed: false,
        menuObj: menuObj,
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
        //  }
        return bread;
    }
    render() {
        console.log(document.body.clientHeight, 'clientHeight')
        return (
            <Layout>
                <SiderMenu />
                <Layout>
                    <Header className='main-header' />
                    <Content style={{ margin: '0 16px' }}>
                        <Breadcrumb className='main-breadcrumb'>
                            {this.breadCrumb()}
                            {/* <Breadcrumb.Item>User</Breadcrumb.Item>
                            <Breadcrumb.Item>Bill</Breadcrumb.Item> */}
                        </Breadcrumb>
                        <div className='main-content' style={{ height: document.body.clientHeight - 130 }}>
                            {LANGUAGE.TEXT.BUILDTIPS}
                        </div>
                    </Content>
                    <Footer className='main-footer'>
                        &copy;XC
                    </Footer>
                </Layout>
            </Layout>
        )
    }
}
export default componentName