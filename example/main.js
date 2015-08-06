var t_table= Handlebars.compile($("#list_tpl").html());
var url='http://127.0.0.1:8360/home/index/indexJSON';

var options={
	url:url,
	dataName:"data",
	totalName:"total",
	rowLimit:10,
	tpl:t_table,
	target:"#list"
	//height:"500px"
};
var pp=new List(options);