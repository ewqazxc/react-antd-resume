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
        collapsed: false,

    }
    onCollapse = (collapsed) => {
        console.log(collapsed);
        this.setState({ collapsed });
    }
    initMenu=(list,pid)=>{
        let menu = [];
        list.map((item,index)=>{
            if(item.isParent==false){
                menu.push(<Menu.Item key={pid?pid+item.id:item.id}>
                <Link to={item.url}>
                    {unStr(item.icon)==''?null:<Icon type={item.icon} />} 
                    <span>{item.name}</span>
                </Link>
            </Menu.Item>)
            }else{
                menu.push(<SubMenu
                    key={pid?pid+item.id:item.id}
                    title={<span><Icon type="user" /><span>{item.name}</span></span>}
                >
                    {this.initMenu(item.children,pid?pid+item.id+'-':item.id+'-')}
                </SubMenu>)
            }
        })
        console.log(menu,'生成菜单')
        return menu;
    }
    render() {
        console.log('MENU',this.props)
        return (
            <Sider
                collapsible
                collapsed={this.state.collapsed}
                onCollapse={this.onCollapse}
            >
                <div className="logo" />
                <Menu 
                    theme="dark" 
                    defaultSelectedKeys={['1']} 
                    mode="inline"
                >
                    {this.initMenu(MenuList)}
                </Menu>
            </Sider>
        )
    }
}


export default SiderMenu