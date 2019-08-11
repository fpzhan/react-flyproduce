import React from "react";
import $ from "jquery";
import FlyInterface from "./FlyInterface"
import FlyEntity from "./FlyEntity"

function contains(a, obj) {
    var i = a.length;
    while (i--) {
        if (a[i] === obj) {
            return true;
        }
    }
    return false;
}

class FlyProduce extends React.Component {
    /**
     * props={
     *       flyAction: Object,
     *       url: String,
     *       input: Object          查询参数 ,
     *       output: Object         返回结果 ,
     *       success: Function      查询成功回调行数,
     *       error: Function        查询失败回调行数,
     *       contentType: String    ajax请求contentType头信息,
     *       submitId: String       触发查询节点的id,
     *       inputClear: Boolean    查询完参数是否清空query,
     *       init: Boolean          是否页面加载完成之后就进行初始化,
     *       paginationRef: String  分页插件ref名称,
     *       pageValue: Number      当前第几页的值,
     *       size: Number           每页多少条数据,
     *       currentName: String    请求第几页传入参数名,
     *       sizeName: String       每页多少条数据参数名,
     *       dataPath: String       返回数据路径,
     *       pagesPath: String      返回总页数路径,
     *       currentPath: String    返回当前第几页路径,
     *       submitEvent: String    绑定submitId节点的事件名称，例如：click
     *   }
     * @param props
     */
    constructor(props){
        super(props);
        debugger
        this.data={
            //ajax发起请求时，数据存储的位置
            ajaxData: {},
            ajaxParam: [
                "options",
                "async",
                "beforeSend",
                "cache",
                "complete",
                "contentType",
                "context",
                "dataFilter",
                "dataType",
                "global",
                "ifModified",
                "jsonp",
                "jsonpCallback",
                "password",
                "processData",
                "scriptCharset",
                "traditional",
                "timeout",
                "type",
                "username",
                "xhr"
            ]
        };
        // this.props={
        //         flyAction: Object,
        //         url: String,
        //         input: Object,
        //         output: Object,
        //         success: Function,
        //         error: Function,
        //         contentType: String,
        //         submitId: String,
        //         inputClear: Boolean,
        //         init: Boolean,
        //         paginationRef: String,
        //         pageValue: Number,
        //         size: Number,
        //         pages:Number,
        //         total:Number,
        //         statusPath:String,
        //         totalPath:String,
        //         currentName: String,
        //         sizeName: String,
        //         flyProduceRef:String,
        //         belongComponent:Object
        // }
        debugger

    }
    componentDidMount() {
        debugger
        this.getProps("belongComponentFunc") && this.getProps("belongComponentFunc")(this);
        var current = this;
        //页面渲染完成后，进行触发ajax请求节点的元素绑定
        current.getProps("submitId") &&
        $("#" + current.getProps("submitId")).bind(
            current.getProps("submitEvent")
                ? current.getProps("submitEvent")
                : "click",
            function() {
                current.action();
            }
        );
        debugger
        //页面加载完成后，初始化数据请求
        current.getProps("init") && current.action();
    }
    render() {
        return (<div></div>)
    }
    //全局赋值，通过该方法进行。只修改数据，不修改变量引用地址
    setVal(mData, mVal, list) {
        var data = mData;
        var val = mVal;
        var dataStr = "mData";
        var valStr = "mVal";
        if (list && list instanceof Array) {
            for (var y = 0; y < list.length; y++) {
                dataStr += "['" + list[y] + "']";
                valStr += "['" + list[y] + "']";
            }
            eval("val=" + valStr);
            eval("data=" + dataStr);
        } else {
            list = [];
        }
        if (data instanceof Array && val instanceof Array) {
            var maxValue = Math.max(val.length, data.length);
            var delIndex = -1;
            var delLength = 0;
            for (var i = 0; i < maxValue; i++) {
                if (data[i] && val[i]) {
                    list.push(i);
                    this.setVal(mData, mVal, list);
                    list.pop();
                } else if (!data[i] && val[i]) {
                    data.push(val[i])
                    // var Vues = Vue;
                    // eval("Vues.set(" + dataStr + ",i," + valStr + "[i]);");
                } else if (data[i] && !val[i]) {
                    if (delIndex === -1) {
                        delIndex = i;
                    }
                    delLength = delLength + 1;
                }
            }
            if (delIndex !== -1) {
                data.splice(delIndex, delLength);
            }
        } else if (typeof data === "object" && typeof val === "object") {
            for (var key in data) {
                list.push(key);
                this.setVal(mData, mVal, list);
                list.pop();
            }
        } else if(  typeof val !=="function" && typeof data !=="function"){
            if(typeof val !== "undefined"){
                eval(dataStr + "=" + valStr);
            }else{
                eval(dataStr+"=''")
            }

        }
    }
    //全局props取值
    getProps(str) {
        if (this.props[str]) {
            if (str === "input" && this.props[str] instanceof FlyEntity) {
                return this.props[str].infos;
            } else {
                return this.props[str];
            }
        } else if (
            str !== undefined &&
            this.props.flyAction &&
            this.props.flyAction instanceof FlyInterface &&
            this.props.flyAction.infos[str]!==undefined
        ) {
            if (
                str === "input" &&
                this.props.flyAction.infos[str] instanceof FlyEntity
            ) {
                return this.props.flyAction.infos[str].infos;
            } else {
                return this.props.flyAction.infos[str];
            }
        } else if (str === undefined) {
            if (this.props.flyAction &&
                this.props.flyAction instanceof FlyInterface) {
                return this.props.flyAction.infos;
            } else {
                return this.props;
            }
        }
    }
    //全局props赋值
    setProps(str, val) {
        if (this.props[str]) {
            if (str === "input" && this.props[str] instanceof FlyEntity) {
                this.setVal(this.props[str].infos, val);
            } else {
                this.setVal(this.props[str], val);
            }
        } else if (
            this.props.flyAction &&
            this.props.flyAction instanceof FlyInterface &&
            this.props.flyAction.infos[str]!==undefined
        ) {
            if (
                str === "input" &&
                this.props.flyAction.infos[str] instanceof FlyEntity
            ) {
                this.setVal(this.props.flyAction.infos[str].infos, val);
            } else if(typeof this.props.flyAction.infos[str]==="string" || typeof this.props.flyAction.infos[str]==="number"){
                this.props.flyAction.infos[str]=val;
            }else if(val===undefined){
                if(this.props.flyAction.infos[str] instanceof Array){
                    this.setVal(this.props.flyAction.infos[str], []);
                }else if(typeof this.props.flyAction.infos[str] == "object"){
                    this.setVal(this.props.flyAction.infos[str], {});
                }
            } else{
                this.setVal(this.props.flyAction.infos[str], val);
            }
        }
    }
    //清空input参数
    clearObject(obj) {
        debugger;
        for (var i in obj) {
            if (obj[i] instanceof Array) {
                obj[i] = [];
            } else if (typeof obj[i] === "object") {
                this.clearObject(i);
            } else if (typeof obj[i] === "string") {
                obj[i] = "";
            } else if (typeof obj[i] === "number") {
                obj[i] = 0;
            }
        }
    }
    //发起ajax请求
    action() {
        var current = this;
        if (current.getProps("flyProduceRef")) {
            current.getProps("input")[
                current.getProps("currentName")
                ] = current.getProps("pageValue");
            current.getProps("input")[
                current.getProps("sizeName")
                ] = current.getProps("size");
        }

        //根据当前contentType修改数据格式
        if (
            current.getProps("contentType") &&
            current.getProps("contentType") === "application/json"
        ) {
            this.data.ajaxData = JSON.stringify(current.getProps("input"));
        } else {
            if (current.getProps("input") instanceof Array) {
                console.error("请设置contentType参数为application/json");
            }
            // var str = "";
            // if (current.getProps("input")) {
            //   for (var key in current.getProps("input")) {
            //     str += key + "=" + current.getProps("input")[key] + "&";
            //   }
            // }
            // if (str.length > 0) {
            //   str = str.substring(0, str.length - 1);
            // }
            debugger;
            this.data.ajaxData = current.getProps("input");
        }
        debugger;
        var ajaxObj = {
            url: current.getProps("url"),
            data: this.data.ajaxData,
            success: function(res) {
                debugger
                if (res[current.getProps("statusPath")] === 200) {
                    current.setProps("output", res[current.getProps("dataPath")]);
                    if (
                        current.getProps("pagesPath") &&
                        current.getProps("pagesPath") !== ""
                    ) {
                        current.setProps("pages",res[current.getProps("pagesPath")]);
                    }
                    if (
                        current.getProps("totalPath") &&
                        current.getProps("totalPath") !== ""
                    ) {
                        current.setProps("total",res[current.getProps("totalPath")]);
                    }

                }
                current.getProps("success") && current.getProps("success")(res);
                current.getProps("belongComponent") && current.getProps("belongComponent").setState(current.getProps("belongComponent")) ;
                debugger;
                if (current.getProps("inputClear")) {
                    current.clearObject(current.getProps("input"));
                }
            },
            error: function(res) {
                current.getProps("error") && current.getProps("error")(res);
                if (current.getProps("inputClear")) {
                    current.clearObject(current.getProps("input"));
                }
            }
        };

        var param = this.getProps();
        if (param !== undefined && typeof param === "object") {
            for (var name in param) {
                if (
                    param[name] !== undefined &&
                    contains(name, this.data.ajaxParam)
                ) {
                    ajaxObj[name] = param[name];
                }
            }
        }

        $.ajax(ajaxObj);
    }
    changePage(){
        debugger
    }
}


module.exports={
    FlyEntity,
    FlyInterface,
    FlyProduce
}
