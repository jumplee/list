list组件
=====
list组件可以方便地给数据分页。
使用场景：想要分页又不需要使用table组件（jqGrid，datatable等）的情况。可以有更灵活的样式

###安装
1.引用js
    依赖：jquery handlebar
    组件
    ```html
        <script src="http://cdn.bootcss.com/jquery/3.0.0-alpha1/jquery.min.js"></script>
        <script src="http://cdn.bootcss.com/handlebars.js/3.0.3/handlebars.min.js"></script>
        <script src="../dist/pager2.js"></script>
    ```
    handlebar.js也可以引用runtime，如果使用webpack可以直接require相应模板。只需要保证配置项tpl
2.引用css
    ```html
        <link rel="stylesheet" href="../dist/list.css">
    ``
##使用

####前台代码
```javascript
//var t_table=require('listItemTpl.html');
var t_table= Handlebars.compile($("#list_tpl").html());
//后台action
//var url='http://127.0.0.1:8360/home/index/indexJSON';
//用json文件先代替一下
var url='http://127.0.0.1:8360/home/index/indexJSON';
var options={
	url:url,
	dataName:"data",
	totalName:"total",
	rowLimit:10,
	tpl:t_table,
	//jquery 选择器
	target:"#list"
	//height:"500px"
};
var pp=new List(options);

```

####后台代码
使用[thinkjs](http://thinkjs.cn)
```javascript
/**
 * controller
 * @return
 */
module.exports = Controller("Home/BaseController", function(){
  "use strict";
  return {
    indexAction: function(){
      //render View/Home/index_index.html file
      this.display();
    },
    indexJSONAction:function(){
      var self=this;
      var page=this.get('page');
      setTimeout(function(){
        D('test').page(page,5).countSelect().then(function(data){
          self.json(data);
        })
      },1000);

    },
    addTestPatchAction:function(){

    }
  };
});

```