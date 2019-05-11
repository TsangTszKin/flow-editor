var chartId = 1;
var definition = "";
var nodes = [];
var role = "owner";
var cateType = "flow";
var userId = "xxxx";
var userName = "admin";
var time = "1505873895344";
var dock = "metric";
var tutorial = false;
var locale = "zh";
var showToolbar = true;
var cstatus = "private";
var dateFormat = "yyyy-MM-dd hh:mm";
var showCommentIco = true;
var localRuntime = false;
var chartVersion = 2;

var categorys = {
	'dataSource': {
		title: '数据源节点', child: [
			{
				name: 'start',
				title: '开始',
				icon: '<img class="icon" src="../../../img/node/start.png" style="height: 15px;">',
				selected: ['control', 'query', 'rule', 'ruleSet', 'assign'],
				status: 0,
				fontStyle: {
					fontFamily: "微软雅黑",
					size: 13,
					color: "255,255,255",
					bold: false,
					italic: false,
					underline: false,
					textAlign: "center",
					vAlign: "middle",
					orientation: "vertical"
				},
				lineStyle: {
					lineWidth: 1,
					lineColor: "228,75,78",
					lineStyle: "solid"
				},
				fillStyle: {
					type: "solid",
					color: "228,75,78"
				},
			}
		]
	},
	'control': {
		title: '控制节点', child: [
			{
				name: 'control',
				title: '条件节点',
				icon: '<img class="icon" src="../../../img/node/control.png" style="height: 15px;">',
				selected: ['control', 'query', 'rule', 'ruleSet', 'assign', 'output'],
				status: 0,
				fontStyle: {
					fontFamily: "微软雅黑",
					size: 13,
					color: "24, 144, 255",
					bold: false,
					italic: false,
					underline: false,
					textAlign: "left",
					vAlign: "middle",
					orientation: "vertical"
				},
				lineStyle: {
					lineWidth: 1,
					lineColor: "24, 144, 255",
					lineStyle: "solid"
				},
				fillStyle: {
					type: "solid",
					color: "227,239,250"
				},
			},
		]
	},

	'execute': {
		title: '执行节点', child: [
			{
				name: 'query',
				title: '查询节点',
				icon: '<img class="icon" src="../../../img/node/query.png" style="height: 15px;">',
				selected: [],
				status: 0,
				fontStyle: {
					fontFamily: "微软雅黑",
					size: 13,
					color: "228, 75, 78",
					bold: false,
					italic: false,
					underline: false,
					textAlign: "left",
					vAlign: "middle",
					orientation: "vertical"
				},
				lineStyle: {
					lineWidth: 1,
					lineColor: "228, 75, 78",
					lineStyle: "solid"
				},
				fillStyle: {
					type: "solid",
					color: "247,232,233"
				},
			},
			// { name: 'rule', title: '规则', icon: '<i class="icon fa fa-share-alt"></i>', selected: [], status: 0 },
			// { name: 'ruleSet', title: '规则集', icon: '<i class="icon fa fa-share-alt-square"></i>', selected: [], status: 0 },
			// { name: 'assign', title: '赋值节点', icon: '<i class="icon fa fa-facebook"></i>', selected: [], status: 0 },
			{
				name: 'output',
				title: '输出节点',
				icon: '<img class="icon" src="../../../img/node/output.png" style="height: 15px;">',
				selected: [],
				status: 1,
				fontStyle: {
					fontFamily: "微软雅黑",
					size: 13,
					color: "228, 75, 78",
					bold: false,
					italic: false,
					underline: false,
					textAlign: "left",
					vAlign: "middle",
					orientation: "vertical"
				},
				lineStyle: {
					lineWidth: 1,
					lineColor: "228, 75, 78",
					lineStyle: "solid"
				},
				fillStyle: {
					type: "solid",
					color: "247,232,233"
				},
			}
		]
	}
};

