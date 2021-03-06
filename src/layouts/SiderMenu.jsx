import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import {
    Layout, Menu, Breadcrumb, Icon,
} from 'antd';


import {MenuList} from 'Options/config'
import {unStr} from 'Tools/utils'

const { Sider } = Layout;
const SubMenu = Menu.SubMenu;
console.log(MenuList,'MenuList')
class SiderMenu extends Component {
    constructor(props) {
        super(props)
    }
    state = {
        menu:[],
        collapsed: false,
        menuKey:{},
    }
    onCollapse = (collapsed) => {
        console.log(collapsed);
        this.setState({ collapsed });
    }
    initMenu=(list,pid)=>{
        let menu = [];  
        list.map((item,index)=>{
            let arrKey = pid?pid+item.id:item.id;
            arrKey = arrKey+''
            // this.state.menuKey.push({
            //     key : arrKey+'',
            //     url : item.url
            // }) 
            // this.state.menuKey[arrKey+'']=item.url;
            this.state.menuKey[item.url]=arrKey;
            if(item.isParent==false){
                menu.push(<Menu.Item key={arrKey}>
                <Link to={item.url}>
                    {unStr(item.icon)==''?null:<Icon type={item.icon} />} 
                    <span>{item.name}</span>
                </Link>
            </Menu.Item>)
            }else{  
                menu.push(<SubMenu
                    key={arrKey}
                    title={<span><Icon type="user" /><span>{item.name}</span></span>}
                >
                    {this.initMenu(item.children,pid?pid+item.id+'-':item.id+'-')}
                </SubMenu>)
            }
        })
        console.log(menu,'生成菜单')
        console.log(this.state.menuKey,'menuKey')
        return menu;
    }
    componentWillMount(){
        let menu = this.initMenu(MenuList);
        this.setState({menu})
    }
    render() {
        let pathname = this.props.location.pathname;
        return (
            <Sider
                collapsible
                collapsed={this.state.collapsed}
                onCollapse={this.onCollapse}
            >
                {
                    this.state.collapsed?null:<div className="main-logo">121234</div> 
                } 
                <Menu 
                    theme="dark" 
                    // defaultSelectedKeys={[this.state.menuKey[pathname]]} 
                    selectedKeys={[this.state.menuKey[pathname]]}
                    mode="inline"
                >
                    {this.state.menu}
                </Menu>
                
            </Sider>
        )
    }
}


export default SiderMenu;