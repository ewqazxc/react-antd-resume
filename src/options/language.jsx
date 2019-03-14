const ZH = {
    TEXT:{
        BUILDTIPS:'龟速建设中。。。'
    }
}
const EN = {
    TEXT:{
        BUILDTIPS:'SLOW SLOW SLOW。。。'
    }
}
const LANGUAGE = localStorage.language=='EN'?EN:ZH;
export default LANGUAGE;