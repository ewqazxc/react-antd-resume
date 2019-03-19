import React, { Component } from 'react'
import {
    Row, Dropdown, Menu, Icon, message, Modal
} from 'antd';

import { unStr, treeToList, listToObj } from 'Tools/utils';

import LANGUAGE from 'Options/language';

const confirm = Modal.confirm;
class componentName extends Component {
    constructor(props) {
        super(props)

    }
    maenuClick = (item, key, keyPath) => {
        console.log('item, key, keyPath', item, key, keyPath)
        if (item.key == 'ZH' || item.key == 'EN') {
            this.changeLanguage(item.key)

        }
    }
    changeLanguage = (key) => {
        let language = unStr(localStorage.language);
        if (language != '' && language == key) {
            // 当前语言为：
            message.info(LANGUAGE.TIPS.CURRENTLANGUAGE.replace(LANGUAGE.XC,LANGUAGE.TEXT[key]));
        } else {
            confirm({
                // title: `操作提示`,
                title: LANGUAGE.TIPS.CTRTIP,
                // content: `确认切换语言为：${LANGUAGE.TEXT[key]}?`,
                content: LANGUAGE.TIPS.CHANGELANGUAGE.replace(LANGUAGE.XC,LANGUAGE.TEXT[key]),
                okText:LANGUAGE.BUTTON.OK,
                cancelText:LANGUAGE.BUTTON.CANCEL,
                onOk() {
                    console.log('OK');
                    // message.success('切换成功，页面自动刷新中。。。',2,()=>{
                    message.success(LANGUAGE.TIPS.CHANGELANGUAGE1,2,()=>{
                        localStorage.language = key;
                        window.location.reload(); 
                    });
                },
                onCancel() {
                    console.log('Cancel');
                },
            });
        }
        // window.location.reload()
    }
    render() {
        const menu = (
            <Menu onClick={this.maenuClick}>
                <Menu.Item key="ZH">
                    {/* 中文简体  */}
                    {LANGUAGE.TEXT.ZH}
                </Menu.Item>
                <Menu.Item key="EN">
                    {/* English */}
                    {LANGUAGE.TEXT.EN}
                </Menu.Item>
                <Menu.Divider />
                <Menu.Item key="3">3rd menu item</Menu.Item>
            </Menu>
        );
        return (
            <Row className={this.props.className}>
                <Dropdown overlay={menu} trigger={['click']}>
                    <a style={{ fontSize: 20 }} className="ant-dropdown-link" href="#">
                        {LANGUAGE.TEXT.WELCOME}
                        <Icon type="down" />
                    </a>
                </Dropdown>
            </Row>
        )
    }
}

componentName.propTypes = {

}

export default componentName