$.each(categorys, function (k, v) {
	Schema.addCategory({
		name: k,
		text: v.title,
		dataAttributes: []
	});
	$.each(v.child, function () {
		var key = this.name;
		if (this.name === 'start') {
			Schema.addShape({
				name: this.name,
				title: this.title,
				category: k,
				icon: this.icon,
				selected: this.selected,
				fontStyle: this.fontStyle,
				lineStyle: this.lineStyle,
				fillStyle: this.fillStyle,
				props: { w: 150, h: 40, },
				path: [{
					actions: [{ action: "move", x: "Math.min(w,h)/2.5", y: "0" },
					{ action: "line", x: "w-Math.min(w,h)/2.5", y: "0" },
					{ action: "curve", x1: "w+Math.min(w,h)/2.5/2.5", y1: "0", x2: "w+Math.min(w,h)/2.5/2.5", y2: "h", x: "w-Math.min(w,h)/2.5", y: "h" },
					{ action: "line", x: "Math.min(w,h)/2.5", y: "h" },
					{ action: "curve", x1: "-Math.min(w,h)/2.5/2.5", y1: "h", x2: "-Math.min(w,h)/2.5/2.5", y2: "0", x: "Math.min(w,h)/2.5", y: "0" },
					{ action: "close" }]
				}]
			});
		} else {
			Schema.addShape({
				name: this.name,
				title: this.title,
				category: k,
				icon: this.icon,
				selected: this.selected,
				fontStyle: this.fontStyle,
				lineStyle: this.lineStyle,
				fillStyle: this.fillStyle,
				props: { w: 150, h: 40, },
				path: [{
					actions: [{ action: "move", x: "Math.min(w,h)/5/5", y: "0" },
					{ action: "line", x: "w-Math.min(w,h)/5/5", y: "0" },
					{ action: "curve", x1: "w+Math.min(w,h)/5/5", y1: "0", x2: "w+Math.min(w,h)/5/5", y2: "h", x: "w-Math.min(w,h)/5/5", y: "h" },
					{ action: "line", x: "Math.min(w,h)/5/5", y: "h" },
					{ action: "curve", x1: "-Math.min(w,h)/5/5", y1: "h", x2: "-Math.min(w,h)/5/5", y2: "0", x: "Math.min(w,h)/5/5", y: "0" },
					{ action: "close" }]
				}]
			});
		}

		var temp = $('#configure .template');
		var _div = temp.find('#temp_' + key);
		if (_div.length == 0 && this.formEL) {
			temp.append('<div id="temp_' + key + '"></div>');
			_div = temp.find('#temp_' + key);
			$.each(this.formEL, function () {
				var require = ' <font>*</font>', required = 'required', tipHtml = '<i title_pos="left" title="' + (this.tips || '') + '" class="fa fa-question-circle"></i>';
				if (this.hide) required = '';
				if (this.require == false) require = '';
				if (!this.tips) tipHtml = '';

				var startHtml = '<div class="layui-form-item ' + this.name + '">' + '<label class="layui-form-label">' + this.title + require + '</label>' + '<div class="layui-input-block">';
				var endHtml = '</div></div>';

				//title="'+this.title+'" 
				if (this.type == 'select') {
					_div.append(startHtml
						+ '<select name="' + this.name + '" lay-verify="' + required + '|' + this.name + '" lay-filter="' + (this.filter || '') + '"><option value="">请选择...</option></select>'
						+ tipHtml + endHtml);
					var select = _div.find('select[name="' + this.name + '"]');
					if (this.child)
						var nn = this.name;
					$.each(this.child, function () {
						select.append('<option value="' + this.value + '" xx="{{ d.' + nn + '==\'' + this.value + '\'?\'selected\':\'\' xx}}">' + this.text + '</option>');
					});
				} else if (this.type == 'textarea') {
					_div.append(startHtml
						+ '<textarea name="' + this.name + '" class="layui-textarea" lay-verify="' + required + '|' + this.name + '" placeholder="请输入' + this.title + '" class="layui-input">{{ d.' + this.name + '||\'\' }}</textarea>'
						+ tipHtml + endHtml);
				} else {
					var num = this.type;
					if (this.type != "number") num = '';
					_div.append(startHtml
						+ '<input type="' + this.type + '" name="' + this.name + '" value="{{ d.' + this.name + '||\'\' }}" lay-verify="' + required + '|' + (this.name + '|' + num) + '" placeholder="请输入' + this.title + '" class="layui-input" />'
						+ tipHtml + endHtml);
				}
				if (this.hide) {
					_div.find('.' + this.name).hide();
				}
			});
		}
	});
});

