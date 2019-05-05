

export const MenuList =  [
    {
        id:1,
        name: "首页",
        icon: "home",
        url: "/",
        isParent: false,
    },
    {
        id:2,
        name: "个人信息",
        icon: "file-text",
        url: "/solution",
        isParent: false,
    },
    {
        id:3,
        name: "流程人员控制",
        icon: "tool",
        url: "/flow/flowPerson",
        isParent: false,
    },
    {
        id:4,
        name: "项目经验",
        icon: "user",
        url: "/pm",
        isParent: true,
        children: [
            {
                id:41,
                name: "概述",
                icon: "",
                url: "/pm/total",
                isParent: false
            }, 
            {
                id:42,
                name: "ZSPM",
                icon: "usergroup-add",
                url: "/pm/zspm",
                isParent: false, 
            },
            {
                id:43,
                name: "FGPM",
                icon: "usergroup-add",
                url: "/pm/fgpm",
                isParent: true,
                children: [
                    {
                        id:421,
                        name: "Layui 版",
                        icon: "",
                        url: "/pm/fgpm/layui",
                        isParent: false
                    },
                    {
                        id:422,
                        name: "React+Antd 版",
                        url: "/pm/fgpm/react",
                        isParent: false
                    },
                ]
            },
            {
                id:44,
                name: "PORTOR",
                icon: "usergroup-add",
                url: "/pm/portor",
                isParent: false, 
            },
            {
                id:45,
                name: "METTING",
                icon: "usergroup-add",
                url: "/pm/meeting",
                isParent: false, 
            },
            {
                id:46,
                name: "ZBT",
                icon: "usergroup-add",
                url: "/pm/zbt",
                isParent: false, 
            },
            {
                id:47,
                name: "FORM",
                icon: "usergroup-add",
                url: "/pm/form",
                isParent: false, 
            },
        ]
    },
    // {
    //     name: "组织管理",
    //     icon: "team",
    //     url: "/group",
    //     isParent: true,
    //     children: [
    //         {
    //             name: "部门详情",
    //             icon: "bars",
    //             url: "/group/org",
    //             isParent: false
    //         },
    //         {
    //             name: "部门管理",
    //             icon: "solution",
    //             url: "/group/users",
    //             isParent: false
    //         },
    //     ]
    // },
    // {
    //     name: "设置菜单",
    //     icon: "setting",
    //     url: "/option",
    //     isParent: true,
    //     children: [
    //         {
    //             name: "消息设置",
    //             icon: "mail",
    //             url: "/option/msg",
    //             isParent: false
    //         },
    //         {
    //             name: "系统设置",
    //             icon: "windows",
    //             url: "/option/setting",
    //             isParent: false
    //         },
    //         {
    //             name: "测试页面",
    //             icon: "windows",
    //             url: "/demo",
    //             isParent: false
    //         },
    //     ]
    // },
]
export const config = {
    hourTime:1000*60*60,
}