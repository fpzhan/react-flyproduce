# react-flyproduce


### 插件介绍
   react-flyproduce插件，是flyproduce代码生成器的一部分。登录[flyproduce网站](http://www.flyproduce.com)，生成后端java代码(可以选择性的使用swagger2,mybatis-plus技术)，以及前端react代码，各种自定义文档。然后使用react-flyproduce插件(同时实现了双向数据绑定，没有采用监听机制，不会影响react的高性能)，可以简单明了的实现对服务器的请求。使html与javascript具有极低的耦合度。对于大中小型公司，页面样式频繁切换和快速开发程序提供了极大帮助。
 
### 插件使用建议
   利用[flyproduce网站](http://www.flyproduce.com)和react-flyprodce插件，已经可以快速生成java代码和javascript中请求服务器代码。如果html代码也能快速生成，那你开发程序的速度将会非常非常快速。最后只需将html和javascript进行简单绑定即可。
   
   html页面的生成，有许多工具可以使用，比如：拖拽生成html页面的网站，人工智能扫描ui原型生成html页面。
   
### 教程
[flyproduce网站](http://www.flyproduce.com)中有详细的视频教程以及图文教程。
或者直接下载[百度网盘](https://pan.baidu.com/s/1hm7GoZyG9e30oZ5Smptm_w) 提取码：fd0u
### github地址
```
https://github.com/fpzhan/vue-flyproduce.git
```

### vue-flyproduce使用api
url: String &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;接口请求路径（必填）

input: Object &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;查询参数

output: Object &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;返回结果

success: Function &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;查询成功回调行数

error: Function &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;查询失败回调行数

contentType: String &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ajax请求contentType头信息

submitId: String &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;触发查询节点的id

inputClear: Boolean &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;查询完参数是否清空query

init: Boolean &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;是否页面加载完成之后就进行初始化

paginationRef: String &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;vuetable分页插件ref名称

pageValue: Number &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;当前第几页的值

size: Number &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;每页多少条数据

pages: Number  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;返回的总页数 

total: Number &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;返回的数据总数

statusPath: String &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;返回状态参数路径(暂时只支持一级路径)

totalPath: String &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;返回总数据路径(暂时只支持一级路径)

currentName: String &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;请求第几页传入参数名

sizeName: String &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;每页多少条数据参数名

dataPath: String &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;返回数据路径(暂时只支持一级路径)

pagesPath: String &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;返回总页数路径(暂时只支持一级路径)

currentPath: String &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;返回当前第几页路径(暂时只支持一级路径)

submitEvent: String &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;绑定submitId节点的事件名称，例如：click

flyproduceRef:String  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;当前flyproduce Dom ref属性值(必填,与belongComponent一起使用实现双向数据绑定)

belongComponent:Object  &nbsp;&nbsp;当前react类(必填,与flyproduceRef一起使用实现双向数据绑定)

支持jquery ajax 所有参数，可参考[w3school ajax教程](http://www.w3school.com.cn/jquery/ajax_ajax.asp)