//把下面的layui的代码抽取出有用的出来
$("a.plus").click(function () {
	Designer.zoomIn()
})
$("a.minus").click(function () {
	Designer.zoomOut()
})
setTimeout(() => {
	// alert($(window).height())
	$('#canvas_container').height($(window).height());
}, 2000);

//layui使用开始
// layui.use(['layer', 'element', 'form', 'laytpl'], function () {
// 	var layer = layui.layer, el = layui.element, form = layui.form, $ = layui.jquery;
// 	var conf = $("#configure"), cancel = conf.find('#cancel');
// 	$('a.plus').click(Designer.zoomIn);
// 	$('a.minus').click(Designer.zoomOut);

// 	setTimeout(() => {
// 		// alert($(window).height())
// 		$('#canvas_container').height($(window).height());
// 	}, 1000);
// 	if ($('.layui-edit').length > 0) {
// 		$('#canvas_container').height($(window).height());
// 		definition = localStorage['chart'];
// 	}
// 	if ($('.layui-log').length > 0) {
// 		$('#shape_panel').hide();
// 		$('a.time').html('时间：' + new Date().format('yyyy-MM-dd'));
// 		$('#configure .layui-hide-div').show();
// 	}
// 	//ajax还原 
// 	if (definition) {
// 		console.log("definition", definition)
// 		Designer.selectAll();
// 		Designer.op.removeShape();
// 		Designer.open(definition);
// 		chartId = '1';//赋值jobId
// 		//组件 data 绑定
// 	}

// 	var active = {
// 		addJob: function () {
// 			var addJob = function () {
// 				var _index;
// 				layer.open({
// 					type: 1,
// 					title: '新建任务',
// 					offset: 'auto',
// 					area: ['400px', '300px'],
// 					content: $('#addJob'),
// 					btn: ['保存', '关闭'],
// 					btnAlign: 'c',
// 					shade: 0,
// 					move: 0,
// 					closeBtn: 0,
// 					success: function (layero, index) {
// 						layero.find('.layui-reset').click();
// 						form.render();
// 					},
// 					yes: function (index, layero) {
// 						_index = index;
// 						layero.find('.layui-addJob').click();
// 					},
// 					btn2: function (index, layero) {
// 						layer.close(index);
// 					}
// 				});
// 				form.on('submit(addJob)', function (data) {
// 					layer.msg('新建任务成功!');
// 					$('.middle a.name').html('名称：' + data.field.name);
// 					layer.close(_index);
// 					chartId = 1;//_index;
// 					$('#canvas_container').height($(window).height());
// 					return false;
// 				});
// 			}

// 			if (!$.isEmptyObject(Model.define.elements)) {
// 				layer.open({
// 					type: 1,
// 					title: '提示',
// 					offset: 'auto',
// 					content: '<div style="padding: 20px 50px;text-align: center;">亲, 画布不为空, 清空画布吗?</div>',
// 					btn: ['清空', '保留'],
// 					btnAlign: 'c',
// 					shade: 0,
// 					move: 0,
// 					closeBtn: 0,
// 					yes: function (index, layero) {
// 						Designer.selectAll();
// 						Designer.op.removeShape();
// 						layer.close(index);
// 						addJob();
// 					},
// 					btn2: function (index, layero) {
// 						layer.close(index);
// 						addJob();
// 					}
// 				});
// 			} else {
// 				addJob();
// 			}
// 		},
// 		testJob: function () {
// 			//测试组件是否正常
// 			//CLB.offline();
// 			localStorage['chart'] = JSON.stringify(Model.define);
// 			if (autoFn())
// 				layer.load(0, {
// 					content: '测试中...', time: 3 * 1000, end: function () {
// 						layer.msg('测试成功')
// 					}
// 				});
// 		},
// 		downJob: function () {
// 			//CLB.offline();
// 			localStorage['chart'] = JSON.stringify(Model.define);
// 			layer.load(0, {
// 				content: '下载中...', time: 3 * 1000, end: function () {
// 					layer.msg('下载成功')
// 				}
// 			});
// 		}
// 	};

