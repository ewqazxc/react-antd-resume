const ZH = {
    XC:'@xc@',
    BUTTON:{
        OK:'确定',
        CANCEL:'取消',
    },
    TEXT:{
        WELCOME:'欢迎参观~',
        BUILDTIPS:'龟速建设中。。。',
        ZH:'中文',
        EN:'英文',
    },
    TIPS:{
        CTRTIP:'操作提示',
        CURRENTLANGUAGE:'当前语言为：@xc@',
        CHANGELANGUAGE:'确认切换语言为：@xc@？',
        CHANGELANGUAGE1:'切换成功，页面自动刷新中。。。',
    }
}
const EN = {
    XC:'@xc@',
    BUTTON:{
        OK:'Ok',
        CANCEL:'Cancel',
    },
    TEXT:{
        WELCOME:'Welcome to visit~',
        BUILDTIPS:'Turtle speed under construction。。。',
        ZH:'Chinese',
        EN:'English',
    },
    TIPS:{
        CTRTIP:'Operation Tip',
        CURRENTLANGUAGE:'Current language is：@xc@',
        CHANGELANGUAGE:'Make sure to switch the language to：@xc@？',
        CHANGELANGUAGE1:'The page will refresh automatically after the successful switch。。。',
    }
}
const LANGUAGE = localStorage.language=='EN'?EN:ZH;
export default LANGUAGE;