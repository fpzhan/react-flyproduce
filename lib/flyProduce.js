"use strict";var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},_createClass=function(){function a(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),_react=require("react"),_react2=_interopRequireDefault(_react),_jquery=require("jquery"),_jquery2=_interopRequireDefault(_jquery),_FlyInterface=require("./FlyInterface"),_FlyInterface2=_interopRequireDefault(_FlyInterface),_FlyEntity=require("./FlyEntity"),_FlyEntity2=_interopRequireDefault(_FlyEntity);function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(a,b){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return b&&("object"==typeof b||"function"==typeof b)?b:a}function _inherits(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}function contains(b,a){for(var c=b.length;c--;)if(b[c]===a)return!0;return!1}var FlyProduce=function(_React$Component){/**
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
     */function FlyProduce(a){_classCallCheck(this,FlyProduce);var b=_possibleConstructorReturn(this,(FlyProduce.__proto__||Object.getPrototypeOf(FlyProduce)).call(this,a));// this.props={
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
return b.data={//ajax发起请求时，数据存储的位置
ajaxData:{},ajaxParam:["options","async","beforeSend","cache","complete","contentType","context","dataFilter","dataType","global","ifModified","jsonp","jsonpCallback","password","processData","scriptCharset","traditional","timeout","type","username","xhr"]},b}return _inherits(FlyProduce,_React$Component),_createClass(FlyProduce,[{key:"componentDidMount",value:function b(){this.getProps("belongComponentFunc")&&this.getProps("belongComponentFunc")(this);var a=this;//页面渲染完成后，进行触发ajax请求节点的元素绑定
a.getProps("submitId")&&(0,_jquery2.default)("#"+a.getProps("submitId")).bind(a.getProps("submitEvent")?a.getProps("submitEvent"):"click",function(){a.action()}),//页面加载完成后，初始化数据请求
a.getProps("init")&&a.action()}},{key:"render",value:function a(){return _react2.default.createElement("div",null)}//全局赋值，通过该方法进行。只修改数据，不修改变量引用地址
},{key:"setVal",value:function setVal(mData,mVal,list){var _Mathmax=Math.max,data=mData,val=mVal,dataStr="mData",valStr="mVal";if(list&&list instanceof Array){for(var y=0;y<list.length;y++)dataStr+="['"+list[y]+"']",valStr+="['"+list[y]+"']";eval("val="+valStr),eval("data="+dataStr)}else list=[];if(data instanceof Array&&val instanceof Array){for(var maxValue=_Mathmax(val.length,data.length),delIndex=-1,delLength=0,i=0;i<maxValue;i++)data[i]&&val[i]?(list.push(i),this.setVal(mData,mVal,list),list.pop()):!data[i]&&val[i]?data.push(val[i]):data[i]&&!val[i]&&(-1===delIndex&&(delIndex=i),++delLength);-1!==delIndex&&data.splice(delIndex,delLength)}else if("object"===("undefined"==typeof data?"undefined":_typeof(data))&&"object"===("undefined"==typeof val?"undefined":_typeof(val)))for(var key in data)list.push(key),this.setVal(mData,mVal,list),list.pop();else"function"!=typeof val&&"function"!=typeof data&&("undefined"==typeof val?eval(dataStr+"=''"):eval(dataStr+"="+valStr))}//全局props取值
},{key:"getProps",value:function b(a){return this.props[a]?"input"===a&&this.props[a]instanceof _FlyEntity2.default?this.props[a].infos:this.props[a]:void 0!==a&&this.props.flyAction&&this.props.flyAction instanceof _FlyInterface2.default&&void 0!==this.props.flyAction.infos[a]?"input"===a&&this.props.flyAction.infos[a]instanceof _FlyEntity2.default?this.props.flyAction.infos[a].infos:this.props.flyAction.infos[a]:void 0===a?this.props.flyAction&&this.props.flyAction instanceof _FlyInterface2.default?this.props.flyAction.infos:this.props:void 0}//全局props赋值
},{key:"setProps",value:function c(a,b){this.props[a]?"input"===a&&this.props[a]instanceof _FlyEntity2.default?this.setVal(this.props[a].infos,b):this.setVal(this.props[a],b):this.props.flyAction&&this.props.flyAction instanceof _FlyInterface2.default&&void 0!==this.props.flyAction.infos[a]&&("input"===a&&this.props.flyAction.infos[a]instanceof _FlyEntity2.default?this.setVal(this.props.flyAction.infos[a].infos,b):"string"==typeof this.props.flyAction.infos[a]||"number"==typeof this.props.flyAction.infos[a]?this.props.flyAction.infos[a]=b:void 0===b?this.props.flyAction.infos[a]instanceof Array?this.setVal(this.props.flyAction.infos[a],[]):"object"==_typeof(this.props.flyAction.infos[a])&&this.setVal(this.props.flyAction.infos[a],{}):this.setVal(this.props.flyAction.infos[a],b))}//清空input参数
},{key:"clearObject",value:function c(a){for(var b in a)a[b]instanceof Array?a[b]=[]:"object"===_typeof(a[b])?this.clearObject(b):"string"==typeof a[b]?a[b]="":"number"==typeof a[b]&&(a[b]=0)}//发起ajax请求
},{key:"action",value:function e(){var a=this;a.getProps("flyProduceRef")&&(a.getProps("input")[a.getProps("currentName")]=a.getProps("pageValue"),a.getProps("input")[a.getProps("sizeName")]=a.getProps("size")),a.getProps("contentType")&&"application/json"===a.getProps("contentType")?this.data.ajaxData=JSON.stringify(a.getProps("input")):(a.getProps("input")instanceof Array&&void 0,this.data.ajaxData=a.getProps("input"));var b={url:a.getProps("url"),data:this.data.ajaxData,success:function c(b){200===b[a.getProps("statusPath")]&&(a.setProps("output",b[a.getProps("dataPath")]),a.getProps("pagesPath")&&""!==a.getProps("pagesPath")&&a.setProps("pages",b[a.getProps("pagesPath")]),a.getProps("totalPath")&&""!==a.getProps("totalPath")&&a.setProps("total",b[a.getProps("totalPath")])),a.getProps("success")&&a.getProps("success")(b),a.getProps("belongComponent")&&a.getProps("belongComponent").setState(a.getProps("belongComponent")),a.getProps("inputClear")&&a.clearObject(a.getProps("input"))},error:function c(b){a.getProps("error")&&a.getProps("error")(b),a.getProps("inputClear")&&a.clearObject(a.getProps("input"))}},c=this.getProps();if(void 0!==c&&"object"===("undefined"==typeof c?"undefined":_typeof(c)))for(var d in c)void 0!==c[d]&&contains(d,this.data.ajaxParam)&&(b[d]=c[d]);_jquery2.default.ajax(b)}},{key:"changePage",value:function a(){}}]),FlyProduce}(_react2.default.Component);module.exports={FlyEntity:_FlyEntity2.default,FlyInterface:_FlyInterface2.default,FlyProduce:FlyProduce};