// 	//自动校验
// 	var autoFn = function () {
// 		nodes = [], definition = JSON.stringify(Model.define);
// 		var retFlag = true;
// 		if (!chartId) {
// 			layer.msg('请先创建任务');
// 			return;
// 		}
// 		$.each(Model.define.elements, function (k, v) {
// 			if (!retFlag) return retFlag;
// 			if (!$('#' + k).hasClass('linker_box')) {
// 				var node = $('#' + k).data('node');
// 				if (!node || !node.nodeId) {
// 					retFlag = false;
// 					layer.msg('请双击【' + v.title + '】组件，配置对应的参数');
// 				} else {
// 					nodes.push(node);
// 				}
// 			}
// 		});
// 		if (!retFlag) return retFlag;
// 		if (!definition || nodes.length == 0) {
// 			layer.msg('请拖动组件并且关联任务');
// 			return retFlag;
// 		}
// 		return retFlag;
// 	};

// 	//check
// 	form.on('select(fileSystem)', function (d) {
// 		var p = d.othis.parent().parent();
// 		var c2 = p.nextAll('.col2');
// 		var c3 = p.nextAll('.col3');
// 		if (d.value == 'local') {
// 			c2.find('[name="col2"]').attr('lay-verify', 'col2');
// 			c2.hide();
// 			c3.find('[name="col3"]').attr('lay-verify', 'required|col3');
// 			c3.show();
// 		} else {
// 			c2.find('[name="col2"]').attr('lay-verify', 'required|col2');
// 			c2.show();
// 			c3.find('[name="col3"]').attr('lay-verify', 'col3');
// 			c3.hide();
// 		}
// 	});
// 	form.verify({
// 		remark: function (value, item) {
// 			if (!value) {
// 				conf.find('.layui-tab-title li:last').click();
// 				return '描述信息不能为空';
// 			}
// 		}
// 	});
// 	form.on('submit(nodesave)', function (d) {
// 		var nodeId = d.field.nodeId;
// 		$('#' + nodeId).find('.text_canvas').val(d.field.name);
// 		$('#' + nodeId).data('node', d.field);
// 		cancel.click();
// 	});
// 	cancel.unbind('click').bind('click', function () {
// 		cancel.unbind('click.cancel');
// 		conf.hide();
// 	});
// 	$('body').mousedown(function () {
// 		$('.ui_tip_close').click();
// 	});
// 	$('a').on('click', function () {
// 		var othis = $(this), type = othis.data('click');
// 		active[type] ? active[type].call(this, othis) : '';
// 	});
// });

//layui使用结束

function nodeConf(node) {
	var nodeId = node.id, data = $('#' + nodeId).data('node') || {}, conf = $("#configure");
	var form = layui.form, laytpl = layui.laytpl;
	var temp = $('#temp_' + node.name).html();
	temp = temp.replaceAll('xx="{{', '{{');
	temp = temp.replaceAll('xx}}"', '}}');
	if (node.title && !data.name) {
		data.name = node.title;
	}
	$('#' + nodeId).find('.text_canvas').val(data.name);

	laytpl(temp).render(data, function (html) {
		conf.find('[name="nodeId"').val(nodeId);
		conf.find('[name="remark"').val(data.remark || '');
		conf.find('.layui-tab-content .layui-tab-item:eq(0)').html(html);
		form.render();
		conf.show();
		conf.find('.layui-tab-title li:first').click();
	});
}

function showMenu(m) {
	if ($('.layui-log').length > 0) {
		m.children().show();
		m.children('li[ac=log]').unbind('click').click(function () {
			layer.open({
				type: 1,
				title: false,
				offset: 'auto',
				area: ['80%', '500px'],
				content: '<pre class="layui-code layui-code-log" lay-title="日志"></pre>',
				btn: '关闭',
				btnAlign: 'c',
				shade: 0.1,
				move: 0,
				shadeClose: true,
				success: function () {
					$('.layui-code-log').append($('#log-demo').html());
					layui.use('code', function () {
						layui.code({
							title: '日志',
							about: false,
						});
					});
				}
			});
		});
	}
}
