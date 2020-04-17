/**
 *
 * data : {
 *   tag:"div"，//标签名字
 *  attributes:{} //所有需要用到的属性,
 * event:[{
 *    type:"click", //该标签需要添加的事件类型
 *   fn:function(){} //事件的回调函数
 *   }]
 *  children:[], //子标签，子标签的数据格式与父标签相同
 *   parent:parent,//该dom元素的父元素，如果没该属性将返回该dom元素
 *  }
 *
 * 创建dom结构
 * @param params
 * @returns {HTMLElement}
 */
function createDom(params){

    var parent =params.parent;

    var tag = params.tag;

    var attributes = params.attributes;

    var event = params.event;

    var children = params.children;

    var _tag = document.createElement(tag);

    for(var attribute in attributes){

        if(attribute == "text"){

            var _text = document.createTextNode(attributes[attribute]);

            _tag.appendChild(_text);

        }else{

            _tag.setAttribute(attribute,attributes[attribute]);

        }

    }

    if(event){

        for(var i=0;i<event.length;i++){

            _tag.addEventListener(event[i].type,event[i].fn);

        }

    }

    if(children){

        for(var i=0;i<children.length;i++){

            var params = children[i];

            _tag.appendChild(createDom(params));

        }

    }

    if(parent){

        parent.appendChild(_tag);

    }else{

        return _tag;

    }

}
module.exports={
    createDom
}