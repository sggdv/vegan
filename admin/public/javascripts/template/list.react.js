"use strict";

// Template查询页面
// 操作层：页面标题 + 添加按钮
// 展示层：数据展示

// 整个content
var TemplateListPage = React.createClass({
	displayName: "TemplateListPage",
	render: function render() {
		return React.createElement(
			"div",
			null,
			React.createElement(TemplateListOpration, null),
			React.createElement(TemplateList, null)
		);
	}
});

// 操作层
var TemplateListOpration = React.createClass({
	displayName: "TemplateListOpration",
	render: function render() {
		return React.createElement(
			"div",
			null,
			React.createElement(
				"div",
				{ className: "page-header" },
				React.createElement(
					"h3",
					null,
					"表单管理"
				)
			),
			React.createElement(
				"button",
				{ className: "btn btn-danger" },
				React.createElement("span", { className: "glyphicon glyphicon-plus" }),
				" 添加表单"
			),
			React.createElement("hr", null)
		);
	}
});

// 展示层
var TemplateList = React.createClass({
	displayName: "TemplateList",
	render: function render() {
		return React.createElement(
			"div",
			{ className: "row" },
			React.createElement(
				"div",
				{ className: "col-sm-4" },
				React.createElement(
					"div",
					{ className: "panel panel-default" },
					React.createElement(
						"div",
						{ className: "panel-heading" },
						React.createElement(
							"h3",
							{ className: "panel-title" },
							"表单标题"
						)
					),
					React.createElement(
						"div",
						{ className: "panel-body" },
						"表单内容"
					)
				)
			),
			React.createElement(
				"div",
				{ className: "col-sm-4" },
				React.createElement(
					"div",
					{ className: "panel panel-default" },
					React.createElement(
						"div",
						{ className: "panel-heading" },
						React.createElement(
							"h3",
							{ className: "panel-title" },
							"表单标题"
						)
					),
					React.createElement(
						"div",
						{ className: "panel-body" },
						"表单内容"
					)
				)
			),
			React.createElement(
				"div",
				{ className: "col-sm-4" },
				React.createElement(
					"div",
					{ className: "panel panel-default" },
					React.createElement(
						"div",
						{ className: "panel-heading" },
						React.createElement(
							"h3",
							{ className: "panel-title" },
							"表单标题"
						)
					),
					React.createElement(
						"div",
						{ className: "panel-body" },
						"表单内容"
					)
				)
			)
		);
	}
});

ReactDOM.render(React.createElement(TemplateListPage, null), document.getElementById('content'));