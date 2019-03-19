import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import {
    Layout, Menu, Row, Icon,Col
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

            <Row className={this.props.className}> 
                <Menu 
                    theme="dark" 
                    selectedKeys={[this.state.menuKey[pathname]]}
                    mode="horizontal"
                >
                    {this.state.menu}
                </Menu>  
            </Row>
        )
    }
}


export default SiderMenu;