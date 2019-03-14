// 判空字符串
export function unStr(text){
    if(text=='undefined'||text=='null'||typeof(text)=='undefined'||text==null){
        return ""
    } else {
        return `${text}`
    }
}
// 遍历树结构为数组
export function treeToList(tree,child){
    let list = child?child:[];
    tree.map((item,index)=>{
        list.push(item);
        if(unStr(item.children)){
            treeToList(item.children,list);
        }
    })
    return list;
}
// 数组指定键值为对象
export function listToObj(list,key,value){
    let obj = {};
    list.map((i,d)=>{
        let k = i[key];
        let v = i[value];
        obj[k] = v;
    })
    return obj;
}